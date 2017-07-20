class SonglistsListController {
    constructor($rootScope, $scope, $state, $window, ModalService, SongListsService, SongsService) {
        "ngInject";
        var me = this;
        me.$state = $state;
        me.detailsData = {};
        me.detailsTitle = "";
        me.visible = false;
        
        me.name = $state.current.name.split('.');
        me.name = me.name[1];
        console.log(me.name);

        this.toggleSideNav = function (row) {
            let id = row.id;
            var res = SongsService.getSong();
            me.detailsData = res;
            me.detailsTitle = me.detailsData.trackname;
            me.visible = true;
            // SongsService.getSong().then((res)=>{
            //     me.detailsData = res;
            //     me.detailsTitle = me.detailsData.trackname;
            //     me.visible = true;
            // }, (e)=> {
            //         me.visible = false;
            //         console.log(e);
            //     });
        }

        this.displayCollection = [].concat(this.songlistslist);
        this.itemsByPage = 20;
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
        this.exportListName = "Song lists";
        this.toFormat = function (r) {
            return r.map(function (item) {
                let list = {
                    "Name": item.songListName,
                    "Description": item.description
                };
                return list;
            });
        };
    }
}

export default SonglistsListController;
