"use strict";

app.factory("LocationFactory", function($window, $q) {

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

    return {getGeolocation, getMyCoords, setDestination, getDestination};

});