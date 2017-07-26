import template from './reports.html';
import controller from './reports.controller';
import './reports.scss';

let reportsComponent = {
  restrict: 'E',
  bindings: {
    heading: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default reportsComponent;
