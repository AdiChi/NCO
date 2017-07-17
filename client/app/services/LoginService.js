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
                widgets: []
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
                widgets: []
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
                widgets: []
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