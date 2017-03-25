"use strict";

app.controller("CurrentConditionsCtrl", function($scope, $window, $location, LocationFactory, WeatherFactory, WeatherCredentials, $routeParams) {

    $scope.apiKey = WeatherCredentials.apiKey;


    LocationFactory.getGeolocation()
    .then(function(returnedCoords) {
        WeatherFactory.getConditions(returnedCoords)
        .then(function(conditions) {
            let iconText = conditions.icon;
            console.log('The conditions object is: ', conditions);
            $scope.locationLat = conditions.display_location.latitude;
            $scope.locationLon = conditions.display_location.longitude;
            $scope.icon = `https://icons.wxug.com/i/c/i/${iconText}.gif`;
            $scope.weather = conditions.weather;
            $scope.temperature = conditions.temp_f;
            $scope.feelsLikeTemperature = conditions.feelslike_f;
            $scope.wind = conditions.wind_string;
            $scope.locationCity = conditions.display_location.city;
            $scope.locationState = conditions.display_location.state;
        });
    });

    LocationFactory.getGeolocation()
    .then(function(returnedCoords) {
        WeatherFactory.getDayForecast(returnedCoords)
        .then(function(dayForcast) {
            $scope.firstPeriodName = dayForcast[0].title;
            $scope.firstPeriodText = dayForcast[0].fcttext;
            $scope.secondPeriodName = dayForcast[1].title;
            $scope.secondPeriodText = dayForcast[1].fcttext;
        });

    });

});