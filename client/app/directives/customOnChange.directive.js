function CustomOnChangeDirective(ExportToCsvService) {
    "ngInject";
	return {
		restrict: 'A',
        link: function (scope, element, attrs) {
          var onChangeHandler = scope.$eval(attrs.customOnChange);
          element.bind('change', onChangeHandler);
        }
	};
}
export default CustomOnChangeDirective;
