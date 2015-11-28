(function() {
  'use strict';

  angular
    .module('poppygp.layout')
    .directive('gpVideoPlayer', gpVideoPlayerDirective);

  /* @ngInject */
  function gpVideoPlayerDirective() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'app/layout/videoPlayer/videoPlayer.html',
      scope: {
        channelId : '=*?channelId',
        version   : '=*?playerVersion'
      },
      link: function(scope) {
        scope.videoSrc = 'http://www.ustream.tv/embed/' + scope.channelId + '?';
        // Use Old Player
        if(scope.version === 'old') {
          scope.videoSrc += '?v=3&amp;wmode=direct&showtitle=false';
        }
        // New HTML5 Player
        else {
          scope.videoSrc += 'html5ui=1&controls=false&showtitle=false';
        }
      }
    };
  }

})();
