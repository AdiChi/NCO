class EditAllSongsFormController {
    constructor(SongsService, $state) {
        "ngInject";
        var vm = this;
        vm.name = "editAllSongs";
        vm.SongsService = SongsService;
        vm.jsonSongs = vm.jsonSongs || [];
        vm.sel = vm.sel || [];
        vm.itemsByPage = 10;

        vm.SongsService.getSongs().then(function(res) {
            vm.jsonSongs = res;
        }, function(err) {
            console.log(err);
        });
        vm.updateConfirm = function() {
            vm.dataLoading = true;
            vm.SongsService.updateMasterSongs(vm.jsonSongs).then(function(res) {
                if (res.data.response === "Success") {} else {
                    $state.reload();
                }
                vm.dataLoading = false;
            }, function(err) {
                vm.dataLoading = false;
                console.log(err);
            });
        };
        vm.cancelEdit = function() {
            console.log("YO");
            $state.reload();
        };
        vm.displayCollection = [].concat(vm.jsonSongs);
    }
}

export default EditAllSongsFormController;
