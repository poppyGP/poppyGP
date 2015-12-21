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
      'https://ustream.tv/embed/**',
      'http://ustream.tv/embed/**',
      'http://www.ustream.tv/embed/**',
      'https://www.ustream.tv/embed/**',
      'http://kiwiirc.com/client/**',
      'https://kiwiirc.com/client/**',
      'http://www.kiwiirc.com/client/**',
      'https://www.kiwiirc.com/client/**'
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
    toastrConfig.positionClass = 'toast-bottom-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // ------------------------------


  }

})();
