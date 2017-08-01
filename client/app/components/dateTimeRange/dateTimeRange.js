import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dateTimeRangeComponent from './dateTimeRange.component';

const dateTimeRangeModule = angular.module('dateTimeRange', [])

.component('dateTimeRange', dateTimeRangeComponent);

export default dateTimeRangeModule;