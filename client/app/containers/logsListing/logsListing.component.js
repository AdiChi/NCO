import template from './logsListing.html';
import controller from './logsListing.controller';
import './logsListing.scss';

let logsListingComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default logsListingComponent;
