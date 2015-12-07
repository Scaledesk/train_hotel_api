angular.module('Traveller').factory('TrainBetweenStation', function($http,serverConfig) {
    return {
        // get all the Inbox Messages
        get : function(source,dest,date) {
            return $http({
                method: 'GET',
                url: serverConfig.address+'between/source/'+ source + '/dest/' +dest+ '/date/' + date + serverConfig.apiKey
            });
        },

        getFare : function(trainNo,source,dest,age,quota,date) {
            return $http({
                method: 'GET',
                url: serverConfig.address+'fare/train/'+ trainNo + '/source/' +source+ '/dest/' + dest +'/age/'+age+'/quota/'+quota+'/doj/'+date+ serverConfig.apiKey
            });
        }



    }
});