import angular                   from 'angular';
import songlistsListingComponent from './songlistsListing.component';
import SonglistsList             from '../../components/songlistsList/songlistsList';


const songlistsListingModule = angular.module('songlistsListing', [
	SonglistsList.name
])

.component('songlistsListing', songlistsListingComponent);

export default songlistsListingModule;
