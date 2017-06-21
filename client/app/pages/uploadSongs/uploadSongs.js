import angular from 'angular';
import uploadSongsComponent from './uploadSongs.component';
import UploadSongsFormComponent from '../../containers/uploadSongsForm/uploadSongsForm';

const uploadSongsModule = angular.module('uploadSongs', [
    UploadSongsFormComponent.name
])

.component('uploadSongs', uploadSongsComponent);

export default uploadSongsModule;
