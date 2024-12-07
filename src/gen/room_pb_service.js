// package: room
// file: room.proto

var room_pb = require("./room_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var RoomService = (function () {
  function RoomService() {}
  RoomService.serviceName = "room.RoomService";
  return RoomService;
}());

RoomService.CreateRoom = {
  methodName: "CreateRoom",
  service: RoomService,
  requestStream: false,
  responseStream: false,
  requestType: room_pb.CreateRoomRequest,
  responseType: room_pb.CreateRoomReply
};

RoomService.UpdateRoom = {
  methodName: "UpdateRoom",
  service: RoomService,
  requestStream: false,
  responseStream: false,
  requestType: room_pb.UpdateRoomRequest,
  responseType: room_pb.UpdateRoomReply
};

RoomService.EndRoom = {
  methodName: "EndRoom",
  service: RoomService,
  requestStream: false,
  responseStream: false,
  requestType: room_pb.EndRoomRequest,
  responseType: room_pb.EndRoomReply
};

RoomService.GetRooms = {
  methodName: "GetRooms",
  service: RoomService,
  requestStream: false,
  responseStream: false,
  requestType: room_pb.GetRoomsRequest,
  responseType: room_pb.GetRoomsReply
};

RoomService.AddPeer = {
  methodName: "AddPeer",
  service: RoomService,
  requestStream: false,
  responseStream: false,
  requestType: room_pb.AddPeerRequest,
  responseType: room_pb.AddPeerReply
};

RoomService.UpdatePeer = {
  methodName: "UpdatePeer",
  service: RoomService,
  requestStream: false,
  responseStream: false,
  requestType: room_pb.UpdatePeerRequest,
  responseType: room_pb.UpdatePeerReply
};

RoomService.RemovePeer = {
  methodName: "RemovePeer",
  service: RoomService,
  requestStream: false,
  responseStream: false,
  requestType: room_pb.RemovePeerRequest,
  responseType: room_pb.RemovePeerReply
};

RoomService.GetPeers = {
  methodName: "GetPeers",
  service: RoomService,
  requestStream: false,
  responseStream: false,
  requestType: room_pb.GetPeersRequest,
  responseType: room_pb.GetPeersReply
};

exports.RoomService = RoomService;

function RoomServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RoomServiceClient.prototype.createRoom = function createRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RoomService.CreateRoom, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

RoomServiceClient.prototype.updateRoom = function updateRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RoomService.UpdateRoom, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

RoomServiceClient.prototype.endRoom = function endRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RoomService.EndRoom, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

RoomServiceClient.prototype.getRooms = function getRooms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RoomService.GetRooms, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

RoomServiceClient.prototype.addPeer = function addPeer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RoomService.AddPeer, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

RoomServiceClient.prototype.updatePeer = function updatePeer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RoomService.UpdatePeer, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

RoomServiceClient.prototype.removePeer = function removePeer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RoomService.RemovePeer, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

RoomServiceClient.prototype.getPeers = function getPeers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RoomService.GetPeers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.RoomServiceClient = RoomServiceClient;

var RoomSignal = (function () {
  function RoomSignal() {}
  RoomSignal.serviceName = "room.RoomSignal";
  return RoomSignal;
}());

RoomSignal.Signal = {
  methodName: "Signal",
  service: RoomSignal,
  requestStream: true,
  responseStream: true,
  requestType: room_pb.SignalRequest,
  responseType: room_pb.SignalReply
};

exports.RoomSignal = RoomSignal;

function RoomSignalClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RoomSignalClient.prototype.signal = function signal(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(RoomSignal.Signal, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
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
    })
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
    }
  };
};

exports.RoomSignalClient = RoomSignalClient;

