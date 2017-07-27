class SongSalesByTerritoryController {
    constructor($filter, ReportService) {
        'ngInject'

        this.selectedTerritoryGroups = [];
        this.selectedTerritories = [];
        this.selectedRetailers = [];
        this.breakRetailer = 'no';
        this.representation = '2';

        ReportService.getTerritories().then((res) => {
            this.territories = $filter('orderBy')(res.data, 'name');
        });

        ReportService.getTerritoryGroups().then((res) => {
            this.territoryGroups = $filter('orderBy')(res.data, 'name');
        });

        ReportService.getRetailers().then((res) => {
            this.retailers = $filter('orderBy')(res.data, 'name');
        });
    }
}

export default SongSalesByTerritoryController;