import SonglistCreatorFormModule from './songlistCreatorForm'
import SonglistCreatorFormController from './songlistCreatorForm.controller';
import SonglistCreatorFormComponent from './songlistCreatorForm.component';
import SonglistCreatorFormTemplate from './songlistCreatorForm.html';

describe('SonglistCreatorForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SonglistCreatorFormModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SonglistCreatorFormController();
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
      expect(SonglistCreatorFormTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SonglistCreatorFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SonglistCreatorFormTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SonglistCreatorFormController);
      });
  });
});
