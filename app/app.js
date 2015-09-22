'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap'
])
    //Link to PHP API for request
    .constant('config', {
        apiUrl: 'http://ad-board-clusterpoint-server/'
    })
    //Route
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/add', {
                templateUrl: 'ad/add.html',
                controller: 'AddCtrl'
            }).
            when('/ad/:adId', {
                templateUrl: 'ad/ad.html',
                controller: 'AdCtrl'
            }).
            when('/search', {
                templateUrl: 'ad/searchResult.html',
                controller: 'SearchResultCtrl'
            }).
            when('/category/:categoryId', {
                templateUrl: 'ad/category.html',
                controller: 'CategoryCtrl'
            }).
            when('/', {
                templateUrl: 'ad/home.html',
                controller: 'HomeCtrl',
            })
    }])
    //Hide link to homepage and button 'Add ad' when on form add ad
    .run(function($rootScope, $location ) {
        $rootScope.isElementsHide = function() {
          if ($location.path() === '/') {
            $rootScope.isnothome = false;
          } else {
            $rootScope.isnothome = true;
          }
          if ($location.path() === '/add') {
            $rootScope.isformad = true;
          } else {
            $rootScope.isformad = false;
          }
        };
    })
    //$http param data added support array
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