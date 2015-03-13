'use strict';

/**
 * @ngdoc overview
 * @name myJsonEditorApp
 * @description
 * # myJsonEditorApp
 *
 * Main module of the application.
 */
angular
  .module('myJsonEditorApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'JSONedit'
  ])
  .config(function ($routeProvider, configDataProvider) {

    //configDataProvider.setDataUrl('Config url here...');

    $routeProvider
      .when('/', {
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
  });
