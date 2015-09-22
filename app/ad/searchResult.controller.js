'use strict';
// @TODO add search
angular
    .module('myApp')
    .controller('SearchResultCtrl', SearchResultCtrl);

function SearchResultCtrl($scope, $http, $rootScope, $location, config) {
    var searchTerm;
    $rootScope.isElementsHide();
    searchTerm = $location.search()['q'];
    $scope.searchTerm = searchTerm;
    $http.get(config.apiUrl+'?q=ad/search&searchTerm='+searchTerm+'&r='+new Date().getTime()).success(function(data) {
        if (data.success) {
            $scope.results = data.result;
            if (!data.result || (data.result.length===0)) {
                $scope.shownorecords = true;
            } else {
                $scope.shownorecords = false;
            }
        }
    });
}