"use strict";

app.factory("WeatherFactory", function($q, $http, WeatherCredentials, LocationFactory) {

    let getConditions = function() {
        let thisSpot = LocationFactory.getMyCoords();
        console.log('myCoords in getConditions = ', thisSpot);
        return $q(function(resolve, reject) {
            $http.get(`http://api.wunderground.com/api/${WeatherCredentials.apiKey}/conditions/q/${thisSpot}.json`)
        .then(function(returnedConditions) {
            console.log('returnedConditions = ', returnedConditions);
            let conditionsObject = returnedConditions.data.current_observation;
            console.log('conditionsObject = ', conditionsObject);
            resolve(conditionsObject);
        })
        .catch (function(error) {
            reject(error);
        });
        });
    };

    let getHourlyConditions = function() {
        let thisSpot = LocationFactory.getMyCoords();
        return $q(function(resolve, reject) {
            $http.get(`http://api.wunderground.com/api/${WeatherCredentials.apiKey}/hourly/q/${thisSpot}.json`)
        .then(function(hourlyConditions) {
            console.log('hourlyConditions = ', hourlyConditions);
            let hourlyArray = hourlyConditions.data.hourly_forecast;
            console.log('hourlyArray = ', hourlyArray);
            resolve(hourlyArray);
        })
        .catch (function(error) {
            reject(error);
        });
        });
    };

    return {getConditions, getHourlyConditions};
});