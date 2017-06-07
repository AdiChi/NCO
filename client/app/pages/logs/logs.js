import angular from 'angular';
import logsComponent from './logs.component';
import LogsListingComponent    from '../../containers/logsListing/logsListing';

const logsModule = angular.module('logs', [
	LogsListingComponent.name
])

.component('logs', logsComponent);

export default logsModule;
