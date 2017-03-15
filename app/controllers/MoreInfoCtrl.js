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
        TimeFactory.setReturnHour($scope.returnTime);
        // WeatherFactory.getHourlyConditions()
        // .then(function(conditions) {
        //     console.log('The conditions array is: ', conditions);
        //     $scope.locationLat = conditions.display_location.latitude;
        //     $scope.locationLon = conditions.display_location.longitude;
        //     $scope.icon = conditions.icon_url;
        //     $scope.iconText = conditions.icon;
        //     $scope.temperature = conditions.temp_f;
        //     $scope.feelsLikeTemperature = conditions.feelslike_f;
        //     $scope.wind = conditions.wind_string;
        // });
    };

});