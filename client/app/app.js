import _                       from 'lodash';
import angular                 from 'angular';
import uiRouter                from 'angular-ui-router';
import modal                   from 'angular-ui-bootstrap/src/modal';
 
import AppComponent            from './app.component';
import NavigationComponent     from './components/navigation/navigation';
import SonglistsListComponent  from './components/songlistsList/songlistsList';
import LogListComponent        from './components/logList/logList';
import HomeComponent           from './pages/home/home';
import CreateComponent         from './pages/create/create';
import UpdateComponent         from './pages/update/update';
import UpdateSonglistComponent from './pages/updateSonglist/updateSonglist';
import LogsComponent           from './pages/logs/logs';
import SonglistsComponent      from './pages/songlists/songlists';
import CreateSonglistComponent from './pages/createSonglist/createSonglist';

import UsersService            from './services/UsersService';
import SongsService            from './services/SongsService';
import SongListsService        from './services/SongListsService';
import LogService              from './services/LogService';
import ModalService            from './services/ModalService';
import ExportToCsvService      from './services/ExportToCsvService';
import ExportToCsvDirective    from './directives/export.directive';
import RowSelectDirective      from './directives/rowSelect.directive';
import RowSelectAllDirective   from './directives/rowSelectAll.directive';

// import our default styles for the whole application
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

angular
    .module('app', [
        uiRouter,
        modal,

        require('angular-smart-table'),
        NavigationComponent.name,
        UpdateSonglistComponent.name,
        CreateComponent.name,
        CreateSonglistComponent.name,
        UpdateComponent.name,
        LogListComponent.name,
        LogsComponent.name,
        HomeComponent.name,
        SonglistsListComponent.name,
        SonglistsComponent.name
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
            })
            .state('app.songlists', {
                url: '/songlists',
                template: '<songlists></songlists>'
            })
            .state('app.addsonglist', {
                url: '/songlists/add',
                template: '<create-songlist></create-songlist>'
            })
            .state('app.editsonglist', {
                url: '/songlist/:id',
                template: '<update-songlist></update-songlist>'
            });

        $urlRouterProvider.otherwise('/app/home');
    })
    .component('app', AppComponent)
    .factory('UsersService', UsersService)
    .factory('SongsService', SongsService)
    .factory('SongListsService', SongListsService)
    .factory('LogService', LogService)
    .factory('ModalService', ModalService)
    .factory('ExportToCsvService', ExportToCsvService)
    .directive('rowSelectAll', RowSelectAllDirective)
    .directive('rowSelect', RowSelectDirective)
    .directive('stExport',ExportToCsvDirective)
    .factory('superCache', ['$cacheFactory', function($cacheFactory) {
        return $cacheFactory('super-cache');
    }])
    .constant('config', {  
      apiUrl: 'http://172.27.108.133:8085',
      baseUrl: '/'
    }).factory('_', ['$window', function($window) {
      return $window._; 
    }]);;