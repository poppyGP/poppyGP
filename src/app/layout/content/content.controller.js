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
      vm.panelSections = ['home', 'chat', 'info', 'race', 'help'];
      vm.contentPanels = [{
        'name': 'Home', 'tmpl': 'app/layout/sections/home/home.html'
      }, {
        'name': 'Chat', 'tmpl': 'app/layout/sections/Chat/Chat.html'
      }, {
        'name': 'Info', 'tmpl': 'app/layout/sections/Info/Info.html'
      }, {
        'name': 'Race', 'tmpl': 'app/layout/sections/Race/Race.html'
      }, {
        'name': 'Help', 'tmpl': 'app/layout/sections/help/help.html'
      }];
    }
    //var viewport = {};

    //angular.extend(this, {
    //  visible: true,
    //  toggle: function() {
    //    viewport.width  = $window.innerWidth;   // $(window).width();
    //    viewport.height = $window.innerHeight;  // $(window).height();
    //    viewport.ratio  = viewport.width / viewport.height;

    //    vm.visible = !vm.visible;
    //    vm.animate = true;
    //    //$log.info('Viewport Information: ' + viewport.toJson());
    //  }
    //});


  }

})();
