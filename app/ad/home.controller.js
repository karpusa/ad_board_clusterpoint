'use strict';

angular
    .module('myApp')
    .controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $http, $rootScope, config) {
    $rootScope.isHomePage();
    $http.get(config.apiUrl+'?q=categorieswithcount').success(function(data) {
        $scope.categories = data;
    });
}