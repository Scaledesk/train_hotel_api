angular.module('Traveller')
// inject the Activation service into our controller
    .controller('SearchHotelController', function($http, $scope, Hotel,$routeParams,$filter, $location) {


        $scope.searchHotels = function(){
            Hotel.search().then(
                function(data){
console.log(data);
                    $scope.hotels = data;

                },
                function(data){
                   // $scope.hotels = data;
                });
        };

/*
        var sdata = "<MMTHotelSearchRequest>
            <POS>
            <Requestor type="B2C" idContext="AFF" id="AFF322603" channel="B2Cweb"/>
            <Source iSOCurrency="INR"/>
            </POS>
            <ResultTransformer>
            <GuestRecommendationEnabled maxRecommendations="1">true</GuestRecommendationEnabled>
            <PriceBreakupEnabled>true</PriceBreakupEnabled>
            <CancellationPolicyRulesReq text="yes"/>
            </ResultTransformer>
            <ResultPreferences>
            <ResultPreference>
            <Pagination paginate="false" page="1" limit="10"/>
            </ResultPreference>
            </ResultPreferences>
            <SearchCriteria>
            <Criterion>
            <Area>
            <CityCode>TCC</CityCode>
            <CountryCode>IN</CountryCode>
            </Area>
            <RoomStayCandidates>
            <RoomStayCandidate>
            <GuestCounts>
            <GuestCount count="1" ageQualifyingCode="10"/>
            <GuestCount count="1" ageQualifyingCode="8">
            <Ages>
            <Age>4</Age>
            </Ages>
            </GuestCount>
            </GuestCounts>
            </RoomStayCandidate>
            </RoomStayCandidates>
            <StayDateRanges>
            <StayDateRange start="2015-12-05" end="2015-12-15"/>
            </StayDateRanges>
            <SupplierCodes>
            <SupplierCode>EPXX0001</SupplierCode>
            </SupplierCodes>
            </Criterion>
            </SearchCriteria>
            </MMTHotelSearchRequest>";

*/






    });