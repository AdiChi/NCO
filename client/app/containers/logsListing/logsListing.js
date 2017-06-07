import angular from 'angular';
import logsListingComponent from './logsListing.component';

const logsListingModule = angular.module('logsListing', [
])

.component('logsListing', logsListingComponent);

export default logsListingModule;
