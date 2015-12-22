(function() {
  'use strict';

  angular
    .module('poppygp.layout')
    .directive('gpPanel', gpPanelDirective);

  /* @ngInject */
  function gpPanelDirective() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/layout/panel/panel.html',
      controller: 'PanelController',
      controllerAs: 'vm'
    };
  }

})();
