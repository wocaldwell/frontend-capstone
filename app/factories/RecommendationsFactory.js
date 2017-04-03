"use strict";

app.factory("RecommendationsFactory", function($q, $http, FirebaseCredentials) {

    let getMealRecommendations = function() {
        return $q(function(resolve, reject) {
            $http.get(`${FirebaseCredentials.databaseURL}/meals.json`)
            .then(function(returnedRecs) {
                let mealsObject = returnedRecs.data;
                // console.log('the mealsObject is ', mealsObject);
                resolve(mealsObject);
            })
            .catch (function(error) {
                reject(error);
            });
        });
    };

    let getHeatRecommendations = function() {
        return $q(function(resolve, reject) {
            $http.get(`${FirebaseCredentials.databaseURL}/heat-description.json`)
            .then(function(returnedRecs) {
                let heatObject = returnedRecs.data;
                resolve(heatObject);
            })
            .catch (function(error) {
                reject(error);
            });
        });
    };

    let getWetRecomendations = function() {
        return $q(function(resolve, reject) {
            $http.get(`${FirebaseCredentials.databaseURL}/precipitation.json`)
            .then(function(returnedRecs) {
                let precipitationObject = returnedRecs.data;
                resolve(precipitationObject);
            })
            .catch (function(error) {
                reject(error);
            });
        });
    };

    let getGearRecommendations = function() {
        return $q(function(resolve, reject) {
            $http.get(`${FirebaseCredentials.databaseURL}/gear.json`)
            .then(function(returnedRecs) {
                let gearObject = returnedRecs.data;
                resolve(gearObject);
            })
            .catch (function(error) {
                reject(error);
            });
        });
    };

    return {
        getMealRecommendations,
        getHeatRecommendations,
        getWetRecomendations,
        getGearRecommendations
    };
});
