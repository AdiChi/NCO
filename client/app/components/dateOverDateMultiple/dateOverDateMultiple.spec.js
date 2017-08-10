import DateOverDateMultipleModule from './dateOverDateMultiple'
import DateOverDateMultipleController from './dateOverDateMultiple.controller';
import DateOverDateMultipleComponent from './dateOverDateMultiple.component';
import DateOverDateMultipleTemplate from './dateOverDateMultiple.html';

describe('DateOverDateMultiple', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DateOverDateMultipleModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DateOverDateMultipleController();
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
      expect(DateOverDateMultipleTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DateOverDateMultipleComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DateOverDateMultipleTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DateOverDateMultipleController);
      });
  });
});
