import angular          from 'angular';
import createComponent  from './create.component';
import UserCreateForm   from '../../containers/userCreatorForm/userCreatorForm';

const createModule = angular.module('create', [
    UserCreateForm.name
])

.component('create', createComponent);

export default createModule;
