function ArtistService($http, config, superCache) {
    "ngInject";
    var baseUrl = config.apiUrl;//change as per need
    var getHeaders = function () {
        var headers = {
            'Accept': 'application/json'
        };
        return headers;
    };

    function toArtist(r) {
        var dataresponse = r.data.map(function (item) {
            let artist = {
                "artistId": item.artistId,
                "artistName": item.displayName,
                "genre": item.genre,
                "instruments": item.instruments,
                "role": item.role,
                "type": item.type,
                "member": item.member
            };
            return artist;
        });
        superCache.put("allArtists", dataresponse);
        return dataresponse;
    }
    return {

        getArtists() {
            var cachedVal = superCache.get("allArtists");
            if (!cachedVal) {
                var artists = $http.get(`${baseUrl}/artistList`, { headers: getHeaders() })
                    .then(toArtist)
                    .catch(function (error) {
                        console.log(error);
                    });
                return artists;
            } else {
                return Promise.resolve(cachedVal);
            }
        },
        getArtist(id) {
            var artist = $http.get(`${baseUrl}/artist/${id}`, { headers: getHeaders() })
                .then(function (r) {
                    var item = r.data;
                    return {
                        "artistId": item.artistId,
                        "artistName": item.displayName,
                        "genre": item.genre,
                        "instruments": item.instruments,
                        "role": item.role,
                        "type": item.type,
                        "member": item.member
                    };
                })
                .catch(function (error) {
                    console.log(error);
                });

            return artist;
        }
    }
}

export default ArtistService;