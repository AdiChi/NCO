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
                console.log(res);
                vm.jsonSongs = res.data.songs;
                vm.successmsg = "XML file uploaded";
            }, function(err) {
                console.log(err);
            }).finally(function() {
            	vm.dataLoading = false;
                vm.successmsg = "XML file uploaded";
            	vm.jsonSongs = [{
				    "id" : "592bc4b1d6431aec4eca55dc",
				    "country" : "USA",
				    "city_state" : "CA",
				    "artist" : "American Baroque",
				    "year" : 2003,
				    "artistdesc" : "Spectacular Baroque and Classical chamber music",
				    "albumname" : "Mozart 4 Quartets for Strings and Winds",
				    "seconds" : 394,
				    "genres" : "Classical,Classical Period,Orchestral,Instrumental",
				    "trackname" : "Oboe Quartet in F (K370) - Allegro",
				    "upc" : "876809003197",
				    "isrc" : "USANA0431901",
				    "mp3genre" : "Classical",
				    "launchdate" : "2004-01-14",
				    "songid" : 15911661
				},{
				    "id" : "592bc4b1d6431aec4eca55dc",
				    "country" : "USA",
				    "city_state" : "CA",
				    "artist" : "American Baroque",
				    "year" : 2003,
				    "artistdesc" : "Spectacular Baroque and Classical chamber music",
				    "albumname" : "Mozart 4 Quartets for Strings and Winds",
				    "seconds" : 394,
				    "genres" : "Classical,Classical Period,Orchestral,Instrumental",
				    "trackname" : "Oboe Quartet in F (K370) - Allegro",
				    "upc" : "876809003197",
				    "isrc" : "USANA0431901",
				    "mp3genre" : "Classical",
				    "launchdate" : "2004-01-14",
				    "songid" : 15911661
				},
				{
				    "id" : "592bc4b1d6431aec4eca55dd",
				    "country" : "USA",
				    "city_state" : "CA",
				    "artist" : "American Baroque",
				    "year" : 2003,
				    "artistdesc" : "Spectacular Baroque and Classical chamber music",
				    "albumname" : "Mozart 4 Quartets for Strings and Winds",
				    "seconds" : 202,
				    "genres" : "Classical,Classical Period,Orchestral,Instrumental",
				    "trackname" : "Oboe Quartet in F (K370) - Adagio",
				    "upc" : "876809003197",
				    "isrc" : "USANA0431902",
				    "mp3genre" : "Classical",
				    "launchdate" : "2004-01-14",
				    "songid" : 15911662
				},{
				    "id" : "592bc4b1d6431aec4eca55dc",
				    "country" : "USA",
				    "city_state" : "CA",
				    "artist" : "American Baroque",
				    "year" : 2003,
				    "artistdesc" : "Spectacular Baroque and Classical chamber music",
				    "albumname" : "Mozart 4 Quartets for Strings and Winds",
				    "seconds" : 394,
				    "genres" : "Classical,Classical Period,Orchestral,Instrumental",
				    "trackname" : "Oboe Quartet in F (K370) - Allegro",
				    "upc" : "876809003197",
				    "isrc" : "USANA0431901",
				    "mp3genre" : "Classical",
				    "launchdate" : "2004-01-14",
				    "songid" : 15911661
				},
				{
				    "id" : "592bc4b1d6431aec4eca55dd",
				    "country" : "USA",
				    "city_state" : "CA",
				    "artist" : "American Baroque",
				    "year" : 2003,
				    "artistdesc" : "Spectacular Baroque and Classical chamber music",
				    "albumname" : "Mozart 4 Quartets for Strings and Winds",
				    "seconds" : 202,
				    "genres" : "Classical,Classical Period,Orchestral,Instrumental",
				    "trackname" : "Oboe Quartet in F (K370) - Adagio",
				    "upc" : "876809003197",
				    "isrc" : "USANA0431902",
				    "mp3genre" : "Classical",
				    "launchdate" : "2004-01-14",
				    "songid" : 15911662
				},
				{
				    "id" : "592bc4b1d6431aec4eca55dd",
				    "country" : "USA",
				    "city_state" : "CA",
				    "artist" : "American Baroque",
				    "year" : 2003,
				    "artistdesc" : "Spectacular Baroque and Classical chamber music",
				    "albumname" : "Mozart 4 Quartets for Strings and Winds",
				    "seconds" : 202,
				    "genres" : "Classical,Classical Period,Orchestral,Instrumental",
				    "trackname" : "Oboe Quartet in F (K370) - Adagio",
				    "upc" : "876809003197",
				    "isrc" : "USANA0431902",
				    "mp3genre" : "Classical",
				    "launchdate" : "2004-01-14",
				    "songid" : 15911662
				},{
				    "id" : "592bc4b1d6431aec4eca55dc",
				    "country" : "USA",
				    "city_state" : "CA",
				    "artist" : "American Baroque",
				    "year" : 2003,
				    "artistdesc" : "Spectacular Baroque and Classical chamber music",
				    "albumname" : "Mozart 4 Quartets for Strings and Winds",
				    "seconds" : 394,
				    "genres" : "Classical,Classical Period,Orchestral,Instrumental",
				    "trackname" : "Oboe Quartet in F (K370) - Allegro",
				    "upc" : "876809003197",
				    "isrc" : "USANA0431901",
				    "mp3genre" : "Classical",
				    "launchdate" : "2004-01-14",
				    "songid" : 15911661
				},
				{
				    "id" : "592bc4b1d6431aec4eca55dd",
				    "country" : "USA",
				    "city_state" : "CA",
				    "artist" : "American Baroque",
				    "year" : 2003,
				    "artistdesc" : "Spectacular Baroque and Classical chamber music",
				    "albumname" : "Mozart 4 Quartets for Strings and Winds",
				    "seconds" : 202,
				    "genres" : "Classical,Classical Period,Orchestral,Instrumental",
				    "trackname" : "Oboe Quartet in F (K370) - Adagio",
				    "upc" : "876809003197",
				    "isrc" : "USANA0431902",
				    "mp3genre" : "Classical",
				    "launchdate" : "2004-01-14",
				    "songid" : 15911662
				},
				{
				    "id" : "592bc4b1d6431aec4deca55dc",
				    "country" : "USA",
				    "city_state" : "CA",
				    "artist" : "FRENCH Baroque",
				    "year" : 2003,
				    "artistdesc" : "Hello",
				    "albumname" : "Fire Winds",
				    "seconds" : 394,
				    "genres" : "Classical",
				    "trackname" : "Mil gaye",
				    "upc" : "876809003197",
				    "isrc" : "USANA0431903",
				    "mp3genre" : "Classical",
				    "launchdate" : "2004-01-14",
				    "songid" : 1591441
				},
				{
				    "id" : "592bc4b1d6fdfdecds4eca55dd",
				    "country" : "USA",
				    "city_state" : "CA",
				    "artist" : "Krish",
				    "year" : 2003,
				    "artistdesc" : "Greenday",
				    "albumname" : "Apples",
				    "seconds" : 205,
				    "genres" : "Instrumental",
				    "trackname" : "John - Adagio",
				    "upc" : "876809003197",
				    "isrc" : "USANA0431904",
				    "mp3genre" : "Classical",
				    "launchdate" : "2004-01-10",
				    "songid" : 15911652
				}
			];
			vm.displayCollection = [].concat(vm.jsonSongs);
            });
            delete vm.file;
        };
    }
}

export default UploadSongsFormController;
