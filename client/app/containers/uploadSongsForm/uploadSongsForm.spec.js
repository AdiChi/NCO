import UploadSongsFormModule from './uploadSongsForm'
import UploadSongsFormController from './uploadSongsForm.controller';
import UploadSongsFormComponent from './uploadSongsForm.component';
import UploadSongsFormTemplate from './uploadSongsForm.html';

describe('UploadSongsForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UploadSongsFormModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UploadSongsFormController();
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
      expect(UploadSongsFormTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UploadSongsFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UploadSongsFormTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UploadSongsFormController);
      });
  });
});
