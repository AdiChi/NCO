import UpdateModule from './update'
import UpdateController from './update.controller';
import UpdateComponent from './update.component';
import UpdateTemplate from './update.html';

describe('Update', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UpdateModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UpdateController();
    };
  }));

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('renders users creator component', () => {
      expect(UpdateTemplate).to.match(/<user-creator-form>/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UpdateComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UpdateTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UpdateController);
      });
  });
});
