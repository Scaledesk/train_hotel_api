angular.module('CandyBrush')
// inject the Activation service into our controller
    .controller('ActivateController', function(Activate,  $http, $scope, $location) {

        //$scope.verify = function(){
            var d = $location.search().code;
            Activate.activate(d)
                .success(function(data) {
                    console.log(data);
                    //$scope.$broadcast('accountActivated', { message: 'Account has been activated' });
                    window.localStorage['account_activated'] = 1;
                    $location.path("/sign-in");
                })
                .error(function(data) {
                    $location.path("/error");
                    //$location.path("/packages");

                });
        //};
    });