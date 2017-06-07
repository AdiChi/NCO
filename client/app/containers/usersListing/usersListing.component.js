import template from './usersListing.html';
import controller from './usersListing.controller';

let usersListingComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default usersListingComponent;
