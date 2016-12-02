var simeia = angular.module('simeia', ['ngRoute', 'angular-loading-bar'])
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }]);

simeia.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.html'
            }).
            when('/tigiati', {
                templateUrl: 'partials/tigiati.html'
            }).
            when('/programma', {
                templateUrl: 'partials/programma.html'
            }).
            when('/xartis', {
                templateUrl: 'partials/xartis.html'
            }).
            when('/simmetexoun', {
                templateUrl: 'partials/simmetexoun.html'
            }).
            when('/arxeio', {
                templateUrl: 'partials/arxeio.html'
            }).
            otherwise('/');
    }
]);
