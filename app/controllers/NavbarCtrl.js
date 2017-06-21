"use strict";

app.controller("NavbarCtrl", function($scope, $window, $location, AuthFactory){

    // commuter essentials link click
    $scope.goToEssentials = function() {
        $window.location.href = "#!/essentials";
    };

    AuthFactory.getArriveDryCredsFromAPI()
    .then(function(returnedVars){
        let creds = returnedVars.data;
        AuthFactory.setDiscogsCredentials(creds);
    });

});