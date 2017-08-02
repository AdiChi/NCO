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
    getDODChart(query) {
      var chartDetails = $http({
        url: `${baseUrl}/getDODChart`,
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
    },

    getDODMulitpleChart(query) {

      return {
        "daysInRange": 10,
        "firstRange": "Jun 1, 2017 to Jun 10, 2017",
        "secondRange": "Jul 1, 2017 to Jul 10, 2017",
        "salesPerSong": [{
            "songid": "123456",
            "songName": "Apple in Basket",
            "totalSongSales": 160000,
            "salesFirstRange": [{
                "date": "Jun 1",
                "totalDaySales": 30000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": 10000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 5000,
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
                        "territoryName": "India",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 1000,
                          }
                        ]
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": 2000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 600,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 400,
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": 20000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 10000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 4000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 3000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 6000,
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
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": 4000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 1000,
                          }
                        ]
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
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 5000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
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
                        "territoryName": "India",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 0,
                          }
                        ]
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": 2000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 200,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 800,
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": "15000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "5000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "6000",
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": "4000",
                      }
                    ]
                  }
                ]
              },
              {
                "date": "Jun 3",
                "totalDaySales": 25000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": 15000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 5000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1500,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1500,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 2000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1200,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 800,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 1000,
                          }
                        ]
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": 7000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 3000,
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": 10000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 1000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 0,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 1000,
                          }
                        ]
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": 4000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1200,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1100,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 700,
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "salesSecondRange": [{
                "date": "Jul 1",
                "totalDaySales": 32000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": 18000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 8000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 2000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 7000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 2500,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 1500,
                          }
                        ]
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2200,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 800,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 0,
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": 14000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 7000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 0,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 4000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 3000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 2000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 200,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 800,
                          }
                        ]
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": 5000,
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
                            "totalSales": 1000,
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "date": "Jul 2",
                "totalDaySales": 22000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": 10000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 1000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 4000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1000,
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
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1200,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1200,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 600,
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": "12000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 6000,
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
                        "territoryName": "India",
                        "totalTerrSales": 4000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 1000,
                          }
                        ]
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": 2000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 0,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 0,
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "date": "Jul 3",
                "totalDaySales": 26000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": 12000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 8000,
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
                            "totalSales": 4000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 0,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 0,
                          }
                        ]
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": 1000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 500,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 200,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 300,
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": 14000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 7000,
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
                            "totalSales": 3000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 2000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1200,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 800,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 0,
                          }
                        ]
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": 5000,
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
                            "totalSales": 1000,
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
            "songid": "789123",
            "songName": "Fine Day",
            "totalSongSales": 200000,
            "salesFirstRange": [{
                "date": "Jun 1",
                "totalDaySales": 30000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": 10000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 5000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
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
                        "territoryName": "India",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 1000,
                          }
                        ]
                      },
                      {
                        "id": "5",
                        "territoryName": "Italy",
                        "totalTerrSales": 2000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1200,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 800,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 0,
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": 20000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 10000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 4000,
                          }
                        ]
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": 6000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 2000,
                          }
                        ]
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": 4000,
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
                            "totalSales": 0,
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "date": "Jun 2",
                "totalDaySales": 35000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": 20000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 12000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 5000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 4000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 0,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 0,
                          }
                        ]
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": 5000,
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
                            "totalSales": 1000,
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": 15000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 5000,
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
                            "totalSales": 1000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 6000,
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
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": 4000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 0,
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
                "date": "Jun 3",
                "totalDaySales": 35000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": 20000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 5000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 0,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 8000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 3000,
                          }
                        ]
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": 7000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 2000,
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
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": "15000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 4000,
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
                            "totalSales": 0,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 5000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
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
                        "id": "5",
                        "territoryName": "Italy",
                        "totalTerrSales": 6000,
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
            ],
            "salesSecondRange": [{
                "date": "Jul 1",
                "totalDaySales": 42000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": 22000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 9000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 3000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 8000,
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
                            "totalSales": 4000,
                          }
                        ]
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": 5000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 0,
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": 20000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 7000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 1000,
                          }
                        ]
                      },
                      {
                        "id": "5",
                        "territoryName": "Italy",
                        "totalTerrSales": 2000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 0,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 0,
                          }
                        ]
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": 11000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 8000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 8000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 5000,
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "date": "Jul 2",
                "totalDaySales": 26000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": 10000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 3000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 0,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 0,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 4000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 0,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 4000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 0,
                          }
                        ]
                      },
                      {
                        "id": "5",
                        "territoryName": "Italy",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 1000,
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": "16000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 6000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 3000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 4000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 1000,
                          }
                        ]
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": 6000,
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
                "date": "Jul 3",
                "totalDaySales": 32000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": 18000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 8000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 4000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 2000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 3000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 1000,
                          }
                        ]
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": 7000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 2000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 3000,
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": 14000,
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": 7000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 4000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 0,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 3000,
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": 2000,
                        "salesByTime": [{
                            "timeRange": "04:00 - 05:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "05:00 - 06:00",
                            "totalSales": 1000,
                          },
                          {
                            "timeRange": "06:00 - 07:00",
                            "totalSales": 0,
                          }
                        ]
                      },
                      {
                        "id": "5",
                        "territoryName": "Italy",
                        "totalTerrSales": 5000,
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
                            "totalSales": 1000,
                          }
                        ]
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
  }
}

export default ReportService;