(function() {
  'use strict';

  angular
    .module('poppygp.components')
    .directive('gpSubnav', gpSubnavDirective);

  /** @ngInject */
  function gpSubnavDirective() {
    var directive = {
      restrict: 'E',
      transclude: true,
      replace: false,
      templateUrl: 'app/components/subnav/subnav.html'
    };

    return directive;
  }

})();
