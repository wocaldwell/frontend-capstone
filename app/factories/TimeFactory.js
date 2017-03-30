"use strict";

app.factory("TimeFactory", function($window, $filter) {
    let currentDate = new Date(),
        currentDay = currentDate.getDate(),
        currentHour = currentDate.getHours(),
        currentMinute = currentDate.getMinutes(),
        departureHour = $filter("date")(currentDate, "H"),
        // departureHour = String(currentHour),
        returnHour = "",
        returnTimeString = "";
        console.log('the day is ', currentDay);


    let setReturnTimeString = function(returnTime) {
        // returnTimeString = returnTime;
        returnTimeString = $filter("date")(returnTime, "shortTime");
        console.log('the return time was set to ', returnTimeString);
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
            // departureHour = currentHour + 1;
            console.log('this hour + 1 is', departureHour);
        } if (button === "Two Hours") {
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
        // let timeString = returnTime,
        //     temporaryHour = timeString.split(":")[0];
        // if (timeString.includes("P") || timeString.includes("p") && temporaryHour !== "12") {
        //     temporaryHour = parseInt(temporaryHour) + 12;
        //     temporaryHour = String(temporaryHour);
        // } if (timeString.includes("A") || timeString.includes("a") && temporaryHour === "12") {
        //     temporaryHour = parseInt(temporaryHour) - 12;
        //     temporaryHour = String(temporaryHour);
        // }
        // returnHour = temporaryHour;
        // console.log('returnHour = ', returnHour);
        returnHour = $filter("date")(returnTime, "H");
        return returnHour;
    };

    let getReturnHour = function() {
        console.log('you are getting the return hour of ', returnHour);
        return returnHour;
    };

    let getDepartTimeString = function() {
        currentDate = new Date();
        let temporaryDepartHour = getDepartureHour();
            // temporaryMinutes = 7;
            // temporaryMinutes = currentDate.getMinutes();
        currentDate.setHours(parseInt(temporaryDepartHour));
        console.log('temporaryDepartHour in getDepartTimeString is ', temporaryDepartHour);
        // console.log('temporaryMinutes = ', temporaryMinutes);
        // if (temporaryMinutes < 10) {
        //     temporaryMinutes = "0" + temporaryMinutes;
        // } if (parseInt(temporaryDepartHour) < 12) {
        //     temporaryMinutes = temporaryMinutes + "am";
        // } if (parseInt(temporaryDepartHour) === 12) {
        //     temporaryMinutes = temporaryMinutes + "pm";
        // } if (temporaryDepartHour > 12) {
        //     temporaryDepartHour = parseInt(temporaryDepartHour) - 12;
        //     temporaryDepartHour = String(temporaryDepartHour);
        //     temporaryMinutes = temporaryMinutes + "pm";
        // }
        let departTimeString = $filter("date")(currentDate, "shortTime");
        // let departTimeString = temporaryDepartHour + ":" + temporaryMinutes;
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
        console.log('Your workday is approx.', timeBetweenRides, ' hours long.');
        return timeBetweenRides;
    };

    return {setDepartureHour, getDepartureHour, setReturnHour, getReturnHour, setReturnTimeString, getDepartTimeString, getReturnTimeString, getTimeBetweenRides, currentDay};

});