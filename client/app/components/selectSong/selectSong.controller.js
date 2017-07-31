class SelectSongController {
    constructor($scope, ReportService) {
        'ngInject'

        this.details = {};

        $scope.$watch('songSearch', (name) => {
            if (name && name.length >= 3) {
                this.fetchSongs(name);
            } else if (name && name.length === 0) {
                this.details = {
                    songs: []
                };
            }
        });

        this.fetchSongs = function(name) {
            ReportService.getSongsBySearch(name)
                .then((response) => {
                    this.details.songs = response.data;
                });
        };

        this.updateSong = function(song) {
            if (this.details)
                delete this.details.songs;
            if (this.multipleSongs) {
                this.selectedSong.push(song);
            } else {
                this.selectedSong = song;
            }
            this.songError = "";
        };
    }
}

export default SelectSongController;