"use strict";

app.controller("RecommendationsCtrl", function($scope, $window, $location, TimeFactory, WeatherFactory, LocationFactory) {

    $scope.startingLocation = "your current location";
    $scope.changeStart = false;
    $scope.newStartAddress = "";
    $scope.userDestination = LocationFactory.getDestination();

    $scope.showChangeAddress = function() {
        console.log('you clicked Change starting location');
        $scope.changeStart = true;
    };

    $scope.newStartingLocation = function() {
        console.log('you clicked go. . . ');
        $scope.startingLocation = "your starting location of " + $scope.newStartAddress;
        $scope.changeStart = false;
    };


});