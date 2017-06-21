"use strict";

app.factory("RecommendationsFactory", function($q, $http, AuthFactory) {

    let getMealRecommendations = function() {
        return $q(function(resolve, reject) {
            $http.get(`${AuthFactory.apiCredentials.firebaseurl}/meals.json`)
            .then(function(returnedRecs) {
                let mealsObject = returnedRecs.data;
                resolve(mealsObject);
            })
            .catch (function(error) {
                reject(error);
            });
        });
    };

    let getHeatRecommendations = function() {
        return $q(function(resolve, reject) {
            $http.get(`${AuthFactory.apiCredentials.firebaseurl}/heat-description.json`)
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
            $http.get(`${AuthFactory.apiCredentials.firebaseurl}/precipitation.json`)
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
            $http.get(`${AuthFactory.apiCredentials.firebaseurl}/gear.json`)
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
