import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dateOverDateMultipleComponent from './dateOverDateMultiple.component';

const dateOverDateMultipleModule = angular.module('dateOverDateMultiple', [
  uiRouter
])

.component('dateOverDateMultiple', dateOverDateMultipleComponent);

export default dateOverDateMultipleModule;
