(function() {
  'use strict';

  angular
    .module('regXpress')
    .factory('roomService', roomService)

    function roomService($http) {
      const vm = this;

      var rooms = $http.get('https://regxpress.herokuapp.com/rooms')
        .then(function (rooms) {
          vm.rooms = rooms

        })

        return rooms;

      // let rooms = [
      //   {
      //     name: 'Room One',
      //     players: 4,
      //     roomID: 1
      //   },
      //   {
      //     name: 'Room Two',
      //     players: 2,
      //     roomID: 2
      //   },
      //   {
      //     name: 'Room Three',
      //     players: 6,
      //     roomID: 3
      //   },
      //   {
      //     name: 'Room Four',
      //     players: 4,
      //     roomID: 4
      //   }
      // ]
      //
      // return rooms;
    }

}());
