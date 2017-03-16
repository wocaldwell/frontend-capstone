"use strict";

app.controller("MoreInfoCtrl", function($scope, $window, $location, TimeFactory, WeatherFactory, LocationFactory) {

    $scope.nowButton = "Now";
    $scope.oneHourButton = "Within One Hour";
    $scope.twoHourButton = "Two Hours";
    $scope.threeHourButton = "Three Hours";
    $scope.returnTime = "";
    $scope.userDestination = LocationFactory.getDestination();

    $scope.setDeparture = function(departureButton) {
        TimeFactory.setDepartureHour(departureButton);
    };

    $scope.goToReccomendations = function() {
        console.log('you wrote: ', $scope.returnTime);
        TimeFactory.setDepartureHour();
        TimeFactory.setReturnHour($scope.returnTime);
        TimeFactory.setReturnTimeString($scope.returnTime);
        $window.location.href = "#!/recommendations";
    };

});