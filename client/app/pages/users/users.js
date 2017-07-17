import angular from 'angular';
import usersComponent from './users.component';
import UsersListingComponent from '../../containers/usersListing/usersListing';

const usersModule = angular.module('users', [
    UsersListingComponent.name
])

.component('users', usersComponent);

export default usersModule;