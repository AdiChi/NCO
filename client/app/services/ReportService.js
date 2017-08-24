function ReportService($http, config, superCache) {
    "ngInject";
    var baseUrl = config.apiUrl; //change as per need
    var getHeaders = function () {
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
            }).catch(function (error) {
                console.log(error);
            });
            return songs;
        },
        getSongListBySearch(query) {
            var songList = $http({
                url: `${baseUrl}/searchSongList/${query}`,
                method: "GET",
                headers: getHeaders()
            }).catch(function (error) {
                console.log(error);
            });
            return songList;
        },
        getTerritories() {
            var territories = $http.get(`${baseUrl}/nco/territoryList`, {
                    headers: getHeaders()
                })
                .catch(function (error) {
                    console.log(error);
                });
            return territories;
        },
        getTerritoryGroups() {
            var TGs = $http.get(`${baseUrl}/nco/territoryGroupList`, {
                    headers: getHeaders()
                })
                .catch(function (error) {
                    console.log(error);
                });
            return TGs;
        },
        getRetailers() {
            var retailers = $http.get(`${baseUrl}/nco/orgList`, {
                    headers: getHeaders()
                })
                .catch(function (error) {
                    console.log(error);
                });

            return retailers;
        },
        getCitiesBySearch(query) {
            var cities = $http({
                url: `${baseUrl}/searchCity/${query}`,
                method: "GET",
                headers: getHeaders()
            }).catch(function(error) {
                console.log(error);
            });
            return cities;
        },
        getAllCities() {
            var cities = $http({
                url: `${baseUrl}/nco/searchByCity`,
                method: "GET",
                headers: getHeaders()
            }).catch(function(error) {
                console.log(error);
            });
            return cities;
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
            return {
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
                                "totalTerritorySales": 250,
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
                                "territoryId": "ter123",
                                "territoryName": "Guyana",
                                "totalTerritorySales": 150,
                                "salesByDate": [{
                                        "date": "Aug 1",
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
                                        "date": "Aug 2",
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
                                        "totalDaySales": 15,
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
                                                "totalRetailerSales": 10,
                                                "salesByTime": [{
                                                        "timeRange": "04:00 - 05:00",
                                                        "totalSales": 6
                                                    },
                                                    {
                                                        "timeRange": "05:00 - 06:00",
                                                        "totalSales": 4
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
                                                        "totalSales": 5
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
                    },
                    {
                        "geographyId": "geo234",
                        "geographyType": "territoryGroup",
                        "geographyName": "French Speaking Countries",
                        "totalGeographySales": 450,
                        "salesByTerritory": [{
                                "territoryId": "ter123",
                                "territoryName": "France",
                                "totalTerritorySales": 200,
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
                                                        "totalSales": 4
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
                                "territoryId": "ter123",
                                "territoryName": "Belgium",
                                "totalTerritorySales": 250,
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
                                        "totalDaySales": 50,
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
                                                        "totalSales": 20
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
                                "totalDaySales": 15,
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
                                                "totalSales": 0
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
            };
        },
        getSalesByCityChart(query) {
            // var chartDetails = $http({
            //     url: `${baseUrl}/getSBCChart`,
            //     method: "GET",
            //     params: query,
            //     headers: getHeaders()
            // });
            // return chartDetails;
            return {
                "songid": "123456",
                "songName": "Apple in Basket",
                "daysInRange": 10,
                "dateRange": "Aug 1, 2017 to Aug 7, 2017",
                "totalSongSales": 1200,
                "salesByCity": [{
                        "cityId": "city123",
                        "cityName": "Los Angeles",
                        "totalCitySales": 250,
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
                        "cityId": "city234",
                        "cityName": "Texas",
                        "totalCitySales": 150,
                        "salesByDate": [{
                                "date": "Aug 1",
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
                                "date": "Aug 2",
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
                                "totalDaySales": 15,
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
                                        "totalRetailerSales": 10,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 6
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 4
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
                                                "totalSales": 5
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
                        "cityId": "city345",
                        "cityName": "Houston",
                        "totalCitySales": 200,
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
                                                "totalSales": 4
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
                        "cityId": "city456",
                        "cityName": "Dallas",
                        "totalCitySales": 250,
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
                                "totalDaySales": 50,
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
                                                "totalSales": 20
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
                        "cityId": "city567",
                        "cityName": "Beaumont",
                        "totalCitySales": 150,
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
                                "totalDaySales": 15,
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
                                                "totalSales": 0
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
                        "cityId": "city678",
                        "cityName": "Phoenix",
                        "totalCitySales": 200,
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
            };
        },
        getDODMulitpleChart(query) {
            var chartDetails = $http({
                url: `${baseUrl}/getMSDODChart`,
                method: "GET",
                params: query,
                headers: getHeaders()
            });
            return chartDetails;
        },
        getSOSChart(query) {
            var chartDetails = $http({
                url: `${baseUrl}/getMSSDRChart`,
                method: "GET",
                params: query,
                headers: getHeaders()
            });
            return chartDetails;
        }
    }
}

export default ReportService;