import angular              from 'angular';
import usersListComponent   from './usersList.component';

import UserListItemComponent from '../userListItem/userListItem';

const usersListModule = angular.module('usersList', [
    UserListItemComponent.name
])

.component('usersList', usersListComponent);

export default usersListModule;
