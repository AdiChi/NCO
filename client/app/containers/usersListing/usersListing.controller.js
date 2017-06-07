class UsersListingController {
  constructor(UsersService) {
    "ngInject";

    // This will keep the service instance across our class
    this.UsersService = UsersService;

    // this will gold our usersList, it will be passed to the other components.
    this.usersList = [];
  }

  // This method will be called each time the component will be initialised,
  // In our case, it will be called for every page route change.
  $onInit(){
    var me = this;
    this.UsersService.getUsers().then(function(res) {
      me.usersList = res;
    }, function(err) {
      console.log(err);
    });
  }
}

export default UsersListingController;
