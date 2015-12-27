/* global Firebase */
(function() {
  'use strict';

  angular
    .module('poppygp.schedule')
    .controller('ScheduleController', ScheduleController);

  /** @ngInject */
  function ScheduleController($log, $firebaseArray) {
    var vm = this;

    var ref = new Firebase("https://poppygp-temp.firebaseio.com/playlist/trackList/track");

    vm.trackList = $firebaseArray(ref);
    /*
    parsePlaylist($firebaseArray(ref));

    vm.trackList    = [];
    vm.startTime    = moment('2015-12-08T22:30:00-05:00');
    vm.currentTime  = moment();
    vm.currentTrack = {};

    function parsePlaylist(firebaseArray) {

      var response  = firebaseArray;
      var trackList = [];
      var pointer   = 0;
      var counter   = moment(vm.startTime);

      for(var i = 0; i < response.length; i++) {

        var trackItem = {};

        var filepath = decodeURIComponent(response.location);
        var filename = filepath.split('\/').pop().toString();
        var trackTitle = filename.replace(/\./g, ' ');
        trackItem.title = trackTitle.replace(/avi|mkv|mp4|x264|XviD|-asd|-joho|-jj|-Nub|DaRmEtH|English|/g, '');
        $log.info('Title: ' + trackItem.title);

        // track.duration = vm.response.duration;
        trackItem.duration = moment.duration(response.duration, 'ms');
        trackItem.playtime = moment(counter);
        trackItem.showtime = trackItem.playtime.format('ddd DD MMM HH:mm:ss');


        // add to trackList
        trackList.push(trackItem);
        counter.add(response.duration, 'ms');

        if(counter.isBefore()) {
          pointer = i;
        }

      } // for

      vm.trackList = trackList;
      vm.currentTrack = vm.trackList[pointer];

    }
    */


  }

})();
