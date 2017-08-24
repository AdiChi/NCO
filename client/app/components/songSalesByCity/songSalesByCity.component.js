import template from './songSalesByCity.html';
import controller from './songSalesByCity.controller';
import './songSalesByCity.scss';

let songSalesByCityComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default songSalesByCityComponent;
