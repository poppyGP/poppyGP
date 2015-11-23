(function() {
  'use strict';

  angular
    .module('poppygp.components')
    .directive('gpPanelToggle', gpPanelToggleDirective);

  /* @ngInject */
  function gpPanelToggleDirective() {

    var directive = {
      link: link,
      template: '<i class="fa fa-remove"></i>',
      restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {

      // grab <gp-content-panel> element
      var $panel = element.parent().find('.gp-content-panel');

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
