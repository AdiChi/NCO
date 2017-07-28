class LoginController {
    constructor($rootScope, $state, UtilService, LoginService) {
        'ngInject'
        $rootScope.currentUser = null;
        this.name = 'login';
        $('#leftNav').hide();
        $('#navigationMenu').hide();
        $('#navigationMenuButton').hide();
        $('#footer').hide();
        UtilService.clearSession();

        this.validateUser = function(form) {
            this.submitted = true;
            if (!form.$valid) return;
            var user = LoginService.validateUser(this.email, this.password);
            if (user) {
                $rootScope.currentUser = user;
                UtilService.storeInSession('currentUser', user);
                $state.go('app.home');
            } else {
                this.showError = true;
            }
        }
    }
}

export default LoginController