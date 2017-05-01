"use strict";

app.controller("AutoCompleteCtrl", function($scope, GoogleCredentials) {

    // set scope for api key
    $scope.apiKey = GoogleCredentials.apiKey;
});