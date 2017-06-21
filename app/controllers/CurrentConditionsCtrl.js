"use strict";

app.controller("CurrentConditionsCtrl", function($scope, $window, $location, LocationFactory, WeatherFactory, AuthFactory, $routeParams) {

    // set scope for api keys
    $scope.apiKey = AuthFactory.apiCredentials.weatherkey;
    $scope.apiRef = AuthFactory.apiCredentials.weatherref;
    // set loading screen to true on partial load
    $scope.showWheel = true;

    // logic to populate radar and conditions info from weather api
    LocationFactory.getGeolocation()
    .then(function(returnedCoords) {
        WeatherFactory.getConditions(returnedCoords)
        .then(function(conditions) {
            let iconText = conditions.icon;
            $scope.locationLat = conditions.display_location.latitude;
            $scope.locationLon = conditions.display_location.longitude;
            $scope.icon = `https://icons.wxug.com/i/c/j/${iconText}.gif`;
            $scope.weather = conditions.weather;
            $scope.temperature = conditions.temp_f;
            $scope.feelsLikeTemperature = conditions.feelslike_f;
            $scope.wind = conditions.wind_string;
            $scope.windDegrees = conditions.wind_degrees;
            $scope.locationCity = conditions.display_location.city;
            $scope.locationState = conditions.display_location.state;
            // remove loading screen
            $scope.showWheel = false;
            $("#conditions-page-view").removeClass("blur");
        });
    });

    // logic to populate day outlook info from weather api
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