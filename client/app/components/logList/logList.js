import angular              from 'angular';
import logListComponent   from './logList.component';


const logListModule = angular.module('logList', [
])

.component('logList', logListComponent);

export default logListModule;
