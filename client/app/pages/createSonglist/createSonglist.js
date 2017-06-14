import angular                 from 'angular';
import createSonglistComponent from './createSonglist.component';
import SonglistCreateForm      from '../../containers/songlistCreatorForm/songlistCreatorForm';


const createSonglistModule = angular.module('createSonglist', [
	SonglistCreateForm.name
])

.component('createSonglist', createSonglistComponent);

export default createSonglistModule;
