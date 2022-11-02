/*
 * @Author: 1dayluo
 * @Date: 2022-10-31 17:50:48
 * @LastEditors: 1dayluo
 * @LastEditTime: 2022-11-01 19:25:49
 * @Description: meow~Always coding for fun!
 */
var labApp = angular.module('lab2', []);
labApp.controller('lab2_controller',['$scope','$http','$parse',function($scope,$http,$parse){
    $scope.upload = function(){
        
        console.log($scope.file);
        $http({
            method:'GET',
            url:'index.php?file='+$scope.file,

        }).then(
            function(resp){
                $scope.outputs = [resp['data']];
            }
        )
        ;
    };

    
}
]);
