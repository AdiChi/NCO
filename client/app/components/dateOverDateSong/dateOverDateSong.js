import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dateOverDateSongComponent from './dateOverDateSong.component';

const dateOverDateSongModule = angular.module('dateOverDateSong', [
  uiRouter
])

.component('dateOverDateSong', dateOverDateSongComponent);

export default dateOverDateSongModule;
