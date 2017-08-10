class BreakOutByRetailerController {
    constructor($scope, $uibModalInstance) {
        'ngInject'

        this.dateData = $scope.dateData;

        this.getTimeRangeInFormat = function(time) {
            var t1, t2, timestr;
            if (time.length == 11) {
                timestr = time.split("-");
                t1 = moment(timestr[0], "HH:mm").format('hh:mm a');
                t2 = moment(timestr[1], "HH:mm").format('hh:mm a');
                timestr = t1 + "-" + t2;
            } else {
                timestr = time.split(" - ");
                t1 = moment(timestr[0] + ":00", "H:mm").format('hh:mm a');
                t2 = moment(timestr[1] + ":00", "H:mm").format('hh:mm a');
                timestr = t1 + " to " + t2;
            }
            return timestr;
        };

        this.toggleRetailer = function(retailer) {
            if (!retailer.expanded) {
                angular.forEach(this.dateData.salesByRetailer, (retailer) => {
                    retailer.expanded = false
                });
            }
            retailer.expanded = !retailer.expanded;
        };

        this.cancel = function() {
            $uibModalInstance.close(false);
        };
    }
}

export default BreakOutByRetailerController;