import angular from 'angular';
import userListItemComponent from './userListItem.component';

const userListItemModule = angular.module('userListItem', [])

.component('userListItem', userListItemComponent);

export default userListItemModule;
