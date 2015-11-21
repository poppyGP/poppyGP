(function() {
  'use strict';

  angular
    .module('poppygp')
    .directive('gpTicker', gpTickerDirective);

  /** @ngInject */
  function gpTickerDirective(malarkey) {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: TickerController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var watcher;
      var typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: false,
        postfix: ' '
      });

      el.addClass('gp-ticker');

      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause().delete();
      });

      watcher = scope.$watch('vm.tickerTape', function() {
        angular.forEach(vm.tickerTape, function(message) {
          typist.type(message).pause().delete();
        });
      });

      scope.$on('$destroy', function () {
        watcher();
      });
    }

    /** @ngInject */
    function TickerController($log) {
      var vm = this;

      vm.tickerTape = [];

      activate();

      function activate() {
        vm.tickerTape = [
          'Twitter status update message from $http.get()',
          'New Reddit post from $http.get()',
          'Twitter status update message from $http.get()',
          'New Reddit post from $http.get()',
          'Twitter status update message from $http.get()',
          'New Reddit post from $http.get()'
        ];
      }
    }

  }

})();
