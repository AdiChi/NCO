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
        "firstRange": "Jun 1, 2017 to Jun 3, 2017",
        "secondRange": "Jul 1, 2017 to Jul 3, 2017",
        "salesPerSong": [{
            "songid": "123456",
            "songName": "Apple in Basket",
            "totalSongSales": 160000,
            "salesFirstRange": [{
                "date": "Jun 01, 2017",
                "totalDaySales": 30000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": "10000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "5000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "3000",
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": "2000",
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": "20000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "10000",
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
                "date": "Jun 02, 2017",
                "totalDaySales": 25000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": "10000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "5000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "3000",
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": "2000",
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
                "date": "Jun 03, 2017",
                "totalDaySales": 25000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": "15000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "5000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "3000",
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": "7000",
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": "10000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "3000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "3000",
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": "4000",
                      }
                    ]
                  }
                ]
              }
            ],
            "salesSecondRange": [{
                "date": "Jul 01, 2017",
                "totalDaySales": 32000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": "18000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "8000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "7000",
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": "3000",
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": "14000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "7000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "2000",
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": "5000",
                      }
                    ]
                  }
                ]
              },
              {
                "date": "Jul 02, 2017",
                "totalDaySales": 22000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": "10000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "3000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "4000",
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": "3000",
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
                        "totalTerrSales": "6000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "4000",
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": "2000",
                      }
                    ]
                  }
                ]
              },
              {
                "date": "Jul 03, 2017",
                "totalDaySales": 26000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": "12000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "8000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "3000",
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": "1000",
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": "14000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "7000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "2000",
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": "5000",
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
                "date": "Jun 01, 2017",
                "totalDaySales": 30000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": "10000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "5000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "3000",
                      },
                      {
                        "id": "5",
                        "territoryName": "Italy",
                        "totalTerrSales": "2000",
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": "20000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "10000",
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
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
                "date": "Jun 02, 2017",
                "totalDaySales": 35000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": "20000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "12000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "3000",
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": "5000",
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
                "date": "Jun 03, 2017",
                "totalDaySales": 35000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": "20000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "5000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "8000",
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": "7000",
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
                        "totalTerrSales": "4000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "5000",
                      },
                      {
                        "id": "5",
                        "territoryName": "Italy",
                        "totalTerrSales": "6000",
                      }
                    ]
                  }
                ]
              }
            ],
            "salesSecondRange": [{
                "date": "Jul 01, 2017",
                "totalDaySales": 42000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": "22000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "9000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "8000",
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": "5000",
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": "20000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "7000",
                      },
                      {
                        "id": "5",
                        "territoryName": "Italy",
                        "totalTerrSales": "2000",
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": "11000",
                      }
                    ]
                  }
                ]
              },
              {
                "date": "Jul 02, 2017",
                "totalDaySales": 26000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": "10000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "3000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "4000",
                      },
                      {
                        "id": "5",
                        "territoryName": "Italy",
                        "totalTerrSales": "3000",
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
                        "totalTerrSales": "6000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "4000",
                      },
                      {
                        "id": "4",
                        "territoryName": "UK",
                        "totalTerrSales": "6000",
                      }
                    ]
                  }
                ]
              },
              {
                "date": "Jul 03, 2017",
                "totalDaySales": 32000,
                "salesByRetailer": [{
                    "id": "1",
                    "retailerName": "Spotify",
                    "totalRetailerSales": "18000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "8000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "3000",
                      },
                      {
                        "id": "3",
                        "territoryName": "France",
                        "totalTerrSales": "7000",
                      }
                    ]
                  },
                  {
                    "id": "2",
                    "retailerName": "iTunes",
                    "totalRetailerSales": "14000",
                    "salesByTerritory": [{
                        "id": "1",
                        "territoryName": "USA",
                        "totalTerrSales": "7000",
                      },
                      {
                        "id": "2",
                        "territoryName": "India",
                        "totalTerrSales": "2000",
                      },
                      {
                        "id": "5",
                        "territoryName": "Italy",
                        "totalTerrSales": "5000",
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