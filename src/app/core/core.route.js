(function() {
  'use strict';

  angular
    .module('poppygp.core')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    // $stateProvider
    //   .state('home', {
    //     url: '/',
    //     templateUrl: 'app/layout/main.html'
    //     controller: 'MainController',
    //     controllerAs: 'main'
    //   });

    // $urlRouterProvider.otherwise('/');
  }

})();
