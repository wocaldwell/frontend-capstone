"use strict";

app.controller("CurrentConditionsCtrl", function($scope, $window, $location, LocationFactory, WeatherFactory, WeatherCredentials, $routeParams) {

    $scope.apiKey = WeatherCredentials.apiKey;


    LocationFactory.getGeolocation()
    .then(function(returnedCoords) {
        WeatherFactory.getConditions(returnedCoords)
        .then(function(conditions) {
            console.log('The conditions object is: ', conditions);
            $scope.locationLat = conditions.display_location.latitude;
            $scope.locationLon = conditions.display_location.longitude;
            $scope.icon = conditions.icon_url;
            $scope.iconText = conditions.icon;
            $scope.temperature = conditions.temp_f;
            $scope.feelsLikeTemperature = conditions.feelslike_f;
            $scope.wind = conditions.wind_string;
            $scope.locationCity = conditions.display_location.city;
            $scope.locationState = conditions.display_location.state;
        });
    });

});