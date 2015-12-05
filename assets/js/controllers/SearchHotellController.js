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

        $scope.hotelResult = [];
        // function for search hotels
        $scope.searchHotels = function () {
            Hotel.search(hotelRequest).then(
                function (data) {
                    //console.log(data);
                    $scope.hotels = data;
                    angular.forEach($scope.hotels.data.HotelSearchResults.Hotels, function (hotel, key) {
                        var mVal = '';

                        angular.forEach(hotel.PropertyInfo.RoomStays, function (rates, key) {

                            var start_date = rates.startDate;
                            var end_date = rates.endDate;
                            angular.forEach(rates.RoomRates, function (rate, key) {
                            angular.forEach(rate.Rate.RoomTariffs, function (r, key) {
                                t = {
                                    "room_number" : r.roomNumber,
                                      "amount" : r.Tariffs[0].amount,
                                    "group" : r.Tariffs[0].group,
                                    "startDate" : start_date,
                                    "endDate" : end_date
                                };
                            });
                            });
                        });
                        angular.forEach(hotel.PropertyInfo.MediaList, function (m, key) {
                            mVal = {
                                "type": m.type,
                                "src": m.src
                            };
                        });
                        var temp = {
                            "hotel_name": hotel.Name,
                            "hotel_id" : hotel.id,
                            "media": mVal,
                            "lowest_rate": hotel.LowestRate.LowestRate.value,
                            "total_recommendation": hotel.PropertyInfo.GuestRecommendations.totalRecommendations,
                            "total_rating_value": hotel.PropertyInfo.GuestRecommendations.OverallRecommendation.Rating.value,
                            "rate" : t
                        };
                        $scope.hotelResult.push(temp);
                    });
                },
                function (data) {
                    // $scope.hotels = data;
                });
        };

        // function for getting all countries
        $scope.getCountry = function () {
            Hotel.getCountry(getCountryRequest).then(
                function (data) {
                    $scope.countries = data;
                },
                function (data) {
                    // $scope.countries = data;
                });
        };

        // function for getting city
        $scope.getCity = function () {
            Hotel.getCity(getCityRequest).then(
                function (data) {
                    $scope.cities = data;
                },
                function (data) {
                    // $scope.cities = data;
                });
        };
    });