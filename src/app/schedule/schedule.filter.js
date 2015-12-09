(function() {
  'use strict';

  angular
    .module('poppygp.schedule')
    .filter('isPast', isPast);


  /** @ngInject */
  function isPast(moment) {
    return function(items) {
      return items.filter(function(item) {
        return moment(item.playtime).isAfter();
      });
    };
  }


})();
