(function() {
  'use strict';

  angular
    .module('poppygp.components')
    .directive('gpToolbar', gpToolbarDirective);

  /** @ngInject */
  function gpToolbarDirective() {
    var directive = {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'app/components/toolbar/toolbar.html'
    };

    return directive;
  }

})();
