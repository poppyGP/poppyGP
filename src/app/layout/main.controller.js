(function() {
  'use strict';

  angular
    .module('poppygp.layout')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;

    vm.layoutState = 0;

    activate();

    function activate() {
      vm.layoutState = 1;
      $log.info('MainController activated.');
    }

  }

})();
