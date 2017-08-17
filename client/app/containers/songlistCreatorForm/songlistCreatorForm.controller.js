class SonglistCreatorFormController {
    constructor(SongListsService,$window, $state, $scope, ModalService, SongsService) {
        "ngInject";

        var vm = this;
        this.$state = $state;
        this.SongListsService = SongListsService;

        this.songlist = [];
        this.songlist.songs = [];
        vm.selected = [];
        vm.selectAll = function(collection) {
            var filteredCollection = ($scope.filtered.length > collection.length) ? collection : $scope.filtered;

            if (vm.selected.length === 0) {
                angular.forEach(filteredCollection, function(val) {
                    vm.selected.push(val.id);
                });
            } else {
                vm.selected = [];
            }
        };

        // Function to get collection when filter applied
        $scope.onFilter = function(stCtrl) {
            $scope.filtered = stCtrl.getFilteredCollection();
        };

        vm.toggleSideNav = (data) => {
            let id = data.id;
            var top = 0;
            let tableContainer = document.getElementById('listTable');
            SongsService.getSong(id).then((res) => {
                vm.detailsData = res;
                vm.detailsTitle = vm.detailsData.trackname;
                vm.name = 'songs';

                if ($window.scrollY > 0) {
                    top = '50px';
                }
                else {
                    top = '106px';
                }

                vm.detailsData.setTop = () => {
                    return {
                        'top': top
                    };
                }

                vm.visible = true;

            }, (e) => {
                vm.visible = false;
                console.log(e);
            });
        };
        // Function to get data by selecting a single row
        vm.select = function(id) {
            var found = vm.selected.indexOf(id);

            if (found == -1)
                vm.selected.push(id);
            else
                vm.selected.splice(found, 1);
        };

        vm.cancel = function() {
            this.$state.go('app.songlists');
        };
        vm.addSonglist = function() {
            var me = this;
            if (!this.songlist.songListName) return alert('Name is Required');
            if (!this.songlist.description) return alert('Description is required');
            // this.songlist.songs = [];
            this.SongListsService.createSongList(this.songlist).then(function(res) {
                    me.songlist = {};

                    // go to home page, to see our entry
                    me.$state.go('app.songlists');

                })
                .catch(function(error) {
                    console.log(error);
                    me.songlist = {};
                    me.$state.go('app.songlists');

                });

            // reset the form
        };
        vm.addSongs = function() {
            var custMod = {
                size: 'lg',
                controller: function($scope, $uibModalInstance) {
                    "ngInject";
                    $scope.sel = [];
                    $scope.songs = [];
                    $scope.modalOptions = {
                        closeButtonText: 'Cancel',
                        actionButtonText: 'Add Songs',
                        headerText: 'Add Songs'
                    };
                    $scope.modalOptions.ok = function(sel, songs) {
                        var toAdd = new Set();
                        sel.forEach(function(s) {
                            toAdd.add(s);
                        });

                        var filteredArr = songs.filter(function(obj) {
                            delete obj.isSelected;
                            return toAdd.has(obj.id);
                        });

                        $uibModalInstance.close(filteredArr);
                        $scope.sel = [];
                    };
                    $scope.modalOptions.close = function(result) {
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
            ModalService.showModal(custMod, {}).then(function(res) {
                vm.songlist.songs = _.uniq(vm.songlist.songs.concat(res), 'isrc');
                vm.displayCollection2 = [].concat(vm.songlist.songs);
            }, function(err) {
                console.log(err);
            });
        };
    }
}

export default SonglistCreatorFormController;