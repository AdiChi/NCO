function SongsService($http, superCache) {
    "ngInject";
    var baseUrl = 'http://172.27.108.132:8085';//change as per need
    var getHeaders= function() {
        var headers = {
           'Accept': 'application/json'
        };
        return headers;
    };

    function toSong(r){
        var dataresponse = r.data.map(function (item) {
            let song = {
                "id": item.id,
                "albumname": item.albumname,
                "trackname": item.trackname,
                "artist": item.artist,
                "artistdesc": item.artistdesc,
                "isrc": item.isrc,
                "year": item.year
                // "albumsku": item.albumsku,
                // "bandphoto": item.bandphoto,
                // "bandphotolarge": item.bandphotolarge,
                // "bio": item.bio,
                // "buy": item.buy,
                // "city_state": item.city_state,
                // "country": item.country,
                // "download_mp3": item.download_mp3,
                // "download_mp3lofi": item.download_mp3lofi,
                // "home": item.home,
                // "launchdate": item.launchdate,
                // "magnatunegenres": item.magnatunegenres,
                // "mp3genre": item.mp3genre,
                // "page": item.page,
                // "seconds": item.seconds,
                // "songid": item.songid,
                // "tracknum": item.tracknum,
                // "upc": item.upc,
            };
            return song;
        });
        superCache.put("allSongs", dataresponse);
        return dataresponse;
    }
    return {

        getSongs() {
            var cachedVal = superCache.get("allSongs");
            if(!cachedVal) {
                var songs = $http.get(`${baseUrl}/songs`,{headers: getHeaders()})
                    .then(toSong)
                    .catch(function(error) {
                        console.log(error);
                    });
                return songs;
            } else {
                return Promise.resolve(cachedVal);
            }
        },
        getSong(id) {
            var song = $http.get(`${baseUrl}/songs/${id}`,{headers: getHeaders()})
                .then(function(r) {
                    var item = r.data;
                    return {
                        "id": item.id,
                        "albumname": item.albumname,
                        "trackname": item.trackname,
                        "artist": item.artist,
                        "artistdesc": item.artistdesc,
                        "isrc": item.isrc,
                        "year": item.year
                        // "albumsku": item.albumsku,
                        // "bandphoto": item.bandphoto,
                        // "bandphotolarge": item.bandphotolarge,
                        // "bio": item.bio,
                        // "buy": item.buy,
                        // "city_state": item.city_state,
                        // "country": item.country,
                        // "download_mp3": item.download_mp3,
                        // "download_mp3lofi": item.download_mp3lofi,
                        // "home": item.home,
                        // "launchdate": item.launchdate,
                        // "magnatunegenres": item.magnatunegenres,
                        // "mp3genre": item.mp3genre,
                        // "page": item.page,
                        // "seconds": item.seconds,
                        // "songid": item.songid,
                        // "tracknum": item.tracknum,
                        // "upc": item.upc,
                    };
                })
                .catch(function(error) {
                    console.log(error);
                });

            return song;}
        // },
        // createSong(song) {
        //     const {name, address} = song;

        //     const tempSong = {
        //         name,
        //         address
        //     };

        //     return $http.put(`${baseUrl}/song`, (tempSong), {headers: getHeaders()});
        // },

        // updateSong(song) {
        //     return $http.post(`${baseUrl}/song/${song.id}`, (song), {headers: getHeaders()});
        // },
        
        // deleteSong(songid) {

        //     return $http.delete(`${baseUrl}/song/${songid}`, {headers: getHeaders()});
        // }
    }
}

export default SongsService;