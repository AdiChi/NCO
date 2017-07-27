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
        this.details = {};
        this.displayCollection = [];
        this.hours = new Array(24);
        this.todayStart = moment().startOf('day');
        this.todayEnd = moment().endOf('day');

        this.time1 = this.todayStart;
        this.query.time1 = this.todayStart.format('HH:mm');
        this.time2 = this.todayEnd;
        this.query.time2 = this.todayEnd.format('HH:mm');

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

        this.toFormat = function(r) {
            this.exportListName = this.selectedSong + "\r\n\n\"" +
                this.chart.firstRange + "\"" +
                " \n\"" + this.chart.secondRange + "\"";
            return this.rangeRollUp.allMap;
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

        this.updateSong = function(song) {
            if (this.details)
                delete this.details.songs;
            this.selectedSong = song.trackname;
            this.query.songId = song.id;
            this.songError = "";
        };

        this.fetchSongs = function(name) {
            ReportService.getSongsBySearch(name)
                .then((response) => {
                    this.details.songs = response.data;
                });
        };

        $scope.$watch('songSearch', (name) => {
            if (name && name.length >= 3) {
                this.fetchSongs(name);
            } else if (name && name.length === 0) {
                this.details = {
                    songs: []
                };
            }
        });

        this.updateTStart = function() {
            this.query.time1 = moment(this.time1).format('HH:mm');
        };

        this.updateTEnd = function() {
            this.timeError = "";
            this.query.time2 = moment(this.time2).format('HH:mm');
        };

        this.startDateOnSetTime = function() {
            if (this.dateRangeEnd) {
                var a = moment(this.dateRangeEnd);
                var b = moment(this.dateRangeStart);
                this.rangediff = a.diff(b, 'days') + 1;
            }
            this.query.range1Date1 = moment(this.dateRangeStart).format("MM/DD/YYYY");
            $scope.$broadcast('start-date-changed');
        };

        this.endDateOnSetTime = function() {
            if (this.dateRangeStart) {
                var a = moment(this.dateRangeEnd);
                var b = moment(this.dateRangeStart);
                this.rangediff = a.diff(b, 'days') + 1;
            }
            this.range1Error = "";
            this.query.range1Date2 = moment(this.dateRangeEnd).format("MM/DD/YYYY");
            $scope.$broadcast('end-date-changed');
        };

        this.startDateBeforeRender = function($dates) {
            this.sameRangeError = null;
            if (this.dateRangeEnd &&
                this.dateRangeStart &&
                this.dateRangeEnd.valueOf() < this.dateRangeStart.valueOf()) {
                this.dateRangeEnd = this.dateRangeStart;
                endDateOnSetTime();
            }
            for (var i = 0; i < $dates.length; i++) {
                if (new Date().getTime() < $dates[i].utcDateValue) {
                    $dates[i].selectable = false;
                }
            }
        };

        this.endDateBeforeRender = function($view, $dates) {
            this.sameRangeError = null;
            if (this.dateRangeStart) {
                var activeDate = moment(this.dateRangeStart).subtract(1, $view).add(1, 'minute');

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
        };
    }
}

export default SongSalesByTerritoryController;