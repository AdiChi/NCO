class DashboardController {
    constructor($scope, $rootScope) {
        'ngInject'
        this.name = 'dashboard';
        $('#leftNav').show();
        $('#navigationMenu').show();
        $('#navigationMenuButton').show();
        $('#footer').show();
        this.dashboard = ($rootScope.currentUser) ? $rootScope.currentUser.dashboard : {};
    }
}

export default DashboardController;