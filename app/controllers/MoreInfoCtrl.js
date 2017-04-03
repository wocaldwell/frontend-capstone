"use strict";

app.controller("MoreInfoCtrl", function($scope, $window, $location, TimeFactory, WeatherFactory, LocationFactory) {

    $scope.oneHourButton = "Within One Hour";
    $scope.twoHourButton = "Two Hours";
    $scope.threeHourButton = "Three Hours";
    $scope.returnTime = "";
    $scope.userDestination = LocationFactory.getDestination();
    // stuff for time picker
    $scope.hstep = 1;
    $scope.mstep = 15;
    $scope.ismeridian = true;
    $scope.userReturnTime = null;
    // console.log('default user return time is ', $scope.userReturnTime);

    // disable go button if return time is null
    $scope.goDisabled = function() {
        if ($scope.userReturnTime !== null) {
            return false;
        } else {
            return true;
        }
    };

    // set departure time based on what the user clicks
    $scope.setDeparture = function(departureButton) {
        TimeFactory.setDepartureHour(departureButton);
    };

    // go button click logic
    $scope.goToReccomendations = function() {
        // console.log('you wrote: ', $scope.returnTime);
        // console.log('the time picker says', $scope.userReturnTime);
        TimeFactory.setDepartureHour();
        TimeFactory.setReturnHour($scope.userReturnTime);
        TimeFactory.setReturnTimeString($scope.userReturnTime);
        $window.location.href = "#!/recommendations";
    };
});
