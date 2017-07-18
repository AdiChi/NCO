class DashboardController {
    constructor($scope, $rootScope) {
        'ngInject'
        this.name = 'dashboard';
        $('#navigationLinks').removeClass('hide-menu');
        this.dashboard = ($rootScope.currentUser) ? $rootScope.currentUser.dashboard : {};
        this.dashboard.widgets = [{}, {}, {}];
    }
}

export default DashboardController;