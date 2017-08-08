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
                url: `${baseUrl}/getDODChart`,
                method: "GET",
                params: query,
                headers: getHeaders()
            });
            return chartDetails;
        },
        getSalesByTerritoryChart(query) {
            // var chartDetails = $http({
            //     url: `${baseUrl}/getDODChart`,
            //     method: "GET",
            //     params: query,
            //     headers: getHeaders()
            // });
            // return chartDetails;
            return {
                "songid": "123456",
                "songName": "Apple in Basket",
                "daysInRange": 10,
                "dateRange": "Jun 1, 2017 to Jun 10, 2017",
                "totalSongSales": 350,
                "salesByTerritory": [{
                        "territoryid": "123456",
                        "territoryName": "United States",
                        "totalTerritorySales": 150,
                        "salesByDate": [{
                                "date": "June 1",
                                "totalDaySales": 70,
                                "salesByRetailer": [{
                                        "id": "1",
                                        "retailerName": "Spotify",
                                        "totalRetailerSales": 40,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 12
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 12
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 16
                                            }
                                        ]
                                    },
                                    {
                                        "id": "2",
                                        "retailerName": "iTunes",
                                        "totalRetailerSales": 30,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 7
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 9
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 14
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "date": "June 2",
                                "totalDaySales": 50,
                                "salesByRetailer": [{
                                        "id": "1",
                                        "retailerName": "Spotify",
                                        "totalRetailerSales": 20,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 10
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 5
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 5
                                            }
                                        ]
                                    },
                                    {
                                        "id": "2",
                                        "retailerName": "iTunes",
                                        "totalRetailerSales": 30,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 15
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 7
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 8
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "date": "June 3",
                                "totalDaySales": 30,
                                "salesByRetailer": [{
                                        "id": "1",
                                        "retailerName": "Spotify",
                                        "totalRetailerSales": 20,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 10
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 4
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 6
                                            }
                                        ]
                                    },
                                    {
                                        "id": "2",
                                        "retailerName": "iTunes",
                                        "totalRetailerSales": 10,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 2
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 5
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "territoryid": "78956",
                        "territoryName": "United Kingdom",
                        "totalTerritorySales": 200,
                        "salesByDate": [{
                                "date": "June 1",
                                "totalDaySales": 40,
                                "salesByRetailer": [{
                                        "id": "1",
                                        "retailerName": "Spotify",
                                        "totalRetailerSales": 25,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 10
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 10
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 5
                                            }
                                        ]
                                    },
                                    {
                                        "id": "2",
                                        "retailerName": "iTunes",
                                        "totalRetailerSales": 15,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 7
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 5
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "date": "June 2",
                                "totalDaySales": 90,
                                "salesByRetailer": [{
                                        "id": "1",
                                        "retailerName": "Spotify",
                                        "totalRetailerSales": 35,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 15
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 12
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 8
                                            }
                                        ]
                                    },
                                    {
                                        "id": "2",
                                        "retailerName": "iTunes",
                                        "totalRetailerSales": 55,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 17
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 15
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 23
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "date": "June 3",
                                "totalDaySales": 70,
                                "salesByRetailer": [{
                                        "id": "1",
                                        "retailerName": "Spotify",
                                        "totalRetailerSales": 40,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 10
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 10
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 20
                                            }
                                        ]
                                    },
                                    {
                                        "id": "2",
                                        "retailerName": "iTunes",
                                        "totalRetailerSales": 30,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 12
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 8
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 10
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
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