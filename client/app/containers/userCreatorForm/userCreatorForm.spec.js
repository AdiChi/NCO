import userCreatorFormModule from './userCreatorForm'
import userCreatorFormController from './userCreatorForm.controller';
import userCreatorFormComponent from './userCreatorForm.component';
import userCreatorFormTemplate from './userCreatorForm.html';

describe('userCreatorForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(userCreatorFormModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new userCreatorFormController();
    };
  }));

  describe('Controller', () => {
      it('has user property', () => {
         let controller = makeController();

         expect(controller).to.have.property('user');
      });

      it('has add user method', () => {
          let controller = makeController();

          expect(controller).to.have.property('user');
      });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('expect to have ng-submit method call', () => {
      expect(userCreatorFormTemplate).to.match(/ng-submit="vm\.addUser/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = userCreatorFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(userCreatorFormTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(userCreatorFormController);
      });
  });
});
