import angular from 'angular';
import uiRouter from 'angular-ui-router';
import multiSelectBoxComponent from './multiSelectBox.component';

const multiSelectBoxModule = angular.module('multiSelectBox', [])
    .component('multiSelectBox', multiSelectBoxComponent);

export default multiSelectBoxModule;