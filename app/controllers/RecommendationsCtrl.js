"use strict";

app.controller("RecommendationsCtrl", function($scope, $window, $location, TimeFactory, WeatherFactory, LocationFactory) {

    $scope.startingLocation = "your current location";
    $scope.changeStart = false;
    $scope.newStartAddress = "";
    $scope.userDestination = LocationFactory.getDestination();
    $scope.returnTimeFull = TimeFactory.getReturnTimeString();
    $scope.departTimeFull = TimeFactory.getDepartTimeString();

    $scope.showChangeAddress = function() {
        console.log('you clicked Change starting location');
        $scope.changeStart = true;
    };

    $scope.newStartingLocation = function() {
        console.log('you clicked go. . . ');
        $scope.startingLocation = "your starting location of " + $scope.newStartAddress;
        $scope.changeStart = false;
    };

     WeatherFactory.getHourlyConditions()
    .then(function(conditions) {
        let departHour = TimeFactory.getDepartureHour(),
            returningHour = TimeFactory.getReturnHour(),
            departObject = {},
            returnObject = {};
        console.log('the depart and return hours are ', departHour, ' and ', returningHour);
        for (var i = 0; i < conditions.length; i++) {
            if (conditions[i].FCTTIME.hour === departHour) {
                departObject = conditions[i];
            } if (conditions[i].FCTTIME.hour === returningHour) {
                returnObject = conditions[i];
            }
        }
        console.log('departObject = ', departObject);
        $scope.departTemperature = departObject.temp.english;
        $scope.departForecast = departObject.condition;
        $scope.departWindDirection = departObject.wdir.dir;
        $scope.departWindSpeed = departObject.wspd.english;
        $scope.returnTemperature = returnObject.temp.english;
        $scope.returnForecast = returnObject.condition;
        $scope.returnWindDirection = returnObject.wdir.dir;
        $scope.returnWindSpeed = returnObject.wspd.english;
    });

    TimeFactory.getTimeBetweenRides();
    // LocationFactory.getMyCoords();

});