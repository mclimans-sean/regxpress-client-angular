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
    vm.messageInfo = undefined;
    vm.playerMessage = {};

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

    vm.onKeyup = function($event, txt, username) {

      if(txt == "[a-b]*") {
        console.log("You solved the regex")
      }
      console.log("Username " , username);
      var messageInfo = {
        socketId: "",
        user: username,
        room: "room1",
        // msg: $event.keyCode
        msg: txt

      }

      // console.log("Key is up... ", $event.keyCode);
      socket.emit('on message', messageInfo);




      $scope.$applyAsync(function() {
        $scope.connected = 'TRUE';
      });

    }

    socket.on("on message", function(_messageInfo) {
      vm.messageInfo = _messageInfo;
      vm.playerMessage[_messageInfo.user] = _messageInfo.msg;
      console.log("VESERVERICE " ,   vm.playerMessage[_messageInfo.user]);
      $scope.$applyAsync(function() {
        $scope.connected = 'TRUE';
      });

      console.log("Message Info: ", _messageInfo);
    });

  }


}());
