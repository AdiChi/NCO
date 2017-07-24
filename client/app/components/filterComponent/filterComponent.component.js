import template from './filterComponent.html';
import controller from './filterComponent.controller';
import './filterComponent.scss';

let filterComponentComponent = {
  restrict: 'E',
  bindings: {
    showFilter: '=',
    position: '<',
    filterOption: '=',
    filterData: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default filterComponentComponent;
