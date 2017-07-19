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
                            dailySales: '',
                        },
                        chart: {
                            firstValue: '50,20,10,40,15',
                            firstColumnName: 'New York',
                            secondValue: '25,15,40,10,20',
                            secondColumnName: 'Los Angeles',
                            thirdValue: '30,20,15,14,30',
                            thirdColumnName: 'Chicago',
                            templateUrl: 'app/templates/charts/spline.html',
                            xLabels: 'Jul 1, Jul 2, Jul 3, Jul 4, Jul 5'
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
                            firstValue: '50,20,10,40,15',
                            firstColumnName: 'New York',
                            secondValue: '25,15,40,10,20',
                            secondColumnName: 'Los Angeles',
                            thirdValue: '30,20,15,14,30',
                            thirdColumnName: 'Chicago',
                            templateUrl: 'app/templates/charts/bar.html',
                            xLabels: 'Jul 1, Jul 2, Jul 3, Jul 4, Jul 5'
                        }
                    }, {
                        header: 'Popularity',
                        info: {
                            totalSales: '7,653',
                            openCampaign: '852',
                            dailySales: ''
                        },
                        chart: {
                            firstValue: '50,20,10,40,15',
                            firstColumnName: 'New York',
                            secondValue: '25,15,40,10,20',
                            secondColumnName: 'Los Angeles',
                            thirdValue: '30,20,15,14,30',
                            thirdColumnName: 'Chicago',
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
                            dailySales: ''
                        },
                        chart: {
                            firstValue: '100,250,120,240,150',
                            firstColumnName: 'USA',
                            secondValue: '125,150,340,100,200',
                            secondColumnName: 'UK',
                            thirdValue: '300,250,150,154,230',
                            thirdColumnName: 'Canada',
                            templateUrl: 'app/templates/charts/bar.html',
                            xLabels: 'Jul 1, Jul 2, Jul 3, Jul 4, Jul 5'
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
                            firstValue: '100,250,120,240,150',
                            firstColumnName: 'USA',
                            secondValue: '125,150,340,100,200',
                            secondColumnName: 'UK',
                            thirdValue: '300,250,150,154,230',
                            thirdColumnName: 'Canada',
                            templateUrl: 'app/templates/charts/donut.html'
                        }
                    }, {
                        header: 'Daily Sales',
                        info: {
                            totalSales: '5,753',
                            openCampaign: '678',
                            dailySales: ''
                        },
                        chart: {
                            firstValue: '100,250,120,240,150',
                            firstColumnName: 'USA',
                            secondValue: '125,150,340,100,200',
                            secondColumnName: 'UK',
                            thirdValue: '300,250,150,154,230',
                            thirdColumnName: 'Canada',
                            templateUrl: 'app/templates/charts/spline.html',
                            xLabels: 'Jul 1, Jul 2, Jul 3, Jul 4, Jul 5'
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
                            dailySales: ''
                        },
                        chart: {
                            firstValue: '150,200,220,250,100',
                            firstColumnName: 'Shape of You',
                            secondValue: '150,180,240,120,220',
                            secondColumnName: 'Starboy',
                            thirdValue: '200,350,250,150,220',
                            thirdColumnName: 'Closer',
                            fourthValue: '250,150,100,180,120',
                            fourthColumnName: 'Be With You',
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
                            firstValue: '150,200,220,250,100',
                            firstColumnName: 'Shape of You',
                            secondValue: '150,180,240,120,220',
                            secondColumnName: 'Starboy',
                            thirdValue: '200,350,250,150,220',
                            thirdColumnName: 'Closer',
                            fourthValue: '250,150,100,180,120',
                            fourthColumnName: 'Be With You',
                            templateUrl: 'app/templates/charts/spline.html',
                            xLabels: 'Jul 1, Jul 2, Jul 3, Jul 4, Jul 5'
                        }
                    }, {
                        header: 'Daily Sales',
                        info: {
                            totalSales: '7,676',
                            openCampaign: '456',
                            dailySales: ''
                        },
                        chart: {
                            firstValue: '150,200,220,250,100',
                            firstColumnName: 'Shape of You',
                            secondValue: '150,180,240,120,220',
                            secondColumnName: 'Starboy',
                            thirdValue: '200,350,250,150,220',
                            thirdColumnName: 'Closer',
                            fourthValue: '250,150,100,180,120',
                            fourthColumnName: 'Be With You',
                            templateUrl: 'app/templates/charts/bar.html',
                            xLabels: 'Jul 1, Jul 2, Jul 3, Jul 4, Jul 5'
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