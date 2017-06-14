import angular from 'angular';
import songlistCreatorFormComponent from './songlistCreatorForm.component';

const songlistCreatorFormModule = angular.module('songlistCreatorForm', [
])

.component('songlistCreatorForm', songlistCreatorFormComponent);

export default songlistCreatorFormModule;
