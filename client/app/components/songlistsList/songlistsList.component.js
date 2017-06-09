import template from './songlistsList.html';
import controller from './songlistsList.controller';
import './songlistsList.scss';

let songlistsListComponent = {
  restrict: 'E',
  bindings: {
  	songlistslist: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default songlistsListComponent;
