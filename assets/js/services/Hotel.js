angular.module('Traveller').factory('Hotel', function($http) {
    return {
        search : function() {
            return $http({
                method: 'POST',
                url: 'https://apim-gateway.mmtcloud.com/mmt-htlsearch/1.0/search/v1.0/hotelSearch?responseFormat=json',
                headers: {
                    'Content-Type': 'application/xml',
                    'Authorization':'Basic QUZGMzIyNjAzOmljZWNyZWFt'
                },
                data: '<MMTHotelSearchRequest><POS><Requestor type="B2C" idContext="AFF" id="AFF322603" channel="B2Cweb"/> <Source iSOCurrency="INR"/> </POS> <ResultTransformer> <GuestRecommendationEnabled maxRecommendations="1">true</GuestRecommendationEnabled> <PriceBreakupEnabled>true</PriceBreakupEnabled> <CancellationPolicyRulesReq text="yes"/> </ResultTransformer> <ResultPreferences> <ResultPreference> <Pagination paginate="false" page="1" limit="10"/> </ResultPreference> </ResultPreferences> <SearchCriteria> <Criterion> <Area> <CityCode>TCC</CityCode> <CountryCode>IN</CountryCode> </Area> <RoomStayCandidates> <RoomStayCandidate> <GuestCounts> <GuestCount count="1" ageQualifyingCode="10"/> </GuestCounts> </RoomStayCandidate> <RoomStayCandidate> <GuestCounts> <GuestCount count="1" ageQualifyingCode="10"/> <GuestCount count="1" ageQualifyingCode="8"> <Ages> <Age>4</Age> </Ages> </GuestCount> </GuestCounts> </RoomStayCandidate> </RoomStayCandidates> <StayDateRanges> <StayDateRange start="2015-12-05" end="2015-12-15"/> </StayDateRanges> <SupplierCodes> <SupplierCode>EPXX0001</SupplierCode> </SupplierCodes> </Criterion> </SearchCriteria> </MMTHotelSearchRequest>'
            });
        }
    }
});
