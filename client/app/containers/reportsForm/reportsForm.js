import angular from 'angular';
import uiRouter from 'angular-ui-router';
import reportsFormComponent from './reportsForm.component';

const reportsFormModule = angular.module('reportsForm', [
  uiRouter
])

.component('reportsForm', reportsFormComponent);

export default reportsFormModule;
