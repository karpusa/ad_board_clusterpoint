'use strict';

angular
    .module('myApp')
    .controller('AddCtrl', AddCtrl);

function AddCtrl($rootScope, $scope, $http, config) {
    var ad = this;

    $rootScope.isHomePage();
    $rootScope.isformad = true;
    $http.get(config.apiUrl+'?q=categories').success(function(data) {
        $scope.ad={
            categories: data,
            //categorySelected: {id: '3'}
        };
    });

    $scope.add = function() {
        $http({
            method  : 'POST',
            url     : config.apiUrl+'?q=ad/add',
            data    :   {
                            title:      $scope.ad.title,
                            message:    $scope.ad.message,
                            price:      $scope.ad.price,
                            category:   $scope.ad.categorySelected.id
                        },
        })
        .success(function(data) {

        if (data.success) {
            alert('success');
            //@TODO redirect to ad post
        }

        });
    };
}