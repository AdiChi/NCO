import UsersListModule from './usersList'
import UsersListController from './usersList.controller';
import UsersListComponent from './usersList.component';
import UsersListTemplate from './usersList.html';

describe('UsersList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UsersListModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UsersListController();
    };
  }));

  describe('Template', () => {
    it('It renders the user-list-item directive', () => {
      expect(UsersListTemplate).to.match(/user-list-item/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UsersListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UsersListTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UsersListController);
      });

      it('expose users as one way input binding', () => {
         expect(component.bindings.users).to.equal('<');
      });
  });
});
