import angular from 'angular';
import uiRouter from 'angular-ui-router';
import artistsComponent from './artists.component';

const artistsModule = angular.module('artists', [
  uiRouter
])

.component('artists', artistsComponent);

export default artistsModule;
