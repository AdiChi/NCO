import angular from 'angular';
import uiRouter from 'angular-ui-router';
import filterComponentComponent from './filterComponent.component';

const filterComponentModule = angular.module('filterComponent', [
  uiRouter
])

.component('filterComponent', filterComponentComponent);

export default filterComponentModule;
