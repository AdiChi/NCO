import angular from 'angular';
import updateSonglistComponent from './updateSonglist.component';
import SonglistUpdateForm   from '../../containers/songlistUpdateForm/songlistUpdateForm';

const updateSonglistModule = angular.module('updateSonglist', [
  SonglistUpdateForm.name
])

.component('updateSonglist', updateSonglistComponent);

export default updateSonglistModule;
