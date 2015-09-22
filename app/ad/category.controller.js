'use strict';

angular
    .module('myApp')
    .controller('CategoryCtrl', CategoryCtrl);

function CategoryCtrl($scope, $http, $routeParams, $location, $rootScope, config) {
    $rootScope.isElementsHide();
    $http.get(config.apiUrl+'?q=category&id='+$routeParams.categoryId+'&r='+new Date().getTime()).success(function(data) {
        if (!data.success) {
            $location.path("/");
        }
        $scope.category = data.result;
    }).error(function(data, status) {
        $location.path("/");
    });
    $http.get(config.apiUrl+'?q=ad/listbycategory&id='+$routeParams.categoryId+'&r='+new Date().getTime()).success(function(data) {
        if (data.success) {
            $scope.ads = data.result;
            if (data.result.length===0) {
                $scope.showresult = false;
                $scope.shownorecords = true;
            } else {
                $scope.showresult = true;
                $scope.shownorecords = false;
            }
        }
    });
}