"use strict";

app.controller("NavbarCtrl", function($scope, $window, $location){
    $scope.goToEssentials = function() {
        console.log('you clicked essentials');
        $window.location.href = "#!/essentials";
    };
});