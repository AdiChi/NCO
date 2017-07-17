class AllSongsListingController {
	constructor($scope, SongsService) {
		"ngInject";
		var vm = this;
		vm.name = "allSongsList";
		vm.SongsService = SongsService;
		vm.songs = vm.songs || [];
		vm.sel = vm.sel || [];
		vm.itemsByPage = 7;

		vm.SongsService.getSongs().then(function (res) {
			vm.songs = res;
		}, function (err) {
			console.log(err);
		});

		vm.displayCollection = [].concat(vm.songs);

		vm.selectAll = function (collection) {
			var filteredCollection = ($scope.filtered.length > collection.length) ? collection : $scope.filtered;

			if (vm.sel.length === 0) {
				angular.forEach(filteredCollection, function (val) {
					vm.sel.push(val.id);
				});
			} else {
				vm.sel = [];
			}
		};

		$scope.onFilter = function (stCtrl) {
			$scope.filtered = stCtrl.getFilteredCollection();
		}

		// Function to get data by selecting a single row
		vm.select = function (id) {
			var found = vm.sel.indexOf(id);

			if (found == -1)
				vm.sel.push(id);
			else
				vm.sel.splice(found, 1);
		};
	}
}

export default AllSongsListingController;
