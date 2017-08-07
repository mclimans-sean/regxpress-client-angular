(function() {
  angular
    .module('regXpress')
    .controller('RoomListController', RoomListController)

  const roomsURL = 'https://regxpress.herokuapp.com/rooms'
  // const socket = io.connect('http://localhost:3000');

  function RoomListController($http, $state, ServerService, $scope, ngAudio) {
    const vm = this
    vm.users = [];
    vm.message = "";
    vm.serverService = ServerService;
    vm.numPlayers = 0;


    vm.changeState = function() {
      $state.go('gameroom');
    }

    vm.$onInit = function() {
      vm.fun = ngAudio.load("http://static1.grsites.com/archive/sounds/scifi/scifi002.mp3");
      vm.submit = ngAudio.load("http://static1.grsites.com/archive/sounds/scifi/scifi011.mp3");
      
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
      // vm.serverService.joinRoom(room, vm.username)

      vm.fun.play()

      var roomObj = {
        name: room.name,
        users: [],
        numPlayersJoined: 0,
        max_numplayers: room.max_numplayers
      }


      var info = {
        user: room.username,
        room: roomObj
      }
      console.log(info);

      vm.serverService.room = roomObj;

      // console.log(info);

      socket.emit("room", info);



      socket.on("room", function(_info) {
        console.log("Info -----------> ", _info);
        console.log("Room -----------> ", _info.room);
        console.log("Users -----------> ", _info.room.users);

        vm.users = _info.room.users;

        vm.room = _info.room;

        console.log("VMS ", vm.users);

        vm.serverService.users = vm.users;
        let lastUserIndex = vm.users.length - 1;
        vm.serverService.message = `User ${vm.users[lastUserIndex].name} Joined the room`;
        vm.serverService.getUsers = getUsers




        vm.serverService.message = "waiting for other players to join";

        console.log(vm.serverService.getUsers().length - 1, " joined the room");
        //
        //
        if (vm.serverService.getUsers().length - 1 >= vm.serverService.room.max_numplayers) {
          console.log("The game should start now");

          let info = {
            numPlayers: vm.serverService.room.max_numplayers,
            room: vm.serverService.room
          }
          socket.emit("start game", info);

          $scope.$applyAsync(function() {
            $scope.connected = 'TRUE';
          });

        }

        $scope.$applyAsync(function() {
          $scope.connected = 'TRUE';
        });

        vm.serverService.userName = vm.username;
        // $window.location.href = '/room';

      });


      socket.on("start game", function(_info) {

        console.log("NumPlayers ", _info.numPlayers);
        console.log("To room ", _info.room);
        for (var i = 0; i < _info.numPlayers; i++) {
          // console.log("USER ", info.room.users[i].name)
          // addNewPlayer(serverInfo.room.users[i].name);

          $state.go('gameroom');

          vm.serverService.message = "The game will start in 10 seconds";

        }


      });

      socket.on("count down", function(count) {
        console.log("Time to start ", count);
        vm.serverService.message = `Time to start ${count / 1000}`;


        $scope.$applyAsync(function() {
          $scope.connected = 'TRUE';
        });
      });


      socket.on("error room", function(_info) {
        console.log("Room is full");
        vm.serverService.message = "Room is full";

        $scope.$applyAsync(function() {
          $scope.connected = 'TRUE';
        });

      });




      // $state.go('gameroom');



      // vm.username = ''

    }

    getUsers = function() {
      // console.log("Users ======= ", vm.users);
      return vm.users;
    }
  }
})();
