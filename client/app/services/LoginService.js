function LoginService($filter) {
    'ngInject'
    let users = [{
            userId: 'user1',
            fullName: 'Pat Artman',
            email: 'pat.artman@maple.com',
            password: 'password',
            role: 'artist',
            dashboard: {
                theme: 'light',
                widgets: [{
                        header: 'Streaming',
                        info: {
                            totalSales: '7,653',
                            openCampaign: '852',
                            dailySales: '22',
                        },
                        chart: {
                            datapoints : [
                                {"x": "Jul 1", "New York": 231, "Los Angeles": 321, "Chicago": 511},
                                {"x": "Jul 2", "New York": 110, "Los Angeles": 222, "Chicago": 421},
                                {"x": "Jul 3", "New York": 321, "Los Angeles": 122, "Chicago": 221},
                                {"x": "Jul 4", "New York": 432, "Los Angeles": 150, "Chicago": 331},
                                {"x": "Jul 5", "New York": 111, "Los Angeles": 21, "Chicago": 311}
                            ],
                            datacolumns : [
                                {"id": "New York", "type": "spline"},
                                {"id": "Los Angeles", "type": "spline"},
                                {"id": "Chicago", "type": "spline"}
                            ],
                            datax : {"id": "x"},
                            /*firstValue: '50,20,10,40,15',
                            firstColumnName: 'New York',
                            secondValue: '25,15,40,10,20',
                            secondColumnName: 'Los Angeles',
                            thirdValue: '30,20,15,14,30',
                            thirdColumnName: 'Chicago',
                            xLabels: 'Jul 1, Jul 2, Jul 3, Jul 4, Jul 5',*/
                            templateUrl: 'app/templates/charts/spline.html'
                        }

                    },
                    {
                        header: 'Revenue',
                        info: {
                            totalSales: '1,507',
                            openCampaign: '916',
                            dailySales: '22'
                        },
                        chart: {
                            datapoints : [
                                {"x": "Jul 1", "New York": 231, "Los Angeles": 321, "Chicago": 511},
                                {"x": "Jul 2", "New York": 110, "Los Angeles": 222, "Chicago": 421},
                                {"x": "Jul 3", "New York": 321, "Los Angeles": 122, "Chicago": 221},
                                {"x": "Jul 4", "New York": 432, "Los Angeles": 150, "Chicago": 331},
                                {"x": "Jul 5", "New York": 111, "Los Angeles": 21, "Chicago": 311}
                            ],
                            datacolumns : [
                                {"id": "New York", "type": "bar"},
                                {"id": "Los Angeles", "type": "bar"},
                                {"id": "Chicago", "type": "bar"}
                            ],
                            datax : {"id": "x"},
/*                            firstValue: '50,20,10,40,15',
                            firstColumnName: 'New York',
                            secondValue: '25,15,40,10,20',
                            secondColumnName: 'Los Angeles',
                            thirdValue: '30,20,15,14,30',
                            thirdColumnName: 'Chicago',
                            xLabels: 'Jul 1, Jul 2, Jul 3, Jul 4, Jul 5',*/
                            templateUrl: 'app/templates/charts/bar.html'
                        }
                    }, {
                        header: 'Popularity',
                        info: {
                            totalSales: '7,653',
                            openCampaign: '852',
                            dailySales: '22'
                        },
                        chart: {
                            datapoints : [
                                {"x": "Jul 1", "New York": 231, "Los Angeles": 321, "Chicago": 511},
                                {"x": "Jul 2", "New York": 110, "Los Angeles": 222, "Chicago": 421},
                                {"x": "Jul 3", "New York": 321, "Los Angeles": 122, "Chicago": 221},
                                {"x": "Jul 4", "New York": 432, "Los Angeles": 150, "Chicago": 331},
                                {"x": "Jul 5", "New York": 111, "Los Angeles": 21, "Chicago": 311}
                            ],
                            datacolumns : [
                                {"id": "New York", "type": "donut"},
                                {"id": "Los Angeles", "type": "donut"},
                                {"id": "Chicago", "type": "donut"}
                            ],
                            datax : {"id": "x"},
                            /*firstValue: '50,20,10,40,15',
                            firstColumnName: 'New York',
                            secondValue: '25,15,40,10,20',
                            secondColumnName: 'Los Angeles',
                            thirdValue: '30,20,15,14,30',
                            thirdColumnName: 'Chicago',*/
                            templateUrl: 'app/templates/charts/donut.html'
                        }
                    }
                ],
                tiles: {
                    totalExpenses: '9,982',
                    plays: '1023',
                    otherStatus: '290',
                    californiaSales: '1023'
                }
            }
        },
        {
            userId: 'user2',
            fullName: 'Morgan Analyst',
            email: 'morgan.analyst@oak.com',
            password: 'password',
            role: 'analyst',
            dashboard: {
                theme: 'medium',
                widgets: [{
                        header: 'Total Revenue',
                        info: {
                            totalSales: '6,134',
                            openCampaign: '725',
                            dailySales: '34'
                        },
                        chart: {
                            datapoints : [
                                {"x": "Jul 1", "USA": 100, "UK": 321, "Canada": 221},
                                {"x": "Jul 2", "USA": 110, "UK": 130, "Canada": 121},
                                {"x": "Jul 3", "USA": 321, "UK": 140, "Canada": 321},
                                {"x": "Jul 4", "USA": 130, "UK": 150, "Canada": 421},
                                {"x": "Jul 5", "USA": 140, "UK": 160, "Canada": 21}
                            ],
                            datacolumns : [
                                {"id": "USA", "type": "bar"},
                                {"id": "UK", "type": "bar"},
                                {"id": "Canada", "type": "bar"}
                            ],
                            datax : {"id": "x"},
/*                            firstValue: '100,250,120,240,150',
                            firstColumnName: 'USA',
                            secondValue: '125,150,340,100,200',
                            secondColumnName: 'UK',
                            thirdValue: '300,250,150,154,230',
                            thirdColumnName: 'Canada',
                            xLabels: 'Jul 1, Jul 2, Jul 3, Jul 4, Jul 5',*/
                            templateUrl: 'app/templates/charts/bar.html'
                        }

                    },
                    {
                        header: 'Statistics',
                        info: {
                            totalSales: '2,307',
                            openCampaign: '580',
                            dailySales: '34'
                        },
                        chart: {
                            datapoints : [
                                {"x": "Jul 1", "USA": 100, "UK": 321, "Canada": 221},
                                {"x": "Jul 2", "USA": 110, "UK": 130, "Canada": 121},
                                {"x": "Jul 3", "USA": 321, "UK": 140, "Canada": 321},
                                {"x": "Jul 4", "USA": 130, "UK": 150, "Canada": 421},
                                {"x": "Jul 5", "USA": 140, "UK": 160, "Canada": 21}
                            ],
                            datacolumns : [
                                {"id": "USA", "type": "donut"},
                                {"id": "UK", "type": "donut"},
                                {"id": "Canada", "type": "donut"}
                            ],
                            datax : {"id": "x"},
                            /*firstValue: '100,250,120,240,150',
                            firstColumnName: 'USA',
                            secondValue: '125,150,340,100,200',
                            secondColumnName: 'UK',
                            thirdValue: '300,250,150,154,230',
                            thirdColumnName: 'Canada',*/
                            templateUrl: 'app/templates/charts/donut.html'
                        }
                    }, {
                        header: 'Daily Sales',
                        info: {
                            totalSales: '5,753',
                            openCampaign: '678',
                            dailySales: '34'
                        },
                        chart: {
                            datapoints : [
                                {"x": "Jul 1", "USA": 100, "UK": 321, "Canada": 221},
                                {"x": "Jul 2", "USA": 110, "UK": 130, "Canada": 121},
                                {"x": "Jul 3", "USA": 321, "UK": 140, "Canada": 321},
                                {"x": "Jul 4", "USA": 130, "UK": 150, "Canada": 421},
                                {"x": "Jul 5", "USA": 140, "UK": 160, "Canada": 21}
                            ],
                            datacolumns : [
                                {"id": "USA", "type": "spline"},
                                {"id": "UK", "type": "spline"},
                                {"id": "Canada", "type": "spline"}
                            ],
                            datax : {"id": "x"},
/*                            firstValue: '100,250,120,240,150',
                            firstColumnName: 'USA',
                            secondValue: '125,150,340,100,200',
                            secondColumnName: 'UK',
                            thirdValue: '300,250,150,154,230',
                            thirdColumnName: 'Canada',
                            xLabels: 'Jul 1, Jul 2, Jul 3, Jul 4, Jul 5',*/
                            templateUrl: 'app/templates/charts/spline.html'
                        }
                    }
                ],
                tiles: {
                    totalExpenses: '6,235',
                    plays: '987',
                    otherStatus: '351',
                    californiaSales: '1143'
                }
            }
        },
        {
            userId: 'user3',
            fullName: 'Chris Exec',
            email: 'chris.exec@willow.com',
            password: 'password',
            role: 'distributor',
            dashboard: {
                theme: 'dark',
                widgets: [{
                        header: 'Total Revenue',
                        info: {
                            totalSales: '5,567',
                            openCampaign: '654',
                            dailySales: '41'
                        },
                        chart: {
                            datapoints : [
                                {"x": "Jul 1", "Shape of You": 100, "Starboy": 321, "Closer": 221},
                                {"x": "Jul 2", "Shape of You": 110, "Starboy": 130, "Closer": 121},
                                {"x": "Jul 3", "Shape of You": 321, "Starboy": 140, "Closer": 321},
                                {"x": "Jul 4", "Shape of You": 130, "Starboy": 150, "Closer": 421},
                                {"x": "Jul 5", "Shape of You": 140, "Starboy": 160, "Closer": 21}
                            ],
                            datacolumns : [
                                {"id": "Shape of You", "type": "donut"},
                                {"id": "Starboy", "type": "donut"},
                                {"id": "Closer", "type": "donut"}
                            ],
                            datax : {"id": "x"},
                            /*firstValue: '150,200,220,250,100',
                            firstColumnName: 'Shape of You',
                            secondValue: '150,180,240,120,220',
                            secondColumnName: 'Starboy',
                            thirdValue: '200,350,250,150,220',
                            thirdColumnName: 'Closer',
                            fourthValue: '250,150,100,180,120',
                            fourthColumnName: 'Be With You',*/
                            templateUrl: 'app/templates/charts/donut.html'
                        }

                    },
                    {
                        header: 'Statistics',
                        info: {
                            totalSales: '3,563',
                            openCampaign: '563',
                            dailySales: '41'
                        },
                        chart: {
                            datapoints : [
                                {"x": "Jul 1", "Shape of You": 100, "Starboy": 321, "Closer": 221},
                                {"x": "Jul 2", "Shape of You": 110, "Starboy": 130, "Closer": 121},
                                {"x": "Jul 3", "Shape of You": 321, "Starboy": 140, "Closer": 321},
                                {"x": "Jul 4", "Shape of You": 130, "Starboy": 150, "Closer": 421},
                                {"x": "Jul 5", "Shape of You": 140, "Starboy": 160, "Closer": 21}
                            ],
                            datacolumns : [
                                {"id": "Shape of You", "type": "spline"},
                                {"id": "Starboy", "type": "spline"},
                                {"id": "Closer", "type": "spline"}
                            ],
                            datax : {"id": "x"},
/*                            firstValue: '150,200,220,250,100',
                            firstColumnName: 'Shape of You',
                            secondValue: '150,180,240,120,220',
                            secondColumnName: 'Starboy',
                            thirdValue: '200,350,250,150,220',
                            thirdColumnName: 'Closer',
                            fourthValue: '250,150,100,180,120',
                            fourthColumnName: 'Be With You',
                            xLabels: 'Jul 1, Jul 2, Jul 3, Jul 4, Jul 5',*/
                            templateUrl: 'app/templates/charts/spline.html'
                        }
                    }, {
                        header: 'Daily Sales',
                        info: {
                            totalSales: '7,676',
                            openCampaign: '456',
                            dailySales: '41'
                        },
                        chart: {
                            datapoints : [
                                {"x": "Jul 1", "Shape of You": 100, "Starboy": 321, "Closer": 221},
                                {"x": "Jul 2", "Shape of You": 110, "Starboy": 130, "Closer": 121},
                                {"x": "Jul 3", "Shape of You": 321, "Starboy": 140, "Closer": 321},
                                {"x": "Jul 4", "Shape of You": 130, "Starboy": 150, "Closer": 421},
                                {"x": "Jul 5", "Shape of You": 140, "Starboy": 160, "Closer": 21}
                            ],
                            datacolumns : [
                                {"id": "Shape of You", "type": "bar"},
                                {"id": "Starboy", "type": "bar"},
                                {"id": "Closer", "type": "bar"}
                            ],
                            datax : {"id": "x"},
/*                            firstValue: '150,200,220,250,100',
                            firstColumnName: 'Shape of You',
                            secondValue: '150,180,240,120,220',
                            secondColumnName: 'Starboy',
                            thirdValue: '200,350,250,150,220',
                            thirdColumnName: 'Closer',
                            fourthValue: '250,150,100,180,120',
                            fourthColumnName: 'Be With You',
                            xLabels: 'Jul 1, Jul 2, Jul 3, Jul 4, Jul 5',*/
                            templateUrl: 'app/templates/charts/bar.html'
                        }
                    }
                ],
                tiles: {
                    totalExpenses: '7,783',
                    plays: '876',
                    otherStatus: '423',
                    californiaSales: '2102'
                }
            }
        }
    ];

    return {
        validateUser(email, password) {
            var filteredUsers = $filter('filter')(users, { email: email.toLowerCase(), password: password }, true);
            return (filteredUsers.length > 0) ? filteredUsers[0] : null;
        }
    }
}

export default LoginService