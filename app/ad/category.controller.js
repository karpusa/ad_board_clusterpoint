'use strict';

angular
    .module('myApp')
    .controller('CategoryCtrl', CategoryCtrl);

function CategoryCtrl($scope, $http, $routeParams, $location, config) {
    $http.get(config.apiUrl+'?q=category&id='+$routeParams.categoryId+'&r='+new Date().getTime()).success(function(data) {
        if (!data.success) {
            $location.path("/");
        }
        $scope.category = data.result;
    }).error(function(data, status) {
        $location.path("/");
    });
}