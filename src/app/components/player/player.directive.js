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
        channelId     : '=*?channelId',
        version       : '=*?playerVersion',
        aspectHeight  : '=*?aspectHeight',
        aspectWidth   : '=*?aspectWidth'
      },
      link: function(scope, element, attrs) {


        // Generate Embed URL
        // ------------------------------

        scope.videoSrc = 'http://www.ustream.tv/embed/' + scope.channelId;
        if(scope.version === 'old') {
          scope.videoSrc += '?v=3&amp;wmode=direct&showtitle=false';
        } else {
          scope.videoSrc += '?html5ui&showtitle=false';
        }

        attrs.$set('src', scope.videoSrc);


        // Add Aspect Ratio Class
        // ------------------------------

        if(scope.aspectHeight && scope.aspectWidth) {
          var aspectRatio = 'ratio-' + scope.aspectWidth + '-by-' + scope.aspectHeight;
          element.addClass(aspectRatio);
        }

      }
    };
  }

})();
