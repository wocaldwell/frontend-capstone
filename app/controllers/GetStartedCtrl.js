"use strict";

app.controller("GetStartedCtrl", function($scope, $window, $location, LocationFactory, WeatherFactory) {
    $scope.goToConditions = function() {
        console.log('you clicked GO!');
        $window.location.href = "#!/conditions";
    };
});