/*global Firebase */
(function() {
  'use strict';

  angular
    .module('poppygp.schedule')
    .controller('ScheduleController', ScheduleController);

  /** @ngInject */
  function ScheduleController($firebaseArray) {
    var vm = this;

    var ref = new Firebase("https://poppygp-temp.firebaseio.com/playlist/trackList/track");

    vm.trackList = $firebaseArray(ref);

  }

})();
