import angular from 'angular';
import uiRouter from 'angular-ui-router';
import editAllSongsFormComponent from './editAllSongsForm.component';

const editAllSongsFormModule = angular.module('editAllSongsForm', [
  uiRouter
])

.component('editAllSongsForm', editAllSongsFormComponent);

export default editAllSongsFormModule;
