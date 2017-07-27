import template from './multiSelectBox.html';
import controller from './multiSelectBox.controller';
import './multiSelectBox.scss';

let multiSelectBoxComponent = {
    restrict: 'E',
    bindings: {
        items: '<',
        selectedItems: '<',
        itemGroups: '<',
        selectedItemGroups: '<'
    },
    template,
    controller,
    controllerAs: 'vm'
};

export default multiSelectBoxComponent;