function SongListsService($http) {
    "ngInject";
    var baseUrl = 'http://172.27.108.132:8085';//change as per need
    var getHeaders= function() {
        var headers = {
           'Accept': 'application/json'
        };
        return headers;
    };

    function toSongList(r){
        return r.data.map(function (item) {
            let songList = {
                "id": item.id,
                "songListName": item.songListName,
                "description": item.description,
                "songs": item.songs
            };
            return songList;
        });
    }
    return {

        getSongLists() {
            var songlists = $http.get(`${baseUrl}/songlist`,{headers: getHeaders()})
                .then(toSongList)
                .catch(function(error) {
                    console.log(error);
                });
            return songlists;
        },
        getSongList(id) {
            var songlist = $http.get(`${baseUrl}/songlist/${id}`,{headers: getHeaders()})
                .then(function(r) {
                    var item = r.data;
                    return {
                        "id": item.id,
                        "songListName": item.songListName,
                        "description": item.description,
                        "songs": item.songs
                    };
                })
                .catch(function(error) {
                    console.log(error);
                });
            return songlist;
        },
        createSongList(list) {
            const {songListName, description, songs} = list;

            const tempSongList = {
                songListName, description, songs
            };

            return $http.post(`${baseUrl}/songlist`, (tempSongList), {headers: getHeaders()});
        },

        updateSongList(songlist) {
            return $http.put(`${baseUrl}/songlist/song`, (songlist), {headers: getHeaders()});
        },
        
        deleteSongList(id) {

            return $http.delete(`${baseUrl}/songlist/${id}`, {headers: getHeaders()});
        }
    }
}

export default SongListsService;