'use strict';

/**
 * @ngdoc function
 * @name myJsonEditorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myJsonEditorApp
 */
angular.module('myJsonEditorApp')
        .controller('MainCtrl', function ($scope,  $filter, configData) {
            $scope.jsonData = configData.getdata();

            $scope.$watch('jsonData', function (json) {
                $scope.jsonString = $filter('json')(json.content);
            }, true);

            $scope.$watch('jsonString', function (json) {
                try {
                    //$scope.jsonData = JSON.parse(json);
                    $scope.wellFormed = true;
                } catch (e) {
                    $scope.wellFormed = false;
                }
            }, true);


            $scope.save = function () {
                console.log('data saved');
            };


        });
