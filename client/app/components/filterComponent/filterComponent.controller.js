class FilterComponentController {
  constructor($sce) {
    "ngInject";
    var vm = this;

    vm.sortText = $sce.trustAsHtml('<i class="fa fa-sort-amount-asc" aria-hidden="true"></i> Sort Ascending');

    vm.setPosition = () => {
      return {
        'top': vm.position.top,
        'left': vm.position.left
      }
    }

    vm.closeFilter = () => {
      vm.showFilter = false;
    }

    vm.setSortText = (event) => {
      var text = angular.element(event.target).text();
        if (text.indexOf('Ascending') != -1 && text.indexOf('Remove') == -1) {
          vm.sortText = $sce.trustAsHtml('<i class="fa fa-sort-amount-desc" aria-hidden="true"></i> Sort Descending');
        }
        else if (text.indexOf('Descending') != -1 && text.indexOf('Remove') == -1) {
          vm.sortText = $sce.trustAsHtml('<i class="fa fa-times" aria-hidden="true"></i> Remove Sort');
        }
      else {
        vm.sortText = $sce.trustAsHtml('<i class="fa fa-sort-amount-desc" aria-hidden="true"></i> Sort Ascending');
      }
    }
  }
}

export default FilterComponentController;
