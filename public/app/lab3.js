/*
 * @Author: 1dayluo
 * @Date: 2022-11-01 17:17:29
 * @LastEditors: 1dayluo
 * @LastEditTime: 2022-11-01 21:06:19
 * @Description: meow~Always coding for fun!
 *
 */
var labApp = angular.module('lab3', []);
var read_value = '';
labApp.controller("lab_wcachep",['$scope','$http',function($scope,$http){
    
    $scope.run = function(){
        $http({
            method:'GET',
            headers: {'X-Forwarded-Host':'127.0.0.1'},
            url:'index.php'
        }).then(function(resp){
            console.log(resp['data']);
            localStorage.setItem('cache',resp['data']);
        });
    }
    $scope.initheader = function(){
        if(localStorage.getItem('cache')!= '') {
            $http.defaults.headers.common['X-Forwarded-Host'] = localStorage.getItem('cache');
        }
    }
}]);