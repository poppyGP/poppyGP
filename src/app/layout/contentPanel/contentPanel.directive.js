(function() {
  'use strict';

  angular
    .module('poppygp.layout')
    .directive('gpContentPanel', gpContentPanelDirective);

  /** @ngInject */
  function gpContentPanelDirective($window) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/contentPanel/contentPanel.html',
      scope: {

      },
      controller: ContentPanelController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function ContentPanelController() {
      var self = this;
      var viewport;

      angular.extend(this, {
        visible: false,
        toggle: function() {
          viewport.width  = $window.innerWidth;   // $(window).width();
          viewport.height = $window.innerHeight;  // $(window).height();
          viewport.ratio  = viewport.width / viewport.height;
          logger.info('Viewport Information: ' + JSON.stringify(viewport));
        }
      });
    }
  }

})();
