class DateOverDateMultipleController {
  constructor($scope, $filter, $window, ReportService, ModalService, EmailPdfService) {
    "ngInject";

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
    vm.range1 = {};
    vm.range2 = {};
    vm.firstRangeMap = [];
    vm.secondRangeMap = [];

    vm.showHeatMap = false;
    vm.showNoData = false;
    vm.mapData = [];

    vm.representData = "2";
    vm.currentChartType = "bar";
    vm.query = {
      "songId[]": []
    };
    vm.details = {};
    vm.displayCollection = [];

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

    $scope.$watch('vm.selectedSong', (song) => {
      console.log(song);
    })

    // Deletion
    vm.removeSong = (index) => {
      vm.selectedSong.splice(index, 1);
    }

    //Code for c3 Chart
    vm.changeChartType = (currentChart) => {

      angular.forEach(vm.chartTypes, (chartType) => {
        chartType.isActive = false;
      });

      currentChart.isActive = true;
      vm.currentChartType = currentChart.name;

      if (vm.currentChartType == "heatmap") {
        if (!vm.heatMapData) {
          if (vm.representData == "2") {
            vm.selectedValue = vm.chart.salesPerSong[0];
            vm.toggleMap(vm.chart.salesPerSong[0], false, 'dateRange1');
          } else {
            vm.toggleMap(vm.chart.salesPerSong, true, 'dateRange1');
          }
          vm.activefirst = true;
        }
        vm.showHeatMap = true;
      } else if (vm.theChart2) {
        vm.showHeatMap = false;
        vm.theChart2.resize({
          height: 650
        });
        vm.theChart2.groups([]);
        var chartType = vm.currentChartType;

        if (chartType == "stacked-bar") {
          let stackedArr = [],
            i = 0,
            j = 0;
          if (vm.representData == '2') {
            angular.forEach(vm.chart.salesPerSong, () => {
              stackedArr.push(
                vm.firstRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + vm.chart.firstRange + '-Range_1',
                vm.secondRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + vm.chart.secondRange + '-Range_2'
              );
              j++;
            });
          } else {
            stackedArr = [vm.chart.firstRange, vm.chart.secondRange];
          }

          vm.theChart2.groups([
            stackedArr
          ]);
          chartType = "bar";
        } else if (chartType == "donut") {
          vm.theChart2.groups([]);
          vm.theChart2.resize({
            height: 400
          });
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

    vm.setRange2Total = (data, index) => {
      if (!vm['range2Song' + index + 'Sales']) {
        vm['range2Song' + index + 'Sales'] = 0;
      }
      vm['range2Song' + index + 'Sales'] += data.totalsales;
    }

    vm.setRange1Total = (data, index) => {
      if (!vm['range1Song' + index + 'Sales']) {
        vm['range1Song' + index + 'Sales'] = 0;
      }
      vm['range1Song' + index + 'Sales'] += data.totalsales;
    }

    vm.setSongTotal = (data, index) => {
      vm.totalSongSales += data.totalSongSales
    }

    vm.initRangeTotal = (index) => {
      vm['range1Song' + index + 'Sales'] = 0;
      vm['range2Song' + index + 'Sales'] = 0;
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
                  song: '',
                  date: dateObj.date,
                  territory: territoryObj.name,
                  retailer: retailerObj.name,
                  timerange: vm.getTimeRangeInFormat(time.range),
                  sales: time.totalSalesByHours
                };
                firstMap.push(finalObj);
              });
            } else {
              sales = sales + parseInt(territoryObj.totalSaleTerr);
              var finalObj = {
                song: '',
                date: dateObj.date,
                territory: territoryObj.name,
                retailer: retailerObj.name,
                sales: territoryObj.totalSaleTerr
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

    function addEmptyDateValues() {
      let i = 0,
        j = 0,
        range1 = (vm.chart.firstRange).split(" to "),
        range2 = (vm.chart.secondRange).split(" to ");

      vm.firstRangeMap = [];
      vm.secondRangeMap = [];

      angular.forEach(vm.chart.salesPerSong[i].dateRange1, (dateObj) => {
        let mapObj = {},
          k = 0,
          sales = 0;
        angular.forEach(vm.chart.salesPerSong, (songObj) => {
          if (vm.chart.salesPerSong[k].dateRange1[i]) {
            mapObj['song' + (k + 1) + '_Sales'] = (vm.chart.salesPerSong[k].dateRange1[i].totalsales > 0) ? vm.chart.salesPerSong[k].dateRange1[i].totalsales : 0;
            sales += mapObj['song' + (k + 1) + '_Sales'];
          } else {
            mapObj['song' + (k + 1) + '_Sales'] = 0
            sales = 0;
          }
          mapObj['song' + (k + 1) + '_Name'] = songObj.name;
          mapObj['song' + (k + 1) + '_Id'] = songObj.id;
          k++;
        });
        mapObj['aggregateSongSales'] = sales;
        mapObj['date'] = dateObj.date;
        i++;
        vm.firstRangeMap.push(mapObj);
      });

      angular.forEach(vm.chart.salesPerSong[j].dateRange2, (dateObj) => {
        let mapObj = {},
          k = 0,
          sales = 0;
        angular.forEach(vm.chart.salesPerSong, (songObj) => {
          if (vm.chart.salesPerSong[k].dateRange2[j]) {
            mapObj['song' + (k + 1) + '_Sales'] = (vm.chart.salesPerSong[k].dateRange2[j].totalsales > 0) ? vm.chart.salesPerSong[k].dateRange2[j].totalsales : 0;
            sales += mapObj['song' + (k + 1) + '_Sales'];
          } else {
            mapObj['song' + (k + 1) + '_Sales'] = 0
            sales = 0;
          }
          mapObj['song' + (k + 1) + '_Name'] = songObj.name;
          mapObj['song' + (k + 1) + '_Id'] = songObj.id;
          k++;
        });
        mapObj['aggregateSongSales'] = sales;
        mapObj['date'] = dateObj.date;
        j++;
        vm.secondRangeMap.push(mapObj);
      });

      if (!vm.firstRangeMap.length && !vm.secondRangeMap.length) {
        vm.firstRangeMap = [];
        vm.secondRangeMap = [];
      } else {
        addEmptySales(range1, 'firstRangeMap');
        addEmptySales(range2, 'secondRangeMap');
      }

      plotChart();
    }

    function addEmptySales(range, rangeObj, index) {
      var a = moment(range[0], 'll');
      var b = moment(range[1], 'll');
      var r = index || 0;

      for (var m = moment(a); m.diff(b, 'days') <= 0; m.add(1, 'days')) {
        let mapObj = {};
        var x = m.format('MMM DD');
        let s = 0;
        if (vm[rangeObj].length && !vm[rangeObj][r]) {
          angular.forEach(vm.chart.salesPerSong, (songObj) => {
            mapObj['song' + (s + 1) + '_Sales'] = 0;
            mapObj['song' + (s + 1) + '_Name'] = songObj.name;
            mapObj['song' + (s + 1) + '_Id'] = songObj.id;
            s++;
          });
          mapObj['aggregateSongSales'] = 0;
          mapObj['date'] = x;
          vm[rangeObj].push(mapObj);
        } else if (!vm[rangeObj].length) {
          angular.forEach(vm.chart.salesPerSong, (songObj) => {
            mapObj['song' + (s + 1) + '_Sales'] = 0;
            mapObj['song' + (s + 1) + '_Name'] = songObj.name;
            mapObj['song' + (s + 1) + '_Id'] = songObj.id;
            s++;
          });
          mapObj['aggregateSongSales'] = 0;
          mapObj['date'] = x;
          vm[rangeObj].push(mapObj);
        }
        r++;
      }
    }

    function plotChart() {
      vm.names = [];
      vm.datapoints = [];
      vm.datacolumns = [];
      vm.datax = {};
      let rangeId = [],
        i = 0;

      angular.forEach(vm.firstRangeMap, (rangeObj) => {
        let j = 0;
        let nameVal = [];
        vm.datapoints[i] = {
          x: vm.firstRangeMap[i].date + "_" + vm.secondRangeMap[i].date
        };
        if (vm.representData == "2") {
          angular.forEach(vm.chart.salesPerSong, () => {
            vm.datapoints[i][vm.firstRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + vm.chart.firstRange + '-Range_1'] = vm.firstRangeMap[i]['song' + (j + 1) + '_Sales'];
            vm.datapoints[i][vm.secondRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + vm.chart.secondRange + '-Range_2'] = vm.secondRangeMap[i]['song' + (j + 1) + '_Sales'];
            if (i == 0) {
              vm.datacolumns.push({
                "id": vm.firstRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + vm.chart.firstRange + '-Range_1',
                "type": "bar"
              }, {
                "id": vm.secondRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + vm.chart.secondRange + '-Range_2',
                "type": "bar"
              });
            }
            nameVal.push(vm.firstRangeMap[i]['song' + (j + 1) + '_Name'] + ' - ' + vm.firstRangeMap[i].date, vm.secondRangeMap[i]['song' + (j + 1) + '_Name'] + ' - ' + vm.secondRangeMap[i].date);
            j++;
          });
          vm.reportTitle = "Individual Song Sales - "
        } else {
          vm.datapoints[i][vm.chart.firstRange] = vm.firstRangeMap[i]['aggregateSongSales'];
          vm.datapoints[i][vm.chart.secondRange] = vm.secondRangeMap[i]['aggregateSongSales'];

          vm.datacolumns = [{
            "id": vm.chart.firstRange,
            "type": "bar"
          }, {
            "id": vm.chart.secondRange,
            "type": "bar"
          }]
          nameVal = [vm.firstRangeMap[i].date, vm.secondRangeMap[i].date];
          vm.reportTitle = "Aggregate Song Sales - "
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
    }

    vm.getInputQuery = () => {
      vm.query["songId[]"] = [];
      vm.query["territory[]"] = [];
      vm.query["retailer[]"] = [];
      vm.query["territoryGroup[]"] = [];

      vm.query.range1Date1 = moment(vm.range1.startDate).format("MM/DD/YYYY");
      vm.query.range1Date2 = moment(vm.range1.endDate).format("MM/DD/YYYY");
      vm.query.range2Date1 = moment(vm.range2.startDate).format("MM/DD/YYYY");
      vm.query.range2Date2 = moment(vm.range2.endDate).format("MM/DD/YYYY");

      vm.query.time1 = moment(vm.range1.startTime).format('HH:mm');
      vm.query.time2 = moment(vm.range1.endTime).format('HH:mm');
      vm.query.time3 = moment(vm.range2.startTime).format('HH:mm');
      vm.query.time4 = moment(vm.range2.endTime).format('HH:mm');

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
        vm.duplicateSongError = "Please select unique songs";
      } else {
        vm.duplicateSongError = "";
      }

      if (!vm.query.range1Date1 ||
        !vm.query.range1Date2) {
        vm.range1Error = "Please select first date range";
      } else {
        vm.range1Error = "";
      }
      if (!vm.query.range2Date1 ||
        !vm.query.range2Date2) {
        vm.range2Error = "Please select second date range";
      } else {
        vm.range2Error = "";
      }
      if (!vm.query.time1 ||
        !vm.query.time2 || !vm.query.time3 || !vm.query.time4) {
        vm.timeError = "Please select time range";
      } else {
        vm.timeError = "";
      }
      if (vm.range1.dateDiff != vm.range2.dateDiff) {
        vm.rangeError = "Please select same number of days in both ranges";
      } else {
        vm.rangeError = "";
      }
      if ((vm.query.range1Date1 == vm.query.range2Date1 &&
          vm.query.range1Date2 == vm.query.range2Date2) && (vm.query.time1 == vm.query.time3 && vm.query.time2 == vm.query.time4)) {
        vm.sameRangeError = "Please select different sales periods";
      } else {
        vm.sameRangeError = "";
      }

      if (vm.query["songId[]"].length &&
        vm.query.range1Date1 &&
        vm.query.range1Date2 &&
        vm.query.range2Date1 &&
        vm.query.range2Date2 &&
        vm.query.time1 &&
        vm.query.time2 &&
        vm.query.time3 &&
        vm.query.time4 &&
        !vm.sameRangeError &&
        !vm.rangeError &&
        !vm.duplicateSongError) {
        vm.query.daysInRange = vm.range1.dateDiff;
        collapseSelection($('.panel-heading.clickable'));
        $window.scrollTo(0, 0);
        // vm.chart = ReportService.getDODMulitpleChart(vm.query);
        // vm.loading = false;
        // vm.drilldown = true;

        // addEmptyDateValues();
        // vm.currentChartType = "bar";
        // vm.NoChartError = "";

        ReportService.getDODMulitpleChart(vm.query).then((response) => {
          vm.drilldown = true;
          vm.chart = response.data;
          addEmptyDateValues();
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

    //Drilldown code
    function prepareExportData() {
      let range1Obj = [],
        range2Obj = [],
        i = 0,
        j = 0;

      vm.range1RollUp = [];
      vm.range2RollUp = [];

      angular.forEach(vm.chart.salesPerSong, (songObj) => {
        range1Obj.push(calculateTotal(songObj.dateRange1));
        range2Obj.push(calculateTotal(songObj.dateRange2));
      });

      angular.forEach(range1Obj, (obj) => {
        angular.forEach(obj.allMap, (mapObj) => {
          mapObj['song'] = vm.chart.salesPerSong[i].name;
        });

        if (!vm.range1RollUp) {
          vm.range1RollUp = [].concat(obj.allMap);
        } else {
          vm.range1RollUp = vm.range1RollUp.concat(obj.allMap);
        }
        i++;
      });

      angular.forEach(range2Obj, (obj) => {
        angular.forEach(obj.allMap, (mapObj) => {
          mapObj['song'] = vm.chart.salesPerSong[j].name;
        });

        if (!vm.range2RollUp) {
          vm.range2RollUp = [].concat(obj.allMap);
        } else {
          vm.range2RollUp = vm.range2RollUp.concat(obj.allMap);
        }
        j++;
      });
    }

    vm.toFormat = (r) => {
      prepareExportData();
      vm.exportListName = "";
      angular.forEach(vm.selectedSong, (song) => {
        if (!vm.exportListName) {
          vm.exportListName = song.trackname + "\"" + " \n\""
        } else {
          vm.exportListName += song.trackname + "\r\n\n\""
        }
      });

      vm.exportListName = vm.exportListName + "\r\n\n\"" +
        vm.chart.firstRange + "\"" +
        " \n\"" + vm.chart.secondRange + "\"";

      return vm.range1RollUp.concat(vm.range2RollUp);
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
      EmailPdfService.sendMail($(".c3graph"), $('.drilldown'), vm.expandAll);
      vm.expandAll = false;
    }
  }
}

export default DateOverDateMultipleController;