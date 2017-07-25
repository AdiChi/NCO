function SongsService($http, config, superCache) {
    "ngInject";
    var baseUrl = config.apiUrl;//change as per need
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
    function toMasterSong(r){
        /*var dataresponse = r.data.map(function (item) {
            let song = {
                "id": item.id,
                "albumname": item.albumname,
                "trackname": item.trackname,
                "artist": item.artist,
                "artistdesc": item.artistdesc,
                "isrc": item.isrc,
                "year": item.year
            };
            return song;
        });*/
        superCache.put("allMasterSongs", r.data);
        return r.data;
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
        getMasterSongs() {
            var cachedVal = superCache.get("allMasterSongs");
            if(!cachedVal) {
                var songs = $http.get(`${baseUrl}/getmastersongs`,{headers: getHeaders()})
                    .then(toMasterSong)
                    .catch(function(error) {
                        console.log(error);
                    });
                return songs;
            } else {
                return Promise.resolve(cachedVal);
            }
        },
        getSong(id) {
            var song = $http.get(`${baseUrl}/getSong/${id}`,{headers: getHeaders()})
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
                    };
                })
                .catch(function(error) {
                    console.log(error);
                });

            return song;
            // return {
            //         "id": "5928207b55649882af1e6126",
            //         "isrc": "USANA0431901",
            //         "artistdesc": "Spectacular Baroque and Classical chamber music",
            //         "artist": "American Baroque",
            //         "songid": null,
            //         "trackname": "Oboe Quartet in F (K370) - Allegro",
            //         "albumname": "Mozart 4 Quartets for Strings and Winds",
            //         "year": "2003",
            //         "page": null,
            //         "tracknum": null,
            //         "mp3genre": null,
            //         "magnatunegenres": null,
            //         "seconds": null,
            //         "buy": null,
            //         "home": null,
            //         "bio": null,
            //         "bandphotolarge": null,
            //         "bandphoto": null,
            //         "launchdate": null,
            //         "albumsku": null,
            //         "upc": null,
            //         "city_state": null,
            //         "country": null,
            //         "download_mp3": null,
            //         "download_mp3lofi": null
            //         };
        },
        sendXml(fd) {

            return $http.post(`${baseUrl}/xmlimport`, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            });
        },
        updateMaster(data) {
            var res = {
                "track":data
            };
            return $http.post(`${baseUrl}/updatemaster`, (res), {headers: getHeaders()});
        },
        updateMasterSongs(data) {
            var res = {
                "masterSongs": data
            };
            return $http.post(`${baseUrl}/updatemastersongs`, (res), {headers: getHeaders()});
        }
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