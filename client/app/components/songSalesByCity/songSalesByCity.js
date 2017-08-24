import angular from 'angular';
import uiRouter from 'angular-ui-router';
import songSalesByCityComponent from './songSalesByCity.component';

const songSalesByCityModule = angular.module('songSalesByCity', [])

.component('songSalesByCity', songSalesByCityComponent);

export default songSalesByCityModule;