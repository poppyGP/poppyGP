(function() {
  'use strict';

  angular
    .module('poppygp.core')
    .config(config);

  /** @ngInject */
  function config($logProvider, $sceDelegateProvider, toastrConfig) {


    // Whitelist Embed URLs
    // ------------------------------

    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://www.ustream.tv/embed/**',
      'https://www.ustream.tv/embed/**'
    ]);

    // ------------------------------


    // Enable log
    // ------------------------------

    $logProvider.debugEnabled(true);

    // ------------------------------


    // Set options third-party lib
    // ------------------------------

    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // ------------------------------


  }

})();
