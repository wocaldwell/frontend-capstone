"use strict";

app.factory("WeatherFactory", function($q, $http, WeatherCredentials, LocationFactory) {

    let getConditions = function(coords) {
        return $q(function(resolve, reject) {
            $http.get(`http://api.wunderground.com/api/${WeatherCredentials.apiKey}/conditions/q/${coords}.json`)
            .then(function(returnedConditions) {
                let conditionsObject = returnedConditions.data.current_observation;

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
                let hourlyArray = hourlyConditions.data.hourly_forecast;
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
                let sunObject = astroObject.data.sun_phase;
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
                let dayForecastArray = forecastObject.data.forecast.txt_forecast.forecastday;
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