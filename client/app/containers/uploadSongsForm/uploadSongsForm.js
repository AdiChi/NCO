import angular from 'angular';
import uploadSongsFormComponent from './uploadSongsForm.component';

const uploadSongsFormModule = angular.module('uploadSongsForm', [
])

.component('uploadSongsForm', uploadSongsFormComponent);

export default uploadSongsFormModule;
