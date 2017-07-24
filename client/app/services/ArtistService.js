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
            let song = {
                "artistId": item.artistId,
                "firstName": item.firstName,
                "lastName": item.lastName,
                "genre": item.genre,
                "instruments": item.instruments,
                "occupation": item.occupation,
                "dateOfBirth": item.dateOfBirth
            };
            return song;
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
                        "firstName": item.firstName,
                        "lastName": item.lastName,
                        "genre": item.genre,
                        "instruments": item.instruments,
                        "occupation": item.occupation,
                        "dateOfBirth": item.dateOfBirth
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