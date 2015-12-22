(function() {
  'use strict';

  angular
    .module('poppygp.layout')
    .controller('PanelController', PanelController);

  /** @ngInject */
  function PanelController() {
    var vm = this;

    vm.hidden = false;

    vm.sections = [];

    activate();

    function activate() {
      setPanelSections();
    }

    function setPanelSections() {
      vm.sections = [{
        name  : 'Home',
        icon  : 'home',
        tmpl  : 'app/layout/sections/home/home.html'
      }, {
        name  : 'Info',
        icon  : 'info',
        tmpl  : 'app/layout/sections/info/info.html'
      }, {
        name  : 'Webchat',
        icon  : 'chat',
        tmpl  : 'app/layout/sections/chat/chat.html'
      }, {
        name  : 'Race',
        icon  : 'web_asset',
        tmpl  : 'app/layout/sections/race/race.html'
      }, {
        name  : 'Help',
        icon  : 'help',
        tmpl  : 'app/layout/sections/help/help.html'
      }];
    }

  }

})();
