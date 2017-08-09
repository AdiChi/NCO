function EmailService($http, config) {
    "ngInject";
    var baseUrl = config.apiUrl; 

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