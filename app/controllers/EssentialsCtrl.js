"use strict";

app.controller("EssentialsCtrl", function($scope, $window, $location, RecommendationsFactory){

    // declare for use in multiple functions
    let gearObject = {};
    let gearUrl = "";

    // logic to get the link urls from firebase db for li's
    RecommendationsFactory.getGearRecommendations()
    .then(function(returnedGear) {
        gearObject = returnedGear;
        // console.log('the gearObject is ', gearObject);
        $scope.camelbak = gearObject.bicycle.bottles.camelbak;
        $scope.cleanBottle = gearObject.bicycle.bottles.cleanBottle;
        $scope.chain = gearObject.bicycle.chain.chain;
        $scope.powerLink = gearObject.bicycle.chain.powerLink;
        $scope.cygolite = gearObject.bicycle.frontLights.cygolite;
        $scope.frontFlea = gearObject.bicycle.frontLights.flea;
        $scope.rearFlea = gearObject.bicycle.rearLights.flea;
        $scope.serfas = gearObject.bicycle.rearLights.serfas;
        $scope.gatorskin = gearObject.bicycle.tires.gatorskin;
        $scope.schwalbe = gearObject.bicycle.tires.schwalbe;
        $scope.cableLock = gearObject.stuff.locks.cableLock;
        $scope.diySaddleLock = gearObject.stuff.locks.diySaddleLock;
        $scope.uLock = gearObject.stuff.locks.uLock;
        $scope.latexGloves = gearObject.stuff.other.latexGloves;
        $scope.plasticBags = gearObject.stuff.other.plasticBags;
        $scope.arkel = gearObject.stuff.portage.arkel;
        $scope.ortlieb = gearObject.stuff.portage.ortlieb;
        $scope.electricalTape = gearObject.stuff.tools.electricalTape;
        $scope.multiTool = gearObject.stuff.tools.multiTool;
        $scope.tireLeavers = gearObject.stuff.tools.tireLeavers;
        $scope.wrench = gearObject.stuff.tools.wrench;
        $scope.boots = gearObject.body.coldWeather.boots;
        $scope.coldGloves = gearObject.body.coldWeather.gloves.full;
        $scope.mitts = gearObject.body.coldWeather.gloves.mitts;
        $scope.jacket = gearObject.body.coldWeather.jacket;
        $scope.coldShirts = gearObject.body.coldWeather.shirts;
        $scope.toques = gearObject.body.coldWeather.toques.regular;
        $scope.flappyToques = gearObject.body.coldWeather.toques.flaps;
        $scope.bandanna = gearObject.body.everyday.bandanna;
        $scope.cyclingCap = gearObject.body.everyday.cyclingCap;
        $scope.glasses = gearObject.body.everyday.glasses;
        $scope.everydayGloves = gearObject.body.everyday.gloves;
        $scope.pants = gearObject.body.everyday.pants;
        $scope.everydayShirts = gearObject.body.everyday.shirts;
        $scope.shoes = gearObject.body.everyday.shoes;
        $scope.shorts = gearObject.body.everyday.shorts;
        $scope.everydaySocks = gearObject.body.everyday.socks.short;
        $scope.coldSocks = gearObject.body.everyday.socks.long;
    });


        // logic to get the link urls from firebase db for BUTTONS
    $scope.goToBikeLink = function(gearName) {
        if (gearName === "bell") {
            gearUrl = gearObject.bicycle.bell;
        } if (gearName === "bottleCage") {
            gearUrl = gearObject.bicycle.bottleCage;
        } if (gearName === "fenders") {
            gearUrl = gearObject.bicycle.fenders;
        } if (gearName === "framePump") {
            gearUrl = gearObject.bicycle.framePump;
        } if (gearName === "pedals") {
            gearUrl = gearObject.bicycle.pedals;
        } if (gearName === "racks") {
            gearUrl = gearObject.bicycle.racks;
        } if (gearName === "saddle") {
            gearUrl = gearObject.bicycle.saddle;
        } if (gearName === "tubes") {
            gearUrl = gearObject.bicycle.tubes;
        }
        $window.open(gearUrl, "_blank");
    };
});