"use strict";

app.controller("CurrentConditionsCtrl", function($scope, $window, $location, LocationFactory, WeatherFactory, WeatherCredentials, $routeParams) {
    $scope.apiKey = WeatherCredentials.apiKey;

    WeatherFactory.getConditions()
    .then(function(conditions) {
        console.log('The conditions object is: ', conditions);
        let longLat = conditions.display_location.latitude,
            longLon = conditions.display_location.longitude;
        longLat = parseFloat(longLat);
        longLon = parseFloat(longLon);
        $scope.locationLat = longLat.toFixed(2);
        $scope.locationLon = longLon.toFixed(2);
        $scope.icon = conditions.icon_url;
        $scope.iconText = conditions.icon;
        $scope.temperature = conditions.temp_f;
        $scope.feelsLikeTemperature = conditions.feelslike_f;
        $scope.wind = conditions.wind_string;
        $scope.locationCity = conditions.display_location.city;
        $scope.locationState = conditions.display_location.state;
    });

    // $scope.myCoords = LocationFactory.getMyCoords();
});