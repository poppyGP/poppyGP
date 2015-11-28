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
      controller: PanelController,
      controllerAs: 'vm'
    };

    return directive;

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
