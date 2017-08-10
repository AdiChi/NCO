import BreakOutByRetailerController from './breakOutByRetailer.controller';
class SongsalesByGeographyController {
    constructor($scope, $filter, $uibModal, ReportService) {
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
        this.territoryRepresentation = '2';

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

        $(document).on('click', '.panel-heading.clickable', function(e) {
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
                    angular.forEach(this.chart.salesByGeography[0].salesByDate, (day) => {
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

            angular.forEach(this.chart.salesByGeography, (geography) => {
                if (geography.geographyType === 'territory') {
                    mapObject.push({
                        'Country': geography.geographyName,
                        'Total Sales': geography.totalGeographySales
                    });
                } else {
                    angular.forEach(geography.salesByTerritory, (territory) => {
                        mapObject.push({
                            'Country': territory.territoryName,
                            'Total Sales': territory.totalTerritorySales
                        });
                    });
                }
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

        this.plotChart = function() {
            collapseSelection($('.panel-heading.clickable'));

            this.names = [];
            this.datapoints = [];
            this.datacolumns = [];

            if (this.territoryRepresentation === '3') { // Aggregate Data
                // Disable line chart for aggregate option
                this.chartTypes[2].isDisabled = true;

                var days = [];
                var i = 0;
                angular.forEach(this.chart.salesByGeography, (geography) => {
                    var j = 0;
                    angular.forEach(geography.salesByDate, (day) => {
                        if (i > 0) {
                            days[j].sales = days[j].sales + day.totalDaySales;
                        } else {
                            days.push({ date: day.date, sales: day.totalDaySales });
                        }
                        j++;
                    });
                    i++;
                });

                this.datapoints[0] = {
                    x: 'Aggregate Territories/Territory Groups'
                };
                this.datacolumns = [];
                angular.forEach(days, (day) => {
                    this.datapoints[0][day.date] = day.sales;

                    this.names.push(day.date);

                    this.datacolumns.push({ "id": day.date, "type": "bar" });
                });
                this.datax = { "id": "x" };
            } else {
                // Enable line chart for other options
                this.chartTypes[2].isDisabled = false;

                var i = 0;
                angular.forEach(this.chart.salesByGeography, (geography) => {
                    this.datapoints[i] = {
                        x: geography.geographyName
                    };
                    this.datacolumns = [];
                    angular.forEach(geography.salesByDate, (day) => {
                        this.datapoints[i][day.date] = day.totalDaySales;

                        this.names.push(day.date);

                        this.datacolumns.push({ "id": day.date, "type": "bar" });
                    });
                    this.datax = { "id": "x" };
                    i++;
                });
            }
            this.currentChartType = "bar";
        };

        this.setCriteria = function() {
            this.query.songId = this.selectedSong.songid;
            this.query.rangeDate1 = this.range.startDate;
            this.query.rangeDate2 = this.range.endDate;
            this.query.time1 = this.range.startTime;
            this.query.time2 = this.range.endTime;
            this.query.daysInRange = this.range.dateDiff;
            this.query["retailer[]"] = this.selectedRetailers || [];
            this.query["territory[]"] = this.selectedTerritories || [];
            this.query["territoryGroup[]"] = this.selectedTerritoryGroups || [];
            this.query.territoryRepresentation = this.territoryRepresentation;
        };

        this.getChart = function() {
            var blnError = false;
            if (!this.selectedSong) {
                this.songError = "Please select song";
                blnError = true;
            }
            if (!this.range.startDate ||
                !this.range.endDate) {
                this.rangeError = "Please select date range";
                blnError = true;
            }
            if (!this.range.startTime ||
                !this.range.endTime) {
                this.timeError = "Please select time range";
                blnError = true;
            }
            if (this.selectedTerritories.length === 0 && this.selectedTerritoryGroups.length === 0) {
                this.terrError = "Please select a territory or territory group";
                blnError = true;
            }

            if (blnError) {
                return;
            } else {
                this.songError = this.rangeError = this.timeError = this.terrError = '';
            }

            this.theChart = null;
            this.showHeatMap = false;
            this.loading = true;
            this.drilldown = false;
            this.heatMapData = null;

            this.setCriteria();
            this.chart = ReportService.getSalesByGeographyChart(this.query);
            this.loading = false;
            this.plotChart();
            this.NoChartError = "";
            this.drilldown = true;
        };

        this.showRetailerBreakOut = (data) => {
            var dateData = $filter('filter')(this.chart.salesByGeography[data.x].salesByDate, { date: data.name })[0];
            dateData.territory = this.chart.salesByGeography[data.x].geographyName;
            $scope.dateData = dateData;
            $uibModal.open({
                templateUrl: 'app/components/songsalesByGeography/breakOutByRetailer.html',
                controller: BreakOutByRetailerController,
                controllerAs: 'vm',
                size: 'md',
                scope: $scope
            });
        };

        //----Drill Down Code------//

        this.prepareReportData = function() {
            var allMap = [];
            angular.forEach(this.chart.salesByGeography, (geography) => {
                angular.forEach(geography.salesByDate, (day) => {
                    angular.forEach(day.salesByRetailer, (retailer) => {
                        angular.forEach(retailer.salesByTime, (time) => {
                            var finalObj = {
                                Territory: geography.geographyName,
                                Date: day.date,
                                Retailer: retailer.retailerName,
                                TimeRange: time.timeRange,
                                Sales: time.totalSales
                            };
                            allMap.push(finalObj);
                        });
                    });
                });
            });
            this.chart.allMap = allMap;
        };

        this.toFormat = function() {
            this.exportListName = this.selectedSong.trackname + "\r\n\n\"" + this.chart.dateRange + "\r\n\n\"";
            this.prepareReportData();
            return this.chart.allMap;
        };

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
    }
}

export default SongsalesByGeographyController;