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
            var chartDetails = $http({
                url:  `${baseUrl}/getDODChart`,
                method: "GET",
                params: query,
                headers: getHeaders()
            });

            /*var chartDetails = Promise.resolve({
                data: {
                    songid: 1234,
                    daysInRange: 8,
                    firstRange: "May 1, 2017 to May 8, 2017",
                    secondRange: "Jun 1, 2017 to Jun 8, 2017",
                    salesFirstRange: [

                        {
                            date: "May 02, 17",
                            totalsales: 120
                        }, {
                            date: "May 03, 17",
                            totalsales: 234
                        }, {
                            date: "May 04, 17",
                            totalsales: 432
                        }, {
                            date: "May 05, 17",
                            totalsales: 23
                        }, {
                            date: "May 06, 17",
                            totalsales: 55
                        }, {
                            date: "May 07, 17",
                            totalsales: 567
                        }, {
                            date: "May 08, 17",
                            totalsales: 109
                        }
                    ],
                    salesSecondRange: [{
                            date: "Jun 01, 17",
                            totalsales: 400
                        }, {
                            date: "Jun 02, 17",
                            totalsales: 455
                        },
                        {
                            date: "Jun 04, 17",
                            totalsales: 554
                        }, {
                            date: "Jun 05, 17",
                            totalsales: 332
                        }, {
                            date: "Jun 06, 17",
                            totalsales: 322
                        }, {
                            date: "Jun 07, 17",
                            totalsales: 111
                        }, {
                            date: "Jun 08, 17",
                            totalsales: 33
                        }
                    ]
                }
            });*/
            return chartDetails;
        }
    }
}

export default ReportService;
