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
        getTerritories() {
            var territories = $http.get(`${baseUrl}/nco/territoryList`, { headers: getHeaders() })
                .catch(function(error) {
                    console.log(error);
                });
            return territories;
        },
        getTerritoryGroups() {
            var TGs = $http.get(`${baseUrl}/nco/territoryGroupList`, { headers: getHeaders() })
                .catch(function(error) {
                    console.log(error);
                });
            return TGs;
        },
        getRetailers() {
            var retailers = $http.get(`${baseUrl}/nco/orgList`, { headers: getHeaders() })
                .catch(function(error) {
                    console.log(error);
                });

            return retailers;
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
                    "songid": "Y66000000995",
                    "daysInRange": 1,
                    "firstRange": "Jul 7, 2016 to Jul 7, 2016",
                    "secondRange": "Jul 7, 2016 to Jul 7, 2016",
                    "timerange1": "09:00-12:22",
                    "timerange2": "19:00-22:11",
                    "salesFirstRange": [{
                        "totalsales": 2,
                        "orgRetailerList": [{
                            "territoryList": [{
                                "terrSalesByHour": [{
                                    "totalSalesByHours": 2,
                                    "terrId": "46",
                                    "orgId": "2",
                                    "date": "Thu Jul 07 05:30:00 IST 2016",
                                    "range": "9 - 12"
                                }],
                                "id": 46,
                                "name": "United States",
                                "type": "Territory",
                                "totalSaleTerr": 2
                            }],
                            "id": 2,
                            "name": "iTunes",
                            "totalSaleRetailer": 2
                        }],
                        "date": "Jul 07, 16"
                    }],
                    "salesSecondRange": [{
                        "totalsales": 4,
                        "orgRetailerList": [{
                            "territoryList": [{
                                "terrSalesByHour": [{
                                        "totalSalesByHours": 1,
                                        "terrId": "46",
                                        "orgId": "2",
                                        "date": "Thu Jul 07 05:30:00 IST 2016",
                                        "range": "19 - 20"
                                    },
                                    {
                                        "totalSalesByHours": 1,
                                        "terrId": "46",
                                        "orgId": "2",
                                        "date": "Thu Jul 07 05:30:00 IST 2016",
                                        "range": "17 - 23"
                                    }
                                ],
                                "id": 46,
                                "name": "United States",
                                "type": "Territory",
                                "totalSaleTerr": 2
                            }],
                            "id": 2,
                            "name": "iTunes",
                            "totalSaleRetailer": 2
                        }],
                        "date": "Jul 07, 16"
                    }]
                }
            });*/
            return chartDetails;
        },
        getTimeRangeData() {
            var chartDetails = Promise.resolve({
                data: {
                    "songid": "Y66000000067",
                    "timerange": "04:00 to 08:00",
                    "date": "Feb 01, 17",
                    "salesByHour": [{
                            "range": "04:00 - 05:00",
                            "sales": 200
                        },
                        {
                            "range": "05:00 - 06:00",
                            "sales": 200
                        },
                        {
                            "range": "06:00 - 07:00",
                            "sales": 200
                        },
                        {
                            "range": "07:00 - 08:00",
                            "sales": 200
                        }
                    ]
                }
            });

            return chartDetails;
        }
    }
}

export default ReportService;