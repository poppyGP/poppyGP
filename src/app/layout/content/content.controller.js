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
      vm.panelSections = [{
        name  : 'Home',
        tmpl  : 'app/layout/sections/home.html'
      }, {
        name  : 'Info',
        tmpl  : 'app/layout/sections/info.html'
      }, {
        name  : 'Webchat',
        tmpl  : 'app/layout/sections/chat.html'
      }, {
        name  : 'Race',
        tmpl  : 'app/layout/sections/race.html'
      }, {
        name  : 'Help',
        tmpl  : 'app/layout/sections/help.html'
      }];
    }

  }

})();
