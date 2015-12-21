(function() {
  'use strict';

  angular
    .module('poppygp.components')
    .directive('gpPanel', gpPanelDirective);

  /* @ngInject */
  function gpPanelDirective() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'app/components/panel/panel.html'
    };
  }

})();
