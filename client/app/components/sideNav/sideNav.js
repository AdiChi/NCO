import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sideNavComponent from './sideNav.component';

const sideNavModule = angular.module('sideNav', [])
    .component('sideNav', sideNavComponent);

export default sideNavModule;