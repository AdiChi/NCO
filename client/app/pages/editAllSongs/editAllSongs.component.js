import template from './editAllSongs.html';
import controller from './editAllSongs.controller';
import './editAllSongs.scss';

let editAllSongsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default editAllSongsComponent;
