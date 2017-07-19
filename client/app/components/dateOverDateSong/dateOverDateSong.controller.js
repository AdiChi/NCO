class DateOverDateSongController {
    constructor($scope, $filter, ReportService) {
        "ngInject";

        $scope.chartTypes = [ "heatmap","donut","line","area-step","stacked-bar","bar" ];
        $scope.territories = [];
        $scope.territoryGroups = [];
        $scope.retailers = [];
        $scope.brkByRetailer = false;
        $scope.brkByTerritory = false;
        $scope.showHeatMap = false;
        $scope.timewise = false;
        $scope.territoryLabels = {
            select: "Select Territories",
            itemsSelected: "Territories Selected"
        };
        $scope.territoryGroupLabels = {
            select: "Select Territory Groups",
            itemsSelected: "Territory Groups Selected"
        };
        $scope.retailerLabels = {
            select: "Select Retailer",
            itemsSelected: "Retailers Selected"
        };
        ReportService.getTerritories().then(function (res) {
            $scope.territories = res.data;
        }, function (err) {
            console.log(err);
        });
        ReportService.getTerritoryGroups().then(function (res) {
            $scope.territoryGroups = res.data;
        }, function (err) {
            console.log(err);
        });
        ReportService.getRetailers().then(function (res) {
            $scope.retailers = res.data;
        }, function (err) {
            console.log(err);
        });

        $scope.mapData = [];
        $scope.currentChartType = "bar";
        $scope.query = {};
        $scope.details = {};
        $scope.displayCollection = [];
        $scope.hours = new Array(24);
        $scope.todayStart = moment().startOf('day');
        $scope.todayEnd = moment().endOf('day');

        $scope.time1 = $scope.todayStart;
        $scope.query.time1 = $scope.todayStart.format('HH:mm');
        $scope.time2 = $scope.todayEnd;
        $scope.query.time2 = $scope.todayEnd.format('HH:mm');

        $scope.r2time1 = $scope.todayStart;
        $scope.query.r2time1 = $scope.todayStart.format('HH:mm');
        $scope.r2time2 = $scope.todayEnd;
        $scope.query.r2time2 = $scope.todayEnd.format('HH:mm');

        $(document).on('click', '.panel-heading span.clickable', function (e) {
            var $this = $(this);
            collapseSelection($this);
        });
        $scope.toFormat = function (r) {
            $scope.exportListName = $scope.selectedSong + "\r\n\n\""
                + $scope.chart.firstRange + "\"" +
                " \n\"" + $scope.chart.secondRange + "\"";

            return $scope.chart.salesFirstRange.map(function (item, index) {
                let sales = {
                    "First Range": item.date,
                    "Sales": item.totalsales,
                    "Second Range": $scope.chart.salesSecondRange[index].date,
                    "Sales 2": $scope.chart.salesSecondRange[index].totalsales
                };
                return sales;
            });
        };
        function collapseSelection($this) {
            if (!$this.hasClass('panel-collapsed')) {
                $this.parents('.panel').find('.panel-body').slideUp();
                $this.addClass('panel-collapsed');
                $this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
            } else {
                $this.parents('.panel').find('.panel-body').slideDown();
                $this.removeClass('panel-collapsed');
                $this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
            }
        }
        $scope.select = function () {
            this.setSelectionRange(0, this.value.length);
        };
        $scope.updateSong = function (song) {
            if ($scope.details)
                delete $scope.details.songs;
            $scope.selectedSong = song.trackname;
            $scope.query.songId = song.id;
            $scope.songError = "";
            console.log($scope.query);
        };
        $scope.updateTStart = function () {
            $scope.query.time1 = moment($scope.time1).format('HH:mm');
            console.log($scope.time1);
        };
        $scope.updateTEnd = function () {
            $scope.timeError = "";

            $scope.query.time2 = moment($scope.time2).format('HH:mm');
            console.log($scope.time2);
        };
        $scope.updateR2TStart = function () {
            $scope.query.r2time1 = moment($scope.r2time1).format('HH:mm');
        };
        $scope.updateR2TEnd = function () {
            $scope.timeError = "";

            $scope.query.r2time2 = moment($scope.r2time2).format('HH:mm');
        };
        $scope.fetchSongs = function (name) {
            ReportService.getSongsBySearch(name)
                .then(function (response) {
                    $scope.details.songs = response.data;
                }).catch(function (err) {
                    console.log(err);
                });
        };
        $scope.$watch('songsearch', function (name) {
            if (name && name.length >= 3) {
                $scope.fetchSongs(name);
            } else if (name && name.length === 0) {
                $scope.details = {
                    songs: []
                };
            }
        });
        $scope.$watch('drilldown', function (val) {
            if (val == true) {
                $scope.range1RollUp = $scope.calculateTotal($scope.range1sales);
                console.log($scope.range1RollUp);
                $scope.range2RollUp = $scope.calculateTotal($scope.range2sales);
                console.log($scope.range2RollUp);
                // $scope.allRetailersSet = Array.from(new Set([...$scope.range1RollUp.retailersSet,...$scope.range2RollUp.retailersSet]).values());
                // $scope.allTerritoriesSet = Array.from(new Set([...$scope.range1RollUp.territoriesSet,...$scope.range2RollUp.territoriesSet]).values());
            }
        });

        $scope.$watch('range1diff', function (diff) {
            if ($scope.range2diff && diff !== $scope.range2diff) {
                $scope.rangeError = "Please select same number of days in both ranges";
            } else {
                $scope.rangeError = "";
            }
        });

        $scope.$watch('range2diff', function (diff) {
            if ($scope.range1diff && diff !== $scope.range1diff) {
                $scope.rangeError = "Please select same number of days in both ranges";
            } else {
                $scope.rangeError = "";
            }
        });

        $scope.getSum = function(obj) {
            var val=0;
            for (var k in obj) {
                val += obj[k];
            }
            return val;
        };

        $scope.changeChartType = function (type, typeOld) {
            if (type == "heatmap") {
                $scope.showHeatMap = true;
                if(!$scope.heatMapData) {
                    $scope.toggleMap($scope.range1sales);
                }
            } else if ($scope.theChart2) {
                $scope.showHeatMap = false;
                $scope.currentChartType = type;
                $scope.theChart2.resize({height:650});
                $scope.theChart2.groups([]);
                var chartType = type;

                if (type == "stacked-bar") {
                    $scope.theChart2.groups([[$scope.chart.firstRange, $scope.chart.secondRange]]);
                    chartType = "bar";
                } else if(type == "donut") {
                    $scope.theChart2.groups([]);
                    $scope.theChart2.resize({height:400});
                }

                $scope.theChart2.transform(chartType);
            }
        };

        $scope.toggleMap = function (data) {
            let results = {}, mapObject = [];
            results = $scope.calculateTotal(data)

            angular.forEach(results.salesByTerr, function (key, value) {
                mapObject.push({
                    'Country': value,
                    'Total Sales': key
                })
            })
            $scope.heatMapData = mapObject;
        }

        $scope.endDateBeforeRender = endDateBeforeRender;
        $scope.endDateOnSetTime = endDateOnSetTime;
        $scope.startDateBeforeRender = startDateBeforeRender;
        $scope.startDateOnSetTime = startDateOnSetTime;

        function startDateOnSetTime() {
            if ($scope.dateRangeEnd) {
                var a = moment($scope.dateRangeEnd);
                var b = moment($scope.dateRangeStart);
                $scope.range1diff = a.diff(b, 'days') + 1;
            }
            $scope.query.range1Date1 = moment($scope.dateRangeStart).format("MM/DD/YYYY");
            $scope.$broadcast('start-date-changed');
        }

        function endDateOnSetTime() {
            if ($scope.dateRangeStart) {
                var a = moment($scope.dateRangeEnd);
                var b = moment($scope.dateRangeStart);
                $scope.range1diff = a.diff(b, 'days') + 1;
            }
            $scope.range1Error = "";
            $scope.query.range1Date2 = moment($scope.dateRangeEnd).format("MM/DD/YYYY");
            $scope.$broadcast('end-date-changed');
        }

        function startDateBeforeRender($dates) {
            $scope.sameRangeError = null;
            if ($scope.dateRangeEnd &&
                $scope.dateRangeStart &&
                $scope.dateRangeEnd.valueOf() < $scope.dateRangeStart.valueOf()) {
                /*var activeDate = moment($scope.dateRangeEnd);

                $dates.filter(function(date) {
                    return date.localDateValue() >= activeDate.valueOf()
                }).forEach(function(date) {
                    date.selectable = false;
                });*/
                // $scope.$broadcast('end-date-changed');
                $scope.dateRangeEnd = $scope.dateRangeStart;
                endDateOnSetTime();
            }
            for (var i = 0; i < $dates.length; i++) {
                if (new Date().getTime() < $dates[i].utcDateValue) {
                    $dates[i].selectable = false;
                }
            }
        }

        function endDateBeforeRender($view, $dates) {
            $scope.sameRangeError = null;
            if ($scope.dateRangeStart) {
                var activeDate = moment($scope.dateRangeStart).subtract(1, $view).add(1, 'minute');

                $dates.filter(function (date) {
                    return date.localDateValue() <= activeDate.valueOf()
                }).forEach(function (date) {
                    date.selectable = false;
                });
            }
            for (var i = 0; i < $dates.length; i++) {
                if (new Date().getTime() < $dates[i].utcDateValue) {
                    $dates[i].selectable = false;
                }
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
            $scope.query.range2Date1 = moment($scope.dateRange2Start).format("MM/DD/YYYY");
            $scope.$broadcast('start-date2-changed');
        }

        function endDate2OnSetTime() {
            if ($scope.dateRange2Start) {
                var a = moment($scope.dateRange2End);
                var b = moment($scope.dateRange2Start);
                $scope.range2diff = a.diff(b, 'days') + 1; // 1
            }
            $scope.range2Error = "";
            $scope.query.range2Date2 = moment($scope.dateRange2End).format("MM/DD/YYYY");
            $scope.$broadcast('end-date2-changed');
        }

        function startDate2BeforeRender($dates) {
            $scope.sameRangeError = null;
            if ($scope.dateRange2End &&
                $scope.dateRange2Start &&
                $scope.dateRange2End.valueOf() < $scope.dateRange2Start.valueOf()) {
                /*var activeDate = moment($scope.dateRange2End);

                $dates.filter(function(date) {
                    return date.localDateValue() >= activeDate.valueOf()
                }).forEach(function(date) {
                    date.selectable = false;
                });*/
                // $scope.$broadcast('end-date-changed');
                $scope.dateRange2End = $scope.dateRange2Start;
                endDate2OnSetTime();
            }
            for (var i = 0; i < $dates.length; i++) {
                if (new Date().getTime() < $dates[i].utcDateValue) {
                    $dates[i].selectable = false;
                }
            }
        }

        function endDate2BeforeRender($view, $dates) {
            $scope.sameRangeError = null;
            if ($scope.dateRange2Start) {
                var activeDate = moment($scope.dateRange2Start).subtract(1, $view).add(1, 'minute');

                $dates.filter(function (date) {
                    return date.localDateValue() <= activeDate.valueOf()
                }).forEach(function (date) {
                    date.selectable = false;
                });
            }
            for (var i = 0; i < $dates.length; i++) {
                if (new Date().getTime() < $dates[i].utcDateValue) {
                    $dates[i].selectable = false;
                }
            }
        }

        $scope.formatTooltip = function (name, ratio, id, index) {
            if ($scope.currentChartType == "donut") {
                var format = name === $scope.datacolumns[0].id ? $scope.datacolumns[0].id : $scope.datacolumns[1].id;
            } else {
                var format = name === $scope.datacolumns[0].id ? $scope.names[index][0] : $scope.names[index][1];
            }
            return format;
        };

        $scope.handleCallback1 = function (chartObj) {
            $scope.theChart = chartObj;
        };
        $scope.handleCallback2 = function (chartObj) {
            console.log(chartObj);
            $scope.theChart2 = chartObj;
        };
        $scope.onSelectTerritory = function () {
            $scope.territory = $scope.selectedTer.map(function (terr) {
                return terr.id;
            });
        };
        $scope.onSelectTerritoryGroup = function () {
            $scope.territoryGroup = $scope.selectedTG.map(function (tg) {
                return tg.id;
            });
        };
        $scope.onSelectRetailer = function () {
            $scope.retailer = $scope.selectedRet.map(function (retailer) {
                return retailer.id;
            });
        };
        /*function getAllRetailers() {
            $scope.retailer = $scope.retailers.map(function (r) {
                return r.id;
            });
            return $scope.retailer;
        };
        function getAllTerritories() {
            $scope.territory = $scope.territories.map(function (terr) {
                return terr.id;
            });
            return $scope.territory;
        };*/

        $scope.toggleRows = function (data) {
            ReportService.getTimeRangeData()
                .then(function (response) {
                    // console.log('response', response.data);
                    $scope.timeCollection = [].concat(response.data.salesByHour);
                    $scope.showHours = data.date;
                }, function (e) {
                    $scope.NoChartError = "Something went wrong!";
                    console.log(e);
                });
        }

        // helper method to check if a field is a nested object
        $scope.is_object = function (something) {
            return typeof (something) == 'object' ? true : false;
        };
        $scope.calculateTotal = function (object) {
            var firstMap = [], salesTotal = 0,
                dateMap = {};
            // Setting up an array with individual objects
            object.forEach(function (dateObj) {
                var dateSales = {}, sales = 0;
                dateObj.orgRetailerList.forEach(function (retailerObj) {
                    retailerObj.territoryList.forEach(function (territoryObj) {
                        sales = sales + parseInt(territoryObj.totalSaleTerr);
                        var finalObj = {
                            date: dateObj.date,
                            territory: territoryObj.name,
                            retailer: retailerObj.name,
                            sales: territoryObj.totalSaleTerr
                        }
                        firstMap.push(finalObj);
                    })
                    dateSales[retailerObj.name] = sales;
                })
                salesTotal = salesTotal + sales;
                dateMap[dateObj.date] = dateSales;
            })
            console.log(dateMap);
            // Calculating Aggregate Territory wise/Retailer wise
            var sumOfSalesByTer = {},
                sumOfSalesByRet = {},
                terrSales = [],
                retailersSet = new Set(),
                territoriesSet = new Set(),
                territory, retailer;
            for (var i = 0; i < firstMap.length; i++) {
                territory = firstMap[i].territory;
                retailer = firstMap[i].retailer;
                retailersSet.add(retailer);
                territoriesSet.add(territory);

                if (!(territory in sumOfSalesByTer)) {
                    sumOfSalesByTer[territory] = 0;
                }
                if (!(retailer in sumOfSalesByRet)) {
                    sumOfSalesByRet[retailer] = 0;
                }
                sumOfSalesByTer[territory] += parseInt(firstMap[i].sales);
                sumOfSalesByRet[retailer] += parseInt(firstMap[i].sales);
            }
            return {
                allMap: firstMap,
                salesByTerr: sumOfSalesByTer,
                salesByRet: sumOfSalesByRet,
                retailersSet: retailersSet,
                territoriesSet: territoriesSet,
                dateRetailerMap: dateMap,
                salesTotal: salesTotal
            };
        }

        function addEmptyDateValues() {

            $scope.range1sales = $scope.chart.salesFirstRange;
            $scope.range2sales = $scope.chart.salesSecondRange;
            var firstRangeMap, secondRangeMap, range1, range2;

            // if($scope.chart.daysInRange !== $scope.chart.salesFirstRange.length) {
            range1 = ($scope.chart.firstRange).split(" to ");
            firstRangeMap = new Map();
            $scope.chart.salesFirstRange.forEach(function (obj) {
                firstRangeMap.set(obj.date, obj.totalsales);
            });
            // console.log(firstRangeMap);
            // }

            // if($scope.chart.daysInRange !== $scope.chart.salesSecondRange.length) {
            range2 = ($scope.chart.secondRange).split(" to ");
            secondRangeMap = new Map();
            $scope.chart.salesSecondRange.forEach(function (obj) {
                secondRangeMap.set(obj.date, obj.totalsales);
            });
            // }

            if (firstRangeMap.size == 0 && secondRangeMap.size == 0) {
                $scope.chart.salesFirstRange = [];
                $scope.chart.salesSecondRange = [];
            } else {
                if (firstRangeMap && range1) {
                    var a = moment(range1[0], 'll');
                    var b = moment(range1[1], 'll');
                    var salesFirstRange = [];

                    for (var m = moment(a); m.diff(b, 'days') <= 0; m.add(1, 'days')) {
                        var x = m.format('MMM DD, YY');
                        if (firstRangeMap.has(x)) {
                            var y = firstRangeMap.get(x);
                            salesFirstRange.push({
                                date: x,
                                totalsales: y
                            });
                        } else {
                            salesFirstRange.push({
                                date: x,
                                totalsales: 0
                            });
                        }
                    }
                    // console.log(salesFirstRange);
                    $scope.chart.salesFirstRange = salesFirstRange;
                }
                if (secondRangeMap && range2) {
                    var a = moment(range2[0], 'll');
                    var b = moment(range2[1], 'll');
                    var salesSecondRange = [];

                    for (var m = moment(a); m.diff(b, 'days') <= 0; m.add(1, 'days')) {
                        var x = m.format('MMM DD, YY');
                        if (secondRangeMap.has(x)) {
                            var y = secondRangeMap.get(x);
                            salesSecondRange.push({
                                date: x,
                                totalsales: y
                            });
                        } else {
                            salesSecondRange.push({
                                date: x,
                                totalsales: 0
                            });
                        }
                    }
                    // console.log(salesSecondRange);
                    $scope.chart.salesSecondRange = salesSecondRange;
                }
            }
            plotChart();
        }
        function plotChart() {
            collapseSelection($('.panel-heading span.clickable'));

            $scope.names = [];
            $scope.datapoints = [];
            $scope.datacolumns = [];

            for (var i = 0; i < $scope.chart.salesFirstRange.length; i++) {
                $scope.datapoints[i] = {
                    x: $scope.chart.salesFirstRange[i].date + "_" + $scope.chart.salesSecondRange[i].date
                };
                $scope.datapoints[i][$scope.chart.firstRange] = $scope.chart.salesFirstRange[i].totalsales;
                $scope.datapoints[i][$scope.chart.secondRange] = $scope.chart.salesSecondRange[i].totalsales;

                var nameVal = [$scope.chart.salesFirstRange[i].date, $scope.chart.salesSecondRange[i].date]
                $scope.names.push(nameVal);

                $scope.datacolumns = [
                    { "id": $scope.chart.firstRange, "type": "bar" },
                    { "id": $scope.chart.secondRange, "type": "bar" }
                ];

                $scope.datax = { "id": "x" };
            }
            $scope.currentChartType = "bar";
        }
        function getChart() {
            $scope.theChart = null;
            $scope.showHeatMap = false;
            $scope.loading = true;

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
            if(( $scope.query.range1Date1 == $scope.query.range2Date1 &&
                    $scope.query.range1Date2 == $scope.query.range2Date2 ) && 
                    ($scope.query.time1 == $scope.query.r2time1 &&
                     $scope.query.time2 == $scope.query.r2time2)) {
                $scope.sameRangeError = "Please select different sales periods";
            }

            if ($scope.query.songId &&
                $scope.query.range1Date1 &&
                $scope.query.range1Date2 &&
                $scope.query.range2Date1 &&
                $scope.query.range2Date2 &&
                $scope.query.time1 &&
                $scope.query.time2 &&
                !$scope.sameRangeError &&
                !$scope.rangeError) {
            $scope.query.daysInRange = $scope.range1diff;
            $scope.query.songId = "Y66000000067";
            $scope.query.breakByRetailer = $scope.brkByRetailer;
            $scope.query["territory[]"] =  $scope.territory || []/*getAllTerritories()*/;
            $scope.query["retailer[]"] =  $scope.retailer|| []/*getAllRetailers()*/;
            $scope.query["territoryGroup[]"] =  $scope.territoryGroup|| []/*getAllRetailers()*/;

            ReportService.getDODChart($scope.query)
                .then(function (response) {
                    $scope.chart = response.data;
                    addEmptyDateValues();
                    $scope.NoChartError = "";
                    $scope.drilldown = true;
                    $scope.loading = false;
                }, function (e) {
                    $scope.NoChartError = "Something went wrong!";
                    console.log(e);
                    $scope.loading = false;
                });
            } else {
                $scope.loading = false;
                // $scope.NoChartError = "Something went wrong!";
            }

        }
    }
}

export default DateOverDateSongController;
