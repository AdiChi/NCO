function StSummaryDirective() {
    "ngInject";
	return {
        require: '^stTable',
        template: 'Showing {{ stRange.from }}-{{ stRange.to }} of {{ size }} results',
        link: function($scope, $element, $attrs, $stTable) {

            // Watch for updates to data
            $scope.$watch($stTable.getFilteredCollection, function(val) {
                $scope.size = (val || []).length;
            });

            // Watch for updates to pagination
            $scope.$watch('currentPage', function() {
                $scope.stRange = {
                    from: null,
                    to: null
                };

                $scope.stRange.from = $stTable.tableState().pagination.start + 1;
                $scope.stRange.to = $scope.currentPage === $scope.numPages ? $scope.size : ($scope.stRange.from + $scope.stItemsByPage - 1);
            });
        }
    };
}
export default StSummaryDirective;
