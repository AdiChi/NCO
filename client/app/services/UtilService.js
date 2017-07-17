function UtilService($window) {
    'ngInject'

    return {
        getFromSession(entity) {
            return ($window.sessionStorage[entity]) ? angular.fromJson($window.sessionStorage[entity]) : null;
        },
        storeInSession(entity, data) {
            $window.sessionStorage[entity] = angular.toJson(data);
        },
        clearSession() {
            $window.sessionStorage.clear();
        }
    }
}

export default UtilService;