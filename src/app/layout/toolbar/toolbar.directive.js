(function() {
  'use strict';

  angular
    .module('poppygp.layout')
    .directive('gpToolbar', gpToolbarDirective);

  /** @ngInject */
  function gpToolbarDirective() {
    var directive = {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'app/layout/toolbar/toolbar.html'
    };

    return directive;
  }

})();
