class SonglistUpdateFormController {
  constructor($state, $stateParams, SongListsService, ModalService, _) {
    "ngInject";
  	var vm = this;
    this.$state = $state;
    this.SongListsService = SongListsService;
    this.ModalService = ModalService;

    this.id = $stateParams.id;
    vm.songlist = {};
    this.SongListsService.getSongList(this.id).then(function(res){
      vm.songlist = res;
  	  vm.displayCollection2 = [].concat(vm.songlist.songs);
    });

  	this.itemsByPage = 7;

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

	vm.cancelEdit = function() {
		this.$state.go('app.songlists');
	};
	vm.deleteConfirm = function() {
	  	var toDelete = new Set(this.selected);
	  	var filteredArr = this.songlist.songs.filter(obj => !toDelete.has(obj.id));
	  	this.songlist.songs = filteredArr;
	  	this.displayCollection2 = [].concat(this.songlist.songs);
	  	this.selected = [];
  	};
  	vm.updateSonglist = function() {
	  	var vm = this;
	    if(!this.songlist.songListName) return alert('Song list Name is Required');

	    if(!this.songlist.songs) {
	    	this.songlist.songs=[];
	    }
	    this.SongListsService.updateSongList(vm.songlist).then(function(res) {
	    	console.log(res , "response");
	    	vm.songlist = {};

	    		// go to home page, to see our entry
	    	vm.$state.go('app.songlists');
	    }).catch(function(err) {
	    	console.log(err,"error");
	    });

    };
    vm.addSongs = function() {
    	var custMod = {
    		size:'lg',
	        controller: function ($scope, $uibModalInstance) {
                "ngInject";
                $scope.sel = [];
                $scope.songs = [];
                $scope.modalOptions = {
		    		closeButtonText: 'Cancel',
			        actionButtonText: 'Add Songs',
			        headerText: 'Add Songs'
		    	};
                $scope.modalOptions.ok = function (sel,songs) {
                	var toAdd = new Set(sel);
				  	var filteredArr = songs.filter(function(obj){
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
    	ModalService.showModal(custMod,{}).then(function(res){
    		vm.songlist.songs = _.uniq(vm.songlist.songs.concat(res),'isrc');
    		vm.displayCollection2 = [].concat(vm.songlist.songs);
    	}, function(err) {
    		console.log(err);
    	});
    };
  }
}

export default SonglistUpdateFormController;
