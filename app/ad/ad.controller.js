'use strict';

angular
    .module('myApp')
    .controller('AdCtrl', AdCtrl);

function AdCtrl($rootScope, $scope, $http, $routeParams, config) {
    var ad = this;

    $rootScope.isHomePage();
    $rootScope.isformad = true;
    $http.get(config.apiUrl+'?q=ad&id='+$routeParams.adId+'&r='+new Date().getTime()).success(function(data) {
        if (!data.success) {
            $location.path("/");
        }
        $scope.ad = data.result;
    });

}