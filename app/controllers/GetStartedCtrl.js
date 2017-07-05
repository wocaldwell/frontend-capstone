"use strict";

app.controller("GetStartedCtrl", function($scope, $window, $location, LocationFactory, WeatherFactory) {


    // set current location
    LocationFactory.setGeolocation();

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
        // get current coords
        let currentLocation = LocationFactory.getGeolocation();
        if (currentLocation !== '') {
            LocationFactory.setDestination($scope.userDestination);
            $window.location.href = "#!/conditions";
        } else {
            alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
            $window.location.href = "#!/";
        }
    };
});