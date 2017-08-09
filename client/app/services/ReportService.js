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
        getSalesByGeographyChart(query) {
            // var chartDetails = $http({
            //     url: `${baseUrl}/getDODChart`,
            //     method: "GET",
            //     params: query,
            //     headers: getHeaders()
            // });
            // return chartDetails;
            var data;
            if (query.territoryRepresentation === '1') {
                data = {
                    "songid": "123456",
                    "songName": "Apple in Basket",
                    "daysInRange": 10,
                    "dateRange": "Aug 1, 2017 to Aug 7, 2017",
                    "totalSongSales": 1200,
                    "salesByGeography": [{
                            "geographyId": "geo123",
                            "geographyType": "territory",
                            "geographyName": "Jamaica",
                            "totalGeographySales": 250,
                            "salesByDate": [{
                                    "date": "Aug 1",
                                    "totalDaySales": 60,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 40,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 30
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 15
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 2",
                                    "totalDaySales": 40,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 25
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 3",
                                    "totalDaySales": 35,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 5
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 4",
                                    "totalDaySales": 55,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 20
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 25,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 15
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 5",
                                    "totalDaySales": 25,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 12,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 8
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 13,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 3
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 6",
                                    "totalDaySales": 20,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 7",
                                    "totalDaySales": 15,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 9,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 6
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 3
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 6,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 6
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "geographyId": "geo234",
                            "geographyType": "territory",
                            "geographyName": "Guyana",
                            "totalGeographySales": 150,
                            "salesByDate": [{
                                    "date": "Aug 1",
                                    "totalDaySales": 40,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 14
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 16
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 2",
                                    "totalDaySales": 25,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 14
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 6
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 5,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 5
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 3",
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
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 8
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 2
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 4",
                                    "totalDaySales": 10,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 4,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 4
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 6,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 6
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 5",
                                    "totalDaySales": 5,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 5,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 5
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 20
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 0,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 6",
                                    "totalDaySales": 10,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 7,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 7
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 3,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 3
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 7",
                                    "totalDaySales": 20,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 5,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 3
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 2
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "geographyId": "geo345",
                            "geographyType": "territory",
                            "geographyName": "France",
                            "totalGeographySales": 200,
                            "salesByDate": [{
                                    "date": "Aug 1",
                                    "totalDaySales": 15,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 12,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 8
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 3,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 3
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 2",
                                    "totalDaySales": 60,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 40,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 30
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 15
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                },

                                {
                                    "date": "Aug 3",
                                    "totalDaySales": 10,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 0,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 4",
                                    "totalDaySales": 15,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 9,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 6
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 3
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 6,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 6
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 5",
                                    "totalDaySales": 30,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 15
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 6",
                                    "totalDaySales": 25,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 5
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 7",
                                    "totalDaySales": 45,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 20
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "geographyId": "geo456",
                            "geographyType": "territory",
                            "geographyName": "Belgium",
                            "totalGeographySales": 250,
                            "salesByDate": [{
                                    "date": "Aug 1",
                                    "totalDaySales": 35,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 5
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 2",
                                    "totalDaySales": 55,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 20
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 25,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 15
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 3",
                                    "totalDaySales": 60,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 40,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 30
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 15
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 4",
                                    "totalDaySales": 40,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 25
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                },

                                {
                                    "date": "Aug 5",
                                    "totalDaySales": 25,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 12,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 8
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 13,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 3
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 6",
                                    "totalDaySales": 20,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 7",
                                    "totalDaySales": 15,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 9,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 6
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 3
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 6,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 6
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "geographyId": "geo567",
                            "geographyType": "territory",
                            "geographyName": "United States",
                            "totalGeographySales": 150,
                            "salesByDate": [{
                                    "date": "Aug 1",
                                    "totalDaySales": 40,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 14
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 16
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 2",
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
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 8
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 2
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 3",
                                    "totalDaySales": 25,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 14
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 6
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 5,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 5
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 4",
                                    "totalDaySales": 10,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 4,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 4
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 6,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 6
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 5",
                                    "totalDaySales": 20,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 5,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 3
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 2
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 6",
                                    "totalDaySales": 5,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 5,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 5
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 20
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 0,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 7",
                                    "totalDaySales": 10,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 7,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 7
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 3,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 3
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "geographyId": "geo678",
                            "geographyType": "territory",
                            "geographyName": "United Kingdom",
                            "totalGeographySales": 200,
                            "salesByDate": [{
                                    "date": "Aug 1",
                                    "totalDaySales": 60,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 40,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 30
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 15
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 2",
                                    "totalDaySales": 30,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 15
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 3",
                                    "totalDaySales": 25,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 5
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 4",
                                    "totalDaySales": 45,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 20
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 5",
                                    "totalDaySales": 15,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 12,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 8
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 3,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 3
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 6",
                                    "totalDaySales": 10,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 0,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 7",
                                    "totalDaySales": 15,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 9,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 6
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 3
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 6,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 6
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            } else {
                data = {
                    "songid": "123456",
                    "songName": "Apple in Basket",
                    "daysInRange": 10,
                    "dateRange": "Aug 1, 2017 to Aug 7, 2017",
                    "totalSongSales": 1200,
                    "salesByGeography": [{
                            "geographyId": "geo123",
                            "geographyType": "territoryGroup",
                            "geographyName": "Carribean",
                            "totalGeographySales": 400,
                            "salesByTerritory": [{
                                    "territoryId": "ter123",
                                    "territoryName": "Jamaica",
                                    "totalTerritorySales": 250
                                },
                                {
                                    "territoryId": "ter123",
                                    "territoryName": "Guyana",
                                    "totalTerritorySales": 150
                                }
                            ],
                            "salesByDate": [{
                                    "date": "Aug 1",
                                    "totalDaySales": 50,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 13
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 17
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 8
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 12
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 2",
                                    "totalDaySales": 70,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 20
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 40,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 15
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 25
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 3",
                                    "totalDaySales": 55,
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
                                                    "totalSales": 15
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 18
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 12
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 4",
                                    "totalDaySales": 40,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 25,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 12
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 13
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 5",
                                    "totalDaySales": 60,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 25,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 8
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 17
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 35,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 22
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 13
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 6",
                                    "totalDaySales": 75,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 50,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 40
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 25,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 20
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 7",
                                    "totalDaySales": 50,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 24,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 15
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 9
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 26,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 20
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 6
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "geographyId": "geo234",
                            "geographyType": "territoryGroup",
                            "geographyName": "French Speaking Countries",
                            "totalGeographySales": 450,
                            "salesByTerritory": [{
                                    "territoryId": "ter123",
                                    "territoryName": "France",
                                    "totalTerritorySales": 320
                                },
                                {
                                    "territoryId": "ter123",
                                    "territoryName": "Belgium",
                                    "totalTerritorySales": 130
                                }
                            ],
                            "salesByDate": [{
                                    "date": "Aug 1",
                                    "totalDaySales": 80,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 17
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 13
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 50,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 18
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 32
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 2",
                                    "totalDaySales": 45,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 20
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 5
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 15
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 3",
                                    "totalDaySales": 55,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 40,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 20
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 20
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 15
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 4",
                                    "totalDaySales": 70,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 50,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 40
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 5
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 15
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 5",
                                    "totalDaySales": 65,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 20
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 35,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 20
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 15
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 6",
                                    "totalDaySales": 50,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 15
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 35,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 20
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 15
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 7",
                                    "totalDaySales": 85,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 25,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 17
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 8
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 60,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 20
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 40
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "geographyId": "geo345",
                            "geographyType": "territory",
                            "geographyName": "United States",
                            "totalGeographySales": 150,
                            "salesByDate": [{
                                    "date": "Aug 1",
                                    "totalDaySales": 40,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 14
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 16
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 2",
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
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 8
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 2
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 3",
                                    "totalDaySales": 25,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 14
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 6
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 5,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 5
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 4",
                                    "totalDaySales": 10,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 4,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 4
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 6,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 6
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 5",
                                    "totalDaySales": 20,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 5,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 3
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 2
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 6",
                                    "totalDaySales": 5,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 5,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 5
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 20
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 0,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 7",
                                    "totalDaySales": 10,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 7,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 7
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 3,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 3
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "geographyId": "geo456",
                            "geographyType": "territory",
                            "geographyName": "United Kingdom",
                            "totalGeographySales": 200,
                            "salesByDate": [{
                                    "date": "Aug 1",
                                    "totalDaySales": 60,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 40,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 30
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 15
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 2",
                                    "totalDaySales": 30,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 20,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 15
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 3",
                                    "totalDaySales": 25,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 5
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 4",
                                    "totalDaySales": 45,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 30,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 20
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 15,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 10
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 5",
                                    "totalDaySales": 15,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 12,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 8
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 5
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 3,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 3
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 6",
                                    "totalDaySales": 10,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 10,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 10
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 0,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 0
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "date": "Aug 7",
                                    "totalDaySales": 15,
                                    "salesByRetailer": [{
                                            "id": "1",
                                            "retailerName": "Spotify",
                                            "totalRetailerSales": 9,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 6
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 3
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            "retailerName": "iTunes",
                                            "totalRetailerSales": 6,
                                            "salesByTime": [{
                                                    "timeRange": "04:00 - 05:00",
                                                    "totalSales": 6
                                                },
                                                {
                                                    "timeRange": "05:00 - 06:00",
                                                    "totalSales": 0
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
            return data;

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