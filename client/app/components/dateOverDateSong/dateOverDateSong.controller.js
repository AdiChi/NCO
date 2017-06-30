class DateOverDateSongController {
    constructor($scope, $filter, ReportService) {
        "ngInject";
        // var $scope = this;
        $scope.query = {};
        $scope.details = {};
        $scope.hours = new Array(24);
        $scope.select = function() {
            this.setSelectionRange(0, this.value.length);
        };
        $scope.updateSong = function(song) {
            if ($scope.details)
                delete $scope.details.songs;
            $scope.selectedSong = song.Title;
            $scope.query.songid = song.songid;
            $scope.songError = "";
            console.log($scope.query);
        };
        $scope.updateTStart = function() {
            $scope.query.timeStart = $scope.timeStart;
        };
        $scope.updateTEnd = function() {
            $scope.timeError = "";

            $scope.query.timeEnd = $scope.timeEnd;
        };
        $scope.fetchSongs = function(name) {
            /* ReportService.getSongsBySearch(name)
                 .then(function(response) {
                     $scope.details = response.data;
                 })
                 .catch(function(err) {
                     console.log(err);
                     $scope.details = {
                         songs : []
                     };
                 });*/
            $scope.details = {
                songs: [{
                    Title: "ALone",
                    Year: "2003",
                    songid: 2131112
                }, {
                    Title: "Boulevard of broken dreams",
                    Year: "2000",
                    songid: 221112
                }, {
                    Title: "Tresses and messes",
                    Year: "2004",
                    songid: 434434343
                }]
            };
        };
        $scope.$watch('songsearch', function(name) {
            if (name && name.length >= 3) {
                $scope.fetchSongs(name);
            } else if (name && name.length === 0) {
                $scope.details = {
                    songs: []
                };
            }
        });

        $scope.$watch('range1diff', function(diff) {
            if ($scope.range2diff && diff !== $scope.range2diff) {
                $scope.rangeError = "Please select same number of days in both ranges";
            } else {
                $scope.rangeError = "";
            }
        });

        $scope.$watch('range2diff', function(diff) {
            if ($scope.range1diff && diff !== $scope.range1diff) {
                $scope.rangeError = "Please select same number of days in both ranges";
            } else {
                $scope.rangeError = "";
            }
        });

        $scope.endDateBeforeRender = endDateBeforeRender;
        $scope.endDateOnSetTime = endDateOnSetTime;
        $scope.startDateBeforeRender = startDateBeforeRender;
        $scope.startDateOnSetTime = startDateOnSetTime;

        function startDateOnSetTime() {
            if ($scope.dateRangeEnd) {
                var a = moment($scope.dateRangeEnd);
                var b = moment($scope.dateRangeStart);
                $scope.range1diff = a.diff(b, 'days') + 1; // 1
            }
            $scope.query.range1DateStart = moment($scope.dateRangeStart).valueOf();
            $scope.$broadcast('start-date-changed');
        }

        function endDateOnSetTime() {
            if ($scope.dateRangeStart) {
                var a = moment($scope.dateRangeEnd);
                var b = moment($scope.dateRangeStart);
                $scope.range1diff = a.diff(b, 'days') + 1; // 1
            }
            $scope.range1Error = "";
            $scope.query.range1DateEnd = moment($scope.dateRangeEnd).valueOf();
            $scope.$broadcast('end-date-changed');
        }

        function startDateBeforeRender($dates) {
            if ($scope.dateRangeEnd) {
                var activeDate = moment($scope.dateRangeEnd);

                $dates.filter(function(date) {
                    return date.localDateValue() >= activeDate.valueOf()
                }).forEach(function(date) {
                    date.selectable = false;
                });
            }
        }

        function endDateBeforeRender($view, $dates) {
            if ($scope.dateRangeStart) {
                var activeDate = moment($scope.dateRangeStart).subtract(1, $view).add(1, 'minute');

                $dates.filter(function(date) {
                    return date.localDateValue() <= activeDate.valueOf()
                }).forEach(function(date) {
                    date.selectable = false;
                });
            }
        }
        $scope.endDate2BeforeRender = endDate2BeforeRender;
        $scope.endDate2OnSetTime = endDate2OnSetTime;
        $scope.startDate2BeforeRender = startDate2BeforeRender;
        $scope.startDate2OnSetTime = startDate2OnSetTime;

        function startDate2OnSetTime() {
            if ($scope.dateRange2End) {
                var a = moment($scope.dateRange2End);
                var b = moment($scope.dateRange2Start);
                $scope.range2diff = a.diff(b, 'days') + 1; // 1
            }
            $scope.query.range2DateStart = moment($scope.dateRange2Start).valueOf();
            $scope.$broadcast('start-date2-changed');
        }

        function endDate2OnSetTime() {
            if ($scope.dateRange2Start) {
                var a = moment($scope.dateRange2End);
                var b = moment($scope.dateRange2Start);
                $scope.range2diff = a.diff(b, 'days') + 1; // 1
            }
            $scope.range2Error = "";
            $scope.query.range2DateEnd = moment($scope.dateRange2End).valueOf();
            $scope.$broadcast('end-date2-changed');
        }

        function startDate2BeforeRender($dates) {
            if ($scope.dateRange2End) {
                var activeDate = moment($scope.dateRange2End);

                $dates.filter(function(date) {
                    return date.localDateValue() >= activeDate.valueOf()
                }).forEach(function(date) {
                    date.selectable = false;
                });
            }
        }

        function endDate2BeforeRender($view, $dates) {
            if ($scope.dateRange2Start) {
                var activeDate = moment($scope.dateRange2Start).subtract(1, $view).add(1, 'minute');

                $dates.filter(function(date) {
                    return date.localDateValue() <= activeDate.valueOf()
                }).forEach(function(date) {
                    date.selectable = false;
                });
            }
        }
        $scope.plotChart = function(chart) {
            
        };
        $scope.getChart = function() {
            /*if (!$scope.query.songid) {
                $scope.songError = "Please select song";
            }
            if (!$scope.query.range1DateStart ||
                !$scope.query.range1DateEnd) {
                $scope.range1Error = "Please select first date range";
            }
            if (!$scope.query.range2DateStart ||
                !$scope.query.range2DateEnd) {
                $scope.range2Error = "Please select second date range";
            }
            if (!$scope.query.timeStart ||
                !$scope.query.timeEnd) {
                $scope.timeError = "Please select time range";
            }

            if(!$scope.songError && !$scope.rangeError
                && !$scope.range1Error && !$scope.range2Error
                &&!$scope.timeError) {*/
                var q=$scope.query;
                ReportService.getDODChart(q).then(function(response) {
                    $scope.chart = response;
                    $scope.plotChart($scope.chart);
                }).catch(function (e) {
                    $scope.NoChartError = "Something went wrong!";
                    console.log(e);
                });
            /*}*/
        };
    }
}

export default DateOverDateSongController;
