angular.module('Traveller').factory('Hotel', function($http) {
    return {
        search : function(dt) {
            return $http({
                method: 'POST',
                url: 'https://apim-gateway.mmtcloud.com/mmt-htlsearch/1.0/search/v1.0/hotelSearch?responseFormat=json',
                headers: {
                    'Content-Type': 'application/xml',
                    'Authorization':'Basic QUZGMzIyNjAzOmljZWNyZWFt'
                },
                data: dt
            });
        },

        getCountry : function(countryData) {
            return $http({
                method: 'POST',
                url: 'https://apim-gateway.mmtcloud.com/mmt-htlsearch/1.0/staticsearch/v1.0/countryData?responseFormat=json',
                headers: {
                    'Content-Type': 'application/xml',
                    'Authorization':'Basic QUZGMzIyNjAzOmljZWNyZWFt'
                },
                data: countryData
            });
        },



        getCity : function(cityData) {
            return $http({
                method: 'POST',
                url: 'https://apim-gateway.mmtcloud.com/mmt-htlsearch/1.0/staticsearch/v1.0/cityData?responseFormat=json',
                headers: {
                    'Content-Type': 'application/xml',
                    'Authorization':'Basic QUZGMzIyNjAzOmljZWNyZWFt'
                },
                data: cityData
            });
        }












    }
});
