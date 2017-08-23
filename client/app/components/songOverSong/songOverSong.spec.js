import SongOverSongModule from './songOverSong'
import SongOverSongController from './songOverSong.controller';
import SongOverSongComponent from './songOverSong.component';
import SongOverSongTemplate from './songOverSong.html';

describe('SongOverSong', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SongOverSongModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SongOverSongController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(SongOverSongTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SongOverSongComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SongOverSongTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SongOverSongController);
      });
  });
});
