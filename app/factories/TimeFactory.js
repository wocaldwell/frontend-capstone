"use strict";

app.factory("TimeFactory", function($window) {
    let currentDate = new Date(),
        currentHour = currentDate.getHours(),
        currentMinute = currentDate.getMinutes(),
        departureHour = String(currentHour),
        returnHour = "",
        returnTimeString = "";

    let setReturnTimeString = function(returnTime) {
        returnTimeString = returnTime;
        return returnTimeString;
    };

    let getReturnTimeString = function() {
        return returnTimeString;
    };

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
        departureHour = String(departureHour);
        return departureHour;
    };

    let getDepartureHour = function() {
        return departureHour;
    };

    let setReturnHour = function(returnTime) {
        let timeString = returnTime,
            tempTemp = timeString.split(":")[0];
        if (timeString.includes("P") || timeString.includes("p")) {
            tempTemp = parseInt(tempTemp) + 12;
            tempTemp = String(tempTemp);
        }
        returnHour = tempTemp;
        console.log('returnHour = ', returnHour);
        return returnHour;
    };

    let getReturnHour = function() {
        console.log('you set the return hour to ', returnHour);
        return returnHour;
    };

    return {setDepartureHour, getDepartureHour, setReturnHour, getReturnHour, setReturnTimeString, getReturnTimeString};

});