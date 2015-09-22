'use strict';

angular
    .module('myApp')
    .controller('SearchBarCtrl', SearchBarCtrl);

function SearchBarCtrl($scope, $location) {
    $scope.search = function(term) {
        $location.path('/search').search('q', term);
    };
}