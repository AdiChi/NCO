function UsersService($http, config) {
    "ngInject";
    var baseUrl = config.apiUrl;//change as per need
    var getHeaders= function() {
        var headers = {
           'Accept': 'application/json'
        };
        return headers;
    };

    function toUser(r){
        return r.data.map(function (item) {
            let user = {
                id: item.id,
                name: item.name,
                address: item.address
            };
            return user;
        });
    }
    return {

        getUsers() {
            var users = $http.get(`${baseUrl}/user`,{headers: getHeaders()})
                .then(toUser)
                .catch(function(error) {
                    console.log(error);
                });
            return users;
        },
        getUser(id) {
            var user = $http.get(`${baseUrl}/user/${id}`,{headers: getHeaders()})
                .then(function(r) {
                    var item = r.data;
                    return {
                        id: item.id,
                        name: item.name,
                        address: item.address
                    };
                })
                .catch(function(error) {
                    console.log(error);
                });
            return user;
        },
        createUser(user) {
            const {name, address} = user;

            const tempUser = {
                name,
                address
            };

            return $http.put(`${baseUrl}/user`, (tempUser), {headers: getHeaders()});
        },

        updateUser(user) {
            return $http.post(`${baseUrl}/user/${user.id}`, (user), {headers: getHeaders()});
        },
        
        deleteUser(userid) {

            return $http.delete(`${baseUrl}/user/${userid}`, {headers: getHeaders()});
        }
    }
}

export default UsersService;