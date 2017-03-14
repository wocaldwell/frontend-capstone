"use strict";

app.factory("LocationFactory", function($window) {

    let myCoords = "";

    let myPosition = function(position) {
        myCoords = position.coords.latitude + "," + position.coords.longitude;
        console.log('myCoords = ', myCoords);
        return myCoords;
    };

    let currentLocation = $window.navigator.geolocation.getCurrentPosition(myPosition);

    let getMyCoords = function() {
        return myCoords;
    };



    return {currentLocation, getMyCoords};

});