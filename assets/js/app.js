angular.module('Traveller', ['ngRoute',  'ngResource', 'ui.select', 'ngSanitize', 'ui.date', 'checklist-model', 'angularUtils.directives.dirPagination', 'ui.bootstrap'])
    .config(function(paginationTemplateProvider) {
        paginationTemplateProvider.setPath('assets/js/includes/angular-utils-pagination/dirPagination.tpl.html');
    })
    .constant("serverConfig", {
        "address": "http://api.railwayapi.com/",
        "apiKey": "/apikey/fqzrs9685/"
    });/*.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]).all('/!*', function (request, response, next) {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "X-Requested-With");
        response.header("Access-Control-Allow-Methods", "GET, POST", "PUT", "DELETE");
        next();

    });*/














/*
angular.module('Traveller').filter('propsFilter', function() {
    return function(items, props) {
        var out = [];
        if (angular.isArray(items)) {
            items.forEach(function(item) {
                var itemMatches = false;
                var keys = Object.keys(props);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    }
});*/
