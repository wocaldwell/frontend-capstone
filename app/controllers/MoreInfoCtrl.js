"use strict";

app.controller("MoreInfoCtrl", function($scope, $window, $location, TimeFactory, WeatherFactory, LocationFactory) {

    // $scope.nowButton = "Now";
    $scope.oneHourButton = "Within One Hour";
    $scope.twoHourButton = "Two Hours";
    $scope.threeHourButton = "Three Hours";
    $scope.returnTime = "";
    $scope.userDestination = LocationFactory.getDestination();
    // stuff for time picker
    $scope.hstep = 1;
    $scope.mstep = 15;
    $scope.ismeridian = true;
    // $scope.userReturnTime = new Date();
    $scope.userReturnTime = null;
    console.log('default user return time is ', $scope.userReturnTime);

    // disable go button if to return time is null
    $scope.goDisabled = function() {
        if ($scope.userReturnTime !== null) {
            return false;
        } else {
            return true;
        }
    };

    $scope.setDeparture = function(departureButton) {
        TimeFactory.setDepartureHour(departureButton);
    };

    $scope.goToReccomendations = function() {
        // console.log('you wrote: ', $scope.returnTime);
        console.log('the time picker says', $scope.userReturnTime);
        TimeFactory.setDepartureHour();
        TimeFactory.setReturnHour($scope.userReturnTime);
        // TimeFactory.setReturnHour($scope.returnTime);
        TimeFactory.setReturnTimeString($scope.userReturnTime);
        // TimeFactory.setReturnTimeString($scope.returnTime);
        $window.location.href = "#!/recommendations";
    };

    // LocationFactory.getMyCoords();
    // $scope.names = ["john", "bill", "charlie", "robert", "alban", "oscar", "marie", "celine", "brad", "drew", "rebecca", "michel", "francis", "jean", "paul", "pierre", "nicolas", "alfred", "gerard", "louis", "albert", "edouard", "benoit", "guillaume", "nicolas", "joseph"];

});
