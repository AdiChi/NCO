import UsersListingModule from './usersListing'
import UsersListingController from './usersListing.controller';
import UsersListingComponent from './usersListing.component';
import UsersListingTemplate from './usersListing.html';

describe('UsersListing', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UsersListingModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UsersListingController();
    };
  }));

  describe('Template', () => {
      it('renders user-list component', () => {
         expect(UsersListingTemplate).to.match(/<users-list/g);
      });

      it('passes userslist to user-list component', () => {
          expect(UsersListingTemplate).to.match(/users="vm\.usersList"/g);
      });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UsersListingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UsersListingTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UsersListingController);
      });
  });
});
