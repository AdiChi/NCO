import angular from 'angular';
import uiRouter from 'angular-ui-router';
import selectSongComponent from './selectSong.component';

const selectSongModule = angular.module('selectSong', [
  uiRouter
])

.component('selectSong', selectSongComponent);

export default selectSongModule;
