import angular from 'angular';
import editAllSongsComponent from './editAllSongs.component';
import editAllSongsForm   from '../../containers/editAllSongsForm/editAllSongsForm';

const editAllSongsModule = angular.module('editAllSongs', [
    editAllSongsForm.name
])

.component('editAllSongs', editAllSongsComponent);

export default editAllSongsModule;
