(function() {
  'use strict';

  angular
    .module('poppygp.components')
    .directive('gpPanel', gpPanelDirective);

  /** @ngInject */
  function gpPanelDirective($window) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/panel/panel.html',
      transclude: true,
      replace: false,
      controller: PanelController,
      controllerAs: 'vm',
      compile: compile
    };

    return directive;

    function compile(tElement, tAttrs, transclude) {
      return {
        pre:  preLink,
        post: postLink
      };

      function preLink(scope, iElement, iAttrs, ctrl) {

      }
      function postLink(scope, element, attrs) {

      }
    }

    /** @ngInject */
    function PanelController() {
      var vm = this;
      var viewport = {};

      angular.extend(this, {
        visible: true,
        toggle: function() {
          viewport.width  = $window.innerWidth;   // $(window).width();
          viewport.height = $window.innerHeight;  // $(window).height();
          viewport.ratio  = viewport.width / viewport.height;

          vm.visible = !vm.visible;
          vm.animate = true;
          //$log.info('Viewport Information: ' + viewport.toJson());
        }
      });

    }
  }

})();
