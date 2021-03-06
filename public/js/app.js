/**
 * Created by mattpennella on 7/15/16.
 */
 
 var angular = require("angular");
 
(function(angular) {
    'use strict'
    angular.module('bankingSimulatorApp', [require("angular-route"), 'controllers', 'services']);
    angular.module('bankingSimulatorApp').config(function($routeProvider, $sceProvider) {
        $sceProvider.enabled(false);

        $routeProvider
        .when('/Student/:studentId/transaction', {
            templateUrl: 'partials/transaction.html'
        })
        .when("/transaction",{
            templateUrl: 'partials/transaction.html'
        })
         .when("/landingPage",{
            templateUrl: 'partials/landingPage.html'
        })
        .otherwise ({
            templateUrl: 'partials/landingPage.html'
        });
    });

}(angular));