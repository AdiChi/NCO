function StRatioDirective() {
    "ngInject";
    return {
        restrict: 'A',
        require: '^stTable',
        link: function (scope, element, attr) {
            var ratio = +(attr.stRatio);
            element.css('width', ratio + '%');
        }
    };
}
export default StRatioDirective;
