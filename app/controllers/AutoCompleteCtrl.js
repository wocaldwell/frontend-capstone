"use strict";

app.controller("AutoCompleteCtrl", function($scope, $sce, AuthFactory) {

    // set scope for api key
    $scope.googleApiUrl = $sce.trustAsResourceUrl(`https://maps.googleapis.com/maps/api/js?libraries=placeskey=${AuthFactory.apiCredentials.googlekey}`);
});
