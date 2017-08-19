'use strict';

// declare modules
angular.module('Home', []);

var a4nApp = angular.module('a4nApplication', [
    'Home',
    'ngRoute',
    'ngCookies'
]);

a4nApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'assets/client/home.html',
            // title: 'Casaclue:: Powered by Exzeo',
            reloadOnSearch: false
        })
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'assets/client/home.html',
            // title: 'Casaclue:: Powered by Exzeo',
            reloadOnSearch: false
        })
        
}]);

a4nApp.run(['$rootScope', '$location', '$http',
    function ($rootScope, $location, $http) {
        
        // $location.path("/home");
        // $rootScope.stateResults = states;

        // //default selected state
        // angular.forEach($rootScope.stateResults, function (ostate, index) {
        //     if (ostate.value.toLowerCase() == data.state.toLowerCase()) {
        //         $rootScope.currentstatename = ostate;
        //     }
        // })
        
        // //var userData = data;
        // $rootScope.CurrentUser = data;

        $rootScope.$on('$locationChangeStart', function (event, next, current) {            
            return true;
        });
        $rootScope.$on('$locationChangeSuccess', function (event, next, current) {            
            return true;
        });
        $rootScope.$on('$routeChangeStart', function (event, current, previous) {            
            if (current.$$route != null && current.$$route.title != null) {
                document.title = current.$$route.title;
            }
            $("span[ng-show=error]").hide();
            //$rootScope.title = current.$$route.title;
        });
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            
            if (current.$$route != null && current.$$route.title != null) {
                document.title = current.$$route.title;
            }
            $("span[ng-show=error]").hide();
        });
    }
]);