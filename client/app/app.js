import _ from 'lodash';
import $ from 'jquery';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import modal from 'angular-ui-bootstrap/src/modal';
import timepicker from 'angular-ui-bootstrap/src/timepicker';
import buttons from 'angular-ui-bootstrap/src/buttons';
import ngAnimate from 'angular-animate'
import ngInlineEdit from 'ng-inline-edit';
import {
    default as multiselect
} from 'angular-bootstrap-multiselect';

import FooterComponent from './components/footernco/footernco';
import LeftNavComponent from './components/leftNav/leftNav';
import AppComponent from './app.component';
import NavigationComponent from './components/navigation/navigation';
import SonglistsListComponent from './components/songlistsList/songlistsList';
import LogListComponent from './components/logList/logList';
import MultiSelectBoxComponent from './components/multiSelectBox/multiSelectBox';
import DateTimeRangeComponent from './components/dateTimeRange/dateTimeRange';
import SelectSongComponent from './components/selectSong/selectSong';
import DateOverDateSongComponent from './components/dateOverDateSong/dateOverDateSong';
import SongSalesByTerritoryComponent from './components/songSalesByTerritory/songSalesByTerritory';
import SongSalesByCityComponent from './components/songSalesByCity/songSalesByCity';
import DateOverDateMultipleComponent from './components/dateOverDateMultiple/dateOverDateMultiple';
import SongOverSongComponent from './components/songOverSong/songOverSong';
import LoginComponent from './pages/login/login';
import DashboardComponent from './pages/dashboard/dashboard';
import SideNavComponent from './components/sideNav/sideNav';
import FilterComponent from './components/filterComponent/filterComponent';
import ArtistsComponent from './pages/artists/artists';
import UsersComponent from './pages/users/users';
import CreateComponent from './pages/create/create';
import UpdateComponent from './pages/update/update';
import UpdateSonglistComponent from './pages/updateSonglist/updateSonglist';
import LogsComponent from './pages/logs/logs';
import ReportsComponent from './pages/reports/reports';
import SonglistsComponent from './pages/songlists/songlists';
import CreateSonglistComponent from './pages/createSonglist/createSonglist';
import UploadSongsComponent from './pages/uploadSongs/uploadSongs';
import EditAllSongsComponent from './pages/editAllSongs/editAllSongs';

import EmailPdfService from './services/EmailPdfService';
import EmailService from './services/EmailService';
import c3StyleService from './services/c3StyleService';
import c3ExportService from './services/c3ExportService';
import UsersService from './services/UsersService';
import SongsService from './services/SongsService';
import ArtistService from './services/ArtistService';
import SongListsService from './services/SongListsService';
import LogService from './services/LogService';
import ModalService from './services/ModalService';
import ReportService from './services/ReportService';
import ExportToCsvService from './services/ExportToCsvService';
import UtilService from './services/UtilService';
import LoginService from './services/LoginService';
import ExportToCsvDirective from './directives/export.directive';
import RowSelectDirective from './directives/rowSelect.directive';
import RowSelectAllDirective from './directives/rowSelectAll.directive';
import CustomOnChangeDirective from './directives/customOnChange.directive';
import StSummaryDirective from './directives/stSummary.directive';
import OnFilter from './directives/onDataFilter.directive';
import DataMap from './directives/datamap.directive';
import StResetFiltersDirective from './directives/stResetFilters.directive';
import StRatioDirective from './directives/stRatio.directive';
import CustomOnScrollDirective from './directives/customOnScroll.directive'
import MultipleEmailsDirective from './directives/multipleEmails.directive'

// import our default styles for the whole application
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
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
        buttons,
        multiselect,
        ngInlineEdit,
        ngAnimate,
        'ui.bootstrap.datetimepicker',
        'd3js',
        'c3js',
        'gridshore.c3js.chart',
        require('angular-smart-table'),
        NavigationComponent.name,
        LeftNavComponent.name,
        FooterComponent.name,
        UpdateSonglistComponent.name,
        UploadSongsComponent.name,
        EditAllSongsComponent.name,
        CreateComponent.name,
        CreateSonglistComponent.name,
        UpdateComponent.name,
        LogListComponent.name,
        LogsComponent.name,
        LoginComponent.name,
        DashboardComponent.name,
        ArtistsComponent.name,
        UsersComponent.name,
        SonglistsListComponent.name,
        SonglistsComponent.name,
        MultiSelectBoxComponent.name,
        DateTimeRangeComponent.name,
        SelectSongComponent.name,
        DateOverDateSongComponent.name,
        SongSalesByTerritoryComponent.name,
        SongSalesByCityComponent.name,
        DateOverDateMultipleComponent.name,
        ReportsComponent.name,
        SideNavComponent.name,
        FilterComponent.name,
        SongOverSongComponent.name
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

            // Login page
            .state('app.login', {
                url: '/',
                template: '<login></login>'
            })
            // Dashboard page to contain our users list page
            .state('app.home', {
                url: '/home',
                template: '<dashboard></dashboard>'
            })
            .state('app.artists', {
                url: '/artists',
                template: '<songlists heading="Artist"></songlists>'
            })
            .state('app.songs', {
                url: '/songs',
                template: '<songlists heading="Songs"></songlists>'
            })
            .state('app.users', {
                url: '/users',
                template: '<users></users>'
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
                template: '<songlists heading="Songs List"></songlists>'
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
                template: '<reports heading="Analytic Reporting"></reports>'
            })
            .state('app.dateOverDateSong', {
                url: '/dateOverDateSong',
                template: '<date-over-date-song></date-over-date-song>'
            })
            .state('app.songSalesByTerritory', {
                url: '/songSalesByTerritory',
                template: '<song-sales-by-territory></song-sales-by-territory>'
            })
            .state('app.songSalesByCity', {
                url: '/songSalesByCity',
                template: '<song-sales-by-city></song-sales-by-city>'
            })
            .state('app.dateOverDateMultiple', {
                url: '/dateOverDateMultiple',
                template: '<date-over-date-multiple></date-over-date-multiple>'
            })
            .state('app.songOverSong', {
                url: '/songOverSong',
                template: '<song-over-song></song-over-song>'
            });

        $urlRouterProvider.otherwise('/app/');
    })
    .component('app', AppComponent)
    .directive('rowSelectAll', RowSelectAllDirective)
    .directive('rowSelect', RowSelectDirective)
    .directive('stExport', ExportToCsvDirective)
    .directive('customOnChange', CustomOnChangeDirective)
    .directive('stSummary', StSummaryDirective)
    .directive('onFilter', OnFilter)
    .directive('datamap', DataMap)
    .directive('stResetFilter', StResetFiltersDirective)
    .directive('stRatio', StRatioDirective)
    .directive('customOnScroll', CustomOnScrollDirective)
    .directive('multipleEmails', MultipleEmailsDirective)
    .factory('UsersService', UsersService)
    .factory('SongsService', SongsService)
    .factory('SongListsService', SongListsService)
    .factory('c3ExportService', c3ExportService)
    .factory('c3StyleService', c3StyleService)
    .factory('EmailService', EmailService)
    .factory('ArtistService', ArtistService)
    .factory('LogService', LogService)
    .factory('ModalService', ModalService)
    .factory('ReportService', ReportService)
    .factory('ExportToCsvService', ExportToCsvService)
    .factory('UtilService', UtilService)
    .factory('LoginService', LoginService)
    .factory('EmailPdfService', EmailPdfService)
    .factory('superCache', ['$cacheFactory', function ($cacheFactory) {
        return $cacheFactory('super-cache');
    }])
    .constant('config', {
        apiUrl: 'http://172.27.108.135:8090',
        baseUrl: '/'
    })
    .factory('_', ['$window', function ($window) {
        return $window._;
    }])
    .run(['$rootScope', '$timeout', '$state', '$templateCache', '$window', 'c3Service', 'UtilService', function ($rootScope, $timeout, $state, $templateCache, $window, c3Service, UtilService) {
        $templateCache.put('template/smart-table/pagination.html',
            '<div class=" plain" ng-if="pages.length >= 2">' +
            '<st-summary style="display: inherit;"></st-summary>' +
            '<ul class="pagination">' +
            '<li><a style="position: relative;top: 1px;" ng-click="selectPage(1)" ng-disabled="currentPage == 1">First</a></li>' +
            '<li><a class="glyphicon glyphicon-chevron-left" ng-click="selectPage(currentPage - 1)" ng-disabled="currentPage == 1"></a></li>' +
            '<li><a class="glyphicon glyphicon-chevron-right" ng-click="selectPage(currentPage + 1)" ng-disabled="currentPage == numPages"></a></li>' +
            '<li><a style="position: relative;top: 1px;" ng-click="selectPage(numPages)" ng-disabled="currentPage == numPages">Last</a></li>' +
            '</ul></div>');

        $rootScope.$on('$stateChangeStart', (event, toState) => {
            if (!$rootScope.currentUser) {
                $rootScope.currentUser = UtilService.getFromSession('currentUser');
                if (!$rootScope.currentUser && toState.name !== 'app.login') {
                    $timeout(() => {
                        $state.go('app.login')
                    }, 100);
                }
            }
            $window.scrollTo(0, 0);
            $rootScope.showMenu = false;
        });
    }]);