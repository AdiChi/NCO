class userCreatorFormController {
    constructor($state, UsersService) {
        "ngInject";

        this.$state = $state;
        this.UsersService = UsersService;

        this.user = {};
    }

    // will handle the form submission,
    // validates the required field and then adds the user to the service.
    // once added, we will go to the next page.
    addUser() {
        if (!this.user.name) return alert('User Name is Required');
        if (!this.user.address) return alert('User address is required');

        this.UsersService.createUser(this.user);

        // reset the form
        this.user = {};

        // go to home page, to see our entry
        this.$state.go('app.users');
    }
}

export default userCreatorFormController;