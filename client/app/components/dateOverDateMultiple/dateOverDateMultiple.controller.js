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
    vm.range1Error = {
      dateError: "",
      timeError: ""
    };
    vm.range2Error = {
      dateError: "",
      timeError: ""
    }
    vm.rangeError = {
      dateDiffError: "",
      sameRangeError: ""
    }


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

    $scope.$watch('vm.range2', (rangeObj) => {
      if (vm.range1.dateDiff && rangeObj.dateDiff != vm.range1.dateDiff && rangeObj.dateDiff > 0) {
        vm.rangeError.dateDiffError = "Please select same number of days in both ranges";
      } else {
        vm.rangeError.dateDiffError = "";
      }
    }, true);

    $scope.$watch('vm.range1', (rangeObj) => {
      if (vm.range2.dateDiff && rangeObj.dateDiff != vm.range2.dateDiff && rangeObj.dateDiff > 0) {
        vm.rangeError.dateDiffError = "Please select same number of days in both ranges";
      } else {
        vm.rangeError.dateDiffError = "";
      }
    }, true);

    //Code for c3 Chart
    vm.changeChartType = (currentChart) => {

      angular.forEach(vm.chartTypes, (chartType) => {
        chartType.isActive = false;
      });

      currentChart.isActive = true;
      vm.currentChartType = currentChart.name;

      if (vm.currentChartType == "heatmap") {
        if (vm.chart.firstRange == vm.chart.secondRange) {
          vm.firstRange = "Range 1 (" + vm.getTimeRangeInFormat(vm.chart.timerange1) + ")";
          vm.secondRange = "Range 2 (" + vm.getTimeRangeInFormat(vm.chart.timerange2) + ")";
        } else {
          vm.firstRange = vm.chart.firstRange;
          vm.secondRange = vm.chart.secondRange;
        }
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
          height: 650
        });
        vm.toggleSubChart = true;
        vm.enableZoom = true;
        vm.theChart2.groups([]);
        var chartType = vm.currentChartType;

        angular.forEach(this.datacolumns, (column) => {
          column.type = chartType;
        });

        positionLegend();

        if (chartType == "stacked-bar") {
          let stackedArr = [],
            i = 0,
            j = 0;
          var firstRange = vm.chart.firstRange;
          var secondRange = vm.chart.secondRange;
          if (vm.chart.firstRange == vm.chart.secondRange) {
            firstRange = "Range 1 (" + vm.getTimeRangeInFormat(vm.chart.timerange1) + ")";
            secondRange = "Range 2 (" + vm.getTimeRangeInFormat(vm.chart.timerange2) + ")";
          }
          if (vm.representData == '2') {
            if (vm.firstRangeMap.length && vm.secondRangeMap.length) {
              angular.forEach(vm.chart.salesPerSong, () => {
                stackedArr.push(
                  vm.firstRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + firstRange,
                  vm.secondRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + secondRange
                );
                j++;
              });
            }
          } else {
            stackedArr = [firstRange, secondRange];
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
        j = 0,
        range1 = (vm.chart.firstRange).split(" to "),
        range2 = (vm.chart.secondRange).split(" to ");

      vm.firstRangeMap = [];
      vm.secondRangeMap = [];

      addEmptySales(range1, 'dateRange1', 'firstRangeMap');
      addEmptySales(range2, 'dateRange2', 'secondRangeMap');

      plotChart();
    }

    function addEmptySales(range, rangeObj, rangeMap) {
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
            if (songObj[rangeObj][i] && songObj[rangeObj][i].date == x) {
              mapObj['song' + (k + 1) + '_Sales'] = songObj[rangeObj][i].totalsales;
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
        vm[rangeMap].push(rangeMapArr[x]);
      }

      calculateAggregateSales(rangeMap);
    }

    function calculateAggregateSales(rangeMap) {
      angular.forEach(vm[rangeMap], (rangeObj) => {
        let sales = 0, k = 0;
        angular.forEach(vm.chart.salesPerSong, () => {
          sales += rangeObj['song' + (k + 1) + '_Sales'];
          k++;
        });
        rangeObj['aggregateSongSales'] = sales;
      });
    }

    function plotChart() {
      vm.names = [];
      vm.datapoints = [];
      vm.datacolumns = [];
      vm.datax = {};
      let rangeId = [],
        i = 0;

      let firstRange = vm.chart.firstRange,
        secondRange = vm.chart.secondRange;

      if (vm.chart.secondRange == vm.chart.firstRange) {
        firstRange = "Range 1 (" + vm.getTimeRangeInFormat(vm.chart.timerange1) + ")";
        secondRange = "Range 2 (" + vm.getTimeRangeInFormat(vm.chart.timerange2) + ")";
        vm.tilt = "45";
      } else {
        vm.tilt = "90";
      }

      angular.forEach(vm.firstRangeMap, (rangeObj) => {
        let j = 0;
        let nameVal = [];
        if (vm.chart.secondRange == vm.chart.firstRange) {
          vm.datapoints[i] = {
            x: vm.firstRangeMap[i].date + "(" + vm.getTimeRangeInFormat(vm.chart.timerange1) + ")" + "(" + vm.getTimeRangeInFormat(vm.chart.timerange2) + ")"
          }
        } else {
          vm.datapoints[i] = {
            x: vm.firstRangeMap[i].date + "_" + vm.secondRangeMap[i].date
          };
        }
        if (vm.representData == "2") {
          angular.forEach(vm.chart.salesPerSong, () => {
            vm.datapoints[i][vm.firstRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + firstRange] = vm.firstRangeMap[i]['song' + (j + 1) + '_Sales'];
            vm.datapoints[i][vm.secondRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + secondRange] = vm.secondRangeMap[i]['song' + (j + 1) + '_Sales'];
            if (i == 0) {
              vm.datacolumns.push({
                "id": vm.firstRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + firstRange,
                "type": "bar"
              }, {
                "id": vm.secondRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + secondRange,
                "type": "bar"
              });
            }
            if (vm.chart.secondRange == vm.chart.firstRange) {
              nameVal.push(vm.firstRangeMap[i]['song' + (j + 1) + '_Name'] + ' - ' + vm.firstRangeMap[i].date + "(" + vm.getTimeRangeInFormat(vm.chart.timerange1) + ")", vm.secondRangeMap[i]['song' + (j + 1) + '_Name'] + ' - ' + vm.secondRangeMap[i].date + "(" + vm.getTimeRangeInFormat(vm.chart.timerange2) + ")");
            } else {
              nameVal.push(vm.firstRangeMap[i]['song' + (j + 1) + '_Name'] + ' - ' + vm.firstRangeMap[i].date, vm.secondRangeMap[i]['song' + (j + 1) + '_Name'] + ' - ' + vm.secondRangeMap[i].date);
            }
            j++;
          });
        } else {
          vm.datapoints[i][firstRange] = vm.firstRangeMap[i]['aggregateSongSales'];
          vm.datapoints[i][secondRange] = vm.secondRangeMap[i]['aggregateSongSales'];

          vm.datacolumns = [{
            "id": firstRange,
            "type": "bar"
          }, {
            "id": secondRange,
            "type": "bar"
          }]
          if (vm.chart.firstRange == vm.chart.secondRange) {
            nameVal = [vm.firstRangeMap[i].date + "(" + vm.getTimeRangeInFormat(vm.chart.timerange1) + ")", vm.secondRangeMap[i].date + "(" + vm.getTimeRangeInFormat(vm.chart.timerange2) + ")"];
          } else {
            nameVal = [vm.firstRangeMap[i].date, vm.secondRangeMap[i].date];
          }
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

      if (vm.representData == '2') {
        vm.reportTitle = "Individual Song Sales - ";
      } else {
        vm.reportTitle = "Aggregate Song Sales - ";
      }

      positionLegend();
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

      vm.query.range1Date1 = !vm.range1.startDate ? "" : moment(vm.range1.startDate).format("MM/DD/YYYY");
      vm.query.range1Date2 = !vm.range1.endDate ? "" : moment(vm.range1.endDate).format("MM/DD/YYYY");
      vm.query.range2Date1 = !vm.range2.startDate ? "" : moment(vm.range2.startDate).format("MM/DD/YYYY");
      vm.query.range2Date2 = !vm.range2.endDate ? "" : moment(vm.range2.endDate).format("MM/DD/YYYY");

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
        vm.duplicateSongError = "Please select unique Songs / Songlists";
      } else {
        vm.duplicateSongError = "";
      }

      if (!vm.query.range1Date1 ||
        !vm.query.range1Date2) {
        vm.range1Error.dateError = "Please select first date range";
      } else {
        vm.range1Error.dateError = "";
      }
      if (!vm.query.range2Date1 ||
        !vm.query.range2Date2) {
        vm.range2Error.dateError = "Please select second date range";
      } else {
        vm.range2Error.dateError = "";
      }
      if (!vm.query.time1 ||
        !vm.query.time2) {
        vm.range1Error.timeError = "Please select first time range";
      } else {
        vm.range1Error.timeError = "";
      }
      if (!vm.query.time3 || !vm.query.time4) {
        vm.range2Error.timeError = "Please select second time range";
      } else {
        vm.range2Error.timeError = "";
      }
      if ((!vm.range1Error.dateError && !vm.range2Error.dateError) && vm.range1.dateDiff != vm.range2.dateDiff) {
        vm.rangeError.dateDiffError = "Please select same number of days in both ranges";
      } else {
        vm.rangeError.dateDiffError = "";
      }
      if ((vm.query.range1Date1 == vm.query.range2Date1 &&
          vm.query.range1Date2 == vm.query.range2Date2) && (vm.query.time1 == vm.query.time3 && vm.query.time2 == vm.query.time4)) {
        vm.rangeError.sameRangeError = "Please select different sales periods";
      } else {
        vm.rangeError.sameRangeError = "";
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
        !vm.rangeError.sameRangeError &&
        !vm.rangeError.dateDiffError &&
        !vm.duplicateSongError) {
      vm.query.daysInRange = vm.range1.dateDiff;
      collapseSelection($('.panel-heading.clickable'));
      $window.scrollTo(0, 0);
      // vm.chart = ReportService.getDODMulitpleChart(vm.query);
      // vm.loading = false;
      // vm.drilldown = true;

      // prepareChartData();
      // vm.currentChartType = "bar";
      // vm.NoChartError = "";

        ReportService.getDODMulitpleChart(vm.query).then((response) => {
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
          mapObj['Song'] = vm.chart.salesPerSong[i].name;
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
          mapObj['Song'] = vm.chart.salesPerSong[j].name;
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
          vm.exportListName = (song.type == 'list') ? song.songListName : song.trackname + "\n"
        } else {
          vm.exportListName += (song.type == 'list') ? song.songListName : song.trackname + "\n"
        }
      });

      vm.exportListName = vm.exportListName + "\r\n\n\"" +
        vm.chart.firstRange + "(" + vm.getTimeRangeInFormat(vm.chart.timerange1) + ") \"" +
        " \n\"" + vm.chart.secondRange + "(" + vm.getTimeRangeInFormat(vm.chart.timerange2) + ") \"" + "\n";

      vm.shortName = "Song Comparison-Date over Date Report--" +
        vm.chart.firstRange + "(" + vm.getTimeRangeInFormat(vm.chart.timerange1) + ")-" +
        vm.chart.secondRange + "(" + vm.getTimeRangeInFormat(vm.chart.timerange2) + ")";
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
      let selectedSong, firstRange, secondRange;

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

      if (vm.chart.firstRange == vm.chart.secondRange) {
        firstRange = vm.getTimeRangeInFormat(vm.chart.timerange1) + ")";
        secondRange = vm.getTimeRangeInFormat(vm.chart.timerange2) + ")";
      } else {
        firstRange = vm.chart.firstRange;
        firstRange = vm.chart.secondRange;
      }

      var details = {
        chartType: "Date Over Date Songs/SongList Comparison",
        song: selectedSong,
        range1: "Range 1: " + firstRange,
        range2: "Range 2: " + secondRange
      };

      EmailPdfService.sendMail(elem, $('.drilldown'), vm.expandAll, details).then((r) => {
        vm.expandAll = false;
      }).catch(function (e) {
        vm.expandAll = false;
      });
    }
  }
}

export default DateOverDateMultipleController;