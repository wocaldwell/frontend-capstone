"use strict";

app.controller("RecommendationsCtrl", function($scope, $window, $location, TimeFactory, WeatherFactory, LocationFactory, RecommendationsFactory) {

    // change start div view set to false
    $scope.changeStart = false;
    $scope.newStartAddress = "";
    $scope.userDestination = LocationFactory.getDestination();
    $scope.returnTimeFull = TimeFactory.getReturnTimeString();
    $scope.departTimeFull = TimeFactory.getDepartTimeString();
    $scope.dayLength = TimeFactory.getTimeBetweenRides();
    // set loading screen to be viewed
    $scope.showWheel = true;


    // show change start div if link is clicked
    $scope.showChangeAddress = function() {
        $scope.changeStart = true;
    };

    // change the starting location when the go button is clicked
    $scope.changeStartingLocation = function() {
        $scope.changeStart = false;
        LocationFactory.setNewStartLocation($scope.newStartAddress);
        LocationFactory.getTripDistance(LocationFactory.getNewStartLocationSeperated(), LocationFactory.getDestinationSeperated())
        .then(function(trip) {
            $scope.tripDuration = trip.rows[0].elements[0].duration.text;
            $scope.tripDistance = trip.rows[0].elements[0].distance.text;
            $scope.tripOrigin = trip.origin_addresses[0];
        });
    };

     // lights logic
    LocationFactory.getGeolocation()
    .then(function(returnedCoords) {
        WeatherFactory.getSunPhase(returnedCoords)
        .then(function(sunData) {
            let departSunCheck = TimeFactory.getDepartureHour(),
                returnSunCheck = TimeFactory.getReturnHour();
            if (parseInt(departSunCheck) <= parseInt(sunData.sunrise.hour) || parseInt(departSunCheck) >= parseInt(sunData.sunset.hour)) {
                $scope.departLightsMessage = "You will need lights for this journey.";
            } if (parseInt(returnSunCheck) <= parseInt(sunData.sunrise.hour) || parseInt(returnSunCheck) >= parseInt(sunData.sunset.hour)) {
                $scope.returnLightsMessage = "Make sure you pack lights, this ride is in the dark.";
            }
        });
    });

    // hourly weather logic
    LocationFactory.getGeolocation()
    .then(function(returnedCoords) {
         WeatherFactory.getHourlyConditions(returnedCoords)
        .then(function(conditions) {
            let departHour = TimeFactory.getDepartureHour(),
                returningHour = TimeFactory.getReturnHour(),
                departDate = String(TimeFactory.currentDay),
                tempNextDate = parseInt(departDate) + 1,
                nextDate = String(tempNextDate),
                departObject = {},
                returnObject = {};
            for (var i = 0; i < conditions.length; i++) {
                if (conditions[i].FCTTIME.hour === departHour && conditions[i].FCTTIME.mday === departDate) {
                    departObject = conditions[i];
                } if (conditions[i].FCTTIME.hour === returningHour && conditions[i].FCTTIME.mday === departDate) {
                    returnObject = conditions[i];
                } if (parseInt(returningHour) <= parseInt(departHour) && conditions[i].FCTTIME.mday === nextDate) {
                    returnObject = conditions[i];
                }
            }

            $scope.departTemperature = departObject.temp.english;
            $scope.departForecast = departObject.condition;
            $scope.departWindDirection = departObject.wdir.dir;
            $scope.departWindSpeed = departObject.wspd.english;
            $scope.returnTemperature = returnObject.temp.english;
            $scope.returnForecast = returnObject.condition;
            $scope.returnWindDirection = returnObject.wdir.dir;
            $scope.returnWindSpeed = returnObject.wspd.english;

            // precip logic
            if (parseInt(departObject.pop) <= 20) {
                $scope.departPrecipitation = "insignificant";
            } if (parseInt(departObject.pop) >= 21 && parseInt(departObject.pop) <= 50) {
                $scope.departPrecipitation = "slight";
            } if (parseInt(departObject.pop) >= 51 && parseInt(departObject.pop) <= 80) {
                $scope.departPrecipitation = "possible";
            } if (parseInt(departObject.pop) >= 81) {
                $scope.departPrecipitation = "probable";
            } if (parseInt(returnObject.pop) <= 20) {
                $scope.returnPrecipitation = "insignificant";
            } if (parseInt(returnObject.pop) >= 21 && parseInt(returnObject.pop) <= 50) {
                $scope.returnPrecipitation = "slight";
            } if (parseInt(returnObject.pop) >= 51 && parseInt(returnObject.pop) <= 80) {
                $scope.returnPrecipitation = "possible";
            } if (parseInt(returnObject.pop) >= 81) {
                $scope.returnPrecipitation = "probable";
            }

            // heat logic
            RecommendationsFactory.getHeatRecommendations()
            .then(function(returnedRecs) {
                if (parseInt($scope.departTemperature) <= 20) {
                    $scope.departHeatSentence = returnedRecs.verycold;
                } if (parseInt($scope.departTemperature) >= 21 && parseInt($scope.departTemperature) <= 40) {
                    $scope.departHeatSentence = returnedRecs.cold;
                } if (parseInt($scope.departTemperature) >= 41 && parseInt($scope.departTemperature) <= 60) {
                    $scope.departHeatSentence = returnedRecs.cool;
                } if (parseInt($scope.departTemperature) >= 61 && parseInt($scope.departTemperature) <= 75) {
                    $scope.departHeatSentence = returnedRecs.comfortable;
                } if (parseInt($scope.departTemperature) >= 76 && parseInt($scope.departTemperature) <= 85) {
                    $scope.departHeatSentence = returnedRecs.warm;
                } if (parseInt($scope.departTemperature) >= 86 && parseInt($scope.departTemperature) <= 99) {
                    $scope.departHeatSentence = returnedRecs.hot;
                } if (parseInt($scope.departTemperature) >= 100) {
                    $scope.departHeatSentence = returnedRecs.veryhot;
                } if (parseInt($scope.returnTemperature) <= 20) {
                    $scope.returnHeatSentence = returnedRecs.verycold;
                } if (parseInt($scope.returnTemperature) >= 21 && parseInt($scope.returnTemperature) <= 40) {
                    $scope.returnHeatSentence = returnedRecs.cold;
                } if (parseInt($scope.returnTemperature) >= 41 && parseInt($scope.returnTemperature) <= 60) {
                    $scope.returnHeatSentence = returnedRecs.cool;
                } if (parseInt($scope.returnTemperature) >= 61 && parseInt($scope.returnTemperature) <= 75) {
                    $scope.returnHeatSentence = returnedRecs.comfortable;
                } if (parseInt($scope.returnTemperature) >= 76 && parseInt($scope.returnTemperature) <= 85) {
                    $scope.returnHeatSentence = returnedRecs.warm;
                } if (parseInt($scope.returnTemperature) >= 86 && parseInt($scope.returnTemperature) <= 99) {
                    $scope.returnHeatSentence = returnedRecs.hot;
                } if (parseInt($scope.returnTemperature) >= 100) {
                    $scope.returnHeatSentence = returnedRecs.veryhot;
                }
            });
        })
        .then(function() {
            RecommendationsFactory.getWetRecomendations()
            .then(function(returnedRecs) {
                if ($scope.departPrecipitation === "insignificant") {
                    $scope.departWetSentence = returnedRecs.insignificant;
                } if ($scope.departPrecipitation === "slight") {
                    $scope.departWetSentence = returnedRecs.slight;
                } if ($scope.departPrecipitation === "possible") {
                    $scope.departWetSentence = returnedRecs.possible;
                } if ($scope.departPrecipitation === "probable") {
                    $scope.departWetSentence = returnedRecs.probable;
                } if ($scope.returnPrecipitation === "insignificant") {
                    $scope.returnWetSentence = returnedRecs.insignificant;
                } if ($scope.returnPrecipitation === "slight") {
                    $scope.returnWetSentence = returnedRecs.slight;
                } if ($scope.returnPrecipitation === "possible") {
                    $scope.returnWetSentence = returnedRecs.possible;
                } if ($scope.returnPrecipitation === "probable") {
                    $scope.returnWetSentence = returnedRecs.probable;
                }
            });
        });
    });

    // meal pack recommendations logic
    RecommendationsFactory.getMealRecommendations()
    .then(function(returnedRecs) {
        if ($scope.dayLength < 6) {
            $scope.mealPack = returnedRecs.short;
        } if ($scope.dayLength >= 9) {
            $scope.mealPack = returnedRecs.long;
        } if ($scope.dayLength >= 6 && $scope.dayLength <= 8) {
            $scope.mealPack = returnedRecs.regular;
        }
    });

    // getting distance and duration based on current location (default)
    LocationFactory.getGeolocation()
    .then(function(returnedCoords) {
        LocationFactory.getTripDistance(returnedCoords, LocationFactory.getDestinationSeperated())
        .then(function(trip) {
            $scope.tripDuration = trip.rows[0].elements[0].duration.text;
            $scope.tripDistance = trip.rows[0].elements[0].distance.text;
            $scope.tripOrigin = trip.origin_addresses[0];
            $scope.tripDestination = trip.destination_addresses[0];
            // remove loading screen
            $scope.showWheel = false;
            $("#recs-page-view").removeClass("blur");
        });
    });
});
