/* global angular, app */

'use strict';

/**
 * @ngdoc function
 * @name myJsonEditorApp.controller:LoginCtrl
 * @description
 * # AboutCtrl
 * Controller of the myJsonEditorApp
 */
/**
 * Comment
 */

//var app = angular.module('myJsonEditorApp', ['angular-jwt']);
  app.controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'AuthenticationService',
      function ($scope, $rootScope, $location, AuthenticationService) {
          // reset login status
        AuthenticationService.ClearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/main');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
      /*
       * Token sample
       * exp: 1461368052
       * iat: 1429832052
       * iss: "http://localhost:9000/sbconfig"
       * jti: "id1630"
       * nbf: 1429832052
       * sub: "mailto:prashant@test.com"
       * typ: "http://localhost:9000/"
       */
//      var expToken = 'eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwMDAvc2Jjb25maWciLCJzdWIiOiJtYWlsdG86cHJhc2hhbnRAdGVzdC5jb20iLCJuYmYiOjE0Mjk4MzIwNTIsImV4cCI6MTQ2MTM2ODA1MiwiaWF0IjoxNDI5ODMyMDUyLCJqdGkiOiJpZDE2MzAiLCJ0eXAiOiJodHRwOi8vbG9jYWxob3N0OjkwMDAvIn0.';
//      var tokenPayload = jwtHelper.decodeToken(expToken);
//      var isTokenExpired = jwtHelper.isTokenExpired(expToken);
//      var expireDate = jwtHelper.getTokenExpirationDate(expToken);

//      console.log(tokenPayload);
//      console.log(isTokenExpired);
//      console.log(expireDate);

//      localStorage.setItem('refreshToken', 'refresher');
//      $scope.token = expToken;
//      $scope.callApi = function(){
//          localStorage.setItem('JWT', $scope.token);
//          $http({
//              url: 'http://localhost:9000/data/userData.json',
//              method: 'GET'
//          }).then(function(response){
//              console.log(response.config);
//          }, function(error){
//              //$scope.sentText = 'There was an error sending your request' + error.message;
//          });
//      }

  }]);
