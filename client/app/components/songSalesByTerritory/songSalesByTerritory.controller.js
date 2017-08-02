class SongSalesByTerritoryController {
    constructor($scope, $filter, ReportService) {
        'ngInject'

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
        this.changeChartType = function(type, typeOld) {
            if (type == "heatmap") {
                this.showHeatMap = true;
                if (!this.heatMapData) {
                    this.toggleMap(this.range1sales);
                    this.activefirst = true;
                }
            } else if (this.theChart2) {
                this.showHeatMap = false;
                this.currentChartType = type;
                this.theChart2.resize({ height: 650 });
                this.theChart2.groups([]);
                var chartType = type;

                if (type == "stacked-bar") {
                    this.theChart2.groups([
                        [this.chart.firstRange, this.chart.secondRange]
                    ]);
                    chartType = "bar";
                } else if (type == "donut") {
                    this.theChart2.groups([]);
                    this.theChart2.resize({ height: 400 });
                }
                this.theChart2.transform(chartType);
            }
        };

        this.toggleMap = function(data) {
            let results = {},
                mapObject = [];
            this.showNoData = false;
            results = this.calculateTotal(data)

            angular.forEach(results.salesByTerr, (key, value) => {
                mapObject.push({
                    'Country': value,
                    'Total Sales': key
                })
            })
            if (!mapObject.length) {
                this.showNoData = true;
            }

            this.heatMapData = mapObject;
        };

        this.formatTooltip = function(name, ratio, id, index) {
            if (this.currentChartType == "donut") {
                var format = name === this.datacolumns[0].id ? this.datacolumns[0].id : this.datacolumns[1].id;
            } else {
                var format = name === this.datacolumns[0].id ? this.names[index][0] : this.names[index][1];
            }
            return format;
        };

        this.handleCallback1 = function(chartObj) {
            this.theChart = chartObj;
        };

        this.handleCallback2 = function(chartObj) {
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

            this.rangesales = this.chart.salesFirstRange;
            this.range2sales = this.chart.salesSecondRange;
            var firstRangeMap, secondRangeMap, range1, range2;

            range1 = (this.chart.firstRange).split(" to ");
            firstRangeMap = new Map();
            this.chart.salesFirstRange.forEach((obj) => {
                if (obj.totalsales !== 0) {
                    firstRangeMap.set(obj.date, obj.totalsales);
                }
            });

            range2 = (this.chart.secondRange).split(" to ");
            secondRangeMap = new Map();
            this.chart.salesSecondRange.forEach((obj) => {
                if (obj.totalsales !== 0) {
                    secondRangeMap.set(obj.date, obj.totalsales);
                }
            });

            if (firstRangeMap.size == 0 && secondRangeMap.size == 0) {
                this.chart.salesFirstRange = [];
                this.chart.salesSecondRange = [];
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
                    this.chart.salesSecondRange = salesSecondRange;
                }
            }
            this.plotChart();
        }

        this.plotChart = function() {
            collapseSelection($('.panel-heading span.clickable'));

            this.names = [];
            this.datapoints = [];
            this.datacolumns = [];

            for (var i = 0; i < this.chart.salesFirstRange.length; i++) {
                this.datapoints[i] = {
                    x: this.chart.salesFirstRange[i].date + "_" + this.chart.salesSecondRange[i].date
                };
                this.datapoints[i][this.chart.firstRange] = this.chart.salesFirstRange[i].totalsales;
                this.datapoints[i][this.chart.secondRange] = this.chart.salesSecondRange[i].totalsales;

                var nameVal = [this.chart.salesFirstRange[i].date, this.chart.salesSecondRange[i].date]
                this.names.push(nameVal);

                this.datacolumns = [
                    { "id": this.chart.firstRange, "type": "bar" },
                    { "id": this.chart.secondRange, "type": "bar" }
                ];

                this.datax = { "id": "x" };
            }
            this.currentChartType = "bar";
        }

        this.getChart = function() {
            console.log(this.selectedSong);
            return;
            // this.theChart = null;
            // this.showHeatMap = false;
            // this.loading = true;
            // this.drilldown = false;
            // this.heatMapData = null;

            // if (!this.query.songId) {
            //     this.songError = "Please select song";
            // }
            // if (!this.query.rangeDate1 ||
            //     !this.query.rangeDate2) {
            //     this.rangeError = "Please select date range";
            // }
            // if (!this.query.time1 ||
            //     !this.query.time2) {
            //     this.timeError = "Please select time range";
            // }

            // if (this.query.songId &&
            //     this.query.rangeDate1 &&
            //     this.query.rangeDate2 &&
            //     this.query.time1 &&
            //     this.query.time2 &&
            //     !this.rangeError) {
            //     this.query.daysInRange = this.rangediff;
            //     this.query.songId = "Y66000000067";
            //     this.query.breakByRetailer = this.brkByRetailer;
            //     this.query["retailer[]"] = this.retailer || [];
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