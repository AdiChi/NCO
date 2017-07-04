class DateOverDateSongController {
    constructor($scope, $filter, ReportService) {
        "ngInject";
        // var $scope = this;
        $scope.drilldown = false;
        $(document).on('click', '.panel-heading span.clickable', function(e){
            var $this = $(this);
            collapseSelection($this);
        });
        function collapseSelection($this) {
            if(!$this.hasClass('panel-collapsed')) {
                $this.parents('.panel').find('.panel-body').slideUp();
                $this.addClass('panel-collapsed');
                $this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
            } else {
                $this.parents('.panel').find('.panel-body').slideDown();
                $this.removeClass('panel-collapsed');
                $this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
            }
        }
        $scope.query = {};
        $scope.details = {};
        $scope.hours = new Array(24);
        $scope.select = function() {
            this.setSelectionRange(0, this.value.length);
        };
        $scope.updateSong = function(song) {
            if ($scope.details)
                delete $scope.details.songs;
            $scope.selectedSong = song.trackname;
            $scope.query.songId = song.id;
            $scope.songError = "";
            console.log($scope.query);
        };
        $scope.updateTStart = function() {
            $scope.query.time1 = $scope.time1+":00";
        };
        $scope.updateTEnd = function() {
            $scope.timeError = "";

            $scope.query.time2 = $scope.time2+":59";
        };
        $scope.fetchSongs = function(name) {
            ReportService.getSongsBySearch(name)
                 .then(function(response) {
                     $scope.details.songs = response.data;
                 }).catch(function(err) {
                     console.log(err);
                 });
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
            $scope.query.range1Date1 = moment($scope.dateRangeStart).format("YYYY.MM.DD");
            $scope.$broadcast('start-date-changed');
        }

        function endDateOnSetTime() {
            if ($scope.dateRangeStart) {
                var a = moment($scope.dateRangeEnd);
                var b = moment($scope.dateRangeStart);
                $scope.range1diff = a.diff(b, 'days') + 1; // 1
            }
            $scope.range1Error = "";
            $scope.query.range1Date2 = moment($scope.dateRangeEnd).format("YYYY.MM.DD");
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
        $scope.getChart = getChart;

        function startDate2OnSetTime() {
            if ($scope.dateRange2End) {
                var a = moment($scope.dateRange2End);
                var b = moment($scope.dateRange2Start);
                $scope.range2diff = a.diff(b, 'days') + 1; // 1
            }
            $scope.query.range2Date1 = moment($scope.dateRange2Start).format("YYYY.MM.DD");
            $scope.$broadcast('start-date2-changed');
        }

        function endDate2OnSetTime() {
            if ($scope.dateRange2Start) {
                var a = moment($scope.dateRange2End);
                var b = moment($scope.dateRange2Start);
                $scope.range2diff = a.diff(b, 'days') + 1; // 1
            }
            $scope.range2Error = "";
            $scope.query.range2Date2 = moment($scope.dateRange2End).format("YYYY.MM.DD");
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
        
        $scope.formatTooltip = function(name, ratio, id, index) {
            var format = name === $scope.datacolumns[0].id ? $scope.names[index][0] :$scope.names[index][1];
            return format;
        };

        $scope.handleCallback = function (chartObj) {
            $scope.theChart = chartObj;
        };
        function getChart() {
            $scope.theChart = null;

            if (!$scope.query.songId) {
                $scope.songError = "Please select song";
            }
            if (!$scope.query.range1Date1 ||
                !$scope.query.range1Date2) {
                $scope.range1Error = "Please select first date range";
            }
            if (!$scope.query.range2Date1 ||
                !$scope.query.range2Date2) {
                $scope.range2Error = "Please select second date range";
            }
            if (!$scope.query.time1 ||
                !$scope.query.time2) {
                $scope.timeError = "Please select time range";
            }

            if ($scope.query.songId &&
                $scope.query.range1Date1 &&
                $scope.query.range1Date2 &&
                $scope.query.range2Date1 &&
                $scope.query.range2Date2 &&
                $scope.query.time1 &&
                $scope.query.time2) {
                console.log($scope.query);

                ReportService.getDODChart($scope.query)
                .then(function(response) {
                    console.log('response',response);
                    $scope.chart = response;
                    $scope.names = [];
                    $scope.datapoints = [];
                    $scope.datacolumns = [];

                    for (var i = 0; i < $scope.chart.salesFirstRange.length; i++) {
                        $scope.datapoints[i] = {
                            x: $scope.chart.salesFirstRange[i].date + "  " + $scope.chart.salesSecondRange[i].date
                        };
                        $scope.datapoints[i][$scope.chart.firstRange] = $scope.chart.salesFirstRange[i].totalsales;
                        $scope.datapoints[i][$scope.chart.secondRange] = $scope.chart.salesSecondRange[i].totalsales;
                        
                        var nameVal = [$scope.chart.salesFirstRange[i].date, $scope.chart.salesSecondRange[i].date]
                        $scope.names.push(nameVal);

                        $scope.datacolumns = [
                            {"id": $scope.chart.firstRange, "type": "bar"},
                            {"id": $scope.chart.secondRange, "type": "bar"}
                        ];

                        $scope.datax = {"id": "x"};
                    }

                },function (e) {
                    $scope.NoChartError = "Something went wrong!";
                    console.log(e);
                });
            } else {
                // $scope.NoChartError = "Something went wrong!";
            }
        }
    }
}

export default DateOverDateSongController;
