(function() {
  'use strict';

  angular
    .module('poppygp.schedule')
    .directive('gpSchedule', gpScheduleDirective);

  /* @ngInject */
  function gpScheduleDirective() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'app/schedule/schedule.html'
    };
  }

})();
