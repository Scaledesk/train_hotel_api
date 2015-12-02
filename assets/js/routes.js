angular.module('Traveller').config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/home'
    })
      .when('/home', {
        templateUrl: "templates/home.html",
        controller: "HomeController"
      })
      .when('/search/:source/:destination/:journey_date/:no_of_passenger', {
        templateUrl: "templates/search.html",
        controller: "SearchController"
      }).when('/about-us', {
        templateUrl: "templates/about-us.html",
        controller: "AboutController"
      }).when('/privacy-policy', {
        templateUrl: "templates/privacy-policy.html",
        controller: "PrivacyController"
      }).when('/contact-us', {
        templateUrl: "templates/contact-us.html",
        controller: "ContactController"
      });
});