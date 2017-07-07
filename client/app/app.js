import _                       from 'lodash';
import angular                 from 'angular';
import uiRouter                from 'angular-ui-router';
import modal                   from 'angular-ui-bootstrap/src/modal'; 
import timepicker              from 'angular-ui-bootstrap/src/timepicker'; 
import ngInlineEdit            from 'ng-inline-edit';

import AppComponent            from './app.component';
import NavigationComponent     from './components/navigation/navigation';
import SonglistsListComponent  from './components/songlistsList/songlistsList';
import LogListComponent        from './components/logList/logList';
import DateOverDateSongComponent from './components/dateOverDateSong/dateOverDateSong';
import HomeComponent           from './pages/home/home';
import CreateComponent         from './pages/create/create';
import UpdateComponent         from './pages/update/update';
import UpdateSonglistComponent from './pages/updateSonglist/updateSonglist';
import LogsComponent           from './pages/logs/logs';
import ReportsComponent        from './pages/reports/reports';
import SonglistsComponent      from './pages/songlists/songlists';
import CreateSonglistComponent from './pages/createSonglist/createSonglist';
import UploadSongsComponent    from './pages/uploadSongs/uploadSongs';
import EditAllSongsComponent   from './pages/editAllSongs/editAllSongs';

import UsersService            from './services/UsersService';
import SongsService            from './services/SongsService';
import SongListsService        from './services/SongListsService';
import LogService              from './services/LogService';
import ModalService            from './services/ModalService';
import ReportService           from './services/ReportService';
import ExportToCsvService      from './services/ExportToCsvService';
import ExportToCsvDirective    from './directives/export.directive';
import RowSelectDirective      from './directives/rowSelect.directive';
import RowSelectAllDirective   from './directives/rowSelectAll.directive';
import CustomOnChangeDirective from './directives/customOnChange.directive';
import StSummaryDirective      from './directives/stSummary.directive';

// import our default styles for the whole application
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'c3/c3.min.css';
import 'ng-inline-edit/dist/ng-inline-edit.css';
import 'angular-bootstrap-datetimepicker/src/css/datetimepicker.css';
// import our default js for the whole application
import 'c3-angular';
import 'bootstrap';
import './services/angularD3js';
import './services/angularC3js';
import 'angular-bootstrap-datetimepicker';

angular
    .module('app', [
        uiRouter,
        modal,
        timepicker,
        ngInlineEdit,
        'ui.bootstrap.datetimepicker',
        'd3js',
        'c3js',
        'gridshore.c3js.chart',
        require('angular-smart-table'),
        NavigationComponent.name,
        UpdateSonglistComponent.name,
        UploadSongsComponent.name,
        EditAllSongsComponent.name,
        CreateComponent.name,
        CreateSonglistComponent.name,
        UpdateComponent.name,
        LogListComponent.name,
        LogsComponent.name,
        HomeComponent.name,
        SonglistsListComponent.name,
        SonglistsComponent.name,
        DateOverDateSongComponent.name,
        ReportsComponent.name
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
            })
            .state('app.uploadsongs', {
                url: '/uploadsongs',
                template: '<upload-songs></upload-songs>'
            })
            .state('app.editAllSongs', {
                url: '/editAllSongs',
                template: '<edit-all-songs></edit-all-songs>'
            })
            .state('app.reports', {
                url: '/reports',
                template: '<reports></reports>'
            });

        $urlRouterProvider.otherwise('/app/home');
    })
    .component('app', AppComponent)
    .directive('rowSelectAll', RowSelectAllDirective)
    .directive('rowSelect', RowSelectDirective)
    .directive('stExport', ExportToCsvDirective)
    .directive('customOnChange', CustomOnChangeDirective)
    .directive('stSummary', StSummaryDirective)
    .factory('UsersService', UsersService)
    .factory('SongsService', SongsService)
    .factory('SongListsService', SongListsService)
    .factory('LogService', LogService)
    .factory('ModalService', ModalService)
    .factory('ReportService', ReportService)
    .factory('ExportToCsvService', ExportToCsvService)
    .factory('superCache', ['$cacheFactory', function($cacheFactory) {
        return $cacheFactory('super-cache');
    }])
    .constant('config', {
        apiUrl: 'http://172.27.108.133:8085',
        baseUrl: '/'
    })
    .factory('_', ['$window', function($window) {
        return $window._;
    }])
    .run(['$templateCache','c3Service', function($templateCache,c3Service) {
        $templateCache.put('template/smart-table/pagination.html',
            '<div class=" plain" ng-if="pages.length >= 2">' +
            '<st-summary style="display: inherit;"></st-summary>' +
            '<ul class="pagination">' +
            '<li><a style="position: relative;top: 1px;" ng-click="selectPage(1)" ng-disabled="currentPage == 1">First</a></li>' +
            '<li><a class="glyphicon glyphicon-chevron-left" ng-click="selectPage(currentPage - 1)" ng-disabled="currentPage == 1"></a></li>' +
            '<li><a class="glyphicon glyphicon-chevron-right" ng-click="selectPage(currentPage + 1)" ng-disabled="currentPage == numPages"></a></li>' +
            '<li><a style="position: relative;top: 1px;" ng-click="selectPage(numPages)" ng-disabled="currentPage == numPages">Last</a></li>' +
            '</ul></div>');
    }]);
