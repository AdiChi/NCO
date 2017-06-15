import template from './allSongsListing.html';
import controller from './allSongsListing.controller';

let allSongsListingComponent = {
  restrict: 'E',
  bindings: {
  	sel: "=",
  	songs: "="
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default allSongsListingComponent;
