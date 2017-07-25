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
                header: 'How Many Apples in the Basket [Jul 1 - Jul 5] – New York',
                info: {
                    totalSales: '7,653',
                    openCampaign: '852',
                    dailySales: '22',
                },
                chart: {
                    id: "chart1", //should be unique
                    datapoints: [
                        { "x": "Jul 1", "New York": 231 },
                        { "x": "Jul 2", "New York": 110 },
                        { "x": "Jul 3", "New York": 321 },
                        { "x": "Jul 4", "New York": 432 },
                        { "x": "Jul 5", "New York": 111 }
                    ],
                    datacolumns: [
                        { "id": "New York", "type": "spline" }
                    ],
                    colors: "#fe6d00,#fba700,#8a8888",
                    datax: { "id": "x" },
                    templateUrl: 'app/templates/charts/spline.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
                }

            },
            {
                header: 'How Many Apples in the Basket [Jul 1 - Jul 5] – Los Angeles',
                info: {
                    totalSales: '7,653',
                    openCampaign: '852',
                    dailySales: '22',
                },
                chart: {
                    id: "chart2",
                    datapoints: [
                        { "x": "Jul 1", "Los Angeles": 321 },
                        { "x": "Jul 2", "Los Angeles": 222 },
                        { "x": "Jul 3", "Los Angeles": 122 },
                        { "x": "Jul 4", "Los Angeles": 150 },
                        { "x": "Jul 5", "Los Angeles": 21 }
                    ],
                    datacolumns: [
                        { "id": "Los Angeles", "type": "bar" }
                    ],
                    datax: { "id": "x" },
                    colors: "#fba700,#8a8888,#fe6d00",
                    templateUrl: 'app/templates/charts/bar.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
                }

            },
            {
                header: 'How Many Apples in the Basket [Jul 1 - Jul 5] – Chicago',
                info: {
                    totalSales: '7,653',
                    openCampaign: '852',
                    dailySales: '22',
                },
                chart: {
                    id: "chart3",
                    datapoints: [
                        { "x": "Jul 1", "Chicago": 511 },
                        { "x": "Jul 2", "Chicago": 421 },
                        { "x": "Jul 3", "Chicago": 221 },
                        { "x": "Jul 4", "Chicago": 331 },
                        { "x": "Jul 5", "Chicago": 311 }
                    ],
                    datacolumns: [
                        { "id": "Chicago", "type": "area" }
                    ],
                    datax: { "id": "x" },
                    colors: "#8a8888,#fba700,#fe6d00",
                    templateUrl: 'app/templates/charts/spline.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
                }

            },
            {
                header: 'A Fine Day for Sailing [Jun 1 - Jun 5], [Jul 1 - Jul 5]',
                info: {
                    totalSales: '7,653',
                    openCampaign: '852',
                    dailySales: '22',
                },
                chart: {
                    id: "chart4",
                    datapoints: [
                        { "x": "Jun 1_Jul 1", "Jun 1 - Jun 5": 300, "Jul 1 - Jul 5": 321 },
                        { "x": "Jun 2_Jul 2", "Jun 1 - Jun 5": 200, "Jul 1 - Jul 5": 400 },
                        { "x": "Jun 3_Jul 3", "Jun 1 - Jun 5": 500, "Jul 1 - Jul 5": 450 },
                        { "x": "Jun 4_Jul 4", "Jun 1 - Jun 5": 100, "Jul 1 - Jul 5": 120 },
                        { "x": "Jun 5_Jul 5", "Jun 1 - Jun 5": 150, "Jul 1 - Jul 5": 286 },
                    ],
                    datacolumns: [
                        { "id": "Jun 1 - Jun 5", "type": "donut" },
                        { "id": "Jul 1 - Jul 5", "type": "donut" }
                    ],
                    datax: { "id": "x" },
                    colors: "#fe6d00,#fba700,#8a8888",
                    templateUrl: 'app/templates/charts/donut.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
                }

            },
            {
                header: 'A Fine Day for Sailing – cover by Raging [Jun 1 - Jun 5], [Jul 1 - Jul 5]',
                info: {
                    totalSales: '1,507',
                    openCampaign: '916',
                    dailySales: '22'
                },
                chart: {
                    id: "chart5",
                    datapoints: [
                        { "x": "Jun 1_Jul 1", "Jun 1 - Jun 5": 500, "Jul 1 - Jul 5": 121 },
                        { "x": "Jun 2_Jul 2", "Jun 1 - Jun 5": 250, "Jul 1 - Jul 5": 200 },
                        { "x": "Jun 3_Jul 3", "Jun 1 - Jun 5": 350, "Jul 1 - Jul 5": 40 },
                        { "x": "Jun 4_Jul 4", "Jun 1 - Jun 5": 180, "Jul 1 - Jul 5": 60 },
                        { "x": "Jun 5_Jul 5", "Jun 1 - Jun 5": 100, "Jul 1 - Jul 5": 186 },
                    ],
                    datacolumns: [
                        { "id": "Jun 1 - Jun 5", "type": "bar" },
                        { "id": "Jul 1 - Jul 5", "type": "bar" }
                    ],
                    groups: "Jun 1 - Jun 5,Jul 1 - Jul 5",
                    datax: { "id": "x" },
                    colors: "#fba700,#8a8888,#fe6d00",
                    templateUrl: 'app/templates/charts/bar.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
                }
            }, {
                header: 'How Many Apples in the Basket [Jun 5 - Jun 10], [Jun 11 - Jun 16]',
                info: {
                    totalSales: '7,653',
                    openCampaign: '852',
                    dailySales: '22'
                },
                chart: {
                    id: "chart6",
                    datapoints: [
                        { "x": "Jun 5_Jun 11", "Jun 5 - Jun 10": 131, "Jun 11 - Jun 16": 211 },
                        { "x": "Jun 6_Jun 12", "Jun 5 - Jun 10": 210, "Jun 11 - Jun 16": 491 },
                        { "x": "Jun 7_Jun 13", "Jun 5 - Jun 10": 210, "Jun 11 - Jun 16": 321 },
                        { "x": "Jun 8_Jun 14", "Jun 5 - Jun 10": 324, "Jun 11 - Jun 16": 131 },
                        { "x": "Jun 9_Jun 15", "Jun 5 - Jun 10": 198, "Jun 11 - Jun 16": 411 },
                        { "x": "Jun 10_Jun 16", "Jun 5 - Jun 10": 211, "Jun 11 - Jun 16": 110 }
                    ],
                    datacolumns: [
                        { "id": "Jun 5 - Jun 10", "type": "area-step" },
                        { "id": "Jun 11 - Jun 16", "type": "area-step" }
                    ],
                    datax: { "id": "x" },
                    colors: "#8a8888,#fba700,#fe6d00",
                    templateUrl: 'app/templates/charts/bar.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
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
                header: 'How Many Apples in the Basket [Jul 1 - Jul 5] – USA',
                info: {
                    totalSales: '6,134',
                    openCampaign: '725',
                    dailySales: '34'
                },
                chart: {
                    id: "chart1",
                    datapoints: [
                        { "x": "Jul 1", "USA": 200 },
                        { "x": "Jul 2", "USA": 310 },
                        { "x": "Jul 3", "USA": 221 },
                        { "x": "Jul 4", "USA": 190 },
                        { "x": "Jul 5", "USA": 240 }
                    ],
                    datacolumns: [
                        { "id": "USA", "type": "bar" }
                    ],
                    datax: { "id": "x" },
                    colors: "#fe6d00,#fba700,#8a8888",
                    templateUrl: 'app/templates/charts/bar.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
                }

            },
            {
                header: 'How Many Apples in the Basket [Jul 1 - Jul 5] – UK',
                info: {
                    totalSales: '2,307',
                    openCampaign: '580',
                    dailySales: '34'
                },
                chart: {
                    id: "chart2",
                    datapoints: [
                        { "x": "Jul 1", "UK": 321 },
                        { "x": "Jul 2", "UK": 230 },
                        { "x": "Jul 3", "UK": 200 },
                        { "x": "Jul 4", "UK": 290 },
                        { "x": "Jul 5", "UK": 360 }
                    ],
                    datacolumns: [
                        { "id": "UK", "type": "line" }
                    ],
                    datax: { "id": "x" },
                    colors: "#8a8888,#fba700,#fe6d00",
                    templateUrl: 'app/templates/charts/spline.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
                }
            }, {
                header: 'How Many Apples in the Basket [Jul 1 - Jul 5] – Canada',
                info: {
                    totalSales: '5,753',
                    openCampaign: '678',
                    dailySales: '34'
                },
                chart: {
                    id: "chart3",
                    datapoints: [
                        { "x": "Jul 1", "Canada": 121 },
                        { "x": "Jul 2", "Canada": 211 },
                        { "x": "Jul 3", "Canada": 211 },
                        { "x": "Jul 4", "Canada": 250 },
                        { "x": "Jul 5", "Canada": 410 }
                    ],
                    datacolumns: [
                        { "id": "Canada", "type": "area-spline" }
                    ],
                    datax: { "id": "x" },
                    colors: "#fba700,#8a8888,#fe6d00",
                    templateUrl: 'app/templates/charts/spline.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
                }
            }, {
                header: 'A Fine Day for Sailing [Jun 1 - Jun 5], [Jul 1 - Jul 5]',
                info: {
                    totalSales: '7,653',
                    openCampaign: '852',
                    dailySales: '22',
                },
                chart: {
                    id: "chart4",
                    datapoints: [
                        { "x": "Jun 1_Jul 1", "Jun 1 - Jun 5": 300, "Jul 1 - Jul 5": 321 },
                        { "x": "Jun 2_Jul 2", "Jun 1 - Jun 5": 200, "Jul 1 - Jul 5": 400 },
                        { "x": "Jun 3_Jul 3", "Jun 1 - Jun 5": 500, "Jul 1 - Jul 5": 450 },
                        { "x": "Jun 4_Jul 4", "Jun 1 - Jun 5": 100, "Jul 1 - Jul 5": 120 },
                        { "x": "Jun 5_Jul 5", "Jun 1 - Jun 5": 150, "Jul 1 - Jul 5": 286 },
                    ],
                    datacolumns: [
                        { "id": "Jun 1 - Jun 5", "type": "line" },
                        { "id": "Jul 1 - Jul 5", "type": "line" }
                    ],
                    datax: { "id": "x" },
                    colors: "#fe6d00,#8a8888,#fba700",
                    templateUrl: 'app/templates/charts/spline.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
                }

            },
            {
                header: 'A Fine Day for Sailing – cover by Raging [Jun 1 - Jun 5], [Jul 1 - Jul 5]',
                info: {
                    totalSales: '1,507',
                    openCampaign: '916',
                    dailySales: '22'
                },
                chart: {
                    id: "chart5",
                    datapoints: [
                        { "x": "Jun 1_Jul 1", "Jun 1 - Jun 5": 200, "Jul 1 - Jul 5": 121 },
                        { "x": "Jun 2_Jul 2", "Jun 1 - Jun 5": 250, "Jul 1 - Jul 5": 200 },
                        { "x": "Jun 3_Jul 3", "Jun 1 - Jun 5": 450, "Jul 1 - Jul 5": 490 },
                        { "x": "Jun 4_Jul 4", "Jun 1 - Jun 5": 180, "Jul 1 - Jul 5": 160 },
                        { "x": "Jun 5_Jul 5", "Jun 1 - Jun 5": 100, "Jul 1 - Jul 5": 186 },
                    ],
                    datacolumns: [
                        { "id": "Jun 1 - Jun 5", "type": "area-step" },
                        { "id": "Jul 1 - Jul 5", "type": "area-step" }
                    ],
                    datax: { "id": "x" },
                    colors: "#fe6d00,#fba700,#8a8888",
                    templateUrl: 'app/templates/charts/bar.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
                }
            }, {
                header: 'How Many Apples in the Basket [Jun 5 - Jun 10], [Jun 11 - Jun 16]',
                info: {
                    totalSales: '7,653',
                    openCampaign: '852',
                    dailySales: '22'
                },
                chart: {
                    id: "chart6",
                    datapoints: [
                        { "x": "Jun 5_Jun 11", "Jun 5 - Jun 10": 131, "Jun 11 - Jun 16": 211 },
                        { "x": "Jun 6_Jun 12", "Jun 5 - Jun 10": 210, "Jun 11 - Jun 16": 491 },
                        { "x": "Jun 7_Jun 13", "Jun 5 - Jun 10": 210, "Jun 11 - Jun 16": 321 },
                        { "x": "Jun 8_Jun 14", "Jun 5 - Jun 10": 324, "Jun 11 - Jun 16": 131 },
                        { "x": "Jun 9_Jun 15", "Jun 5 - Jun 10": 198, "Jun 11 - Jun 16": 411 },
                        { "x": "Jun 10_Jun 16", "Jun 5 - Jun 10": 211, "Jun 11 - Jun 16": 110 }
                    ],
                    datacolumns: [
                        { "id": "Jun 5 - Jun 10", "type": "bar" },
                        { "id": "Jun 11 - Jun 16", "type": "bar" }
                    ],
                    datax: { "id": "x" },
                    colors: "#fba700,#fe6d00,#8a8888",
                    groups: "Jun 1 - Jun 5,Jul 1 - Jul 5",
                    templateUrl: 'app/templates/charts/bar.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
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
                header: 'How Many Apples in the Basket - [Ju1 - Jul 5]',
                info: {
                    totalSales: '5,567',
                    openCampaign: '654',
                    dailySales: '41'
                },
                chart: {
                    id: "chart1",
                    datapoints: [
                        { "x": "Jul 1", "How Many Apples in the Basket": 200 },
                        { "x": "Jul 2", "How Many Apples in the Basket": 210 },
                        { "x": "Jul 3", "How Many Apples in the Basket": 321 },
                        { "x": "Jul 4", "How Many Apples in the Basket": 230 },
                        { "x": "Jul 5", "How Many Apples in the Basket": 440 }
                    ],
                    datacolumns: [
                        { "id": "How Many Apples in the Basket", "type": "line" }
                    ],
                    datax: { "id": "x" },
                    colors: "#fba700,#00f9fa, #8a8888",
                    templateUrl: 'app/templates/charts/spline.html'
                },
                setWidth: function() {
                    return {
                        'width': '22%'
                    }
                }

            },
            {
                header: 'A Fine Day for Sailing - [Jul 1 - Jul 5]',
                info: {
                    totalSales: '3,563',
                    openCampaign: '563',
                    dailySales: '41'
                },
                chart: {
                    id: "chart2",
                    datapoints: [
                        { "x": "Jul 1", "A Fine Day for Sailing": 321 },
                        { "x": "Jul 2", "A Fine Day for Sailing": 210 },
                        { "x": "Jul 3", "A Fine Day for Sailing": 251 },
                        { "x": "Jul 4", "A Fine Day for Sailing": 222 },
                        { "x": "Jul 5", "A Fine Day for Sailing": 210 }
                    ],
                    datacolumns: [
                        { "id": "A Fine Day for Sailing", "type": "bar" }
                    ],
                    datax: { "id": "x" },
                    colors: "#00f9fa, #fba700, #8a8888",
                    templateUrl: 'app/templates/charts/spline.html'
                },
                setWidth: function() {
                    return {
                        'width': '22%'
                    }
                }
            }, {
                header: 'Say Goodbye - [Jul 1 - Jul 4]',
                info: {
                    totalSales: '7,676',
                    openCampaign: '456',
                    dailySales: '41'
                },
                chart: {
                    id: "chart3",
                    datapoints: [
                        { "x": "Jul 1", "Say Goodbye": 210 },
                        { "x": "Jul 2", "Say Goodbye": 221 },
                        { "x": "Jul 3", "Say Goodbye": 210 },
                        { "x": "Jul 4", "Say Goodbye": 251 },
                        { "x": "Jul 5", "Say Goodbye": 210 }
                    ],
                    datacolumns: [
                        { "id": "Say Goodbye", "type": "area" }
                    ],
                    datax: { "id": "x" },
                    colors: "#fba700,#00f9fa, #8a8888",
                    templateUrl: 'app/templates/charts/spline.html'
                },
                setWidth: function() {
                    return {
                        'width': '22%'
                    }
                }
            }, {
                header: 'Haunt Me (instrumental) - [Jul 1 - Jul 5]',
                info: {
                    totalSales: '7,676',
                    openCampaign: '456',
                    dailySales: '41'
                },
                chart: {
                    id: "chart4",
                    datapoints: [
                        { "x": "Jul 1", "Haunt Me (instrumental)": 321 },
                        { "x": "Jul 2", "Haunt Me (instrumental)": 210 },
                        { "x": "Jul 3", "Haunt Me (instrumental)": 251 },
                        { "x": "Jul 4", "Haunt Me (instrumental)": 421 },
                        { "x": "Jul 5", "Haunt Me (instrumental)": 210 }
                    ],
                    datacolumns: [
                        { "id": "Haunt Me (instrumental)", "type": "area-step" }
                    ],
                    datax: { "id": "x" },
                    colors: "#00f9fa, #fba700, #8a8888",
                    templateUrl: 'app/templates/charts/spline.html'
                },
                setWidth: function() {
                    return {
                        'width': '22%'
                    }
                }
            }, {
                header: 'A Fine Day for Sailing [Jun 1 - Jun 5], [Jul 1 - Jul 5]',
                info: {
                    totalSales: '7,653',
                    openCampaign: '852',
                    dailySales: '22',
                },
                chart: {
                    id: "chart5",
                    datapoints: [
                        { "x": "Jun 1_Jul 1", "Jun 1 - Jun 5": 300, "Jul 1 - Jul 5": 321 },
                        { "x": "Jun 2_Jul 2", "Jun 1 - Jun 5": 200, "Jul 1 - Jul 5": 400 },
                        { "x": "Jun 3_Jul 3", "Jun 1 - Jun 5": 500, "Jul 1 - Jul 5": 450 },
                        { "x": "Jun 4_Jul 4", "Jun 1 - Jun 5": 100, "Jul 1 - Jul 5": 120 },
                        { "x": "Jun 5_Jul 5", "Jun 1 - Jun 5": 150, "Jul 1 - Jul 5": 286 },
                    ],
                    datacolumns: [
                        { "id": "Jun 1 - Jun 5", "type": "bar" },
                        { "id": "Jul 1 - Jul 5", "type": "bar" }
                    ],
                    datax: { "id": "x" },
                    colors: "#00f9fa, #fba700, #8a8888",
                    groups: "Jun 1 - Jun 5,Jul 1 - Jul 5",
                    templateUrl: 'app/templates/charts/bar.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
                }

            },
            {
                header: 'Haunt Me (instrumental) [Jun 1 - Jun 5], [Jul 1 - Jul 5]',
                info: {
                    totalSales: '1,507',
                    openCampaign: '916',
                    dailySales: '22'
                },
                chart: {
                    id: "chart6",
                    datapoints: [
                        { "x": "Jun 1_Jul 1", "Jun 1 - Jun 5": 200, "Jul 1 - Jul 5": 121 },
                        { "x": "Jun 2_Jul 2", "Jun 1 - Jun 5": 250, "Jul 1 - Jul 5": 200 },
                        { "x": "Jun 3_Jul 3", "Jun 1 - Jun 5": 450, "Jul 1 - Jul 5": 490 },
                        { "x": "Jun 4_Jul 4", "Jun 1 - Jun 5": 180, "Jul 1 - Jul 5": 160 },
                        { "x": "Jun 5_Jul 5", "Jun 1 - Jun 5": 100, "Jul 1 - Jul 5": 186 },
                    ],
                    datacolumns: [
                        { "id": "Jun 1 - Jun 5", "type": "line" },
                        { "id": "Jul 1 - Jul 5", "type": "line" }
                    ],
                    datax: { "id": "x" },
                    colors: "#00f9fa, #fba700, #8a8888",
                    templateUrl: 'app/templates/charts/spline.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
                }
            }, {
                header: 'Say Goodbye [Jun 5 - Jun 10], [Jun 11 - Jun 16]',
                info: {
                    totalSales: '7,653',
                    openCampaign: '852',
                    dailySales: '22'
                },
                chart: {
                    id: "chart7",
                    datapoints: [
                        { "x": "Jun 5_Jun 11", "Jun 5 - Jun 10": 131, "Jun 11 - Jun 16": 211 },
                        { "x": "Jun 6_Jun 12", "Jun 5 - Jun 10": 210, "Jun 11 - Jun 16": 491 },
                        { "x": "Jun 7_Jun 13", "Jun 5 - Jun 10": 210, "Jun 11 - Jun 16": 321 },
                        { "x": "Jun 8_Jun 14", "Jun 5 - Jun 10": 324, "Jun 11 - Jun 16": 131 },
                        { "x": "Jun 9_Jun 15", "Jun 5 - Jun 10": 198, "Jun 11 - Jun 16": 411 },
                        { "x": "Jun 10_Jun 16", "Jun 5 - Jun 10": 211, "Jun 11 - Jun 16": 110 }
                    ],
                    datacolumns: [
                        { "id": "Jun 5 - Jun 10", "type": "area-spline" },
                        { "id": "Jun 11 - Jun 16", "type": "area-spline" }
                    ],
                    datax: { "id": "x" },
                    colors: "#00f9fa, #fba700, #8a8888",
                    groups: "Jun 5 - Jun 10,Jun 11 - Jun 16",
                    templateUrl: 'app/templates/charts/spline.html'
                },
                setWidth: function() {
                    return {
                        'width': '30.5%'
                    }
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