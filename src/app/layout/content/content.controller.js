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
      vm.panelSections = ['home', 'chat', 'info'];
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
