import BreakOutByRetailerController from './breakOutByRetailer.controller';
class SongOverSongController {
  constructor($scope, $filter, $window, $uibModal, ReportService, ModalService, EmailPdfService) {
    "ngInject"

    var vm = this;

    vm.chartTypes = [{
        name: "heatmap"
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

    vm.selectedTerritories = [];
    vm.selectedTerritoryGroups = [];
    vm.selectedRetailers = [];
    vm.selectedSong = [];
    vm.range = {};

    vm.showHeatMap = false;
    vm.showNoData = false;

    vm.representData = "2";
    vm.currentChartType = "bar";
    vm.query = {
      "songId[]": []
    };
    vm.details = {};
    vm.rangeError = {
      dateError: "",
      timeError: ""
    };

    vm.initializeController = function () {
      ReportService.getTerritories().then((res) => {
        vm.territories = res.data;
      });
      ReportService.getTerritoryGroups().then((res) => {
        vm.territoryGroups = res.data;
      });
      ReportService.getRetailers().then((res) => {
        vm.retailers = res.data;
      });
      vm.totalSongSales = 0;
    }

    //Panel Collapse
    $(document).on('click', '.panel-heading.clickable', function (e) {
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

    // Deletion
    vm.removeSong = (index) => {
      vm.selectedSong.splice(index, 1);
      if (vm.duplicateSongError) {
        if (!hasDuplicateSong(vm.query["songId[]"])) {
          vm.duplicateSongError = "";
        }
      }
    }

    //Code for c3 Chart
    vm.changeChartType = (currentChart) => {

      angular.forEach(vm.chartTypes, (chartType) => {
        chartType.isActive = false;
      });

      currentChart.isActive = true;
      vm.currentChartType = currentChart.name;

      if (vm.currentChartType == "heatmap") {
        if (vm.representData == "2") {
          vm.selectedValue = vm.chart.salesPerSong[0];
          vm.toggleMap(vm.chart.salesPerSong[0], false, 'dateRange1');
        } else {
          vm.toggleMap(vm.chart.salesPerSong, true, 'dateRange1');
        }
        vm.activefirst = true;
        vm.showHeatMap = true;
      } else if (vm.theChart2) {
        vm.showHeatMap = false;
        vm.theChart2.resize({
          height: 750
        });

        vm.toggleSubChart = true;
        vm.enableZoom = true;
        vm.theChart2.groups([]);
        var chartType = vm.currentChartType;

        vm.datacolumns = vm.chartData.datacolumns;
        vm.datapoints = vm.chartData.datapoints
        vm.datax = vm.chartData.datax;
        vm.names = vm.chartData.names;

        angular.forEach(vm.datacolumns, (column) => {
          column.type = chartType;
        });

        positionLegend();

        if (chartType == "stacked-bar") {
          let stackedArr = [],
            i = 0,
            j = 0;
          var firstRange = vm.chart.firstRange;
          if (vm.representData == '2') {
            if (vm.rangeMap.length) {
              angular.forEach(vm.chart.salesPerSong, () => {
                stackedArr.push(
                  vm.rangeMap[i]['song' + (j + 1) + '_Name'] + '_' + firstRange
                );
                j++;
              });
            }
          } else {
            stackedArr = [firstRange];
          }
          vm.theChart2.groups([
            stackedArr
          ]);
          chartType = "bar";
        } else if (chartType == "donut") {
          vm.toggleSubChart = false;
          vm.enableZoom = false;
          vm.legend = {
            position: "",
            x: "0",
            y: "0",
            step: "0"
          };
          vm.theChart2.groups([]);
          vm.theChart2.resize({
            height: 450
          });

          if (vm.representData == '1') {
            plotDonutData();
          } else {
            if (vm.chart.salesPerSong.length == 1) {
              plotDonutData();
            }
          }
        }

        vm.theChart2.transform(chartType);
      }
    };

    vm.formatTooltip = (name, ratio, id, index) => {
      for (var i = 0; i < vm.datacolumns.length; i++) {
        if (name === vm.datacolumns[i].id) {
          if (vm.currentChartType == "donut") {
            var format = vm.datacolumns[i].id;
          } else {
            var format = vm.names[index][i];
          }
        }
      }
      return format;
    };

    vm.handleCallback1 = function (chartObj) {
      vm.theChart = chartObj;
    };

    vm.handleCallback2 = function (chartObj) {
      vm.theChart2 = chartObj;
    };

    vm.setRangeTotal = (data, index) => {
      if (!vm['rangeSong' + index + 'Sales']) {
        vm['rangeSong' + index + 'Sales'] = 0;
      }
      vm['rangeSong' + index + 'Sales'] += data.totalsales;
    }

    vm.setSongTotal = (data, index) => {
      vm.totalSongSales += data.totalSongSales
    }

    vm.initRangeTotal = (index) => {
      vm['rangeSong' + index + 'Sales'] = 0;
    }

    vm.toggleMap = (data, isAggregate, range) => {
      let results = {},
        mapObject = [];
      vm.showNoData = false;

      if (!isAggregate) {
        results = calculateTotal(data[range]);

        angular.forEach(results.salesByTerr, (key, value) => {
          mapObject.push({
            'Country': value,
            'Total Sales': key
          })
        })

      } else {
        let territory = {}
        angular.forEach(data, (songObj) => {
          results = calculateTotal(songObj[range]);
          angular.forEach(results.salesByTerr, (key, value) => {
            territory[value] = (territory[value] || 0) + key;
          });
        });
        angular.forEach(territory, (key, val) => {
          mapObject.push({
            'Country': val,
            'Total Sales': key
          });
        });
      }

      if (!mapObject.length) {
        vm.showNoData = true;
      }
      vm.heatMapData = mapObject;
    }

    function calculateTotal(object) {
      var firstMap = [],
        salesTotal = 0,
        dateMap = {};
      // Setting up an array with individual objects
      angular.forEach(object, (dateObj) => {
        var dateSales = {},
          sales = 0;
        angular.forEach(dateObj.orgRetailerList, (retailerObj) => {
          angular.forEach(retailerObj.territoryList, (territoryObj) => {
            if (territoryObj.terrSalesByHour.length > 0) {
              sales = sales + parseInt(territoryObj.totalSaleTerr);
              angular.forEach(territoryObj.terrSalesByHour, (time) => {
                var finalObj = {
                  Song: '',
                  Date: dateObj.date,
                  Retailer: retailerObj.name,
                  Territory: territoryObj.name,
                  Time: vm.getTimeRangeInFormat(time.range),
                  Sales: time.totalSalesByHours
                };
                firstMap.push(finalObj);
              });
            } else {
              sales = sales + parseInt(territoryObj.totalSaleTerr);
              var finalObj = {
                Song: '',
                Date: dateObj.date,
                Retailer: retailerObj.name,
                Territory: territoryObj.name,
                Sales: territoryObj.totalSaleTerr
              };
              firstMap.push(finalObj);
            }
          })
          dateSales[retailerObj.name] = sales;
        })
        salesTotal = salesTotal + sales;
        dateMap[dateObj.date] = dateSales;
      })

      var sumOfSalesByTer = {},
        sumOfSalesByRet = {},
        terrSales = [],
        territory, retailer;

      for (var i = 0; i < firstMap.length; i++) {
        territory = firstMap[i].territory;
        retailer = firstMap[i].retailer;

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
        dateRetailerMap: dateMap,
        salesTotal: salesTotal
      };
    }

    function prepareChartData() {
      let i = 0,
        range = (vm.chart.firstRange).split(" to ");

      vm.rangeMap = [];
      let rangeMapArr = [];
      var a = moment(range[0], 'll');
      var b = moment(range[1], 'll');
      let k = 0,
        sales = 0;

      angular.forEach(vm.chart.salesPerSong, (songObj) => {
        let i = 0;
        if (songObj.totalSongSales > 0) {
          for (var m = moment(a); m.diff(b, 'days') <= 0; m.add(1, 'days')) {
            let x = m.format('MMM DD, YY'),
              mapObj = {};
            mapObj['song' + (k + 1) + '_Name'] = songObj.name;
            mapObj['song' + (k + 1) + '_Id'] = songObj.songid;
            mapObj['date'] = x;
            if (songObj.dateRange1[i] && songObj.dateRange1[i].date == x) {
              mapObj['song' + (k + 1) + '_Sales'] = songObj.dateRange1[i].totalsales;
              i++;
            } else {
              mapObj['song' + (k + 1) + '_Sales'] = 0;
            }
            rangeMapArr.push(mapObj);
          }
        }
        k++;
      });

      rangeMapArr = rangeMapArr.reduce(function (r, e) {
        if (r[e.date] == undefined) {
          r[e.date] = {
            date: e.date
          };
        }
        angular.extend(r[e.date], e);
        return r
      }, {});

      for (let x in rangeMapArr) {
        vm.rangeMap.push(rangeMapArr[x]);
      }

      angular.forEach(vm.rangeMap, (rangeObj) => {
        let sales = 0,
          k = 0;
        angular.forEach(vm.chart.salesPerSong, () => {
          sales += rangeObj['song' + (k + 1) + '_Sales'];
          k++;
        });
        rangeObj['aggregateSongSales'] = sales;
      });

      plotChart();
    }

    function plotChart() {
      vm.names = [];
      vm.datapoints = [];
      vm.datacolumns = [];
      vm.datax = {};
      let rangeId = [],
        i = 0;

      let range = vm.chart.firstRange;

      angular.forEach(vm.rangeMap, (rangeObj) => {
        let j = 0;
        let nameVal = [];
        vm.datapoints[i] = {
          x: vm.rangeMap[i].date
        };
        if (vm.representData == "2") {
          angular.forEach(vm.chart.salesPerSong, () => {
            vm.datapoints[i][vm.rangeMap[i]['song' + (j + 1) + '_Name'] + '_' + range] = vm.rangeMap[i]['song' + (j + 1) + '_Sales'];

            if (i == 0) {
              vm.datacolumns.push({
                "id": vm.rangeMap[i]['song' + (j + 1) + '_Name'] + '_' + range,
                "type": "bar"
              });
            }
            nameVal.push(vm.rangeMap[i]['song' + (j + 1) + '_Name'] + ' - ' + vm.rangeMap[i].date);
            j++;
          });
        } else {
          vm.datapoints[i][range] = vm.rangeMap[i]['aggregateSongSales'];

          vm.datacolumns = [{
            "id": range,
            "type": "bar"
          }]

          nameVal = [vm.rangeMap[i].date];
        }
        vm.names.push(nameVal);
        i++;
      });
      vm.datax = {
        "id": "x"
      };

      vm.loading = false;
      vm.currentChartType = "bar";

      angular.forEach(vm.chartTypes, (chartType) => {
        if (chartType.name == vm.currentChartType) {
          chartType.isActive = true;
        } else {
          chartType.isActive = false;
        }
      });

      vm.chartData = {
        datapoints: vm.datapoints,
        datacolumns: vm.datacolumns,
        names: vm.names,
        datax: vm.datax
      }

      vm.toggleSubChart = true;
      vm.enableZoom = true;
      vm.tilt = "90";

      if (vm.representData == '2') {
        vm.reportTitle = "Individual Song Sales - ";
      } else {
        vm.reportTitle = "Aggregate Song Sales - ";
      }

      positionLegend();
    }

    function plotDonutData() {
      vm.datapoints = [];
      vm.datacolumns = [];
      vm.names = [];
      let i = 0;
      angular.forEach(vm.rangeMap, (rangeObj) => {
        vm.datapoints[i] = {
          x: rangeObj.date
        }
        vm.datapoints[i][rangeObj.date] = rangeObj.aggregateSongSales;
        vm.datacolumns.push({
          "id": rangeObj.date,
          "type": "donut"
        });
        vm.names.push(rangeObj.date);
        i++;
      })
      vm.datax = {
        "id": "x"
      };
    }

    function positionLegend() {
      let x = 20,
        y = 60;

      if (vm.representData == '2') {
        vm.legend = {
          position: "top-left",
          x: "-" + x,
          y: (vm.chart.salesPerSong.length <= 2) ? y : y + (10 * vm.chart.salesPerSong.length),
          step: (vm.chart.salesPerSong.length > 1) ? vm.chart.salesPerSong.length : 0
        }
      } else {
        vm.legend = {
          position: "top-left",
          x: "0",
          y: y,
          step: 0
        }
      }
    }

    vm.getInputQuery = () => {
      vm.query["songId[]"] = [];
      vm.query["territory[]"] = [];
      vm.query["retailer[]"] = [];
      vm.query["territoryGroup[]"] = [];

      vm.query.range1Date1 = !vm.range.startDate ? "" : moment(vm.range.startDate).format("MM/DD/YYYY");
      vm.query.range1Date2 = !vm.range.endDate ? "" : moment(vm.range.endDate).format("MM/DD/YYYY");

      vm.query.time1 = moment(vm.range.startTime).format('HH:mm');
      vm.query.time2 = moment(vm.range.endTime).format('HH:mm');

      vm.query["territory[]"] = !vm.selectedTerritories ? [] : vm.selectedTerritories.map((terr) => {
        return terr.id;
      });
      vm.query["retailer[]"] = !vm.selectedRetailers ? [] : vm.selectedRetailers.map(function (ret) {
        return ret.id;
      });
      vm.query["territoryGroup[]"] = !vm.selectedTerritoryGroups ? [] : vm.selectedTerritoryGroups.map(function (terrGroup) {
        return terrGroup.id;
      });

      angular.forEach(vm.selectedSong, (obj) => {
        if (obj.type == 'list') {
          vm.query['songId[]'].push(obj.id + 'l');
        } else {
          vm.query['songId[]'].push(obj.songid);
        }
      });

      // angular.forEach(vm.selectedSong, (obj) => {
      //   vm.query['songId[]'].push(obj.songid);
      // });
    }

    vm.getChart = function () {
      vm.loading = true;
      vm.getInputQuery();

      vm.theChart = null;
      vm.theChart2 = null;

      vm.showHeatMap = false;
      vm.drilldown = false;
      vm.heatMapData = null;
      vm.totalSongSales = 0;

      if (!vm.query["songId[]"].length) {
        vm.songError = "Please select song";
      } else {
        vm.songError = "";
      }

      if (hasDuplicateSong(vm.query["songId[]"])) {
        vm.duplicateSongError = "Please select unique Songs / Songlists";
      } else {
        vm.duplicateSongError = "";
      }

      if (!vm.query.range1Date1 ||
        !vm.query.range1Date2) {
        vm.rangeError.dateError = "Please select first date range";
      } else {
        vm.rangeError.dateError = "";
      }
      if (!vm.query.time1 ||
        !vm.query.time2) {
        vm.rangeError.timeError = "Please select first time range";
      } else {
        vm.rangeError.timeError = "";
      }

      if (vm.query["songId[]"].length &&
        vm.query.range1Date1 &&
        vm.query.range1Date2 &&
        vm.query.time1 &&
        vm.query.time2 &&
        !vm.duplicateSongError) {
        vm.query.daysInRange = vm.range.dateDiff;
        collapseSelection($('.panel-heading.clickable'));
        $window.scrollTo(0, 0);
        // vm.chart = ReportService.getSOSChart(vm.query);
        // vm.loading = false;
        // vm.drilldown = true;

        // prepareChartData();
        // vm.currentChartType = "bar";
        // vm.NoChartError = "";

        ReportService.getSOSChart(vm.query).then((response) => {
          vm.drilldown = true;
          vm.chart = response.data;
          prepareChartData();
          vm.currentChartType = "bar";

          vm.NoChartError = "";
        }, (e) => {
          vm.NoChartError = "Something went wrong!";
          console.log(e);
          vm.loading = false;
        });
      } else {
        vm.loading = false;
      }
    }

    vm.showRetailerBreakOut = (data) => {
      let songName = data.id.split('_')[0];
      vm.chart.salesPerSong.map((song) => {
        if(song.name == songName){
          $scope.rangeData = song.dateRange1[data.x];
        }
      });
    //   $uibModal.open({
    //     templateUrl: 'app/components/songOverSong/breakOutByRetailer.html',
    //     controller: BreakOutByRetailerController,
    //     controllerAs: 'vm',
    //     size: 'md',
    //     scope: $scope
    // });
    };

    //Drilldown code
    function prepareExportData() {
      let range1Obj = [],
        i = 0;

      vm.range1RollUp = [];

      angular.forEach(vm.chart.salesPerSong, (songObj) => {
        range1Obj.push(calculateTotal(songObj.dateRange1));
      });

      angular.forEach(range1Obj, (obj) => {
        angular.forEach(obj.allMap, (mapObj) => {
          mapObj['Song'] = vm.chart.salesPerSong[i].name;
        });

        if (!vm.range1RollUp) {
          vm.range1RollUp = [].concat(obj.allMap);
        } else {
          vm.range1RollUp = vm.range1RollUp.concat(obj.allMap);
        }
        i++;
      });
    }

    vm.toFormat = (r) => {
      prepareExportData();
      vm.exportListName = "";
      angular.forEach(vm.selectedSong, (song) => {
        if (!vm.exportListName) {
          vm.exportListName = (song.type == 'list') ? song.songListName : song.trackname + "\n"
        } else {
          vm.exportListName += (song.type == 'list') ? song.songListName : song.trackname + "\n"
        }
      });

      vm.exportListName = vm.exportListName + "\r\n\n\"" +
        vm.chart.firstRange + "(" + vm.getTimeRangeInFormat(vm.chart.timerange1) + ") \"" + "\n";

      vm.shortName = "Songs by Date Range Comparison Report--" +
        vm.chart.firstRange + "(" + vm.getTimeRangeInFormat(vm.chart.timerange1) + ")";

      return vm.range1RollUp;
    };

    // Time Formatting
    vm.getTimeRangeInFormat = function (time) {
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

    //Duplicate Song Validation
    function hasDuplicateSong(songCollection) {
      var i, j, n;
      n = songCollection.length;

      for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
          if (songCollection[i] == songCollection[j]) return true;
        }
      }
      return false;
    }

    //Send Report as Mail
    vm.sendMail = () => {
      vm.expandAll = true;
      let selectedSong, firstRange;

      if (vm.showHeatMap) {
        var elem = $("#world-map-container");
      } else {
        var elem = $(".c3graph");
      }

      angular.forEach(vm.selectedSong, (song) => {
        if (!selectedSong) {
          selectedSong = (song.type == 'list') ? song.songListName : song.trackname + ", "
        } else {
          selectedSong += (song.type == 'list') ? song.songListName : song.trackname + ", "
        }
      });

      firstRange = vm.chart.firstRange;

      var details = {
        chartType: "Songs by Date Range Comparison Report",
        song: selectedSong,
        range1: "Range: " + firstRange,
      };

      EmailPdfService.sendMail(elem, $('.drilldown'), vm.expandAll, details).then((r) => {
        vm.expandAll = false;
      }).catch(function (e) {
        vm.expandAll = false;
      });
    }
  }
}

export default SongOverSongController;