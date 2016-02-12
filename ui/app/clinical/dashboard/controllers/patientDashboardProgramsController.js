'use strict';

angular.module('bahmni.clinical')
    .controller('PatientDashboardProgramsController', ['$scope', '$state', '$stateParams',
        function ($scope, $state) {
            $scope.gotoDetailsPage = function() {
                $state.go('patient.patientProgram.show');
            }
        }]);