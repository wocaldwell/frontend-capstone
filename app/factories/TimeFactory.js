"use strict";

app.factory("TimeFactory", function($window) {
    let currentDate = new Date(),
        currentHour = currentDate.getHours(),
        currentMinute = currentDate.getMinutes(),
        departureHour = currentHour,
        returnHour = "";

    let setDepartureHour = function(button) {
        if (button === "Two Hours") {
            departureHour = currentHour + 2;
            console.log('hour = ', currentHour);
            console.log('this hour + 2 is', departureHour);
        } if (button === "Three Hours") {
            departureHour = currentHour + 3;
            console.log('this hour + 3 is', departureHour);
        } if (departureHour > 23) {
            departureHour = departureHour - 24;
            console.log('early mornin hour is', departureHour);
        }
        return departureHour;
    };

    let getDepartureHour = function() {
        return departureHour;
    };

    let setReturnHour = function(returnTime) {
        let timeString = returnTime,
            returnHour = timeString.split(":")[0];
        if (timeString.includes("P") || timeString.includes("p")) {
            returnHour = parseInt(returnHour) + 12;
            returnHour = String(returnHour);
        }
        console.log('returnHour = ', returnHour);
        return returnHour;
    };

    let getReturnHour = function() {
        return returnHour;
    };

    return {setDepartureHour, getDepartureHour, setReturnHour, getReturnHour};

});