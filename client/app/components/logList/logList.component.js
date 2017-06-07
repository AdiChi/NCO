import template from './logList.html';
import controller from './logList.controller';

let logListComponent = {
  restrict: 'E',
  bindings: {
    logs: '<'
  },
  template,
  controller,
  controllerAs: 'vm'

};

export default logListComponent;
