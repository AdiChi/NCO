class DateOverDateMultipleController {
  constructor($scope, $filter, ReportService) {
    "ngInject";

    var vm = this;

    vm.chartTypes = ["heatmap", "donut", "line", "area-step", "stacked-bar", "bar"];

    vm.selectedTerritories = [];
    vm.selectedTerritoryGroups = [];
    vm.selectedRetailers = [];
    vm.selectedSongs = [];
    vm.firstRangeMap = [];
    vm.secondRangeMap = [];

    vm.showHeatMap = false;
    vm.showNoData = false;
    vm.mapData = [];

    vm.representData = "2";
    vm.currentChartType = "bar";
    vm.query = {
      "songId": []
    };
    vm.details = {};
    vm.displayCollection = [];

    vm.hours = new Array(24);
    vm.todayStart = moment().startOf('day');
    vm.todayEnd = moment().endOf('day');

    vm.time1 = vm.todayStart;
    vm.query.time1 = vm.todayStart.format('HH:mm');
    vm.time2 = vm.todayEnd;
    vm.query.time2 = vm.todayEnd.format('HH:mm');

    vm.r2time1 = vm.todayStart;
    vm.query.r2time1 = vm.todayStart.format('HH:mm');
    vm.r2time2 = vm.todayEnd;
    vm.query.r2time2 = vm.todayEnd.format('HH:mm');

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
    }

    $(document).on('click', '.panel-heading.clickable', (e) => {
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

    vm.toFormat = (r) => {
      vm.exportListName = vm.selectedSong + "\r\n\n\"" +
        vm.chart.firstRange + "\"" +
        " \n\"" + vm.chart.secondRange + "\"";

      return vm.range1RollUp.allMap.concat(vm.range2RollUp.allMap);
    };

    vm.removeSong = (index) => {
      vm.selectedSongs.splice(index, 1);
    }

    vm.updateSong = (song) => {
      if (vm.details)
        delete vm.details.songs;
      vm.selectedSongs.push(song.trackname);
      vm.query["songId"].push(song.id);

      vm.songError = "";
      console.log(vm.query);
    };

    $scope.$watch('range1diff', (diff) => {
      if (vm.range2diff && diff !== vm.range2diff) {
        vm.rangeError = "Please select same number of days in both ranges";
      } else {
        vm.rangeError = "";
      }
    });

    $scope.$watch('range2diff', (diff) => {
      if (vm.range1diff && diff !== vm.range1diff) {
        vm.rangeError = "Please select same number of days in both ranges";
      } else {
        vm.rangeError = "";
      }
    });

    vm.updateTStart = () => {
      vm.query.time1 = moment(vm.time1).format('HH:mm');
    };

    vm.updateTEnd = () => {
      vm.query.time2 = moment(vm.time2).format('HH:mm');
    };

    vm.updateR2TStart = () => {
      vm.query.r2time1 = moment(vm.r2time1).format('HH:mm');
    };

    vm.updateR2TEnd = () => {
      vm.query.r2time2 = moment(vm.r2time2).format('HH:mm');
    };

    vm.endDateBeforeRender = endDateBeforeRender;
    vm.endDateOnSetTime = endDateOnSetTime;
    vm.startDateBeforeRender = startDateBeforeRender;
    vm.startDateOnSetTime = startDateOnSetTime;

    function startDateOnSetTime() {
      if (vm.dateRangeEnd) {
        var a = moment(vm.dateRangeEnd);
        var b = moment(vm.dateRangeStart);
        vm.range1diff = a.diff(b, 'days') + 1;
      }
      vm.query.range1Date1 = moment(vm.dateRangeStart).format("MM/DD/YYYY");
      $scope.$broadcast('start-date-changed');
    }

    function endDateOnSetTime() {
      if (vm.dateRangeStart) {
        var a = moment(vm.dateRangeEnd);
        var b = moment(vm.dateRangeStart);
        vm.range1diff = a.diff(b, 'days') + 1;
      }
      vm.range1Error = "";
      vm.query.range1Date2 = moment(vm.dateRangeEnd).format("MM/DD/YYYY");
      $scope.$broadcast('end-date-changed');
    }

    function startDateBeforeRender($dates) {
      vm.sameRangeError = null;
      if (vm.dateRangeEnd &&
        vm.dateRangeStart &&
        vm.dateRangeEnd.valueOf() < vm.dateRangeStart.valueOf()) {

        vm.dateRangeEnd = vm.dateRangeStart;
        endDateOnSetTime();
      }
      for (var i = 0; i < $dates.length; i++) {
        if (new Date().getTime() < $dates[i].utcDateValue) {
          $dates[i].selectable = false;
        }
      }
    }

    function endDateBeforeRender($view, $dates) {
      vm.sameRangeError = null;
      if (vm.dateRangeStart) {
        var activeDate = moment(vm.dateRangeStart).subtract(1, $view).add(1, 'minute');

        $dates.filter((date) => {
          return date.localDateValue() <= activeDate.valueOf()
        }).forEach((date) => {
          date.selectable = false;
        });
      }
      for (var i = 0; i < $dates.length; i++) {
        if (new Date().getTime() < $dates[i].utcDateValue) {
          $dates[i].selectable = false;
        }
      }
    }
    vm.endDate2BeforeRender = endDate2BeforeRender;
    vm.endDate2OnSetTime = endDate2OnSetTime;
    vm.startDate2BeforeRender = startDate2BeforeRender;
    vm.startDate2OnSetTime = startDate2OnSetTime;
    //vm.getChart = getChart;

    function startDate2OnSetTime() {
      if (vm.dateRange2End) {
        var a = moment(vm.dateRange2End);
        var b = moment(vm.dateRange2Start);
        vm.range2diff = a.diff(b, 'days') + 1; // 1
      }
      vm.query.range2Date1 = moment(vm.dateRange2Start).format("MM/DD/YYYY");
      $scope.$broadcast('start-date2-changed');
    }

    function endDate2OnSetTime() {
      if (vm.dateRange2Start) {
        var a = moment(vm.dateRange2End);
        var b = moment(vm.dateRange2Start);
        vm.range2diff = a.diff(b, 'days') + 1; // 1
      }
      vm.range2Error = "";
      vm.query.range2Date2 = moment(vm.dateRange2End).format("MM/DD/YYYY");
      $scope.$broadcast('end-date2-changed');
    }

    function startDate2BeforeRender($dates) {
      vm.sameRangeError = null;
      if (vm.dateRange2End &&
        vm.dateRange2Start &&
        vm.dateRange2End.valueOf() < vm.dateRange2Start.valueOf()) {
        vm.dateRange2End = vm.dateRange2Start;
        endDate2OnSetTime();
      }
      for (var i = 0; i < $dates.length; i++) {
        if (new Date().getTime() < $dates[i].utcDateValue) {
          $dates[i].selectable = false;
        }
      }
    }

    function endDate2BeforeRender($view, $dates) {
      vm.sameRangeError = null;
      if (vm.dateRange2Start) {
        var activeDate = moment(vm.dateRange2Start).subtract(1, $view).add(1, 'minute');

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

    vm.fetchSongs = (name) => {
      ReportService.getSongsBySearch(name)
        .then((response) => {
          vm.details.songs = response.data;
        }).catch((err) => {
          console.log(err);
        });
    };

    $scope.$watch('songsearch', (name) => {
      if (name && name.length >= 3) {
        vm.fetchSongs(name);
      } else if (name && name.length === 0) {
        vm.details = {
          songs: []
        };
      }
    });

    $scope.$watch('drilldown', (val) => {
      if (val == true) {
        vm.range1RollUp = vm.calculateTotal(vm.range1sales);
        vm.range2RollUp = vm.calculateTotal(vm.range2sales);
      }
    });

    vm.getSum = (obj) => {
      var val = 0;
      for (var k in obj) {
        val += obj[k];
      }
      return val;
    };

    vm.changeChartType = (type, typeOld) => {
      if (type == "heatmap") {
        vm.showHeatMap = true;
        if (!vm.heatMapData) {
          vm.toggleMap(vm.range1sales);
          vm.activefirst = true;
        }
      } else if (vm.theChart2) {
        vm.showHeatMap = false;
        vm.currentChartType = type;
        vm.theChart2.resize({
          height: 650
        });
        vm.theChart2.groups([]);
        var chartType = type;

        if (type == "stacked-bar") {
          let stackedArr = [], i = 0, j = 0;
            angular.forEach(vm.chart.salesPerSong, () => {
              stackedArr.push(
                vm.firstRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + vm.chart.firstRange + '-Range_1',
                vm.secondRangeMap[i]['song' + (j + 1) + '_Name'] + '_' + vm.chart.secondRange + '-Range_2'
              )
              j++;
          });
          vm.theChart2.groups([
            stackedArr
          ]);
          chartType = "bar";
        } else if (type == "donut") {
          vm.theChart2.groups([]);
          vm.theChart2.resize({
            height: 400
          });
        }

        vm.theChart2.transform(chartType);
      }
    };

    vm.toggleMap = (data) => {
      let results = {},
        mapObject = [];
      vm.showNoData = false;
      results = vm.calculateTotal(data)

      angular.forEach(results.salesByTerr, (key, value) => {
        mapObject.push({
          'Country': value,
          'Total Sales': key
        })
      })
      if (!mapObject.length) {
        vm.showNoData = true;
      }

      vm.heatMapData = mapObject;

    }

    vm.formatTooltip = (name, ratio, id, index) => {
      for (var i = 0; i < vm.datacolumns.length; i++) {
        if (name === vm.datacolumns[i].id) {
          var format = vm.names[index][i];
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

    vm.toggleRows = (data) => {
      ReportService.getTimeRangeData()
        .then((response) => {
          // console.log('response', response.data);
          vm.timeCollection = [].concat(response.data.salesByHour);
          vm.showHours = data.date;
        }, (e) => {
          vm.NoChartError = "Something went wrong!";
          console.log(e);
        });
    }

    // helper method to check if a field is a nested object
    vm.is_object = (something) => {
      return typeof (something) == 'object' ? true : false;
    };

    vm.calculateTotal = (object) => {
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
      let i = 0,
        j = 0;

      angular.forEach(vm.chart.salesPerSong[i].salesFirstRange, (dateObj) => {
        let mapObj = {};
        let k = 0;
        mapObj['date'] = dateObj.date;
        angular.forEach(vm.chart.salesPerSong, (songObj) => {
          mapObj['song' + (k + 1) + '_aggregateSales'] = (songObj.totalSongSales > 0) ? songObj.totalSongSales : 0;
          mapObj['song' + (k + 1) + '_Sales'] = (vm.chart.salesPerSong[k].salesFirstRange[i].totalDaySales > 0) ? vm.chart.salesPerSong[k].salesFirstRange[i].totalDaySales : 0;
          mapObj['song' + (k + 1) + '_Name'] = songObj.songName;
          mapObj['song' + (k + 1) + '_Id'] = songObj.songid;
          k++;
        });
        i++;
        vm.firstRangeMap.push(mapObj);
      });

      angular.forEach(vm.chart.salesPerSong[j].salesSecondRange, (dateObj) => {
        let mapObj = {};
        let k = 0;
        mapObj['date'] = dateObj.date;
        angular.forEach(vm.chart.salesPerSong, (songObj) => {
          mapObj['song' + (k + 1) + '_aggregateSales'] = (songObj.totalSongSales > 0) ? songObj.totalSongSales : 0;
          mapObj['song' + (k + 1) + '_Sales'] = (vm.chart.salesPerSong[k].salesSecondRange[j].totalDaySales > 0) ? vm.chart.salesPerSong[k].salesSecondRange[j].totalDaySales : 0;
          mapObj['song' + (k + 1) + '_Name'] = songObj.songName;
          mapObj['song' + (k + 1) + '_Id'] = songObj.songid;
          k++;
        });
        j++;
        vm.secondRangeMap.push(mapObj);
      });

      plotChart();
    }

    function plotChart() {
      collapseSelection($('.panel-heading.clickable'));

      vm.names = [];
      vm.datapoints = [];
      vm.datacolumns = [];
      let rangeId = [],
        i = 0;

      angular.forEach(vm.firstRangeMap, (rangeObj) => {
        let j = 0;
        let nameVal = [];
        vm.datapoints[i] = {
          x: vm.firstRangeMap[i].date + "_" + vm.secondRangeMap[i].date
        };
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
        vm.names.push(nameVal);
        i++;
      });
      vm.datax = {
        "id": "x"
      };
    }
    
    vm.getChart = function () {
      vm.theChart = null;
      vm.showHeatMap = false;
      vm.loading = true;
      vm.drilldown = false;
      vm.heatMapData = null;

      // if (!vm.query.songId) {
      //   vm.songError = "Please select song";
      // }
      // if (!vm.query.range1Date1 ||
      //   !vm.query.range1Date2) {
      //   vm.range1Error = "Please select first date range";
      // }
      // if (!vm.query.range2Date1 ||
      //   !vm.query.range2Date2) {
      //   vm.range2Error = "Please select second date range";
      // }
      // if (!vm.query.time1 ||
      //   !vm.query.time2) {
      //   vm.timeError = "Please select time range";
      // }
      // if ((vm.query.range1Date1 == vm.query.range2Date1 &&
      //   vm.query.range1Date2 == vm.query.range2Date2) && (vm.query.time1 == vm.query.r2time1 && vm.query.time2 == vm.query.r2time2)) {
      //   vm.sameRangeError = "Please select different sales periods";
      // } else {
      //   vm.sameRangeError = "";
      // }

      // if (vm.query.songId &&
      //   vm.query.range1Date1 &&
      //   vm.query.range1Date2 &&
      //   vm.query.range2Date1 &&
      //   vm.query.range2Date2 &&
      //   vm.query.time1 &&
      //   vm.query.time2 &&
      //   vm.query.r2time1 &&
      //   vm.query.r2time2 &&
      //   !vm.sameRangeError &&
      //   !vm.rangeError) {

      // vm.query.daysInRange = vm.range1diff;
      // vm.query.songId = "Y66000000067";
      // vm.query.breakByRetailer = vm.brkByRetailer;
      vm.query["territory[]"] = vm.selectedTerritories || [] /*getAllTerritories()*/ ;
      vm.query["retailer[]"] = vm.selectedRetailers || [] /*getAllRetailers()*/ ;
      vm.query["territoryGroup[]"] = vm.selectedTerritoryGroups || [] /*getAllRetailers()*/ ;

      vm.chart = ReportService.getDODMulitpleChart(vm.query);
      vm.loading = false;
      addEmptyDateValues();
      vm.NoChartError = "";
      // .then((response) => {
      //   vm.blnChart = true;
      //   vm.loading = false;
      //   //vm.chart = response.data;
      //   //addEmptyDateValues();

      //   //addEmptyDateValues();
      //   vm.NoChartError = "";
      // }, (e) => {
      //   vm.NoChartError = "Something went wrong!";
      //   console.log(e);
      //   vm.loading = false;
      // });
      // } else {
      //   vm.loading = false;
      // }

    }
  }
}

export default DateOverDateMultipleController;