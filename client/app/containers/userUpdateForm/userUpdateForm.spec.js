import userUpdateFormModule from './userUpdateForm'
import userUpdateFormController from './userUpdateForm.controller';
import userUpdateFormComponent from './userUpdateForm.component';
import userUpdateFormTemplate from './userUpdateForm.html';

describe('userUpdateForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(userUpdateFormModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new userUpdateFormController();
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
      expect(userUpdateFormTemplate).to.match(/ng-submit="vm\.addUser/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = userUpdateFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(userUpdateFormTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(userUpdateFormController);
      });
  });
});
