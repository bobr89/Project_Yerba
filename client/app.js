angular.module("yerba", [])

.controller("mainController", "loginService", ["$scope", "$http", function ($scope, $http) {
    $scope.login = function(user){
        console.log(loginService.login(user));
    }
}]);