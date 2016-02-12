'use strict';

angular.module('bahmni.adt')
    .directive('wardList',['QueryService','spinner','$q','$window','$stateParams','appService', function () {
        return {
            restrict: 'E',
            controller: 'WardListController',
            scope: {
               ward:"="
            },
            templateUrl: "../adt/views/wardList.html"
        };
    }]);
