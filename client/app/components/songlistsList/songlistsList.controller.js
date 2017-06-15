class SonglistsListController {
  constructor(ModalService, SongListsService, $state) {
  	"ngInject";
  	var me = this;
  	me.$state = $state;
  	this.displayCollection = [].concat(this.songlistslist);
	this.itemsByPage = 10;
	this.deleteSonglist = function(id) {
		var modalOptions = {
        closeButtonText: 'No',
        actionButtonText: 'Yes',
        headerText: 'Delete?',
        bodyText: 'Are you sure you want to delete this song list?'
    };
	ModalService.showModal({}, modalOptions)
        .then(function (result) {
          console.log(result);
            SongListsService.deleteSongList(id).then(function(res) {
            	me.songlistslist = res.data.songlist;
            	console.log(res.data.message);
            }).catch(function(err) {
            	console.log(err);
            });
        },function (err) {
            console.log(err);
        });
  	};
  }
}

export default SonglistsListController;
