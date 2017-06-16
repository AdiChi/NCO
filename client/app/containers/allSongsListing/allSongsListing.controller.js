class AllSongsListingController {
  constructor(SongsService) {
  	"ngInject";
  	var vm = this;
  	vm.name = "allSongsList";
  	vm.SongsService = SongsService;
  	vm.songs = vm.songs || [];
  	vm.sel = vm.sel || [];
  	vm.itemsByPage = 7;

  	vm.SongsService.getSongs().then(function(res) {
      vm.songs = res;
    }, function(err) {
    	console.log(err);
    });

    vm.displayCollection = [].concat(vm.songs);

    vm.selectAll = function (collection) {
		if (vm.sel.length === 0) {
		  angular.forEach(collection, function(val) {
		    vm.sel.push(val.id); 
		  });
		} else if (vm.sel.length > 0 && vm.sel.length != vm.songs.length) {
		  angular.forEach(collection, function(val) {
		    var found = vm.sel.indexOf(val.id);
		    if(found == -1)
		    	vm.sel.push(val.id);
		  });

		} else  {
		  vm.sel = [];
		}
	};

	// Function to get data by selecting a single row
	vm.select = function(id) {
		var found = vm.sel.indexOf(id);

		if(found == -1)
			vm.sel.push(id);
		else
			vm.sel.splice(found, 1);
	};
  }
}

export default AllSongsListingController;
