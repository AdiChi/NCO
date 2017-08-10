function multipleEmails() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {

                var emails = viewValue.split(',');
                var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;
                var validityArr = emails.map(function(str) {
                    return re.test(str.trim());
                });
                var atLeastOneInvalid = false;
                angular.forEach(validityArr, function(value) {
                    if (value === false)
                        atLeastOneInvalid = true;
                });
                if (!atLeastOneInvalid) {
                    ctrl.$setValidity('email', true);
                    return viewValue;
                } else {
                    ctrl.$setValidity('email', false);
                    return false;
                }

            });
        }
    };
}

export default multipleEmails;