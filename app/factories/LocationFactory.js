"use strict";

app.factory("LocationFactory", function($window) {

    let myCoords = "",
        destination = "";

    let myPosition = function(position) {
        myCoords = position.coords.latitude + "," + position.coords.longitude;
        console.log('myCoords = ', myCoords);
        return myCoords;
    };

    let currentLocation = $window.navigator.geolocation.getCurrentPosition(myPosition);

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

    return {getMyCoords, setDestination, getDestination};

});