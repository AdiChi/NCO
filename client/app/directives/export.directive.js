function ExportToCsvDirective(ExportToCsvService) {
    "ngInject";
	return {
		require:'^stTable',
	    link: function(scope, element, attr,ctrl) {
	      	element.bind('click', function() {
		      var data = scope.vm.toFormat(ctrl.getFilteredCollection());
		      var header =scope.vm.exportListName || "Table data";
		      ExportToCsvService.JSONToCSVConvertor(data, header , true);
	 		});
		}
	};
}
export default ExportToCsvDirective;
