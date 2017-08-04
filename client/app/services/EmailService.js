function EmailService($http, config) {
    "ngInject";
    var baseUrl = config.apiUrl; //change as per need
    var getHeaders = function() {
        var headers = {
            'Content-Type': undefined
        };
        return headers;
    };


    return {
        sendAttachment(formData) {
            return $http.post(`${baseUrl}/sendAttachment`, formData, getHeaders())
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