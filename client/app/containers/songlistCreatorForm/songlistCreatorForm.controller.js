class SonglistCreatorFormController {
  constructor(SongListsService, $state) {
  	"ngInject";

    this.$state           = $state;
    this.SongListsService = SongListsService;

    this.songlist         = {};
  }

  addSonglist() {
  	var me = this;
    if(!this.songlist.songListName) return alert('Name is Required');
    if(!this.songlist.description) return alert('Description is required');
    this.songlist.songs = [];
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
  }
}

export default SonglistCreatorFormController;
