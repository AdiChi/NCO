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
    },
    getDODMulitpleChart(query) {
      var chartDetails = $http({
        url: `${baseUrl}/getMSDODChart`,
        method: "GET",
        params: query,
        headers: getHeaders()
      });
      return chartDetails;
      // return {
      //   "daysInRange": 10,
      //   "firstRange": "Jun 1, 2017 to Jun 5, 2017",
      //   "secondRange": "Jul 1, 2017 to Jul 5, 2017",
      //   "salesPerSong": [
      //     {
      //       "songid": "123456",
      //       "songName": "A Fine Day for Sailing",
      //       "totalSongSales": 365,
      //       "salesFirstRange": [{
      //           "date": "Jun 1",
      //           "totalDaySales": 36,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 9,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 8,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 9,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 2",
      //           "totalDaySales": 40,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 15,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 8,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 4
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 8,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 7,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 3",
      //           "totalDaySales": 45,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 11,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 4",
      //           "totalDaySales": 30,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 8,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 5",
      //           "totalDaySales": 40,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 18,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 6,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 4,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         }
      //       ],
      //       "salesSecondRange": [{
      //           "date": "Jul 1",
      //           "totalDaySales": 22,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 8,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2,
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 6,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1,
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 4,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 4,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 2",
      //           "totalDaySales": 39,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 11,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 6,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 3",
      //           "totalDaySales": 23,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 8,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 9,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 6,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 4",
      //           "totalDaySales": 40,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 11,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 7,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 5",
      //           "totalDaySales": 50,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 14,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         }
      //       ]
      //     },
      //     {
      //       "songid": "789123",
      //       "songName": "Sand Along the Beach",
      //       "totalSongSales": 392,
      //       "salesFirstRange": [{
      //           "date": "Jun 1",
      //           "totalDaySales": 32,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "India",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 9,
      //               "salesByTerritory": [{
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 1,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 2",
      //           "totalDaySales": 38,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 8,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 8,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "India",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 5,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 3",
      //           "totalDaySales": 36,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 9,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 4
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 5,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Spain",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 4",
      //           "totalDaySales": 35,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 5,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 5,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 5",
      //           "totalDaySales": 44,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "Spain",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 14,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         }
      //       ],
      //       "salesSecondRange": [{
      //           "date": "Jul 1",
      //           "totalDaySales": 36,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 11,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2,
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 7,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 2",
      //           "totalDaySales": 35,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 9,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 8,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 7,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 11,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 3",
      //           "totalDaySales": 45,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 7,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 4",
      //           "totalDaySales": 39,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 9,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 6,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 5",
      //           "totalDaySales": 52,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 14,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 7,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 15,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 7,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 7,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         }
      //       ]
      //     },
      //     {
      //       "songid": "6547982",
      //       "songName": "How Many Apples in the Basket",
      //       "totalSongSales": 356,
      //       "salesFirstRange": [{
      //           "date": "Jun 1",
      //           "totalDaySales": 20,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 4,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 6,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 2",
      //           "totalDaySales": 39,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 4,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 4
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 3",
      //           "totalDaySales": 46,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 16,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 7,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 4
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 15,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 7,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 4
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 5,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 4",
      //           "totalDaySales": 29,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 15,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 7,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 14,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 5",
      //           "totalDaySales": 51,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 15,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 7,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 16,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 7,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "China",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 14,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         }
      //       ],
      //       "salesSecondRange": [{
      //           "date": "Jul 1",
      //           "totalDaySales": 43,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 9,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1,
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 11,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0                          },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 11,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 2",
      //           "totalDaySales": 20,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 8,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "China",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 3",
      //           "totalDaySales": 49,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 11,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 11,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 15,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 4",
      //           "totalDaySales": 15,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 8,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 7,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 5",
      //           "totalDaySales": 44,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 8,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         }
      //       ]
      //     },
      //     {
      //       "songid": "256398",
      //       "songName": "How Many Apples in the Basket - Cover by Raging Giraffes",
      //       "totalSongSales": 312,
      //       "salesFirstRange": [{
      //           "date": "Jun 1",
      //           "totalDaySales": 40,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 15,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 7,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 2,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "Australia",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 2",
      //           "totalDaySales": 32,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 7,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 8,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 9,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 3,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 3",
      //           "totalDaySales": 39,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 9,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 9,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "Russian Federation",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 11,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 4",
      //           "totalDaySales": 31,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 15,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 7,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 2,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "Russian Federation",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 14,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jun 5",
      //           "totalDaySales": 41,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 11,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 5,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3                          },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 1,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         }
      //       ],
      //       "salesSecondRange": [{
      //           "date": "Jul 1",
      //           "totalDaySales": 38,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2                          },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 3,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 2",
      //           "totalDaySales": 32,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 8,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 12,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 3",
      //           "totalDaySales": 10,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 6,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 4,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 4",
      //           "totalDaySales": 0,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 0,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 0,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         },
      //         {
      //           "date": "Jul 5",
      //           "totalDaySales": 49,
      //           "salesByRetailer": [{
      //               "id": "1",
      //               "retailerName": "Spotify",
      //               "totalRetailerSales": 13,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "Russian Federation",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 4,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "2",
      //               "retailerName": "iTunes",
      //               "totalRetailerSales": 10,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 5,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "3",
      //               "retailerName": "Dizzy",
      //               "totalRetailerSales": 15,
      //               "salesByTerritory": [{
      //                   "id": "3",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 3
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "1",
      //                   "territoryName": "France",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               "id": "4",
      //               "retailerName": "Deezer",
      //               "totalRetailerSales": 11,
      //               "salesByTerritory": [{
      //                   "id": "1",
      //                   "territoryName": "United States",
      //                   "totalTerrSales": 6,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 2
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 2
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "2",
      //                   "territoryName": "Brazil",
      //                   "totalTerrSales": 2,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 1
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 1
      //                     }
      //                   ]
      //                 },
      //                 {
      //                   "id": "4",
      //                   "territoryName": "United Kingdom",
      //                   "totalTerrSales": 3,
      //                   "salesByTime": [{
      //                       "timeRange": "04:00 - 05:00",
      //                       "totalSales": 0
      //                     },
      //                     {
      //                       "timeRange": "05:00 - 06:00",
      //                       "totalSales": 3
      //                     },
      //                     {
      //                       "timeRange": "06:00 - 07:00",
      //                       "totalSales": 0
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         }
      //       ]
      //     }
      //   ]
      // }
    }
  }
}

export default ReportService;