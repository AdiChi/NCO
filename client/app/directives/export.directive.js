function ExportToCsvDirective(ExportToCsvService) {
    "ngInject";
	return {
		require:'^stTable',
	    link: function(scope, element, attr,ctrl) {
	      	element.bind('click', function() {
		      var data = ctrl.getFilteredCollection();
		      ExportToCsvService.JSONToCSVConvertor(data, "Table data", true);
	 		});
		}
	};
}
export default ExportToCsvDirective;
