import LeftNavModule from './leftNav'
import LeftNavController from './leftNav.controller';
import LeftNavComponent from './leftNav.component';
import LeftNavTemplate from './leftNav.html';

describe('LeftNav', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LeftNavModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LeftNavController();
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
      expect(LeftNavTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LeftNavComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LeftNavTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LeftNavController);
      });
  });
});
