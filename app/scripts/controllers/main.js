/* global app */

'use strict';

/**
 * @ngdoc function
 * @name myJsonEditorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myJsonEditorApp
 */

app.controller('MainCtrl', function ($scope, $filter, configData) {
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
        //console.log('data saved');
        var data = "tste";
        var dataAsBlob = new Blob([data], {type: 'text/json'});
        var fileNameToSaveAs = "testingfile.json";
        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null)
        {
            // Chrome allows the link to be clicked
            // without actually adding it to the DOM.
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        }
    };
});

