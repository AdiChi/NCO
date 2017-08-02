function CustomOnScrollDirective($document, $window) {
    "ngInject";
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var top = 0;
            $document.on('scroll', () => {
                if ($window.scrollY > 0) {
                    top = '50px';
                }
                else {
                    top = '106px';
                }

                scope.vm.detailsData.setTop = () => {
                    return {
                        'top': top
                    };
                }

                scope.$apply();
            })
        }
    };
}
export default CustomOnScrollDirective;