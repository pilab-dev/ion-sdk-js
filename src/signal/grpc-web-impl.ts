import { grpc } from '@improbable-eng/grpc-web';
import { EventEmitter } from 'events';
import { v4 as uuidv4 } from 'uuid';
import { Signal } from '.';
import { Trickle } from '../client';
import * as pb from '../gen/rtc_pb';
import * as sfu_rpc from '../gen/rtc_pb_service';

/**
 * The `IonSFUGRPCWebSignal` class implements the `Signal` interface and provides
 * methods to interact with the Ion SFU (Selective Forwarding Unit) using gRPC-Web.
 * It handles signaling for WebRTC connections, including joining a session,
 * handling offers and answers, and trickling ICE candidates.
 */
class IonSFUGRPCWebSignal implements Signal {
  /**
   * The gRPC-Web client used to communicate with the Ion SFU.
   */
  protected client: grpc.Client<pb.Request, pb.Reply>;
  private _connected: boolean = false;
  private _event: EventEmitter;
  private _onopen?: () => void;
  private _onclose?: (ev: Event) => void;
  private _onerror?: (error: Event) => void;
  onnegotiate?: (jsep: RTCSessionDescriptionInit) => void;
  ontrickle?: (trickle: Trickle) => void;

  /**
   * Creates a new `IonSFUGRPCWebSignal` instance.
   * @param uri The URI of the Ion SFU server.
   * @param metadata Optional metadata to send with the gRPC-Web client.
   */
  constructor(uri: string, metadata?: grpc.Metadata) {
    this._event = new EventEmitter();

    const client = grpc.client(sfu_rpc.RTC.Signal, {
      host: uri,
      transport: grpc.WebsocketTransport(),
    }) as grpc.Client<pb.Request, pb.Reply>;

    client.onEnd((status: grpc.Code, statusMessage: string, trailers: grpc.Metadata) => {
      this._onclose?.call(this, new CustomEvent('sfu', { detail: { status, statusMessage } }));
    });

    client.onMessage((reply: pb.Reply) => {
      switch (reply.getPayloadCase()) {
        case pb.Reply.PayloadCase.JOIN:
          const answer = reply.getJoin()?.getDescription();
          this._event.emit('join-reply', answer);
          break;
        case pb.Reply.PayloadCase.DESCRIPTION:
          const desc = reply.getDescription();
          if (desc?.getType() === 'offer') {
            if (this.onnegotiate) {
              const rtcDesc: RTCSessionDescriptionInit = {
                type: desc.getType() as RTCSdpType,
                sdp: desc.getSdp(),
              };
              this.onnegotiate(rtcDesc);
            }
          } else if (desc?.getType() === 'answer') {
            this._event.emit('description', desc);
          }
          break;
        case pb.Reply.PayloadCase.TRICKLE:
          const pbTrickle = reply.getTrickle();
          if (pbTrickle?.getInit() !== undefined) {
            const candidate = JSON.parse(pbTrickle.getInit() as string);
            const trickle = { target: pbTrickle.getTarget(), candidate };
            if (this.ontrickle) this.ontrickle(trickle);
          }
          break;
        // case pb.Reply.PayloadCase.ICECONNECTIONSTATE:
        case pb.Reply.PayloadCase.ERROR:
          break;
      }
    });

    this.client = client;
    this.client.start(metadata);
  }

  /**
   * Joins a session with the given session ID (sid) and user ID (uid), and sends an offer.
   * @param sid The session ID to join.
   * @param uid The user ID to use when joining the session.
   * @param offer The offer to send to the Ion SFU.
   */
  async join(sid: string, uid: string, offer: RTCSessionDescriptionInit): Promise<RTCSessionDescriptionInit> {
    const request = new pb.Request();
    const join = new pb.JoinRequest();

    join.setSid(sid);
    join.setUid(uid);

    const description = new pb.SessionDescription();
    description.setType(offer.type as string);
    description.setSdp(offer.sdp!);

    join.setDescription(description);

    request.setJoin(join);

    this.client.send(request);

    return new Promise<RTCSessionDescriptionInit>((resolve) => {
      const handler = (desc: RTCSessionDescriptionInit) => {
        resolve({ type: 'answer', sdp: desc.sdp });
        this._event.removeListener('join-reply', handler);
      };
      this._event.addListener('join-reply', handler);
    });
  }

  /**
   * Sends an ICE candidate to the Ion SFU.
   * @param trickle The ICE candidate to send to the Ion SFU.
   */
  trickle(trickle: Trickle) {
    const request = new pb.Request();
    const pbTrickle = new pb.Trickle();

    pbTrickle.setInit(JSON.stringify(trickle.candidate));

    request.setTrickle(pbTrickle);

    this.client.send(request);
  }

  /**
   * Sends an offer to the Ion SFU.
   * @param offer The offer to send to the Ion SFU.
   */
  offer(offer: RTCSessionDescriptionInit) {
    const id = uuidv4();
    const request = new pb.Request();
    const buffer = Uint8Array.from(JSON.stringify(offer), (c) => c.charCodeAt(0));

    request.setDescription();
    this.client.send(request);

    return new Promise<RTCSessionDescriptionInit>((resolve, reject) => {
      const handler = (desc: RTCSessionDescriptionInit) => {
        resolve({ type: 'answer', sdp: desc.sdp });
        this._event.removeListener('description', handler);
      };
      this._event.addListener('description', handler);
    });
  }

  /**
   * Sends an answer to the Ion SFU.
   * @param answer The answer to send to the Ion SFU.
   */
  answer(answer: RTCSessionDescriptionInit) {
    const request = new pb.Request();

    const description = new pb.SessionDescription();
    description.setType(answer.type as string);
    description.setSdp(answer.sdp!);

    request.setDescription(description);
    this.client.send(request);
  }

  /**
   * Closes the gRPC-Web client.
   * This method should be called when the client is no longer needed.
   * The client will be closed automatically when the page is unloaded.
   */
  close() {
    this.client.close();
  }

  /**
   * The `onopen` event handler is called when the gRPC-Web client is connected to the Ion SFU.
   */
  set onopen(onopen: () => void) {
    if (this.client) {
      onopen();
    }
    this._onopen = onopen;
  }

  /**
   * The `onerror` event handler is called when an error occurs in the gRPC-Web client.
   */
  set onerror(onerror: (error: Event) => void) {
    this._onerror = onerror;
  }

  /**
   * The `onclose` event handler is called when the gRPC-Web client is closed.
   */
  set onclose(onclose: (ev: Event) => void) {
    this._onclose = onclose;
  }
}

export { IonSFUGRPCWebSignal };
