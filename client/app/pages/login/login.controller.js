class LoginController {
    constructor($rootScope, $state, UtilService, LoginService) {
        'ngInject'
        this.name = 'login';
        $('#navigationLinks').addClass('hide-menu');
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