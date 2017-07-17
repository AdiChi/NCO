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
        getTerritories() {
            var territories = $http.get(`${baseUrl}/nco/territoryList`, { headers: getHeaders() })
                .catch(function (error) {
                    console.log(error);
                });
            return territories;
        },
        getTerritoryGroups() {
            var TGs = $http.get(`${baseUrl}/nco/territoryGroupList`, { headers: getHeaders() })
                .catch(function (error) {
                    console.log(error);
                });
            return TGs;
        },
        getRetailers() {
            var retailers = $http.get(`${baseUrl}/nco/orgList`, { headers: getHeaders() })
                .catch(function (error) {
                    console.log(error);
                });

            return retailers;
        },
        getDODChart(query) {
            /*var chartDetails = $http({
                url:  `${baseUrl}/nco/completesales`,
                method: "GET",
                // params: query,
                headers: getHeaders()
            });*/
            var chartDetails = Promise.resolve({
                data : {
                  "songid": "Y66000000067",
                  "timerange": "4 to 5",
                  "retailer": "Spotify",
                  "territory": "Alabama",
                  "firstRange": "Feb 1, 2017 to Feb 4, 2017",
                  "secondRange": "Mar 1, 2017 to Mar 4, 2017",
                  "salesFirstRange": [
                    {
                      "totalsales": 400,
                      "retailerList": [
                        {
                          "id": "1",
                          "name": "Spotify",
                          "terrSales": 200,
                          "territoryList": [
                            {
                              "id": "1",
                              "name": "India",
                              "sales": 100
                            },
                            {
                              "id": "12",
                              "name": "USA",
                              "sales": 100
                            }
                          ]
                        },
                        {
                          "id": "2",
                          "name": "Gaana",
                          "terrSales": 200,
                          "territoryList": [
                            {
                              "id": "1",
                              "name": "India",
                              "sales": 50
                            },
                            {
                              "id": "2",
                              "name": "USA",
                              "sales": 150
                            }
                          ]
                        }
                      ],
                      "date": "Feb 01, 17"
                    },
                    {
                      "totalsales": 970,
                      "retailerList": [
                        {
                          "id": "2",
                          "name": "Gaana",
                          "terrSales": 970,
                          "territoryList": [
                            {
                              "id": "2",
                              "name": "India",
                              "sales": 970
                            }
                          ]
                        }
                      ],
                      "date": "Feb 02, 17"
                    },
                    {
                      "totalsales": 1500,
                      "retailerList": [
                        {
                          "id": "2",
                          "name": "Gaana",
                          "terrSales": 1100,
                          "territoryList": [
                            {
                              "id": "2",
                              "name": "Japan",
                              "sales": 1100
                            }
                          ]
                        },
                        {
                          "id": "22",
                          "name": "Saavn",
                          "terrSales": 400,
                          "territoryList": [
                            {
                              "id": "2",
                              "name": "India",
                              "sales": 400
                            }
                          ]
                        }
                      ],
                      "date": "Feb 03, 17"
                    },
                    {
                      "totalsales": 700,
                      "retailerList": [
                        {
                          "id": "2",
                          "name": "Gaana",
                          "terrSales": 100,
                          "territoryList": [
                            {
                              "id": "2",
                              "name": "France",
                              "sales": 100
                            }
                          ]
                        },
                        {
                          "id": "22",
                          "name": "Saavn",
                          "terrSales": 600,
                          "territoryList": [
                            {
                              "id": "2",
                              "name": "India",
                              "sales": 600
                            }
                          ]
                        }
                      ],
                      "date": "Feb 04, 17"
                    }
                  ],
                  "salesSecondRange": [
                    {
                      "totalsales": 1300,
                      "retailerList": [
                        {
                          "id": "1",
                          "name": "Spotify",
                          "terrSales": 300,
                          "territoryList": [
                            {
                              "id": "1",
                              "name": "India",
                              "sales": 200
                            },
                            {
                              "id": "2",
                              "name": "Africa",
                              "sales": 100
                            }
                          ]
                        },
                        {
                          "id": "12",
                          "name": "iTunes",
                          "terrSales": 1000,
                          "territoryList": [
                            {
                              "id": "1",
                              "name": "Canada",
                              "sales": 1000
                            }
                          ]
                        }
                      ],
                      "date": "Mar 01, 17"
                    },
                    {
                      "totalsales": 500,
                      "retailerList": [
                        {
                          "id": "2",
                          "name": "Gaana",
                          "terrSales": 100,
                          "territoryList": [
                            {
                              "id": "2",
                              "name": "France",
                              "sales": 100
                            }
                          ]
                        },
                        {
                          "id": "22",
                          "name": "Saavn",
                          "terrSales": 400,
                          "territoryList": [
                            {
                              "id": "2",
                              "name": "India",
                              "sales": 400
                            }
                          ]
                        }
                      ],
                      "date": "Mar 02, 17"
                    },
                    {
                      "totalsales": 1700,
                      "retailerList": [
                        {
                          "id": "1",
                          "name": "Spotify",
                          "terrSales": 600,
                          "territoryList": [
                            {
                              "id": "1",
                              "name": "India",
                              "sales": 300
                            },
                            {
                              "id": "12",
                              "name": "USA",
                              "sales": 300
                            }
                          ]
                        },
                        {
                          "id": "2",
                          "name": "Gaana",
                          "terrSales": 2100,
                          "territoryList": [
                            {
                              "id": "1",
                              "name": "India",
                              "sales": 600
                            },
                            {
                              "id": "2",
                              "name": "USA",
                              "sales": 1500
                            }
                          ]
                        }
                      ],
                      "date": "Mar 03, 17"
                    },
                    {
                      "totalsales": 2300,
                      "retailerList": [
                        {
                          "id": "1",
                          "name": "Spotify",
                          "terrSales": 300,
                          "territoryList": [
                            {
                              "id": "1",
                              "name": "India",
                              "sales": 1200
                            },
                            {
                              "id": "12",
                              "name": "USA",
                              "sales": 100
                            }
                          ]
                        },
                        {
                          "id": "2",
                          "name": "Gaana",
                          "terrSales": 2000,
                          "territoryList": [
                            {
                              "id": "1",
                              "name": "India",
                              "sales": 1400
                            },
                            {
                              "id": "2",
                              "name": "USA",
                              "sales": 600
                            }
                          ]
                        }
                      ],
                      "date": "Mar 04, 17"
                    }
                  ]
                }
            });
            return chartDetails;
        },
        getTimeRangeData() {
            var chartDetails = Promise.resolve({
                data: {
                    "songid": "Y66000000067",
                    "timerange": "04:00 to 08:00",
                    "date": "Feb 01, 17",
                    "salesByHour": [
                        {
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
