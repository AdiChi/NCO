import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerncoComponent from './footernco.component';

const footerncoModule = angular.module('footernco', [
  uiRouter
])

.component('footernco', footerncoComponent);

export default footerncoModule;
