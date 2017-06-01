"use strict";

app.controller("GetStartedCtrl", function($scope, $window, $location, LocationFactory, WeatherFactory) {


    // disable go button if destination is an invalid street address
    $scope.goDisabled = function() {
        if ($scope.userDestination) {
            return false;
        } else {
            return true;
        }
    };

    // go button click logic
    $scope.goToConditions = function() {
        LocationFactory.setDestination($scope.userDestination);
        $window.location.href = "#!/conditions";
    };
});