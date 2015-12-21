(function() {
  'use strict';

  angular
    .module('poppygp.layout')
    .controller('ContentController', ContentController);

  /** @ngInject */
  function ContentController() {
    var vm = this;

    vm.hidden = false;

    vm.panelSections = [];

    activate();

    function activate() {
      setPanelSections();
    }

    function setPanelSections() {
    }

  }

})();
