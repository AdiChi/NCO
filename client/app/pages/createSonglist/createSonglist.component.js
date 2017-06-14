import template from './createSonglist.html';
import controller from './createSonglist.controller';
import './createSonglist.scss';

let createSonglistComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default createSonglistComponent;
