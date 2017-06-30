import template from './reportsForm.html';
import controller from './reportsForm.controller';
import './reportsForm.scss';

let reportsFormComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default reportsFormComponent;
