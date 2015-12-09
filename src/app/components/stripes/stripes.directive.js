(function() {
  'use strict';

  angular
    .module('poppygp.components')
    .directive('gpStripes', gpStripesDirective);

  /** @ngInject */
  function gpStripesDirective() {
    var directive = {
      restrict: 'E',
      replace: true,
      transclude: false,
      templateUrl: 'app/components/stripes/stripes.html'
    };

    return directive;

  }

})();
