import angular      from 'angular';
import uiRouter     from 'angular-ui-router';

import AppComponent from './app.component';
import NavigationComponent from './components/navigation/navigation';
import LogListComponent from './components/logList/logList';
import HomeComponent from './pages/home/home';
import CreateComponent from './pages/create/create';
import UpdateComponent from './pages/update/update';
import LogsComponent from './pages/logs/logs';

import UsersService from './services/UsersService';
import LogService from './services/LogService';

// import our default styles for the whole application
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

angular
    .module('app', [
        uiRouter,

        require('angular-smart-table'),
        NavigationComponent.name,
        CreateComponent.name,
        UpdateComponent.name,
        LogListComponent.name,
        LogsComponent.name,
        HomeComponent.name
    ])
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
        "ngInject";

        // Define our app routing, we will keep our layout inside the app component
        // The layout route will be abstract and it will hold all of our app views
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                template: '<app></app>'
            })

            // Dashboard page to contain our users list page
            .state('app.home', {
                url: '/home',
                template: '<home></home>'
            })

            // Create route for our user listings creator
            .state('app.create', {
                url: '/create',
                template: '<create></create>'
            })
            // Create route for our edit user
            .state('app.edit', {
                url: '/change/:id',
                template: '<update></update>'
            })
            // Create route for our logs page
            .state('app.logs', {
                url: '/logs',
                template: '<logs></logs>'
            });

        $urlRouterProvider.otherwise('/app/home');
    })
    .component('app', AppComponent)
    .factory('UsersService', UsersService)
    .factory('LogService', LogService);
