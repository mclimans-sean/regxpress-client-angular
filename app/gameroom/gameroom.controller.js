(function() {
  'use strict';

  angular
    .module('regXpress')
    .controller('gameRoomController', gameRoomController)

  const questionsURL = 'https://regxpress.herokuapp.com/questions'
  const roomURL = 'https://regxpress.herokuapp.com/rooms/'


  // function gameRoomController($stateParams, $http) {
  function gameRoomController() {

    const vm = this;

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

    console.log('Party in the game room bros!!!');
  }
}());
