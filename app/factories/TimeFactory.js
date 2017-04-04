"use strict";

app.factory("TimeFactory", function($window, $filter) {

    let currentDate = new Date(),
        currentDay = currentDate.getDate(),
        currentHour = currentDate.getHours(),
        currentMinute = currentDate.getMinutes(),
        departureHour = $filter("date")(currentDate, "H"),
        returnHour = "",
        returnTimeString = "";


    let setReturnTimeString = function(returnTime) {
        returnTimeString = $filter("date")(returnTime, "shortTime");
        return returnTimeString;
    };

    let getReturnTimeString = function() {
        return returnTimeString;
    };

    // setting default depart hour for instances when no time is chosen
    departureHour = currentHour + 1;

    // setting depart hour if an option is clicked
    let setDepartureHour = function(button) {
        if (button === "Within One Hour") {
        } if (button === "Two Hours") {
            departureHour = currentHour + 2;
        } if (button === "Three Hours") {
            departureHour = currentHour + 3;
        } if (departureHour > 23) {
            departureHour = departureHour - 24;
        }
        departureHour = String(departureHour);
        return departureHour;
    };

    let getDepartureHour = function() {
        return departureHour;
    };

    let setReturnHour = function(returnTime) {
        returnHour = $filter("date")(returnTime, "H");
        return returnHour;
    };

    let getReturnHour = function() {
        return returnHour;
    };

    let getDepartTimeString = function() {
        currentDate = new Date();
        let temporaryDepartHour = getDepartureHour();
        currentDate.setHours(parseInt(temporaryDepartHour));
        let departTimeString = $filter("date")(currentDate, "shortTime");
        return departTimeString;
    };

    let getTimeBetweenRides = function() {
        let startTime = getDepartureHour(),
            backTime = getReturnHour(),
            timeBetweenRides = backTime - startTime;
        if (parseInt(backTime) < parseInt(startTime)) {
            timeBetweenRides = 24 - (parseInt(startTime) - parseInt(backTime));
            timeBetweenRides = String(timeBetweenRides);
        }
        return timeBetweenRides;
    };

    return {
        setDepartureHour,
        getDepartureHour,
        setReturnHour,
        getReturnHour,
        setReturnTimeString,
        getDepartTimeString,
        getReturnTimeString,
        getTimeBetweenRides,
        currentDay
    };

});