(function() {
  'use strict';

  angular
    .module('poppygp.layout')
    .directive('gpNavbar', gpNavbarDirective);

  /** @ngInject */
  function gpNavbarDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/layout/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
