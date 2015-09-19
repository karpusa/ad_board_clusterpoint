'use strict';

angular
    .module('myApp')
    .controller('AddCtrl', AddCtrl);

function AddCtrl($rootScope, $scope, $http, config) {
    var ad = this;

    $rootScope.isformad = true;
    $http.get(config.apiUrl+'?q=categories').success(function(data) {
        $scope.ad={
            categories: data,
            categorySelected: {id: '3'}
        };
    });

    $scope.add = function(ad) {
console.log(ad);
    };
}