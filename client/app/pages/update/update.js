import angular          from 'angular';
import updateComponent  from './update.component';
import UserUpdateForm   from '../../containers/userUpdateForm/userUpdateForm';

const updateModule = angular.module('update', [
    UserUpdateForm.name
])

.component('update', updateComponent);

export default updateModule;
