(function() {
  'use strict';

  angular
    .module('poppygp.components')
    .directive('gpPanel', gpPanelDirective);

  /** @ngInject */
  function gpPanelDirective($window, $log) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/panel/panel.html',
      scope: {

      },
      controller: PanelController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function PanelController() {
      var viewport;

      angular.extend(this, {
        visible: false,
        toggle: function() {
          viewport.width  = $window.innerWidth;   // $(window).width();
          viewport.height = $window.innerHeight;  // $(window).height();
          viewport.ratio  = viewport.width / viewport.height;
          $log.info('Viewport Information: ' + viewport.toJson());
        }
      });
    }
  }

})();
