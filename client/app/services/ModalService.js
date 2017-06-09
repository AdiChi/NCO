function ModalService($uibModal) {
    "ngInject";
    
    var modalDefaults = {
        backdrop: true,
        keyboard: true,
        modalFade: true,
        template: `<div class="modal-header">
                <h3>{{modalOptions.headerText}}</h3>
            </div>
        <div class="modal-body">
          <p>{{modalOptions.bodyText}}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" 
                  data-ng-click="modalOptions.close()">{{modalOptions.closeButtonText}}</button>
          <button class="btn btn-primary" 
                  data-ng-click="modalOptions.ok();">{{modalOptions.actionButtonText}}</button>
        </div>`
    };

    var modalOptions = {
        closeButtonText: 'Close',
        actionButtonText: 'OK',
        headerText: 'Proceed?',
        bodyText: 'Perform this action?'
    };

    return {
        showModal(customModalDefaults, customModalOptions) {
            if (!customModalDefaults) customModalDefaults = {};
            customModalDefaults.backdrop = 'static';
            return this.show(customModalDefaults, customModalOptions);
        },
        show(customModalDefaults, customModalOptions) {
            var tempModalDefaults = {};
            var tempModalOptions = {};
            //Map angular-ui modal custom defaults to modal defaults defined in service
            angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

            //Map modal.html $scope custom properties to defaults defined in service
            angular.extend(tempModalOptions, modalOptions, customModalOptions);

            if (!tempModalDefaults.controller) {
                tempModalDefaults.controller = function ($scope, $uibModalInstance) {
                    "ngInject";
                    $scope.modalOptions = tempModalOptions;
                    $scope.modalOptions.ok = function (result) {
                        $uibModalInstance.close(result);
                    };
                    $scope.modalOptions.close = function (result) {
                        $uibModalInstance.dismiss('cancel');
                    };
                };
            }

            return $uibModal.open(tempModalDefaults).result;
        }
    }
}

export default ModalService;
