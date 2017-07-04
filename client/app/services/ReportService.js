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
                url: `${baseUrl}/searchsongs/${query}`,
                method: "GET",
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
                params: query,
                headers: getHeaders()
            });*/

            var chartDetails = Promise.resolve({
                songid : 1234,
                firstRange : "May 1, 2017 to May 8, 2017",
                secondRange: "June 1, 2017 to June 8, 2017",
                salesFirstRange: [
                    {
                        date: "May 1",
                        totalsales: 220
                    },
                    {
                        date: "May 2",
                        totalsales: 120
                    },
                    {
                        date: "May 3",
                        totalsales: 234
                    },
                    {
                        date: "May 4",
                        totalsales: 432
                    },
                    {
                        date: "May 5",
                        totalsales: 23
                    },
                    {
                        date: "May 6",
                        totalsales: 55
                    },
                    {
                        date: "May 7",
                        totalsales: 567
                    },
                    {
                        date: "May 8",
                        totalsales: 109
                    }
                ],
                salesSecondRange : [
                    {
                        date: "June 1",
                        totalsales: 400
                    },
                    {
                        date: "June 2",
                        totalsales: 455
                    },
                    {
                        date: "June 3",
                        totalsales: 211
                    },
                    {
                        date: "June 4",
                        totalsales: 554
                    },
                    {
                        date: "June 5",
                        totalsales: 332
                    },
                    {
                        date: "June 6",
                        totalsales: 322
                    },
                    {
                        date: "June 7",
                        totalsales: 111
                    },
                    {
                        date: "June 8",
                        totalsales: 33
                    }
                ]
            });
            return chartDetails;
        }
    }
}

export default ReportService;
