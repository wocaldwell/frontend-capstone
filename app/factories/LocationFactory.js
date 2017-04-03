"use strict";

app.factory("LocationFactory", function($window, $q, $http, GoogleCredentials) {

    let myCoords = "",
        destination = "",
        newStartLocation = "";

    let getGeolocation = function() {
        return $q(function(resolve, reject) {
            $window.navigator.geolocation.getCurrentPosition(function(position) {
                myCoords = position.coords.latitude + "," + position.coords.longitude;
                // console.log('myCoords from getGeolocation = ', myCoords);
                resolve(myCoords);
            });
        });
    };

    let getMyCoords = function() {
        // console.log('myCoords in getMyCoords = ', myCoords);
        return myCoords;
    };

    let setDestination = function(userDestination) {
        destination = userDestination;
        // console.log('your destination is: ', userDestination);
        return destination;
    };

    let getDestination = function() {
        return destination;
    };

    // change the user input to fomat required by api
    let getDestinationSeperated = function () {
        let destinationInput = getDestination(),
            destinationSeperated = destinationInput.replace(/ /g, "+");
        // console.log('tempDestination = ', tempDestination);
        // console.log('destinationSeperated = ', destinationSeperated);
        return destinationSeperated;
    };

    let setNewStartLocation = function(newStart) {
        newStartLocation = newStart;
        // console.log('your new start is: ', newStartLocation);
        return newStartLocation;
    };

    let getNewStartLocation = function() {
        return newStartLocation;
    };

    // change the user input to fomat required by api
    let getNewStartLocationSeperated = function() {
        let LocationInput = getNewStartLocation(),
            NewStartLocationSeperated = LocationInput.replace(/ /g, "+");
        // console.log('NewStartLocationSeperated = ', NewStartLocationSeperated);
        return NewStartLocationSeperated;
    };

    let getTripDistance = function(startLocation, endLocation) {
        return $q(function(resolve, reject) {
            $http.get(` https://arrivedry.herokuapp.com/api/distancematrix/json?units=imperial&origins=${startLocation}&destinations=${endLocation}&mode=bicycling&key=${GoogleCredentials.apiKey}`)
            .then(function(returnedMatrix) {
                // console.log('returnedMatrix = ', returnedMatrix);
                let distanceObject = returnedMatrix.data;
                // console.log('distanceObject = ', distanceObject);
                resolve(distanceObject);
            })
            .catch (function(error) {
                reject(error);
            });
        });
    };

    return {
        getGeolocation,
        getMyCoords,
        setDestination,
        getDestination,
        getTripDistance,
        getDestinationSeperated,
        setNewStartLocation,
        getNewStartLocationSeperated
    };
});
