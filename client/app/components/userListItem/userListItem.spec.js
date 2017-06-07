import UserListItemModule       from './userListItem'
import UserListItemController   from './userListItem.controller';
import UserListItemComponent    from './userListItem.component';
import UserListItemTemplate     from './userListItem.html';

describe('UserListItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserListItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserListItemController();
    };
  }));

  describe('Template', () => {

      it('has img for the user', () => {
          expect(UserListItemTemplate).to.match(/{{\s?vm\.user\.photo\s?}}/g);
      });

      it('has user name in the template', () => {
          expect(UserListItemTemplate).to.match(/{{\s?vm\.user\.name\s?}}/g);
      });

      it('has users about info in the template', () => {
          expect(UserListItemTemplate).to.match(/{{\s?vm\.user\.about\s?}}/g);
      });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserListItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserListItemTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserListItemController);
      });

      it('have the correct user interace', () => {
         expect(component.bindings.user).to.equal('<');
      });
  });
});
