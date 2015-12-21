(function() {
  'use strict';

  angular
    .module('poppygp.components')
    .directive('gpSchedule', gpScheduleDirective);

  /* @ngInject */
  function gpScheduleDirective() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'app/components/schedule/schedule.html'
    };
  }

})();
