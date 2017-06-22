"use strict";

app.controller("AutoCompleteCtrl", function($scope, $sce, AuthFactory) {

    // set scope for api key
    $scope.apiKey = AuthFactory.apiCredentials.googlekey;

    // $scope.googleApiUrl = $sce.trustAsResourceUrl(`https://maps.googleapis.com/maps/api/js?libraries=places&key=${AuthFactory.apiCredentials.googlekey}`);
});
