(function() {
  'use strict';

  angular
    .module('poppygp.layout')
    .directive('contentPanelToggle', contentPanelToggleDirective);

  /* @ngInject */
  function contentPanelToggleDirective() {

    var directive = {
      link: link,
      template: '<i class="fa fa-remove"></i>',
      restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {

      // grab <gp-content-panel> element
      var $contentPanel = element.parent().find('.gp-content-panel');

      element.click(toggleContentPanel);

      function toggleContentPanel(e) {

        if($contentPanel.hasClass('gp-hide')) {

        }
        else {

        }
      }

    }

  }
})();
