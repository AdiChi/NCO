class SideNavController {
  constructor($scope) {
    "ngInject";

    var vm = this;

    vm.closeNav = function(){
      vm.visible = false;
    }
  }
}

export default SideNavController;
