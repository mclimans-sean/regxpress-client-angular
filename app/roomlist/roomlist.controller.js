(function() {
  angular
    .module('regXpress')
    .controller('RoomListController', RoomListController)

  const roomsURL = 'https://regxpress.herokuapp.com/rooms'
  // const socket = io.connect('http://localhost:3000')

  function RoomListController($http, ServerService) {
    const vm = this
    vm.serverService = ServerService;

    vm.$onInit = function() {

      $http.get(roomsURL)
        .then(results => {
          // console.log(results);
          vm.rooms = results.data
        })
    }

    vm.getInfo = function(room) {

      var stuff = {
        name: room.name,
        users: [],
        max_numplayers: room.max_numplayers
      }

    }

    vm.joinRoom = function(room) {

      console.log("Joining Room");
      vm.serverService.joinRoom(room, "user1")

      //
      // var roomObj = {
      //   name: room.name,
      //   users: [],
      //   max_numplayers: room.max_numplayers
      // }
      //
      //
      // var info = {
      //   user: vm.username,
      //   room: roomObj
      // }
      //
      // // console.log(info);
      //
      // socket.emit("room", info);
      //
      // socket.on("room", function(_info) {
      //   console.log("Info -----------> ", _info)
      //   console.log("Room -----------> ", _info.room)
      //   console.log("Users -----------> ", _info.room.users)
      //
      //
      // });

      // vm.username = ''

    }
  }
})();
