(function () {

    'use strict';

    angular.module("Asclepius")
        .service("ModalService",ModalService);

    ModalService.$inject = ["$uibModal", "$log"];

    function ModalService($uibModal, $log) {
        var modal = {};
        
        modal.open = function (size,data,template,callback) {
            var modalInstance = $uibModal.open({
                size: size,
                animation: true,
                backdrop: true,
                templateUrl: template,
                controller: 'RegistrationModalController',
                resolve: {
                    data: function () {
                        return data ;
                    }
                }
            });
            modalInstance.result.then(function (response) {
                debugger;
                //TODO 
                //Refresh the table
                callback(response);
                $log.info(response);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        return modal;
    }

})();

