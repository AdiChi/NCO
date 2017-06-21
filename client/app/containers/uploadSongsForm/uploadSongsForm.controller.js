class UploadSongsFormController {
    constructor(SongsService, $scope) {
    	"ngInject";
        var vm = this;
        vm.name = "uploadSongsForm";
        vm.uploadXmlFile = function(event) {
            var files = event.target.files;
            $scope.$apply(function() {
                vm.file = files[0];
            });
        };
        vm.uploadXml = function() {
            var fd = new FormData();
            fd.append('file', vm.file);
			vm.dataLoading = true;

            SongsService.sendXml(fd).then(function(res) {
                console.log(res);
                
            }, function(err) {
                console.log(err);
            }).finally(function() {
            	vm.dataLoading = false;

            });
            delete vm.file;
        };
    }
}

export default UploadSongsFormController;
