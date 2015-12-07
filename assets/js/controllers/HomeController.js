angular.module('Traveller')
// inject the Activation service into our controller
    .controller('HomeController', function(TrainBetweenStation, StationCode, $http, $scope, $location,$filter) {
        //var d = $location.search().code;
        $scope.tab = 'train';
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

        $scope.searchHotel =function(hotel){
            //$scope.city.selected.code
            var city = hotel.city;
            var check_in = hotel.check_in;
            var check_out = hotel.check_out;
            //var passenger = formData.passenger;
            $location.path('/hotel-details/'+city+'/'+check_in+'/'+check_out);
        };




    });