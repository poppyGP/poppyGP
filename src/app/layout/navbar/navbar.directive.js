(function() {
  'use strict';

  angular
    .module('poppygp.layout')
    .directive('gpNavbar', gpNavbarDirective);

  /** @ngInject */
  function gpNavbarDirective() {
    var directive = {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'app/layout/navbar/navbar.html'
    };

    return directive;
  }

})();
