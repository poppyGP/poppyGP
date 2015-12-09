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
        network  : '@network',
        nick     : '@nick',
        theme    : '@theme',
        channel  : '@channel'
      },
      link: function(scope, element) {

        scope.chatSrc = 'https://kiwiirc.com/client/';

        // irc network
        if(scope.network) {
          scope.chatSrc += scope.network + '/';
        } else {
          scope.chatSrc += 'irc.kiwiirc.com/';
        }

        // nick
        if(scope.nick) {
          scope.chatSrc += '?nick=' + scope.nick + '|';
        }

        // theme
        if(scope.theme == 'basic' || scope.theme == 'cli' || scope.theme == 'mini') {
          scope.chatSrc += '?&theme=' + scope.theme;
        }
        if(scope.channel) {
          scope.chatSrc += '#' + scope.channel;
        }

        element.attr('src', scope.chatSrc);
        //scope.chatSrc = 'https://kiwiirc.com/client/' + scope.network + '/?' + scope.nickPrefix + '-?&theme=' + scope.theme + '#' + scope.channel + '>';
        //scope.chatSrc = 'https://kiwiirc.com/client/irc.snoonet.org/?nick=poppyGP-?&theme=mini#f1';
      }
    };
  }

})();
