angular.module('Traveller')
    .controller('RootController', function($http, $scope) {
        $scope.activeVal = 1;
        //$scope.loading = true;
        $scope.$on('LOAD', function(){$scope.loading = true});
        $scope.$on('UNLOAD', function(){$scope.loading = false});
    });