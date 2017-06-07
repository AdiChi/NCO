import angular                  from 'angular';
import usersListingComponent    from './usersListing.component';
import UsersList                from '../../components/usersList/usersList';

let usersListingModule = angular.module('usersListing', [
    UsersList.name
])

.component('usersListing', usersListingComponent);

export default usersListingModule;
