'use strict';

/**
 * @ngdoc service
 * @name myJsonEditorApp.configData
 * @description
 * # configData
 * Provider in the myJsonEditorApp.
 */
angular.module('myJsonEditorApp')
        .provider('configData', function () {

            this.dataUrl = 'http://localhost:9000/data/configData.json';

            this.setDataUrl = function (newUrl) {
                if (newUrl)
                    this.dataUrl = newUrl;
            };

            // Method for instantiating
            this.$get = function ($http) {

                var self = this;

                var service = {
                    getdata: function () {

                        var obj = {content: null};

                        $http.get(self.dataUrl)
                                .success(function (data, status, headers, config) {
                                    //console.log(status);
                                    if (status === 200) {
                                        obj.content = data;
                                    }
                                })
                                .error(function (data, status, headers, config) {
                                    //console.log(status);
                                    if (status === 404) {
                                        obj.content = {status : status + '-' + data};
                                    }
                                });

                        return obj;
                    }
                };

                return service;
            };
        });
