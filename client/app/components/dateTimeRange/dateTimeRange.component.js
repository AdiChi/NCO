import template from './dateTimeRange.html';
import controller from './dateTimeRange.controller';
import './dateTimeRange.scss';

let dateTimeRangeComponent = {
    restrict: 'E',
    bindings: {
        range: '=',
        index: '@',
        range1Error: '=',
        range2Error: '=',
        rangeError: '='
    },
    template,
    controller,
    controllerAs: 'vm'
};

export default dateTimeRangeComponent;