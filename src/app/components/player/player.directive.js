(function() {
  'use strict';

  angular
    .module('poppygp.components')
    .directive('gpPlayer', gpPlayerDirective);

  /* @ngInject */
  function gpPlayerDirective() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/components/player/player.html',
      scope: {
        channelId   : '=*?channelId',
        version     : '=*?playerVersion',
        aspectRatio : '=*?aspectRatio'
      },
      link: function(scope, element) {
        scope.videoSrc = 'http://www.ustream.tv/embed/' + scope.channelId + '?';
        // Use Old Player
        if(scope.version === 'old') {
          scope.videoSrc += '?v=3&amp;wmode=direct&showtitle=false';
        }
        // New HTML5 Player
        else {
          scope.videoSrc += 'html5ui=1&controls=false&showtitle=false';
        }

        // ------------------------------
        // TODO: Handle Aspect Ratio
        // ------------------------------
        if(scope.aspectRatio === '16-9') {
          element.addClass('widescreen');
        }
        else if(scope.aspectRatio === '21-9') {
          element.addClass('cinematic')
        }

      }
    };
  }

})();
