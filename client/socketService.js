angular.module('pocket-bonanza.socket', [])

.factory('socket', function($rootScope) {
  var socket = io.connect();

  return {
    socketEmit: function(toServer) {
      console.log(arguments)
      socket.emit(toServer, {answer: arguments[1], username: arguments[2]});
    },

    socketOn: function(fromServer, cb) {
      socket.on(fromServer, function(data) {
        console.log(data)
        $rootScope.$apply(cb(data));
      });
    }
  }

})