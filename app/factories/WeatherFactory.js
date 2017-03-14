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

    return {getConditions};
});