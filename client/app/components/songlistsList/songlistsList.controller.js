class SonglistsListController {
    constructor($rootScope, $scope, $state, $window, ModalService, SongListsService, SongsService, ArtistService) {
        "ngInject";
        var me = this;
        me.$state = $state;
        me.detailsData = {};
        me.detailsTitle = "";
        me.visible = false;
        me.showFilter = false;
        me.setPosition = {};
        me.filterOptions = "";
        me.isFilterApplied = false;

        me.name = $state.current.name.split('.');
        me.name = me.name[1];

        this.toggleSideNav = (row) => {
            var tableContainer = document.getElementById('tableComponent');

            if (me.name == 'songs') {
                let id = row.id;
                // var res = SongsService.getSong();
                // me.detailsData = res;
                // me.detailsTitle = me.detailsData.trackname;
                // me.visible = true;

                SongsService.getSong(id).then((res) => {
                    me.detailsData = res;
                    me.detailsTitle = me.detailsData.trackname;
                    me.visible = true;
                    me.detailsData.setTop = () => {
                        return {
                            'top': angular.element(tableContainer).prop('offsetTop') + 'px'
                        };
                    }
                }, (e) => {
                    me.visible = false;
                    console.log(e);
                });
            }

            if (me.name == 'artists') {
                let id = row.artistId;
                ArtistService.getArtist(id).then((res) => {
                    me.detailsData = res;
                    me.detailsTitle = me.detailsData.artistName;
                    me.visible = true;
                    me.detailsData.setTop = () => {
                        return {
                            'top': angular.element(tableContainer).prop('offsetTop') + 'px'
                        };
                    }
                }, (e) => {
                    me.visible = false;
                    console.log(e);
                });
            }
        }

        $scope.onFilter = function (stCtrl) {
            var filteredCols = [], i;
            var tableState = stCtrl.tableState();
            if (stCtrl.tableState().search.predicateObject) {
                if (Object.keys(stCtrl.tableState().search.predicateObject).length > 0) {
                    me.isFilterApplied = true;
                    filteredCols = Object.keys(stCtrl.tableState().search.predicateObject);
                    for (i in filteredCols) {
                        me['filtered_' + filteredCols[i]] = true;
                    }
                }
                else {
                    me.isFilterApplied = false;
                }
            }
        }

        this.toggleOptions = (event, filterData) => {
            if (me.showFilter) {
                me.showFilter = false;
            }
            let left = angular.element(event.target).parent().prop('offsetLeft');
            left = (left > 870) ? 'auto' : left + 'px';
            let top = angular.element(event.target).parent().parent().prop('clientHeight');
            me.setPosition = {
                top: (top) + 'px',
                left: left
            }
            me.filterOptions = filterData;
            me.showFilter = true;
        }

        this.hideFilter = () => {
            me.showFilter = !me.showFilter;
        }

        this.hideSidenav = () => {
            me.visible = !me.visible;
        }

        this.displayCollection = [].concat(this.songlistslist);
        this.itemsByPage = 10;
        this.deleteSonglist = function (id) {
            var modalOptions = {
                closeButtonText: 'No',
                actionButtonText: 'Yes',
                headerText: 'Delete?',
                bodyText: 'Are you sure you want to delete this song list?'
            };
            ModalService.showModal({}, modalOptions)
                .then(function (result) {
                    console.log(result);
                    SongListsService.deleteSongList(id).then(function (res) {
                        me.songlistslist = res.data.songlist;
                        console.log(res.data.message);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }, function (err) {
                    console.log(err);
                });
        };
        if (me.name == 'songs') {
            this.exportListName = "Songs";
            this.toFormat = function (r) {
                return r.map(function (item) {
                    let list = {
                        "ISRC": (item.isrc != undefined) ? item.isrc : "",
                        "Album Name": (item.albumname != undefined) ? item.albumname : "",
                        "Track": (item.trackname != undefined) ? item.trackname : "",
                        "Artist": (item.artist != undefined) ? item.artist : "",
                        "Year": (item.year != undefined) ? item.year : "",
                        "Duration": (item.duration != undefined) ? item.duration : "",
                        "Launch Date": (item.launchdate != undefined) ? item.launchdate : ""
                    };
                    return list;
                });
            };
        }
        else if (me.name == 'artists') {
            this.exportListName = "Artist";
            this.toFormat = function (r) {
                return r.map(function (item) {
                    let list = {
                        "Artist Name": (item.artistName != undefined) ? item.artistName : "",
                        "Genre": (item.genre != undefined) ? item.genre : "",
                        "Instruments": (item.instruments != undefined) ? item.instruments : "",
                        "Role": (item.role != undefined) ? item.role : "",
                        "Type": (item.type != undefined) ? item.type : "",
                        "Members": (item.member != undefined) ? item.member : ""
                    };
                    return list;
                });
            };
        }
        else {
            this.exportListName = "Songs List";
            this.toFormat = function (r) {
                return r.map(function (item) {
                    let list = {
                        "Name": (item.songListName != undefined) ? item.songListName : "",
                        "Description": (item.description != undefined) ? item.description : ""
                    };
                    return list;
                });
            };
        }
    }
}

export default SonglistsListController;
