(function () {

    'use strict';

    angular.module('Asclepius')
        .controller("RegistrationModalController", RegistrationModalController);

    RegistrationModalController.$inject = ["$scope", "$uibModalInstance", "RegistrationService", "data"];
    function RegistrationModalController($scope, $uibModalInstance, RegistrationService, data) {

        $scope.data = angular.copy(data);

        $scope.save = function () {
            //TODO 
            //Call to Service to update
            $uibModalInstance.close($scope.data);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }
})();