import angular from 'angular';
import uiRouter from 'angular-ui-router';
import songOverSongComponent from './songOverSong.component';

const songOverSongModule = angular.module('songOverSong', [
  uiRouter
])

.component('songOverSong', songOverSongComponent);

export default songOverSongModule;
