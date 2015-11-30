(function() {
  'use strict';

  angular
    .module('poppygp.components')
    .directive('gpWebchat', gpWebchatDirective);

  /* @ngInject */
  function gpWebchatDirective() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'app/components/webchat/webchat.html',
      scope: {
        network  : '=*?network',
        nick     : '=*?nick',
        theme    : '=*?theme',
        channel  : '=*?channel'
      },
      link: function(scope) {
        //scope.chatSrc = 'https://kiwiirc.com/client/' + scope.network + '/?' + scope.nickPrefix + '-?&theme=' + scope.theme + '#' + scope.channel + '>';
        scope.chatSrc = 'https://kiwiirc.com/client/irc.snoonet.org/?nick=poppyGP-|?&theme=mini#f1';
      }
    };
  }

})();
