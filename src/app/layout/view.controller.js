(function() {
  'use strict';

  angular
    .module('poppygp.layout')
    .controller('ViewController', ViewController);

  /** @ngInject */
  function ViewController($log) {
    var vm = this;

    vm.layoutState = 0;

    activate();

    function activate() {
      vm.layoutState = 1;
      $log.info('ViewController activated.');
    }

  }
})();
