import template from './uploadSongs.html';
import controller from './uploadSongs.controller';
import './uploadSongs.scss';

let uploadSongsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default uploadSongsComponent;
