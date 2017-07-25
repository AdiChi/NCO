import template from './leftNav.html';
import controller from './leftNav.controller';
import './leftNav.scss';

let leftNavComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default leftNavComponent;
