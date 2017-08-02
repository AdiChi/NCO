class DateTimeRangeController {
    constructor($scope, $timeout) {
        'ngInject'

        this.todayStart = moment().startOf('day');
        this.todayEnd = moment().endOf('day');

        $timeout(() => {
            this.range.startTime = this.todayStart;
            this.range.endTime = this.todayEnd;
        }, 100);

        this.startDateOnSetTime = function() {
            if (this.range.endDate) {
                var a = moment(this.range.endDate);
                var b = moment(this.range.startDate);
                this.range.dateDiff = a.diff(b, 'days') + 1;
            }
            $scope.$broadcast('start-date-changed');
        };

        this.endDateOnSetTime = function() {
            if (this.range.startDate) {
                var a = moment(this.range.endDate);
                var b = moment(this.range.startDate);
                this.range.dateDiff = a.diff(b, 'days') + 1;
            }
            this.rangeError = "";
            $scope.$broadcast('end-date-changed');
        };

        this.startDateBeforeRender = function($dates) {
            if (this.range.endDate &&
                this.range.startDate &&
                this.range.endDate.valueOf() < this.range.startDate.valueOf()) {
                this.range.endDate = this.range.startDate;
                endDateOnSetTime();
            }
            for (var i = 0; i < $dates.length; i++) {
                if (new Date().getTime() < $dates[i].utcDateValue) {
                    $dates[i].selectable = false;
                }
            }
        };

        this.endDateBeforeRender = function($view, $dates) {
            if (this.range.startDate) {
                var activeDate = moment(this.range.startDate).subtract(1, $view).add(1, 'minute');

                $dates.filter((date) => {
                    return date.localDateValue() <= activeDate.valueOf()
                }).forEach((date) => {
                    date.selectable = false;
                });
            }
            for (var i = 0; i < $dates.length; i++) {
                if (new Date().getTime() < $dates[i].utcDateValue) {
                    $dates[i].selectable = false;
                }
            }
        };
    }
}

export default DateTimeRangeController;