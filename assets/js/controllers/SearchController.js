angular.module('Traveller')
// inject the Activation service into our controller
    .controller('SearchController', function(TrainBetweenStation,  $http, StationCode, $scope,$routeParams,$filter, $location) {

        $scope.checkboxModel = {

        };

$scope.fareClass ="";


        $scope.master_stations = StationCode.get();
        $scope.source = {};
        $scope.destination = {};
        $scope.refreshSources = function(query){
            $scope.sources = $filter('filter')($scope.master_stations,{name:query})
        };
        $scope.refreshDestinations = function(query){
            $scope.destinations = $filter('filter')($scope.master_stations,{name:query})
        };

            var source = $routeParams.source;
            var destination = $routeParams.destination;
            var journey_date = $routeParams.journey_date;
            var no_of_passenger = $routeParams.no_of_passenger;

        angular.forEach($scope.master_stations, function(station, key) {
            if(station.code == source){
                $scope.source.selected = station;
            }
            if(station.code == destination){
                $scope.destination.selected = station;
            }

        });
        $scope.journey_date =journey_date;
        $scope.no_of_passenger = no_of_passenger;
            $scope.results = [];
        $scope.sortType     = "duration";
        $scope.sortReverse  = false;



        /*for(i=0;i<25;i++){
            var temp = {
                "train" : "dummy",
                "source" : "bsvdsvc",
                "destination" : "bdsvchs",
                "quota" : "scdsvh",
                "fareName" : "bvsv",
                "farePrice": " 100",
                "arrival_time" : "dvbhsbv",
                "departure_time" :"dvnsvbshvds",
                "journey_date" : " sdgvhgcs",
                "duration" : "4:30",
                "no_of_passenger" : no_of_passenger
            };
            $scope.results.push(temp);
        }*/


        TrainBetweenStation.get(source,destination,journey_date)
             .success(function(data) {
             $scope.records = data.train;
                $scope.total_train = $scope.records.length;
                     console.log($scope.records);
             angular.forEach($scope.records, function(record){
                 console.log(record);
             //var quota = "GN";
             TrainBetweenStation.getFare(record.number,record.from.code,record.to.code,18,"GN",journey_date)
             .success(function(data) {

                     angular.forEach(data.fare, function(fare) {
                         //var duration = parseTime(record.dest_arrival_time) - parseTime(record.src_departure_time);
                         var duration = diff(record.src_departure_time, record.dest_arrival_time);


                         var temp = {
                             "train" : data.train,
                             "source" : data.from,
                             "destination" : data.to,
                             "quota" : data.quota,
                             "fareName" : fare.name,
                             "farePrice": fare.fare,
                             "arrival_time" : record.dest_arrival_time,
                             "departure_time" :record.src_departure_time,
                             "journey_date" : journey_date,
                             "duration" : duration,
                             "no_of_passenger" : no_of_passenger
                         };
                         $scope.results.push(temp);
                     });
             });
             });
             })
             .error(function(data) {
             console.log(data);
             $location.path("/error");
             });

        function diff(start, end) {
            start = start.split(":");
            end = end.split(":");
            var startDate = new Date(0, 0, 0, start[0], start[1], 0);
            var endDate = new Date(0, 0, 0, end[0], end[1], 0);
            var diff = endDate.getTime() - startDate.getTime();
            var hours = Math.floor(diff / 1000 / 60 / 60);
            diff -= hours * 1000 * 60 * 60;
            var minutes = Math.floor(diff / 1000 / 60);

            // If using time pickers with 24 hours format, add the below line get exact hours
            if (hours < 0)
                hours = hours + 24;

            return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
        }

    });