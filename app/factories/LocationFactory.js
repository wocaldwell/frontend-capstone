"use strict";

app.factory("LocationFactory", function($window, $q, $http, GoogleCredentials) {

    let myCoords = "",
        destination = "";

    let getGeolocation = function() {
        return $q(function(resolve, reject) {
            $window.navigator.geolocation.getCurrentPosition(function(position) {
                myCoords = position.coords.latitude + "," + position.coords.longitude;
                console.log('myCoords from getGeolocation = ', myCoords);
                resolve(myCoords);
            });
        });
    };

    let getMyCoords = function() {
        console.log('myCoords in getMyCoords = ', myCoords);
        return myCoords;
    };

    let setDestination = function(userDestination) {
        destination = userDestination;
        console.log('your destination is: ', userDestination);
        return destination;
    };

    let getDestination = function() {
        return destination;
    };

    let getTripDistance = function(startLocation, endLocation) {
        return $q(function(resolve, reject) {
            $http.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${startLocation}&destinations=${endLocation}&mode=bicycling&key=${GoogleCredentials.apiKey}`)
            .then(function(returnedMatrix) {
                console.log('returnedMatrix = ', returnedMatrix);
                let distanceObject = returnedMatrix.data.current_observation;
                console.log('distanceObject = ', distanceObject);
                resolve(distanceObject);
            })
            .catch (function(error) {
                reject(error);
            });
        });
    };

    return {getGeolocation, getMyCoords, setDestination, getDestination, getTripDistance};

});
