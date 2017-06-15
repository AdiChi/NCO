import angular from 'angular';
import songlistUpdateFormComponent from './songlistUpdateForm.component';
import AllSongsListing             from '../../containers/allSongsListing/allSongsListing';


const songlistUpdateFormModule = angular.module('songlistUpdateForm', [
	AllSongsListing.name
])

.component('songlistUpdateForm', songlistUpdateFormComponent);

export default songlistUpdateFormModule;
