import BreakOutByRetailerController from '../songSalesByTerritory/breakOutByRetailer.controller';
class SongSalesByCityController {
    constructor($scope, $filter, $uibModal, ReportService, EmailPdfService) {
        'ngInject'

        this.chartTypes = [{
                name: "heatmap",
                isDisabled: true
            },
            {
                name: "donut"
            },
            {
                name: "line"
            },
            {
                name: "area-step"
            },
            {
                name: "stacked-bar"
            },
            {
                name: "bar",
                isActive: true
            }
        ];

        this.selectedCities = [];
        this.selectedRetailers = [];
        this.cityRepresentation = '1';

        this.mapData = [];
        this.currentChartType = "bar";
        this.query = {};
        this.displayCollection = [];
        this.range = {};

        this.initializeData = function() {
            ReportService.getAllCities().then((response) => {
                this.cities = response.data;
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
                this.theChart2.resize({
                    height: 650
                });
                this.theChart2.groups([]);
                var chartType = this.currentChartType;

                this.datapoints = this.chartData.datapoints;
                this.datacolumns = this.chartData.datacolumns;
                this.names = this.chartData.names;
                this.datax = this.chartData.datax;

                angular.forEach(this.datacolumns, (column) => {
                    column.type = chartType;
                })

                if (chartType == "stacked-bar") {
                    var days = [];
                    angular.forEach(this.chart.salesByCity[0].salesByDate, (day) => {
                        days.push(day.date);
                    });
                    this.theChart2.groups([days]);
                    chartType = "bar";
                } else if (this.currentChartType == "donut") {
                    if (this.cityRepresentation === '1') {
                        this.plotDonutData();
                    }
                    this.theChart2.groups([]);
                    this.theChart2.resize({
                        height: 400
                    });
                }
                this.theChart2.transform(chartType);
            }
        };

        this.toggleMap = function(data) {
            let mapObject = [];
            this.showNoData = false;

            angular.forEach(this.chart.salesByCity, (city) => {
                mapObject.push({
                    'Country': city.cityName,
                    'Total Sales': city.totalCitySales
                });
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

        this.plotDonutData = function() {
            this.datapoints = [];
            this.datacolumns = [];
            this.names = [];
            let i = 0;

            angular.forEach(this.chart.salesByCity, (city) => {
                this.datapoints[i] = {
                    x: city.cityName
                };
                this.datapoints[i][city.cityName] = city.totalCitySales;
                this.datacolumns.push({
                    "id": city.cityName,
                    "type": "donut"
                });
                this.names.push(city.cityName);
                i++;
            });

            this.datax = {
                "id": "x"
            };
            this.datapoints = $filter('orderBy')(this.datapoints, 'x');
        };

        this.plotIndividualCities = function(index, cityName, salesByDate) {
            this.datapoints[index] = {
                x: cityName
            };
            this.datacolumns = [];
            angular.forEach(salesByDate, (day) => {
                this.datapoints[index][day.date] = day.totalDaySales;

                this.names.push(day.date);

                this.datacolumns.push({
                    "id": day.date,
                    "type": "bar"
                });
            });
            this.datax = {
                "id": "x"
            };
        };

        this.plotCummulativeData = function(index, days) {
            this.datacolumns = [];
            angular.forEach(days, (day) => {
                this.datapoints[index][day.date] = day.totalDaySales;

                this.names.push(day.date);

                this.datacolumns.push({
                    "id": day.date,
                    "type": "bar"
                });
            });
            this.datax = {
                "id": "x"
            };
        };

        this.getAggregateData = function(index, salesByDate, days) {
            var j = 0;
            angular.forEach(salesByDate, (day) => {
                if (index > 0) {
                    days[j].totalDaySales = days[j].totalDaySales + day.totalDaySales;
                } else {
                    days.push({
                        date: day.date,
                        totalDaySales: day.totalDaySales
                    });
                }
                j++;
            });
        };

        this.plotChart = function() {
            collapseSelection($('.panel-heading.clickable'));

            // Disable line chart for aggregate option
            this.chartTypes[2].isDisabled = (this.cityRepresentation === '2');

            this.names = [];
            this.datapoints = [];
            this.datacolumns = [];

            if (this.cityRepresentation === '1') {
                var i = 0;
                angular.forEach(this.chart.salesByCity, (city) => {
                    this.plotIndividualCities(i, city.cityName, city.salesByDate);
                    i++;
                });
                this.datapoints = $filter('orderBy')(this.datapoints, 'x');
            } else { // Aggregate Data              
                var days = [];
                var i = 0;
                angular.forEach(this.chart.salesByCity, (city) => {
                    this.getAggregateData(i, city.salesByDate, days);
                    i++;
                });

                this.datapoints[0] = {
                    x: 'Aggregate Cities'
                };
                this.plotCummulativeData(0, days);
            }

            this.chartData = {
                datapoints: this.datapoints,
                datacolumns: this.datacolumns,
                names: this.names,
                datax: this.datax
            }

            angular.forEach(this.chartTypes, (chartType) => {
                chartType.isActive = false;
            });

            this.currentChartType = "bar";
            this.chartTypes[5].isActive = true;
        };

        this.setCriteria = function() {
            this.query.songId = this.selectedSong.songid;
            this.query.rangeDate1 = this.range.startDate;
            this.query.rangeDate2 = this.range.endDate;
            this.query.time1 = this.range.startTime;
            this.query.time2 = this.range.endTime;
            this.query.daysInRange = this.range.dateDiff;
            this.query["retailer[]"] = this.selectedRetailers || [];
            this.query["city[]"] = this.selectedCities || [];
            this.query.cityRepresentation = this.cityRepresentation;
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
            if (this.selectedCities.length === 0) {
                this.cityError = "Please select a city";
                blnError = true;
            }

            if (blnError) {
                return;
            } else {
                this.songError = this.rangeError = this.timeError = this.cityError = '';
            }

            this.theChart = null;
            this.showHeatMap = false;
            this.loading = true;
            this.drilldown = false;
            this.heatMapData = null;

            this.setCriteria();
            this.chart = ReportService.getSalesByCityChart(this.query);
            this.loading = false;
            this.plotChart();
            this.NoChartError = "";
            this.drilldown = true;
        };

        this.showRetailerBreakOut = (data) => {
            var dateData = $filter('filter')(this.chart.salesByCity[data.x].salesByDate, {
                date: data.name
            })[0];
            dateData.geography = this.chart.salesByCity[data.x].cityName;
            $scope.dateData = dateData;
            $uibModal.open({
                templateUrl: 'app/components/songSalesByTerritory/breakOutByRetailer.html',
                controller: BreakOutByRetailerController,
                controllerAs: 'vm',
                size: 'md',
                scope: $scope
            });
        };

        //----Drill Down Code------//

        this.prepareReportData = function() {
            var allMap = [];
            angular.forEach(this.chart.salesByCity, (city) => {
                angular.forEach(city.salesByDate, (day) => {
                    angular.forEach(day.salesByRetailer, (retailer) => {
                        angular.forEach(retailer.salesByTime, (time) => {
                            var finalObj = {
                                City: city.cityName,
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

        // Send Email

        this.sendMail = function() {
            var vm = this;
            this.expandAll = true;

            if (this.showHeatMap) {
                var elem = $("#world-map-container");
            } else {
                var elem = $(".c3graph");
            }
            var details = {
                chartType: "Song Sales Comparison By City",
                song: this.selectedSong.trackname,
                range1: "Date Range: " + this.chart.dateRange
            };

            var s = EmailPdfService.sendMail(elem, $('.drilldown'), this.expandAll, details);
            s.then(function(r) {
                vm.expandAll = false;
            }).catch(function(e) {
                vm.expandAll = false;
            });
        };
    }
}

export default SongSalesByCityController;