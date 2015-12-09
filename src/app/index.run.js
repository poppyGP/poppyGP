(function() {
  'use strict';

  angular
    .module('poppygp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
