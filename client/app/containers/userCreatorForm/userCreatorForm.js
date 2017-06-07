import angular                  from 'angular';
import userCreatorFormComponent from './userCreatorForm.component';

let userCreatorFormModule = angular.module('userCreatorForm', [])

.component('userCreatorForm', userCreatorFormComponent);

export default userCreatorFormModule;
