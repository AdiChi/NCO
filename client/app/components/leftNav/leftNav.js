import angular from 'angular';
import uiRouter from 'angular-ui-router';
import leftNavComponent from './leftNav.component';

const leftNavModule = angular.module('leftNav', [
  uiRouter
])

.component('leftNav', leftNavComponent);

export default leftNavModule;
