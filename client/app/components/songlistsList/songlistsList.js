import angular from 'angular';
import songlistsListComponent from './songlistsList.component';

const songlistsListModule = angular.module('songlistsList', [
])

.component('songlistsList', songlistsListComponent);

export default songlistsListModule;
