'use strict';

/**
 * @ngdoc function
 * @name myJsonEditorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myJsonEditorApp
 */
angular.module('myJsonEditorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
