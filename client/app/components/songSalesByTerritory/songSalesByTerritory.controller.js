class SongSalesByTerritoryController {
    constructor($scope, $filter, ReportService) {
        'ngInject'

        this.chartTypes = [
            { name: "heatmap" },
            { name: "donut" },
            { name: "line" },
            { name: "area-step" },
            { name: "stacked-bar" },
            { name: "bar", isActive: true }
        ];
        this.selectedTerritoryGroups = [];
        this.selectedTerritories = [];
        this.selectedRetailers = [];
        this.brkByRetailer = 'false';
        this.representation = '2';

        this.mapData = [];
        this.currentChartType = "bar";
        this.query = {};
        this.displayCollection = [];
        this.range = {};

        this.initializeData = function() {
            ReportService.getTerritories().then((res) => {
                this.territories = $filter('orderBy')(res.data, 'name');
            });

            ReportService.getTerritoryGroups().then((res) => {
                this.territoryGroups = $filter('orderBy')(res.data, 'name');
            });

            ReportService.getRetailers().then((res) => {
                this.retailers = $filter('orderBy')(res.data, 'name');
            });
        };

        $(document).on('click', '.panel-heading span.clickable', function(e) {
            var $this = $(this);
            collapseSelection($this);
        });

        function collapseSelection($this) {
            if ($this.hasClass('panel-collapsed')) {
                $this.parents('.panel').find('.panel-body').slideDown();
                $this.removeClass('panel-collapsed');
                $this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
            } else {
                $this.parents('.panel').find('.panel-body').slideUp();
                $this.addClass('panel-collapsed');
                $this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
            }
        };

        //----Code for Charts-----//
        this.changeChartType = function(currentChart) {
            angular.forEach(this.chartTypes, (chartType) => {
                chartType.isActive = false;
            });

            currentChart.isActive = true;
            this.currentChartType = currentChart.name;

            if (this.currentChartType == "heatmap") {
                this.showHeatMap = true;
                if (!this.heatMapData) {
                    this.toggleMap();
                }
            } else if (this.theChart2) {
                this.showHeatMap = false;
                this.theChart2.resize({ height: 650 });
                this.theChart2.groups([]);
                var chartType = this.currentChartType;

                if (chartType == "stacked-bar") {
                    var days = [];
                    angular.forEach(this.chart.salesByTerritory[0].salesByDate, (day) => {
                        days.push(day.date);
                    });
                    this.theChart2.groups([days]);
                    chartType = "bar";
                } else if (this.currentChartType == "donut") {
                    this.theChart2.groups([]);
                    this.theChart2.resize({ height: 400 });
                }
                this.theChart2.transform(chartType);
            }
        };

        this.toggleMap = function(data) {
            let mapObject = [];
            this.showNoData = false;

            angular.forEach(this.chart.salesByTerritory, (territory) => {
                mapObject.push({
                    'Country': territory.territoryName,
                    'Total Sales': territory.totalTerritorySales
                })
            });

            if (!mapObject.length) {
                this.showNoData = true;
            }

            this.heatMapData = mapObject;
        };

        this.formatTooltip = (name, ratio, id, index) => {
            if (this.currentChartType == "donut") {
                var format = name === this.datacolumns[0].id ? this.datacolumns[0].id : this.datacolumns[1].id;
            } else {
                var format = name === this.datacolumns[0].id ? this.names[index][0] : this.names[index][1];
            }
            return format;
        };

        this.handleCallback1 = (chartObj) => {
            this.theChart = chartObj;
        };

        this.handleCallback2 = (chartObj) => {
            this.theChart2 = chartObj;
        };

        this.toggleRows = function(data) {
            ReportService.getTimeRangeData()
                .then((response) => {
                    this.timeCollection = [].concat(response.data.salesByHour);
                    this.showHours = data.date;
                }, (e) => {
                    this.NoChartError = "Something went wrong!";
                    console.log(e);
                });
        };

        // helper method to check if a field is a nested object
        this.is_object = function(something) {
            return typeof(something) == 'object' ? true : false;
        };

        this.calculateTotal = function(object) {
            var firstMap = [],
                salesTotal = 0,
                dateMap = {};
            // Setting up an array with individual objects
            object.forEach((dateObj) => {
                var dateSales = {},
                    sales = 0;
                dateObj.orgRetailerList.forEach((retailerObj) => {
                    retailerObj.territoryList.forEach((territoryObj) => {
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

        this.addEmptyDateValues = function() {
            this.rangesales = this.chart.salesPerSong.salesFirstRange;
            var firstRangeMap, range1;

            range1 = (this.chart.firstRange).split(" to ");
            firstRangeMap = new Map();
            this.rangesales.forEach((obj) => {
                if (obj.totalsales !== 0) {
                    firstRangeMap.set(obj.date, obj.totalsales);
                }
            });

            if (firstRangeMap.size == 0) {
                this.chart.salesPerSong.salesFirstRange = [];
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
                    this.chart.salesFirstRange = salesFirstRange;
                }
            }
            this.plotChart();
        }

        this.plotChart = function() {
            collapseSelection($('.panel-heading span.clickable'));

            this.names = [];
            this.datapoints = [];
            this.datacolumns = [];

            var i = 0;
            angular.forEach(this.chart.salesByTerritory, (territory) => {
                this.datapoints[i] = {
                    x: territory.territoryName
                };
                this.datacolumns = [];
                angular.forEach(territory.salesByDate, (day) => {
                    this.datapoints[i][day.date] = day.totalDaySales;

                    //var nameVal = [this.chart.salesFirstRange[i].date, this.chart.salesSecondRange[i].date]
                    this.names.push(day.date);

                    this.datacolumns.push({ "id": day.date, "type": "bar" });
                });
                this.datax = { "id": "x" };
                i++;
            });
            this.currentChartType = "bar";
        };

        this.setCriteria = function() {
            this.query.songId = this.selectedSong.songid;
            this.query.rangeDate1 = this.range.startDate;
            this.query.rangeDate2 = this.range.endDate;
            this.query.time1 = this.range.startTime;
            this.query.time2 = this.range.endTime;
            this.query.daysInRange = this.range.dateDiff;
        };

        this.getChart = function() {
            var blnError = false;
            // if (!this.selectedSong) {
            //     this.songError = "Please select song";
            //     blnError = true;
            // }
            // if (!this.range.startDate ||
            //     !this.range.endDate) {
            //     this.rangeError = "Please select date range";
            //     blnError = true;
            // }
            // if (!this.range.startTime ||
            //     !this.range.endTime) {
            //     this.timeError = "Please select time range";
            //     blnError = true;
            // }

            // if (blnError) return;

            // this.setCriteria();
            this.theChart = null;
            this.showHeatMap = false;
            this.loading = true;
            this.drilldown = false;
            this.heatMapData = null;

            // if (this.query.songId &&
            //     this.query.rangeDate1 &&
            //     this.query.rangeDate2 &&
            //     this.query.time1 &&
            //     this.query.time2 &&
            //     !this.rangeError) {
            //     this.query.breakByRetailer = (this.brkByRetailer === 'true');
            //     this.query["retailer[]"] = this.selectedRetailers || [];
            //     this.query["territory[]"] = this.selectedTerritories || [];
            //     this.query["territoryGroup[]"] = this.selectedTerritoryGroups || [];

            //     ReportService.getDODChart(this.query)
            //         .then((response) => {
            //             this.loading = false;
            //             this.chart = response.data;
            //             this.addEmptyDateValues();
            //             this.NoChartError = "";
            //             this.drilldown = true;
            //         }, (e) => {
            //             this.NoChartError = "Something went wrong!";
            //             console.log(e);
            //             this.loading = false;
            //         });                
            // } else {
            //     this.loading = false;
            // }
            this.chart = ReportService.getSalesByTerritoryChart();
            this.loading = false;
            this.plotChart();
            this.NoChartError = "";
            this.drilldown = true;
        }

        //----Drill Down Code------//
        this.toFormat = function(r) {
            this.exportListName = this.selectedSong + "\r\n\n\"" +
                this.chart.firstRange + "\"" +
                " \n\"" + this.chart.secondRange + "\"";
            return this.rangeRollUp.allMap;
        };

        $scope.$watch('drilldown', function(val) {
            if (val == true) {
                this.rangeRollUp = this.calculateTotal(this.range1sales);
            }
        });
    }
}

export default SongSalesByTerritoryController;