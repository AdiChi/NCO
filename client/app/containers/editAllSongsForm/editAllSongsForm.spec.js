import EditAllSongsFormModule from './editAllSongsForm'
import EditAllSongsFormController from './editAllSongsForm.controller';
import EditAllSongsFormComponent from './editAllSongsForm.component';
import EditAllSongsFormTemplate from './editAllSongsForm.html';

describe('EditAllSongsForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EditAllSongsFormModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EditAllSongsFormController();
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
      expect(EditAllSongsFormTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = EditAllSongsFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(EditAllSongsFormTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(EditAllSongsFormController);
      });
  });
});
