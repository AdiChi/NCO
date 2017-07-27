import angular from 'angular';
import uiRouter from 'angular-ui-router';
import songSalesByTerritoryComponent from './songSalesByTerritory.component';

const songSalesByTerritoryModule = angular.module('songSalesByTerritory', [
  uiRouter
])

.component('songSalesByTerritory', songSalesByTerritoryComponent);

export default songSalesByTerritoryModule;
