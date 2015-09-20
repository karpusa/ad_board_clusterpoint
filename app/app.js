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
    }])
    .config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

      var param = function(obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for(name in obj) {
          value = obj[name];

          if(value instanceof Array) {
            for(i=0; i<value.length; ++i) {
              subValue = value[i];
              fullSubName = name + '[' + i + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          }
          else if(value instanceof Object) {
            for(subName in value) {
              subValue = value[subName];
              fullSubName = name + '[' + subName + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          }
          else if(value !== undefined && value !== null)
            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
      };

      // Override $http service's default transformRequest
      $httpProvider.defaults.transformRequest = [function(data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
      }];
    }]);