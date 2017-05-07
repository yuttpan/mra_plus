angular.module('starter')
.service('DataService', function($http) {


 this.loginService = function(data) {

        var formdata = data;
        console.log(formdata)
        var promise = $http({
            method: 'POST',
            url: 'http://118.175.76.244/mr_api/login.php',
            data: formdata

        });
        return promise;
    };

    this.searchHn = function(data) {

        var formdata = data;
        console.log(formdata)
        var promise = $http({
            method: 'POST',
            url: 'http://118.175.76.244/mr_api/search_hn.php',
            data: formdata

        });
        return promise;
    };

    this.searchAn = function(data) {

        var formdata = data;
        console.log(formdata)
        var promise = $http({
            method: 'POST',
            url: 'http://118.175.76.244/mr_api/search_an.php',
            data: formdata

        });
        return promise;
    };







})