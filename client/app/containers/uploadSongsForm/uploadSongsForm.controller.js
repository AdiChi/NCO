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
        vm.called = function( ) {
            $state.transitionTo("app.editAllSongs",{},{reload: true})
        };
        vm.updateConfirm = function() {
        	vm.dataLoading = true;
        	SongsService.updateMaster(vm.jsonSongs).then(function(res) {
                if (res.data.response === "Success") {
                	vm.jsonSongs = [];
                	vm.dataLoading = undefined;
                	vm.successmsg = "Success!! Songs uploaded";
                	// vm.showRedirectBtn = true;
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
                if (res.data.message == "please check xml file") {
                    vm.successmsg = "Error... Please check uploaded file";
                } else if (res.data.message == "please select xml file") {
                    vm.successmsg = "Error... Please select xml file";
                } else if(res.data.message == "file uploaded successfully") {
                    vm.jsonSongs = res.data.track;
                    vm.successmsg = "Success!! File uploaded";
                    vm.displayCollection = [].concat(vm.jsonSongs);
                }
                
            }, function(err) {
                console.log(err);
                vm.successmsg = "Error! Wrong file type";
            }).finally(function() {
                vm.dataLoading = false;
            });
            delete vm.file;
        };

    }
}

export default UploadSongsFormController;
