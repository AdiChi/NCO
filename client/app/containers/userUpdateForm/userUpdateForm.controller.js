class userUpdateFormController {
  constructor($state, $stateParams, UsersService) {
    "ngInject";
    var me = this;
    this.$state       = $state;
    this.UsersService = UsersService;

    this.id = $stateParams.id;

    this.UsersService.getUser(this.id).then(function(res){
      me.user = res;
    });
  }

  // will handle the form submission,
  // validates the required field and then adds the user to the service.
  // once added, we will go to the next page.
  updateUser() {
    if(!this.user.name) return alert('User Name is Required');
    if(!this.user.address) return alert('User address is required');

    this.UsersService.updateUser(this.user);

    // reset the form
    this.user = {};

    // go to home page, to see our entry
    this.$state.go('app.home');
  }
}

export default userUpdateFormController;
