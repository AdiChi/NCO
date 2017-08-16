function ExportToCsvDirective(ExportToCsvService) {
    "ngInject";
	return {
		require:'^stTable',
	    link: function(scope, element, attr, ctrl) {
	      	element.bind('click', function() {
		      var data = scope.vm ? scope.vm.toFormat(ctrl.getFilteredCollection()) : scope.toFormat(ctrl.getFilteredCollection());
		      var header = (scope.vm ? scope.vm.exportListName : scope.exportListName) || "Table data";
		      var shortName = scope.vm.shortName ? scope.vm.shortName : undefined;
		      ExportToCsvService.JSONToCSVConvertor(data, header , true, shortName);
	 		});
		}
	};
}
export default ExportToCsvDirective;
