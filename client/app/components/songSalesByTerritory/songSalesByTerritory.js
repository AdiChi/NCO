import angular from 'angular';
import uiRouter from 'angular-ui-router';
import songSalesByTerritoryComponent from './songSalesByTerritory.component';
import breakOutByRetailerController from './breakOutByRetailer.controller';

const songSalesByTerritoryModule = angular.module('songSalesByTerritory', [])
    .component('songSalesByTerritory', songSalesByTerritoryComponent)
    .controller('breakOutByRetailerController', breakOutByRetailerController);

export default songSalesByTerritoryModule;