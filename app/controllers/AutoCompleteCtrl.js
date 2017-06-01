"use strict";

app.controller("AutoCompleteCtrl", function($scope, $sce, GoogleCredentials) {

    // set scope for api key
    $scope.googleApiUrl = $sce.trustAsResourceUrl(`https://maps.googleapis.com/maps/api/js?libraries=places`);
});
