class SonglistUpdateFormController {
    constructor($state, $stateParams, $scope, SongListsService, SongsService, ModalService, _) {
        "ngInject";
        var vm = this;
        this.$state = $state;
        this.SongListsService = SongListsService;
        this.ModalService = ModalService;

        this.id = $stateParams.id;
        vm.songlist = {};
        this.SongListsService.getSongList(this.id).then(function (res) {
            vm.songlist = res;
            vm.displayCollection2 = [].concat(vm.songlist.songs);
            vm.exportListName = vm.songlist.songListName;
        });

        this.itemsByPage = 7;

        vm.selected = [];

        vm.toggleSideNav = (data) => {
            let id = data.id;
            let tableContainer = document.getElementById('listTable');
            SongsService.getSong(id).then((res) => {
                vm.detailsData = res;
                vm.detailsTitle = vm.detailsData.trackname;
                vm.name = 'songs';
                vm.visible = true;
                vm.detailsData.setTop = () => {
                    return {
                        'top': angular.element(tableContainer).prop('offsetTop') + 'px'
                    };
                }
            }, (e) => {
                vm.visible = false;
                console.log(e);
            });
        }

        vm.selectAll = function (collection) {
            var filteredCollection = ($scope.filtered.length > collection.length) ? collection : $scope.filtered;

            if (vm.selected.length === 0) {
                angular.forEach(filteredCollection, function (val) {
                    vm.selected.push(val.id);
                });
            } else {
                vm.selected = [];
            }
        };

        // Function to get collection when filter applied
        $scope.onFilter = function (stCtrl) {
            $scope.filtered = stCtrl.getFilteredCollection();
        }

        // Function to get data by selecting a single row
        vm.select = function (id) {
            var found = vm.selected.indexOf(id);

            if (found == -1)
                vm.selected.push(id);
            else
                vm.selected.splice(found, 1);
        };

        vm.cancelEdit = function () {
            this.$state.go('app.songlists');
        };
        vm.deleteConfirm = function () {
            var toDelete = new Set(this.selected);
            var filteredArr = this.songlist.songs.filter(obj => !toDelete.has(obj.id));
            this.songlist.songs = filteredArr;
            this.displayCollection2 = [].concat(this.songlist.songs);
            this.selected = [];
        };
        vm.updateSonglist = function () {
            var vm = this;
            if (!this.songlist.songListName) return alert('Song list Name is Required');

            if (!this.songlist.songs) {
                this.songlist.songs = [];
            }
            this.SongListsService.updateSongList(vm.songlist).then(function (res) {
                console.log(res, "response");
                vm.songlist = {};

                // go to home page, to see our entry
                vm.$state.go('app.songlists');
            }).catch(function (err) {
                console.log(err, "error");
            });

        };
        vm.toFormat = function (r) {
            return r.map(function (item) {
                let list = {
                    "Track name": item.trackname,
                    "Album name": item.albumname,
                    "Artist": item.artist,
                    "Artist description": item.artistdesc,
                    "ISRC": item.isrc
                };
                return list;
            });
        };
        vm.addSongs = function () {
            var custMod = {
                size: 'lg',
                controller: function ($scope, $uibModalInstance) {
                    "ngInject";
                    $scope.sel = [];
                    $scope.songs = [];
                    $scope.modalOptions = {
                        closeButtonText: 'Cancel',
                        actionButtonText: 'Add Songs',
                        headerText: 'Add Songs'
                    };
                    $scope.modalOptions.ok = function (sel, songs) {
                        var toAdd = new Set();
                        sel.forEach(function (s) {
                            toAdd.add(s);
                        });

                        var filteredArr = songs.filter(function (obj) {
                            delete obj.isSelected;
                            return toAdd.has(obj.id);
                        });

                        console.log(filteredArr);
                        $uibModalInstance.close(filteredArr);
                        $scope.sel = [];
                    };
                    $scope.modalOptions.close = function (result) {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                template: `<div class="modal-header">
			                <h3>{{modalOptions.headerText}}</h3>
			            </div>
				        <div class="modal-body">
				          <all-songs-listing sel="sel" songs="songs"></all-songs-listing>
				        </div>
				        <div class="modal-footer">
				          <button type="button" class="btn" 
				                  data-ng-click="modalOptions.close()">{{modalOptions.closeButtonText}}</button>
				          <button class="btn btn-primary" 
				                  data-ng-click="modalOptions.ok(sel,songs);">{{modalOptions.actionButtonText}}</button>
				        </div>`
            };
            ModalService.showModal(custMod, {}).then(function (res) {
                vm.songlist.songs = _.uniq(vm.songlist.songs.concat(res), 'isrc');
                vm.displayCollection2 = [].concat(vm.songlist.songs);
            }, function (err) {
                console.log(err);
            });
        };
    }
}

export default SonglistUpdateFormController;
