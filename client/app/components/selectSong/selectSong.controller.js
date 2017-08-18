class SelectSongController {
    constructor($scope, $q, ReportService) {
        'ngInject'

        this.details = {};
        this.showData = false;

        $scope.$watch('songSearch', (name) => {
            if (name && name.length >= 3) {
                this.fetchSongs(name);
            } else if (name && name.length === 0) {
                this.details = {
                    songs: []
                };
            }
        });

        this.fetchSongs = function (name) {
            this.details = {
                songs: []
            };
            $q.all([ReportService.getSongsBySearch(name)
                .then((response) => {
                    if (!this.details.songs) {
                        this.details.songs = [].concat(response.data);
                    } else {
                        this.details.songs = this.details.songs.concat(response.data);
                    }
                }),

                ReportService.getSongListBySearch(name)
                .then((response) => {
                    if (!this.details.songs) {
                        this.details.songs = [].concat(response.data);
                    } else {
                        this.details.songs = this.details.songs.concat(response.data);
                    }
                })
            ]).then(() => {
                this.showData = true;
            })
        };

        this.updateSong = function (song) {
            if (this.details)
                delete this.details.songs;
            if (this.multipleSongs) {
                this.selectedSong.push(song);
            } else {
                this.selectedSong = song;
            }
            this.errorMessage = "";
        };
    }
}

export default SelectSongController;