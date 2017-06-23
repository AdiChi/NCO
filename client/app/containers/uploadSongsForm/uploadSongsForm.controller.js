class UploadSongsFormController {
    constructor(SongsService, $scope, $state) {
    	"ngInject";
        var vm = this;
        vm.name = "uploadSongsForm";
        vm.itemsByPage = 8;
        vm.uploadXmlFile = function(event) {
            var files = event.target.files;
            $scope.$apply(function() {
                vm.file = files[0];
            });
        };
        vm.updateConfirm = function() {
        	vm.dataLoading = true;
        	SongsService.updateMaster(vm.jsonSongs).then(function(res) {
                if (res.data.response === "Success") {
                	vm.jsonSongs = [];
                	vm.dataLoading = false;
                	vm.successmsg = "Songs uploaded";
                	vm.showRedirectBtn = true;
                	// $state.go('app.songlists');
                } else {
                	$state.reload();
                }
            }, function(err) {
                console.log(err);
            });
		};
		vm.cancelEdit = function () {
			$state.reload();
		};
        vm.uploadXml = function() {
            var fd = new FormData();
            fd.append('file', vm.file);
			vm.dataLoading = true;

            SongsService.sendXml(fd).then(function(res) {
                vm.jsonSongs = res.data.songs;
                vm.successmsg = "File uploaded";
				vm.displayCollection = [].concat(vm.jsonSongs);
            }, function(err) {
                console.log(err);
            }).finally(function() {
            	vm.dataLoading = false;
                // vm.successmsg = "XML file uploaded";
            });
            delete vm.file;
        };
    }
}

export default UploadSongsFormController;
