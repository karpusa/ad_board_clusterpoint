'use strict';

angular
    .module('myApp')
    .controller('CategoriesCtrl', CategoriesCtrl);

function CategoriesCtrl($scope, $http, config) {
    $http.get(config.apiUrl+'?q=categories').success(function(data) {
        $scope.categories = data;
    });
}