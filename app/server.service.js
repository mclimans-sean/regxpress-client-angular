(function() {

  angular
    .module("regXpress")
    .factory("ServerService", ServerService);

    const socket = io.connect('http://localhost:3000')
    var numPlayers = 0;

  function ServerService() {

    return {

      joinRoom(room, username) {

        var roomObj = {
          name: room.name,
          users: [],
          max_numplayers: room.max_numplayers
        }

        var info = {
          user: username,
          room: roomObj
        }

        // console.log(info);

        socket.emit("room", info);

        socket.on("room", function(_info) {
          console.log("Info -----------> ", _info)
          console.log("Room -----------> ", _info.room)
          console.log("Users -----------> ", _info.room.users)
          numPlayers ++;
        })
      }

    }

  }



})();
