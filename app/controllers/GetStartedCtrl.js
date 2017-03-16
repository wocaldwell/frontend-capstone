"use strict";

app.controller("GetStartedCtrl", function($scope, $window, $location, LocationFactory, WeatherFactory) {

    $scope.userDestination = "";

    $scope.goToConditions = function() {
        console.log('you clicked GO!');
        LocationFactory.setDestination($scope.userDestination);
        $window.location.href = "#!/conditions";
    };
});