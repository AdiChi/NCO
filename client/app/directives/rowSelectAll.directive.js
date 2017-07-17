function RowSelectAllDirective() {
    return {
        require: '^stTable',
        template: '<input type="checkbox">',
        scope: {
            all: '=rowSelectAll',
            selected: '='
        },
        link: function (scope, element, attr, ctrl) {
            scope.isAllSelected = false;

            element.bind('click', function (evt) {
                scope.$apply(function () {
                    var collection = ctrl.getFilteredCollection();
                    collection.forEach(function (val) {
                        val.isSelected = scope.isAllSelected;
                    });
                });
            });

            scope.$watchCollection('selected', function (newVal, oldVal) {
                var newVal = newVal.length;
                var oldVal = oldVal.length;
                var a = (oldVal == 0) ? ctrl.getFilteredCollection().length : oldVal;

                if ((newVal == a) && newVal > 0 && a > 0) {
                    element.find('input').prop('checked', true);
                    scope.isAllSelected = false;
                } else {
                    // element.find('input').attr('checked', false);
                    element.find('input').prop('checked', false);
                    scope.isAllSelected = true;
                }
            });
        }
    };
}

export default RowSelectAllDirective;
