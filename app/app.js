'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap'
])
    .constant('config', {
        apiUrl: 'http://ad-board-clusterpoint-server/'
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/add', {
                templateUrl: 'ad/add.html',
                controller: 'AddCtrl'
            }).
            when('/view/:adId', {
                templateUrl: 'ad/ad.html',
                controller: 'AdCtrl'
            }).
            when('/search/:query', {
                templateUrl: 'ad/search.html',
                controller: 'SearchCtrl'
            }).
            when('/category/:categoryId', {
                templateUrl: 'ad/category.html',
                controller: 'CategoryCtrl'
            }).
            when('/', {
                templateUrl: 'ad/categories.html',
                controller: 'CategoriesCtrl',
            })
            /*otherwise({
                templateUrl: 'partials/categories.html',
                controller: 'CategoriesCtrl',
            });*/
        //$routeProvider.otherwise({redirectTo: '/categories'});
    }]);