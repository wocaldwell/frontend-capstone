"use strict";

app.controller("NavbarCtrl", function($scope, $window, $location){

    // commuter essentials link click
    $scope.goToEssentials = function() {
        $window.location.href = "#!/essentials";
    };
});