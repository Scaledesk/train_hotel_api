angular.module('Traveller', ['ngRoute',  'ngResource', 'ui.select', 'ngSanitize', 'ui.date', 'checklist-model', 'angularUtils.directives.dirPagination'])
    .config(function(paginationTemplateProvider) {
        paginationTemplateProvider.setPath('assets/js/includes/angular-utils-pagination/dirPagination.tpl.html');
    })
    .constant("serverConfig", {
        "address": "http://api.railwayapi.com/",
        "apiKey": "/apikey/fqzrs9685/"
    });
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
