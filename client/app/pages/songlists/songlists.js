import angular from 'angular';
import songlistsComponent from './songlists.component';
import SonglistsListingComponent    from '../../containers/songlistsListing/songlistsListing';

const songlistsModule = angular.module('songlists', [
	SonglistsListingComponent.name
])

.component('songlists', songlistsComponent);

export default songlistsModule;
