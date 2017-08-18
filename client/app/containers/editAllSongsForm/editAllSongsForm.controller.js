class EditAllSongsFormController {
    constructor(SongsService, $state) {
        "ngInject";
        var vm = this;
        vm.name = "editAllSongs";
        vm.SongsService = SongsService;
        vm.jsonSongs = vm.jsonSongs || [];
        vm.sel = vm.sel || [];
        vm.itemsByPage = 10;
        function isIE () {
          var ua = navigator.userAgent;
          return (ua.indexOf('Trident') > 0 || navigator.userAgent.indexOf('MSIE') > 0) ? true : false;
        }
        vm.notIE = !(isIE());

        vm.updateConfirm = function() {
            vm.dataLoading = true;
            vm.SongsService.updateMasterSongs(vm.jsonSongs).then(function(res) {
                if (res.data.response === "Success") {
                    vm.successmsg = "Success!! Songs modified";
                } else {
                    $state.reload();
                }
                vm.dataLoading = false;
            }, function(err) {
                vm.dataLoading = false;
                console.log(err);
            });
        };
        vm.cancelEdit = function() {
            $state.reload();
        };
        vm.displayCollection = [].concat(vm.jsonSongs);
    }
    $onInit() {
        var vm = this;
        vm.SongsService.getMasterSongs().then(function(res) {
            vm.jsonSongs = res;
        }, function(err) {
            console.log(err);
        });
    };
}

export default EditAllSongsFormController;
