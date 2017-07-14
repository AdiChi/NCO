import template from './artists.html';
import controller from './artists.controller';
import './artists.scss';

let artistsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default artistsComponent;
