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
                "totalSongSales": 260000,
                "salesByTerritory": [{
                        "territoryid": "123456",
                        "territoryName": "United States",
                        "totalTerritorySales": 160000,
                        "salesByDate": [{
                                "date": "Jun 1",
                                "totalDaySales": 30000,
                                "salesByRetailer": [{
                                        "id": "1",
                                        "retailerName": "Spotify",
                                        "totalRetailerSales": 10000,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3000,
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 1000,
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 2000,
                                            }
                                        ]
                                    },
                                    {
                                        "id": "2",
                                        "retailerName": "iTunes",
                                        "totalRetailerSales": 20000,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3000,
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 1000,
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 2000,
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "date": "Jun 2",
                                "totalDaySales": 25000,
                                "salesByRetailer": [{
                                        "id": "1",
                                        "retailerName": "Spotify",
                                        "totalRetailerSales": 10000,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3000,
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 1000,
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 2000,
                                            }
                                        ]
                                    },
                                    {
                                        "id": "2",
                                        "retailerName": "iTunes",
                                        "totalRetailerSales": "15000",
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3000,
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 1000,
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 2000,
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "date": "Jun 3",
                                "totalDaySales": 20000,
                                "salesByRetailer": [{
                                        "id": "1",
                                        "retailerName": "Spotify",
                                        "totalRetailerSales": 15000,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3000,
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 1000,
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 2000,
                                            }
                                        ]
                                    },
                                    {
                                        "id": "2",
                                        "retailerName": "iTunes",
                                        "totalRetailerSales": 10000,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3000,
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 1000,
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 2000,
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
                        "totalTerritorySales": 170000,
                        "salesByDate": [{
                                "date": "Jun 1",
                                "totalDaySales": 25000,
                                "salesByRetailer": [{
                                        "id": "1",
                                        "retailerName": "Spotify",
                                        "totalRetailerSales": 10000,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3000,
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 1000,
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 2000,
                                            }
                                        ]
                                    },
                                    {
                                        "id": "2",
                                        "retailerName": "iTunes",
                                        "totalRetailerSales": 22000,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3000,
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 1000,
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 2000,
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "date": "Jun 2",
                                "totalDaySales": 37000,
                                "salesByRetailer": [{
                                        "id": "1",
                                        "retailerName": "Spotify",
                                        "totalRetailerSales": 10000,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3000,
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 1000,
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 2000,
                                            }
                                        ]
                                    },
                                    {
                                        "id": "2",
                                        "retailerName": "iTunes",
                                        "totalRetailerSales": "15000",
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3000,
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 1000,
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 2000,
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "date": "Jun 3",
                                "totalDaySales": 30000,
                                "salesByRetailer": [{
                                        "id": "1",
                                        "retailerName": "Spotify",
                                        "totalRetailerSales": 15000,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3000,
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 1000,
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 2000,
                                            }
                                        ]
                                    },
                                    {
                                        "id": "2",
                                        "retailerName": "iTunes",
                                        "totalRetailerSales": 10000,
                                        "salesByTime": [{
                                                "timeRange": "04:00 - 05:00",
                                                "totalSales": 3000,
                                            },
                                            {
                                                "timeRange": "05:00 - 06:00",
                                                "totalSales": 1000,
                                            },
                                            {
                                                "timeRange": "06:00 - 07:00",
                                                "totalSales": 2000,
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