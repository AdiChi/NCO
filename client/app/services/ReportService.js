function ReportService($http, config, superCache) {
    "ngInject";
    var baseUrl = config.apiUrl; //change as per need
    var getHeaders = function() {
        var headers = {
            'Accept': 'application/json'
        };
        return headers;
    };

    return {
        getSongsBySearch(query) {
            var songs = $http({
                url: `${baseUrl}/songsBySearch`,
                method: "GET",
                params: { query: query },
                headers: getHeaders()
            }).catch(function(error) {
                console.log(error);
            });
            return songs;
        },
        getDODChart(query) {
            /*var chartDetails = $http({
                url: `${baseUrl}/getDODChart`,
                method: "GET",
                params: { query: query },
                headers: getHeaders()
            }).catch(function(error) {
                console.log(error);
            });*/

            var chartDetails = Promise.resolve({
                songid : 1234,
                firstRange : "May 1, 2017 to May 3, 2017",
                secondRange: "June 1, 2017 to June 3, 2017",
                salesFirstRange: [
                    {
                        day: "May 1",
                        sales: 220
                    },
                    {
                        day: "May 2",
                        sales: 120
                    },
                    {
                        day: "May 3",
                        sales: 234
                    }
                ],
                salesSecondRange : [
                    {
                        day: "June 1",
                        sales: 400
                    },
                    {
                        day: "June 2",
                        sales: 455
                    },
                    {
                        day: "June 3",
                        sales: 211
                    }
                ]
            });
            return chartDetails;
        }
    }
}

export default ReportService;
