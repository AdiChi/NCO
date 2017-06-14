import template from './songlistCreatorForm.html';
import controller from './songlistCreatorForm.controller';
import './songlistCreatorForm.scss';

let songlistCreatorFormComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default songlistCreatorFormComponent;
