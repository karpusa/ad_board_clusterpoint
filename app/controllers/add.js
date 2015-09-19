'use strict';

angular
    .module('myApp')
    .controller('AddCtrl', AddCtrl);

function AddCtrl($rootScope, $scope, $http, config) {
    $rootScope.isformad = true;
    $http.get(config.apiUrl+'?q=categories').success(function(data) {
        $scope.categories = data;
    });
}