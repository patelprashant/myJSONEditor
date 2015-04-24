/* global angular */

'use strict';

/**
 * @ngdoc overview
 * @name myJsonEditorApp
 * @description
 * # myJsonEditorApp
 *
 * Main module of the application.
 */
var app = angular
        .module('myJsonEditorApp', [
            'ngAnimate',
            'ngAria',
            'ngCookies',
            'ngMessages',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'JSONedit',
            'angular-jwt'
        ]);

app.config(function ($routeProvider, configDataProvider, jwtInterceptorProvider, $httpProvider) {

    //configDataProvider.setDataUrl('Config url here...');

    $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    app.run(['$rootScope', '$location', '$cookieStore', '$http',
        function ($rootScope, $location, $cookieStore, $http) {
            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            }

            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in
                if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                    $location.path('/login');
                }
            });
        }]);
//    jwtInterceptorProvider.tokenGetter = function (jwtHelper, $http) {
//        var storage = window.localStorage;
//
//        var jwt = storage.getItem('JWT');
//        var refreshToken = storage.getItem('refresh_token');
//        if (jwtHelper.isTokenExpired(jwt)) {
//            return $http({
//                url: 'http://localhost:9000/data/configData.json',
//                skipAuthorization: true,
//                method: 'POST',
//                refresh_token: refreshToken
//            }).then(function () {
//                storage.setItem('JWT', 'JWT refreshed')
//                return 'JWT refreshed';
//            });
//        }
//        else {
//            return jwt;
//        }
//        $httpProvider.interceptors.push('jwtInterceptor');
//    }


});
