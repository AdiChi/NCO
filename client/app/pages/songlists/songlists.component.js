import template from './songlists.html';
import controller from './songlists.controller';
import './songlists.scss';

let songlistsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default songlistsComponent;
