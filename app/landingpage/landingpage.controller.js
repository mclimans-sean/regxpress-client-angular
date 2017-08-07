(function() {
  angular
    .module('regXpress')
    .controller('LandingPageController', LandingPageController)

  function LandingPageController(ngAudio) {
    const vm = this

    vm.submit = ngAudio.load("http://static1.grsites.com/archive/sounds/scifi/scifi011.mp3");

    vm.playSound = function () {
      vm.submit.play()
    }

  }
}());
