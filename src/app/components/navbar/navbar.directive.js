(function() {
  'use strict';

  angular
    .module('poppygp.components')
    .directive('gpNavbar', gpNavbarDirective);

  /** @ngInject */
  function gpNavbarDirective() {
    var directive = {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'app/components/navbar/navbar.html'
    };

    return directive;
  }

})();
