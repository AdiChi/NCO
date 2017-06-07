import LogListModule from './logList'
import LogListController from './logList.controller';
import LogListComponent from './logList.component';
import LogListTemplate from './logList.html';

describe('LogList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LogListModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LogListController();
    };
  }));

  describe('Template', () => {
    it('It renders the user-list-item directive', () => {
      expect(LogListTemplate).to.match(/user-list-item/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LogListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LogListTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LogListController);
      });

      it('expose Log as one way input binding', () => {
         expect(component.bindings.Log).to.equal('<');
      });
  });
});
