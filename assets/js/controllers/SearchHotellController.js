angular.module('Traveller')
// inject the Activation service into our controller
    .controller('SearchHotelController', function($http, $scope, Hotel,$routeParams,$filter, $location) {

        var hotelRequest = '<MMTHotelSearchRequest><POS><Requestor type="B2C" idContext="AFF" id="AFF322603" channel="B2Cweb"/> <Source iSOCurrency="INR"/> </POS> <ResultTransformer> ' +
            '<GuestRecommendationEnabled maxRecommendations="1">true</GuestRecommendationEnabled> ' +
            '<PriceBreakupEnabled>true</PriceBreakupEnabled> <CancellationPolicyRulesReq text="yes"/> ' +
            '</ResultTransformer> <ResultPreferences> <ResultPreference> <Pagination paginate="false" page="1" limit="10"/> </ResultPreference> </ResultPreferences> ' +
            '<SearchCriteria> <Criterion> ' +
            '<Area> <CityCode>DEL</CityCode> <CountryCode>IN</CountryCode> </Area> ' +
            '<RoomStayCandidates> <RoomStayCandidate> <GuestCounts> <GuestCount count="1" ageQualifyingCode="10"/> </GuestCounts> </RoomStayCandidate> ' +
            '<RoomStayCandidate> <GuestCounts> <GuestCount count="1" ageQualifyingCode="10"/>' +
            ' <GuestCount count="1" ageQualifyingCode="8"> <Ages> <Age>4</Age> </Ages> </GuestCount> </GuestCounts> ' +
            '</RoomStayCandidate> </RoomStayCandidates> ' +
            '<StayDateRanges> <StayDateRange start="2015-12-05" end="2015-12-15"/> </StayDateRanges>' +
            ' <SupplierCodes> <SupplierCode>EPXX0001</SupplierCode> </SupplierCodes> </Criterion> </SearchCriteria>' +
            ' </MMTHotelSearchRequest>';


        var getCountryRequest = '<MMTStaticCountrySearchRequest Offset="0" Rows="100">' +
                '<POS>' +
                    '<Requestor type="AFF" idContext="AFF" id="AFF322603" channel="AFF"/>' +
                    '<Source iSOCurrency="INR"/>' +
                    '<Token>AFF322603</Token>' +
                '</POS>' +
            '<RequestCountryParams>' +
            '</RequestCountryParams>' +
            '</MMTStaticCountrySearchRequest>';

        var getCityRequest = '<MMTStaticCitySearchRequest Offset="0" Rows="100">' +
            '<POS>' +
            '<Requestor type="AFF" idContext="AFF" id="AFF322603" channel="AFF"/>' +
            '<Source iSOCurrency="INR"/>' +
            '<Token>AFF322603</Token>' +
            '</POS>' +
            '<RequestCityParams>' +
            '<Country>India</Country>' +
            '<CountryCode>IN</CountryCode>' +
            '<Name/>' +
            '</RequestCityParams>' +
            '<RequiredFields>' +
            'country, countryCode' +
        '</RequiredFields>' +
        '</MMTStaticCitySearchRequest>';




        $scope.searchHotels = function(){
            Hotel.search(hotelRequest).then(
                function(data){
                    console.log(data);
                    $scope.hotels = data;

                },
                function(data){
                   // $scope.hotels = data;
                });
        };

        $scope.getCountry =function(){
            Hotel.getCountry(getCountryRequest).then(
                function(data){
                    $scope.countries = data;

                },
                function(data){
                    // $scope.countries = data;
                });
        };

        $scope.getCity =function(){
            Hotel.getCity(getCityRequest).then(
                function(data){
                    $scope.cities = data;

                },
                function(data){
                    // $scope.cities = data;
                });
        };


        angular.forEach($scope.hotels.data.HotelSearchResults.Hotels, function(hotel, key) {

            //var h_name = hotel.name;
           // angular.forEach(hotal, function(h, key) {


            angular.forEach(hotel.hotel.PropertyInfo.MediaList, function(m, key){
                $scope.media = {
                    "type": m.type,
                    "src": m.src
                }
            });

            var tmp ={
                "hotel_name" : hotel.name,
                "total_recommendation" : hotel.PropertyInfo.GuestRecommendations.totalRecommendations,
                "total_rating_value" : hotel.PropertyInfo.GuestRecommendations.OverallRecommendation.Rating.value,



            }

        });




























    });