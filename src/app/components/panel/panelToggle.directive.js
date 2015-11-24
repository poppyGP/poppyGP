(function() {
  'use strict';

  angular
    .module('poppygp.components')
    .directive('gpPanelToggle', gpPanelToggleDirective);

  /* @ngInject */
  function gpPanelToggleDirective() {

    var directive = {
      requires: '^gpPanel',
      link: link,
      templateUrl: 'app/components/panel/panelToggle.html',
      restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {

      // grab <gp-content-panel> element
      var $panel = element.parent().find('.gp-panel');

      element.click(toggleContentPanel);

      function toggleContentPanel(e) {


        if($panel.hasClass('gp-hide')) {

        }
        else {

        }
      }

    }

  }
})();
