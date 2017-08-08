function EmailService($http, config) {
    "ngInject";
    var baseUrl = config.apiUrl; //change as per need
    /*var getHeaders = function() {
        var headers = {
            'Content-Type':  'multipart/form-data'
        };
        return headers;
    };*/

    return {
        sendAttachment(formData) {
            return $http.post(`${baseUrl}/sendMail`, formData, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                })
                .then((res) => {
                    console.log('PDF uploaded res', res);
                    return res;
                }).catch(function(e) {
                    console.log(e);
                });
        }
    }
}

export default EmailService;