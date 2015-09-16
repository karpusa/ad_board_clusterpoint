'use strict';

angular
    .module('myApp')
    .controller('CategoriesCtrl', CategoriesCtrl);
//http://angular.ru/tutorial/step_05
function CategoriesCtrl($scope, $http, config) {
    $http.get(config.apiUrl+'?q=categories').success(function(data) {
        $scope.categories = data;
    });

    /*$scope.categories = [
        {"name": "Nexus S",
            "snippet": "Fast just got faster with Nexus S.",
            "age": 0},
        {"name": "Motorola XOOM� with Wi-Fi",
            "snippet": "The Next, Next Generation tablet.",
            "age": 1},
        {"name": "MOTOROLA XOOM�",
            "snippet": "The Next, Next Generation tablet.",
            "age": 2}
    ];*/
}