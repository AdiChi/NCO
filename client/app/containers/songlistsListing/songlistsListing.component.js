import template from './songlistsListing.html';
import controller from './songlistsListing.controller';
import './songlistsListing.scss';

let songlistsListingComponent = {
  restrict: 'E',
  bindings: {
    detailsData:'<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default songlistsListingComponent;
