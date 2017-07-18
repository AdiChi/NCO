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
                        header: 'Total Revenue',
                        info: {
                            totalSales: '7,653',
                            openCampaign: '852',
                            dailySales: ''
                        },
                        chart: {
                            firstValue: '50,20,10,40,15,25',
                            secondValue: '25,15,40,10,20,50',
                            templateUrl: 'app/templates/charts/spline.html'
                        }

                    },
                    {
                        header: 'Statistics',
                        info: {
                            totalSales: '1,507',
                            openCampaign: '916',
                            dailySales: '22'
                        },
                        chart: {
                            firstValue: '50,20,10,40,15,25',
                            secondValue: '25,15,40,10,20,50',
                            templateUrl: 'app/templates/charts/bar.html'
                        }
                    }, {
                        header: 'Daily Sales',
                        info: {
                            totalSales: '7,653',
                            openCampaign: '852',
                            dailySales: ''
                        },
                        chart: {
                            firstValue: '50,20,10,40,15,25',
                            secondValue: '25,15,40,10',
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
                            firstValue: '40,15,25,20,10,50',
                            secondValue: '10,20,25,15,40,50',
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
                            firstValue: '50,20,10,40,15,25',
                            secondValue: '25,15,40,10,20,50',
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
                            firstValue: '50,20,10,40,15,25',
                            secondValue: '25,15,40,10,20,50',
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
                            dailySales: ''
                        },
                        chart: {
                            firstValue: '40,15,25,50,20,10',
                            secondValue: '10,20,50,25,15,40',
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
                            firstValue: '40,15,25,50,20,10',
                            secondValue: '10,20,50,25,15,40',
                            templateUrl: 'app/templates/charts/spline.html'
                        }
                    }, {
                        header: 'Daily Sales',
                        info: {
                            totalSales: '7,676',
                            openCampaign: '456',
                            dailySales: ''
                        },
                        chart: {
                            firstValue: '40,15,25,50,20,10',
                            secondValue: '10,20,50,25,15,40',
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