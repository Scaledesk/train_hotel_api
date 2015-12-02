angular.module('Traveller')
// inject the Activation service into our controller
    .controller('HomeController', function(TrainBetweenStation, StationCode, $http, $scope, $location,$filter) {
        //var d = $location.search().code;
        $scope.selectedItem = {};
        $scope.master_stations = StationCode.get();
        $scope.source = {};
        $scope.destination = {};
        $scope.refreshSources = function(query){
            console.log(query);
            //angular.isUnDefined(query) ||
            if(query == null) return [];
            if(query.length < 3) return [];
                $scope.sources = $filter('filter')($scope.master_stations,{name:query})
        };
        $scope.refreshDestinations = function(query){
            if(query == null) return [];
            if(query.length < 3) return [];
            $scope.destinations = $filter('filter')($scope.master_stations,{name:query})
        };
        $scope.search =function(formData){
            var source = $scope.source.selected.code;
            var dest = $scope.destination.selected.code;
            var dt = formData.date;
            var passenger = formData.passenger;
            $location.path('/search/'+source+'/'+dest+'/'+dt+'/'+passenger);
        };
    });