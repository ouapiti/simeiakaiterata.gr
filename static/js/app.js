var simeia = angular.module('simeia', ['ngRoute', 'angular-loading-bar'])
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }]);

simeia.controller('zineCtrl', function ($scope, $routeParams, $location, $http) {
    if ($routeParams.zineid) {
        $scope.zineid = $routeParams.zineid;
    } else {
        $location.path('#/simmetexoun/');
    }
});

simeia.controller('drasiCtrl', function ($scope, $routeParams, $location, $http) {
    if ($routeParams.slug) {
        $scope.slug = $routeParams.slug;
    } else {
        $location.path('#/arxeio/');
    }
});

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
            when('/draseis/:slug', {
                templateUrl: 'partials/draseis.html'
            }).
            when('/zines/:zineid', {
                templateUrl: 'partials/zines.html'
            }).
            otherwise('/');
    }
]);
