import angular                  from 'angular';
import homeComponent            from './home.component';
import UsersListingComponent    from '../../containers/usersListing/usersListing';

let homeModule = angular.module('home', [
    UsersListingComponent.name
])

.component('home', homeComponent);

export default homeModule;
