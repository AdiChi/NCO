import template from './selectSong.html';
import controller from './selectSong.controller';
import './selectSong.scss';

let selectSongComponent = {
    restrict: 'E',
    bindings: {
        multipleSongs: '<',
        selectedSong: '='
    },
    template,
    controller,
    controllerAs: 'vm'
};

export default selectSongComponent;