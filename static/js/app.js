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

simeia.controller('blogCtrl', function ($scope, $routeParams, $location, $http) {
    if ($routeParams.postid) {
        $scope.postid = $routeParams.postid;
    } else {
        $location.path('#/blog/');
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
            when('/blog', {
                templateUrl: 'partials/blog.html'
            }).
            when('/blog/:postid', {
                templateUrl: 'partials/posts.html'
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

// Add current copyright year
var current_year = '-' + new Date().getFullYear();
$('#copy').text(current_year);
