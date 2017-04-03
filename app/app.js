"use strict";

// defining app (remember to assign '"app": true' in your Gruntfile.js in grunt.initConfig under 'Globals"')
let app = angular.module("ArriveDry", ["ngRoute", "ui.bootstrap"]);

// displaying different routing available with which partial and controller assigned to them
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/getStarted.html",
        controller: "GetStartedCtrl"
    })
    .when("/conditions", {
        templateUrl: "partials/currentConditions.html",
        controller: "CurrentConditionsCtrl"
    })
    .when("/recommendations", {
        templateUrl: "partials/recommendations.html",
        controller: "RecommendationsCtrl"
    })
    .when("/essentials", {
        templateUrl: "partials/essentials.html",
        controller: "EssentialsCtrl"
    });
});