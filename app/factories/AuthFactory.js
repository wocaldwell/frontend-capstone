"use strict";

app.factory("AuthFactory", function($window, $q, $http) {

    let apiCredentials = {};

    let getArriveDryCredsFromAPI = function() {
        return $http({
            url: `https://api.www.williamocaldwell.com/arrivedrycreds/`,
            method: "GET"
        });
    };

    let setApiCredentials = function(creds) {
        apiCredentials["firebaseurl"] = creds.firebaseurl;
        apiCredentials["weatherkey"] = creds.weatherkey;
        apiCredentials["weatherref"] = creds.weatherref;
        apiCredentials["googlekey"] = creds.googlekey;
    };


    return {
        getArriveDryCredsFromAPI,
        setApiCredentials,
        apiCredentials
    };
});