angular.module("yerba")

    .service("loginService", ["$http", "$location", function ($http, $location) {
        //    this.validate = function(newUser){
        //        //Check if Name has Numbers
        //        var regex = /\d/g;
        //        //First Name
        //        var y = regex.test(newUser.firstName);
        //        if (y === true) {
        //            return false;
        //        }
        //        //Last Name
        //        y = regex.test(newUser.lastName);
        //        if (y === true) {
        //            return false;
        //        }
        //        //Check if Password has Number
        //        y = regex.test(newUser.password);
        //        if(y === false && newUser.password.length >= 6){
        //            return false;
        //        }
        //        //Return true if all paramaters passed
        //        else {
        //            return true;
        //        }
        //    }
        this.login = function (user) {
            if (user.type === "recipient") {
                $location.path('/recipient/dashboard')
            } else if (user.type === "insurer") {
                $location.path('/insurer/dashboard')
            }
            return true;
        }
    }]);
