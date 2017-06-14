class SonglistUpdateFormController {
  constructor($state, $stateParams, SongListsService) {
    "ngInject";
    var me = this;
    this.$state = $state;
    this.SongListsService = SongListsService;

    this.id = $stateParams.id;
    me.songlist = {};
    this.SongListsService.getSongList(this.id).then(function(res){
      me.songlist = res;
    });

  	this.displayCollection = [].concat(this.songlist.songs);
  	this.itemsByPage = 10;

  	var vm = this;
	vm.selected = []; 

	vm.selectAll = function (collection) {
		if (vm.selected.length === 0) {
		  angular.forEach(collection, function(val) {
		    vm.selected.push(val.id); 
		  });
		} else if (vm.selected.length > 0 && vm.selected.length != vm.songlist.songs.length) {
		  angular.forEach(collection, function(val) {
		    var found = vm.selected.indexOf(val.id);
		    if(found == -1)
		    	vm.selected.push(val.id);
		  });

		} else  {
		  vm.selected = [];
		}
	};

	// Function to get data by selecting a single row
	vm.select = function(id) {
		var found = vm.selected.indexOf(id);

		if(found == -1)
			vm.selected.push(id);
		else
			vm.selected.splice(found, 1);
	};

	vm.deleteConfirm = function() {
	  	var toDelete = new Set(this.selected);

	  	console.log(this.songlist.songs.length);

	  	var filteredArr = this.songlist.songs.filter(obj => !toDelete.has(obj.id));

	  	console.log(filteredArr.length);
	  	
	  	this.songlist.songs = filteredArr;
  	};
  	vm.updateSonglist = function() {
	  	var me = this;
	    if(!this.songlist.songListName) return alert('Song list Name is Required');

	    if(!this.songlist.songs) {
	    	this.songlist.songs=[];
	    }
	    this.SongListsService.updateSongList(me.songlist).then(function(res) {
	    	console.log(res);
	    	me.songlist = {};

	    		// go to home page, to see our entry
	    	me.$state.go('app.songlists');
	    }).catch(function(err) {
	    	console.log(err);
	    });

    };
  }
}

export default SonglistUpdateFormController;
