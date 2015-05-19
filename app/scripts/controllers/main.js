/* global app */

'use strict';

/**
 * @ngdoc function
 * @name myJsonEditorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myJsonEditorApp
 */

app.controller('MainCtrl', function ($scope, $rootScope, $cookieStore, $location, $filter, configData) {

    $rootScope.globals = $cookieStore.get('globals') || {};
    $scope.currentUser = $rootScope.globals.currentUser;

    if ($rootScope.globals.currentUser) {
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
    }
    else {
        $location.path('/');
    }

    $scope.save = function () {
        console.log('data saved');
        var data = $scope.jsonString;
        console.log(data);

        var dataJson = JSON.stringify(data);
        console.log(dataJson);

        return new Blob([dataJson], { type: "application/json" });
    };
});

app.directive('myDownload', function ($compile) {
    return {
        restrict: 'A',
        scope: { getUrlData: '&getData' },
        link: function (scope, elm, attrs) {
            var url = URL.createObjectURL(scope.getUrlData());
            elm.append($compile('<a class="button" download="env_test.json" href="' + url + '"> Download</a>')(scope));
        }
    };
});


