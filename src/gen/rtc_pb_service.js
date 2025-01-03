// package: rtc
// file: rtc.proto

// var rtc_pb = require("./rtc_pb");
// var grpc = require("@improbable-eng/grpc-web").grpc;

import { grpc } from '@improbable-eng/grpc-web';
import * as rtc_pb from './rtc_pb';

var RTC = (function () {
  function RTC() {}
  RTC.serviceName = 'rtc.RTC';
  return RTC;
})();

RTC.Signal = {
  methodName: 'Signal',
  service: RTC,
  requestStream: true,
  responseStream: true,
  requestType: rtc_pb.Request,
  responseType: rtc_pb.Reply,
};

exports.RTC = RTC;

function RTCClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RTCClient.prototype.signal = function signal(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: [],
  };
  var client = grpc.client(RTC.Signal, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    });
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    },
  };
};

exports.RTCClient = RTCClient;
