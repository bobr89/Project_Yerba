angular.module("yerba", ['ngRoute'])

    .controller("mainController", ["$scope", "$http", "loginService", "insurerService", function ($scope, $http, loginService, insurerService) {
        $scope.login = function (user) {
            console.log(loginService.login(user));
        }

        $scope.addPatient = function (user) {
            console.log(insurerService.addPatient(user));
        }
    }])

    .config(function ($routeProvider) {
        $routeProvider.when("/home", {
                templateUrl: "home.html",
                controller: "mainController"
            })
            .when("/insurer/dashboard", {
                templateUrl: "insurance/dashboard.html",
                controller: "mainController"
            })
            .when("/recipient/dashboard", {
                templateUrl: "recipient/dashboard.html",
                controller: "mainController"
            })
            .when("/insurer/add", {
                templateUrl: "insurance/addPatient.html",
                controller: "mainController"
            })
            .when("/insurer/view", {
                templateUrl: "insurance/viewClaims.html",
                controller: "mainController"
            })
            .when("/recipient/history", {
                templateUrl: "recipient/history.html",
                controller: "mainController"
            })
            .when("/recipient/notifications", {
                templateUrl: "recipient/notifications.html",
                controller: "mainController"
            })
            .otherwise({
                redirectTo: "/home"
            })
    });
