'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute'
]).
//angular.module('myApp.categories', ['ngRoute']);

    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/add', {
                templateUrl: 'partials/add.html',
                controller: 'AddCtrl'
            }).
            when('/view/:adId', {
                templateUrl: 'partials/ad.html',
                controller: 'AdCtrl'
            }).
            when('/search/:query', {
                templateUrl: 'partials/search.html',
                controller: 'SearchCtrl'
            }).
            when('/categories/:categoryId', {
                templateUrl: 'partials/category.html',
                controller: 'CategoryCtrl'
            }).
            otherwise({
                templateUrl: 'partials/categories.html',
                controller: 'CategoriesCtrl',
            });
        //$routeProvider.otherwise({redirectTo: '/categories'});
    }]);
