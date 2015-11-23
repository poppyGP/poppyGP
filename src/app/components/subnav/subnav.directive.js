(function() {
  'use strict';

  angular
    .module('poppygp.components')
    .directive('gpSubnav', gpSubnavDirective);

  /** @ngInject */
  function gpSubnavDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/subnav/subnav.html',
      scope: {
          creationDate: '='
      },
      controller: SubnavController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SubnavController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();