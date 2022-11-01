/*
 * @Author: 1dayluo
 * @Date: 2022-10-31 17:50:48
 * @LastEditors: 1dayluo
 * @LastEditTime: 2022-11-01 15:02:53
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
            function(data){
                $scope.outputs = [data["data"]];
            }
        )
        ;
    };

    
}
]);
