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

        this.plotChart = function() {
            collapseSelection($('.panel-heading.clickable'));

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

            if (blnError) return;

            this.setCriteria();
            this.theChart = null;
            this.showHeatMap = false;
            this.loading = true;
            this.drilldown = false;
            this.heatMapData = null;
            if (this.query.songId &&
                this.query.rangeDate1 &&
                this.query.rangeDate2 &&
                this.query.time1 &&
                this.query.time2 &&
                !this.rangeError) {
                this.query.breakByRetailer = (this.brkByRetailer === 'true');
                this.query["retailer[]"] = this.selectedRetailers || [];
                this.query["territory[]"] = this.selectedTerritories || [];
                this.query["territoryGroup[]"] = this.selectedTerritoryGroups || [];

                this.chart = ReportService.getSalesByTerritoryChart();
                this.loading = false;
                this.plotChart();
                this.NoChartError = "";
                this.drilldown = true;
            } else {
                this.loading = false;
            }
        }

        //----Drill Down Code------//
        this.toFormat = function(r) {
            this.exportListName = this.selectedSong + "\r\n\n\"" +
                this.chart.firstRange + "\"" +
                " \n\"" + this.chart.secondRange + "\"";
            return this.rangeRollUp.allMap;
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
        }
    }
}

export default SongSalesByTerritoryController;