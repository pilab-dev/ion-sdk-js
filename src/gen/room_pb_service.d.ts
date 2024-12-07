// package: room
// file: room.proto

import * as room_pb from "./room_pb";
import {grpc} from "@improbable-eng/grpc-web";

type RoomServiceCreateRoom = {
  readonly methodName: string;
  readonly service: typeof RoomService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof room_pb.CreateRoomRequest;
  readonly responseType: typeof room_pb.CreateRoomReply;
};

type RoomServiceUpdateRoom = {
  readonly methodName: string;
  readonly service: typeof RoomService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof room_pb.UpdateRoomRequest;
  readonly responseType: typeof room_pb.UpdateRoomReply;
};

type RoomServiceEndRoom = {
  readonly methodName: string;
  readonly service: typeof RoomService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof room_pb.EndRoomRequest;
  readonly responseType: typeof room_pb.EndRoomReply;
};

type RoomServiceGetRooms = {
  readonly methodName: string;
  readonly service: typeof RoomService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof room_pb.GetRoomsRequest;
  readonly responseType: typeof room_pb.GetRoomsReply;
};

type RoomServiceAddPeer = {
  readonly methodName: string;
  readonly service: typeof RoomService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof room_pb.AddPeerRequest;
  readonly responseType: typeof room_pb.AddPeerReply;
};

type RoomServiceUpdatePeer = {
  readonly methodName: string;
  readonly service: typeof RoomService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof room_pb.UpdatePeerRequest;
  readonly responseType: typeof room_pb.UpdatePeerReply;
};

type RoomServiceRemovePeer = {
  readonly methodName: string;
  readonly service: typeof RoomService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof room_pb.RemovePeerRequest;
  readonly responseType: typeof room_pb.RemovePeerReply;
};

type RoomServiceGetPeers = {
  readonly methodName: string;
  readonly service: typeof RoomService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof room_pb.GetPeersRequest;
  readonly responseType: typeof room_pb.GetPeersReply;
};

export class RoomService {
  static readonly serviceName: string;
  static readonly CreateRoom: RoomServiceCreateRoom;
  static readonly UpdateRoom: RoomServiceUpdateRoom;
  static readonly EndRoom: RoomServiceEndRoom;
  static readonly GetRooms: RoomServiceGetRooms;
  static readonly AddPeer: RoomServiceAddPeer;
  static readonly UpdatePeer: RoomServiceUpdatePeer;
  static readonly RemovePeer: RoomServiceRemovePeer;
  static readonly GetPeers: RoomServiceGetPeers;
}

type RoomSignalSignal = {
  readonly methodName: string;
  readonly service: typeof RoomSignal;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof room_pb.SignalRequest;
  readonly responseType: typeof room_pb.SignalReply;
};

export class RoomSignal {
  static readonly serviceName: string;
  static readonly Signal: RoomSignalSignal;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class RoomServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createRoom(
    requestMessage: room_pb.CreateRoomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: room_pb.CreateRoomReply|null) => void
  ): UnaryResponse;
  createRoom(
    requestMessage: room_pb.CreateRoomRequest,
    callback: (error: ServiceError|null, responseMessage: room_pb.CreateRoomReply|null) => void
  ): UnaryResponse;
  updateRoom(
    requestMessage: room_pb.UpdateRoomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: room_pb.UpdateRoomReply|null) => void
  ): UnaryResponse;
  updateRoom(
    requestMessage: room_pb.UpdateRoomRequest,
    callback: (error: ServiceError|null, responseMessage: room_pb.UpdateRoomReply|null) => void
  ): UnaryResponse;
  endRoom(
    requestMessage: room_pb.EndRoomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: room_pb.EndRoomReply|null) => void
  ): UnaryResponse;
  endRoom(
    requestMessage: room_pb.EndRoomRequest,
    callback: (error: ServiceError|null, responseMessage: room_pb.EndRoomReply|null) => void
  ): UnaryResponse;
  getRooms(
    requestMessage: room_pb.GetRoomsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: room_pb.GetRoomsReply|null) => void
  ): UnaryResponse;
  getRooms(
    requestMessage: room_pb.GetRoomsRequest,
    callback: (error: ServiceError|null, responseMessage: room_pb.GetRoomsReply|null) => void
  ): UnaryResponse;
  addPeer(
    requestMessage: room_pb.AddPeerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: room_pb.AddPeerReply|null) => void
  ): UnaryResponse;
  addPeer(
    requestMessage: room_pb.AddPeerRequest,
    callback: (error: ServiceError|null, responseMessage: room_pb.AddPeerReply|null) => void
  ): UnaryResponse;
  updatePeer(
    requestMessage: room_pb.UpdatePeerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: room_pb.UpdatePeerReply|null) => void
  ): UnaryResponse;
  updatePeer(
    requestMessage: room_pb.UpdatePeerRequest,
    callback: (error: ServiceError|null, responseMessage: room_pb.UpdatePeerReply|null) => void
  ): UnaryResponse;
  removePeer(
    requestMessage: room_pb.RemovePeerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: room_pb.RemovePeerReply|null) => void
  ): UnaryResponse;
  removePeer(
    requestMessage: room_pb.RemovePeerRequest,
    callback: (error: ServiceError|null, responseMessage: room_pb.RemovePeerReply|null) => void
  ): UnaryResponse;
  getPeers(
    requestMessage: room_pb.GetPeersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: room_pb.GetPeersReply|null) => void
  ): UnaryResponse;
  getPeers(
    requestMessage: room_pb.GetPeersRequest,
    callback: (error: ServiceError|null, responseMessage: room_pb.GetPeersReply|null) => void
  ): UnaryResponse;
}

export class RoomSignalClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  signal(metadata?: grpc.Metadata): BidirectionalStream<room_pb.SignalRequest, room_pb.SignalReply>;
}

