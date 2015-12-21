(function() {
  'use strict';

  angular
    .module('poppygp.core')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $mdSidenav, $mdMedia) {
    var vm = this;

    vm.pageTitle = '';

    vm.panelIsOpen    = false;
    vm.scheduleIsOpen = false;

    vm.togglePanel = togglePanel;
    vm.toggleSchedule = toggleSchedule;

    activate();

    function activate() {
      vm.pageTitle      = 'poppyGrandPrix';
      vm.panelIsOpen    = $mdMedia('gt-sm') ? true : false;
      vm.scheduleIsOpen = $mdMedia('gt-md') ? true : false;
    }

    function updateTitle() {

    }

    function togglePanel() {
      vm.panelIsOpen ? closePanel() : openPanel();
    }
    function closePanel() {
      vm.panelIsOpen = false;
      $timeout(function() {
        $mdSidenav('right').close();
      }, 100);
    }
    function openPanel() {
      vm.panelIsOpen = true;
      $timeout(function() {
        $mdSidenav('right').open();
      }, 100);
    }

    function toggleSchedule() {
      if(vm.scheduleIsOpen) {
        closeSchedule();
      } else {
        openSchedule();
      }
    }
    function closeSchedule() {
      vm.scheduleIsOpen = false;
      $timeout(function() {
        $mdSidenav('left').close();
      }, 100);
    }
    function openSchedule() {
      vm.scheduleIsOpen = true;
      $timeout(function() {
        $mdSidenav('left').open();
      }, 100);
    }

  }

})();
