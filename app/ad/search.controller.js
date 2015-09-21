'use strict';
// @TODO add search
angular
    .module('myApp')
    .controller('SearchCtrl', HomeCtrl);

function SearchCtrl($scope, $http, $rootScope, config) {
    $rootScope.isElementsHide();
    /*$http.get(config.apiUrl+'?q=categorieswithcount').success(function(data) {
        $scope.categories = data;
    });*/
}