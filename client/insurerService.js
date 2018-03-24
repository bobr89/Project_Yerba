angular.module("yerba")

    .service("insurerService", ["$http", "$location", function ($http, $location) {

        this.addPatient = function (user) {
            return $http.post("http://localhost:2000/patient/add", user).then(function (response) {
                console.log(response.data);
                return response.data;
            });
        }
    }]);
