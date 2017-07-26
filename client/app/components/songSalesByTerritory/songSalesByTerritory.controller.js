class SongSalesByTerritoryController {
    constructor($filter, ReportService) {
        'ngInject'

        this.territoryGroups = [];
        this.territories = [];
        this.retailers = [];
        this.selectedTerritoryGroups = [];
        this.selectedTerritories = [];
        this.selectedRetailers = [];
        this.breakRetailer = 'no';
        this.representation = '2';

        ReportService.getTerritories().then((res) => {
            this.territories = res.data;
        });

        ReportService.getTerritoryGroups().then((res) => {
            this.territoryGroups = res.data;
        });

        ReportService.getRetailers().then((res) => {
            this.retailers = res.data;
        });

        this.showSeperator = function() {
            return this.territoryGroups.length > 0 && this.territories.length > 0;
        };

        this.showSelectedSeperator = function() {
            var groups = this.selectedTerritoryGroups && this.selectedTerritoryGroups.length,
                territories = this.selectedTerritories && this.selectedTerritories.length > 0;
            return groups && territories;
        };

        this.disableAdd = function(type) {
            var blnDisable = false;
            if (type === 'territory') {
                blnDisable = this.getSelected(this.territoryGroups).length === 0 && this.getSelected(this.territories).length === 0;
            } else {
                blnDisable = this.getSelected(this.retailers).length === 0;
            }
            return blnDisable;
        };

        this.disableRemove = function(type) {
            var blnDisable = false;
            if (type === 'territory') {
                blnDisable = this.getSelected(this.selectedTerritoryGroups).length === 0 && this.getSelected(this.selectedTerritories).length === 0;
            } else {
                blnDisable = this.getSelected(this.selectedRetailers).length === 0;
            }
            return blnDisable;
        };

        this.toggleSelection = function(item) {
            item.selected = !item.selected;
        };

        this.getSelected = function(items, arr) {
            if (arr) {
                return arr.concat($filter('filter')(angular.copy(items), { selected: true }));
            } else {
                return $filter('filter')(angular.copy(items), { selected: true });
            }
        };

        this.getUnselected = function(items) {
            return $filter('filter')(items, (item) => {
                return !item.selected;
            });
        };

        this.removeSelection = function(items) {
            angular.forEach(items, (item) => {
                item.selected = false;
            });
        };

        this.addSelected = function(type) {
            if (type === 'territory') {
                this.selectedTerritoryGroups = this.getSelected(this.territoryGroups, this.selectedTerritoryGroups);
                this.removeSelection(this.selectedTerritoryGroups);
                this.territoryGroups = this.getUnselected(this.territoryGroups);

                this.selectedTerritories = this.getSelected(this.territories, this.selectedTerritories);
                this.removeSelection(this.selectedTerritories);
                this.territories = this.getUnselected(this.territories);
            } else {
                this.selectedRetailers = this.getSelected(this.retailers, this.selectedRetailers);
                this.removeSelection(this.selectedRetailers);
                this.retailers = this.getUnselected(this.retailers);
            }
        };

        this.removeSelected = function(type) {
            if (type === 'territory') {
                this.territoryGroups = this.getSelected(this.selectedTerritoryGroups, this.territoryGroups);
                this.removeSelection(this.territoryGroups);
                this.selectedTerritoryGroups = this.getUnselected(this.selectedTerritoryGroups);

                this.territories = this.getSelected(this.selectedTerritories, this.territories);
                this.removeSelection(this.territories);
                this.selectedTerritories = this.getUnselected(this.selectedTerritories);
            } else {
                this.retailers = this.getSelected(this.selectedRetailers, this.retailers);
                this.removeSelection(this.retailers);
                this.selectedRetailers = this.getUnselected(this.selectedRetailers);
            }
        };

    }
}

export default SongSalesByTerritoryController;