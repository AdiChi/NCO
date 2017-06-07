import angular                  from 'angular';
import userUpdateFormComponent from './userUpdateForm.component';

let userUpdateFormModule = angular.module('userUpdateForm', [])

.component('userUpdateForm', userUpdateFormComponent);

export default userUpdateFormModule;
