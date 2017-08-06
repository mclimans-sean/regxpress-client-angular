(function() {
  'use strict';

  angular
    .module('regXpress')
    .controller('gameRoomController', gameRoomController)

  const questionsURL = 'https://regxpress.herokuapp.com/questions'
  const roomURL = 'https://regxpress.herokuapp.com/rooms/'


  // function gameRoomController($stateParams, $http) {
  function gameRoomController(ServerService, $scope) {

    const vm = this;
    vm.serverService = ServerService;

    vm.$onInit = function() {

      // $http.get(roomURL + $stateParams.id)
      //   .then(result => {
      //     console.log(result);
      //   })
      //
      //
      // vm.users = [{
      //     username: "StankyBob"
      //   },
      //   {
      //     username: "FartHammer5000"
      //   },
      //   {
      //     username: "FatFeetFreddyMac"
      //   }
      // ]
      //
      // $http.get(questionsURL)
      //   .then(results => {
      //     console.log(results);
      //     vm.questions = results.data
      //   })
    }

    vm.onKeyup = function($event) {

      var messageInfo = {
        socketId: "",
        user: "test",
        room: "room1",
        msg: $event.keyCode
      }

      // console.log("Key is up... ", $event.keyCode);
      socket.emit('on message', messageInfo);




      $scope.$applyAsync(function() {
        $scope.connected = 'TRUE';
      });

    }



    socket.on("on message", function(_messageInfo) {
      console.log("Message Info: ", _messageInfo);
    });
    console.log('Party in the game room bros!!!');
  }


}());
