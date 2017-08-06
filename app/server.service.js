const socket = io.connect('http://localhost:3000');


(function() {

  angular
    .module("regXpress")
    .factory("ServerService", ServerService);


    var numPlayers = 0;

    var users = [];

    var message = "";

    var username = "";



    // for testing purposes----
    var questions = ["question1", "question2", "question3", "question4"];
    var questionIndex = 0;
    // ------------------------

  function ServerService() {

    var playerMessage = {
      content:""
    }
    
    return {

      joinRoom(room, username) {

        //
        // var roomObj = {
        //   name: room.name,
        //   users: [],
        //   max_numplayers: room.max_numplayers
        // }
        //
        // var info = {
        //   user: username,
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
        //   users = _info.room.users;
        //   numPlayers ++;
        //   message = "new user added ";
        //   console.log("The message ", message);
        //
        //
        //
        // })
      },

      playerMessage () {
        return playerMessage;
      },

      startGame() {
        socket.emit("start game", numPlayers);
        message = "starting the game...";

      },

      getUsers() {
        console.log("Users ", this.users);
        return users;
      },

      getQuestion(index) {
        return questions[index];
      }

    }

  }



})();
