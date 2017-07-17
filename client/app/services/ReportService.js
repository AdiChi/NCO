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
            var chartDetails = $http({
                url:  `${baseUrl}/getDODChart`,
                method: "GET",
                params: query,
                headers: getHeaders()
            });
            /*var chartDetails = Promise.resolve( {
              data: {
                  "songid": "Y66000000067",
                  "daysInRange": 10,
                  "firstRange": "Jun 1, 2017 to Jun 10, 2017",
                  "secondRange": "Jul 1, 2017 to Jul 10, 2017",
                  "salesFirstRange": [
                    {
                      "totalsales": 39000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 37000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 43000
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 80000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 42000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 42000
                        }
                      ],
                      "date": "Jun 10, 17"
                    },
                    {
                      "totalsales": 41000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 37000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 43000
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 80000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 42000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 42000
                        }
                      ],
                      "date": "Jun 08, 17"
                    },
                    {
                      "totalsales": 42000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 37000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 43000
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 80000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 42000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 42000
                        }
                      ],
                      "date": "Jun 07, 17"
                    },
                    {
                      "totalsales": 40000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 37000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 43000
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 80000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 42000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 42000
                        }
                      ],
                      "date": "Jun 09, 17"
                    },
                    {
                      "totalsales": 44000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 37000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 43000
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 80000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 42000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 42000
                        }
                      ],
                      "date": "Jun 05, 17"
                    },
                    {
                      "totalsales": 47000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 37000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 43000
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 80000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 42000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 42000
                        }
                      ],
                      "date": "Jun 02, 17"
                    },
                    {
                      "totalsales": 46000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 37000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 43000
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 80000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 42000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 42000
                        }
                      ],
                      "date": "Jun 03, 17"
                    },
                    {
                      "totalsales": 45000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 37000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 43000
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 80000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 42000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 42000
                        }
                      ],
                      "date": "Jun 04, 17"
                    },
                    {
                      "totalsales": 48000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 37000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 43000
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 80000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 42000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 42000
                        }
                      ],
                      "date": "Jun 01, 17"
                    },
                    {
                      "totalsales": 80000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 37000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 43000
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 80000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 42000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 42000
                        }
                      ],
                      "date": "Jun 06, 17"
                    }
                  ],
                  "salesSecondRange": [
                    {
                      "totalsales": 14000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 13000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 13000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 18000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 18000
                        }
                      ],
                      "date": "Jul 05, 17"
                    },
                    {
                      "totalsales": 15000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 13000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 13000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 18000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 18000
                        }
                      ],
                      "date": "Jul 04, 17"
                    },
                    {
                      "totalsales": 13000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 13000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 13000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 18000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 18000
                        }
                      ],
                      "date": "Jul 06, 17"
                    },
                    {
                      "totalsales": 16000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 13000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 13000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 18000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 18000
                        }
                      ],
                      "date": "Jul 03, 17"
                    },
                    {
                      "totalsales": 17000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                             "totalSaleTerr": 13000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 13000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 18000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 18000
                        }
                      ],
                      "date": "Jul 02, 17"
                    },
                    {
                      "totalsales": 18000,
                      "orgRetailerList": [
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 13000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "1",
                          "name": "Spotify",
                          "totalSaleRetailer": 13000
                        },
                        {
                          "territoryList": [
                            {
                              "id": 46,
                              "name": "United States",
                              "totalSaleTerr": 18000
                            },
                            {
                              "id": 47,
                              "name": "India",
                              "totalSaleTerr": 0
                            }
                          ],
                          "id": "2",
                          "name": "iTunes",
                          "totalSaleRetailer": 18000
                        }
                      ],
                      "date": "Jul 01, 17"
                    }
                  ]
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
