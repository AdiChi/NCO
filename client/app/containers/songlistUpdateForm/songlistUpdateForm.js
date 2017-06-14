import angular from 'angular';
import uiRouter from 'angular-ui-router';
import songlistUpdateFormComponent from './songlistUpdateForm.component';

const songlistUpdateFormModule = angular.module('songlistUpdateForm', [
  uiRouter
])

.component('songlistUpdateForm', songlistUpdateFormComponent);

export default songlistUpdateFormModule;
