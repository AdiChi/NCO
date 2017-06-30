import angular from 'angular';
import reportsComponent from './reports.component';
import ReportsForm   from '../../containers/reportsForm/reportsForm';

const reportsModule = angular.module('reports', [
    ReportsForm.name
])

.component('reports', reportsComponent);

export default reportsModule;
