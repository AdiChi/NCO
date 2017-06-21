import template from './uploadSongsForm.html';
import controller from './uploadSongsForm.controller';
import './uploadSongsForm.scss';

let uploadSongsFormComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default uploadSongsFormComponent;
