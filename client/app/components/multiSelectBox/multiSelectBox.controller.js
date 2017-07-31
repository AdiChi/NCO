class MultiSelectBoxController {
    constructor($filter) {
        'ngInject'

        this.showSeperator = function() {
            var hasGroups = this.itemGroups && this.itemGroups.length > 0,
                hasItems = this.items && this.items.length > 0;
            return hasGroups && hasItems > 0;
        };

        this.showSelectedSeperator = function() {
            var hasGroups = this.selectedItemGroups && this.selectedItemGroups.length > 0,
                hasItems = this.selectedItems && this.selectedItems.length > 0;
            return hasGroups && hasItems > 0;
        };

        this.disableAdd = function() {
            var blnDisable = false;
            if (this.itemGroups) {
                if (!this.itemGroups || !this.items) return;
                blnDisable = this.getSelected(this.itemGroups).length === 0 && this.getSelected(this.items).length === 0;
            } else {
                if (!this.items) return;
                blnDisable = this.getSelected(this.items).length === 0;
            }
            return blnDisable;
        };

        this.disableRemove = function() {
            var blnDisable = false;
            if (this.itemGroups) {
                blnDisable = this.getSelected(this.selectedItemGroups).length === 0 && this.getSelected(this.selectedItems).length === 0;
            } else {
                blnDisable = this.getSelected(this.selectedItems).length === 0;
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

        this.unselectAndSort = function(items) {
            angular.forEach(items, (item) => {
                item.selected = false;
            });
            return $filter('orderBy')(items, 'name');
        };

        this.addSelected = function() {
            if (this.itemGroups) {
                this.selectedItemGroups = this.getSelected(this.itemGroups, this.selectedItemGroups);
                this.selectedItemGroups = this.unselectAndSort(this.selectedItemGroups);
                this.itemGroups = this.getUnselected(this.itemGroups);
            }
            this.selectedItems = this.getSelected(this.items, this.selectedItems);
            this.selectedItems = this.unselectAndSort(this.selectedItems);
            this.items = this.getUnselected(this.items);
        };

        this.removeSelected = function() {
            if (this.itemGroups) {
                this.itemGroups = this.getSelected(this.selectedItemGroups, this.itemGroups);
                this.itemGroups = this.unselectAndSort(this.itemGroups);
                this.selectedItemGroups = this.getUnselected(this.selectedItemGroups);
            }
            this.items = this.getSelected(this.selectedItems, this.items);
            this.items = this.unselectAndSort(this.items);
            this.selectedItems = this.getUnselected(this.selectedItems);
        };
    }
}

export default MultiSelectBoxController;