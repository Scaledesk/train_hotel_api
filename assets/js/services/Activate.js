angular.module('CandyBrush').factory('Activate', function($http,serverConfig) {
    return {
        // get all the Inbox Messages
        activate : function(data) {
            return $http({
                method: 'POST',
                url: serverConfig.address+'api/users/activate/?confirmation_code='+ data
            });
        }

    }
});