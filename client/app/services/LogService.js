function LogService($http, $filter) {
    "ngInject";
    var baseUrl = 'http://172.27.108.132:8085';//change as per need
    var getHeaders= function() {
        var headers = {
           'Accept': 'application/json'
        };
        return headers;
    };

    function toMapLogs(r){
        return r.data.map(function (item) {
            let log = {
                userid: item.id,
                userName: item.userName,
                time: $filter('date')(item.timestamp, 'medium'),
                activity: item.activityType,
                license: item.license
            };
            return log;
        });
    }
    return {
        getLogs() {
            var logs = $http.get(`${baseUrl}/logs`,{headers: getHeaders()})
                .then(toMapLogs)
                .catch(function(error) {
                    console.log(error);
                });
            return logs;
        }
    }
}

export default LogService;