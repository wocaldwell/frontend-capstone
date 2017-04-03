"use strict";

app.factory("WeatherFactory", function($q, $http, WeatherCredentials, LocationFactory) {

    let getConditions = function(coords) {
        // console.log('coords passed into getConditions = ', coords);
        return $q(function(resolve, reject) {
            $http.get(`http://api.wunderground.com/api/${WeatherCredentials.apiKey}/conditions/q/${coords}.json`)
            .then(function(returnedConditions) {
                // console.log('returnedConditions = ', returnedConditions);
                let conditionsObject = returnedConditions.data.current_observation;
                // console.log('conditionsObject = ', conditionsObject);
                resolve(conditionsObject);
            })
            .catch (function(error) {
                reject(error);
            });
        });
    };

    let getHourlyConditions = function(coords) {
        return $q(function(resolve, reject) {
            $http.get(`http://api.wunderground.com/api/${WeatherCredentials.apiKey}/hourly/q/${coords}.json`)
            .then(function(hourlyConditions) {
                // console.log('hourlyConditions = ', hourlyConditions);
                let hourlyArray = hourlyConditions.data.hourly_forecast;
                // console.log('hourlyArray = ', hourlyArray);
                resolve(hourlyArray);
            })
            .catch (function(error) {
                reject(error);
            });
        });
    };

    let getSunPhase = function(coords) {
        return $q(function(resolve, reject) {
            $http.get(`http://api.wunderground.com/api/${WeatherCredentials.apiKey}/astronomy/q/${coords}.json`)
            .then(function(astroObject) {
                // console.log('astroObject = ', astroObject);
                let sunObject = astroObject.data.sun_phase;
                // console.log('sunObject = ', sunObject);
                resolve(sunObject);
            })
            .catch (function(error) {
                reject(error);
            });
        });
    };

    let getDayForecast = function(coords) {
        return $q(function(resolve, reject) {
            $http.get(`http://api.wunderground.com/api/${WeatherCredentials.apiKey}/forecast/q/${coords}.json`)
            .then(function(forecastObject) {
                // console.log('forecastObject = ', forecastObject);
                let dayForecastArray = forecastObject.data.forecast.txt_forecast.forecastday;
                // console.log('dayForecastArray = ', dayForecastArray);
                resolve(dayForecastArray);
            })
            .catch (function(error) {
                reject(error);
            });
        });
    };

    return {
        getConditions,
        getHourlyConditions,
        getSunPhase,
        getDayForecast
    };
});