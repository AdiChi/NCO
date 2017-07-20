import template from './sideNav.html';
import controller from './sideNav.controller';
import './sideNav.scss';

let sideNavComponent = {
  restrict: 'E',
  bindings: {
    visible: "=",
    alignment: "@",
    data: "<",
    title: "="
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default sideNavComponent;
