/*
 * @Author: 1dayluo
 * @Date: 2022-10-28 17:07:30
 * @LastEditors: 1dayluo
 * @LastEditTime: 2022-10-31 15:31:14
 * @Description: meow~Always coding for fun!
 */
/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑     永不宕机     永无BUG
 * 
 *      
 
 *                别人笑我忒疯癫，我笑自己命太贱；  
 */
/*
 * @Author: 1dayluo
 * @Date: 2022-10-28 17:07:30
 * @LastEditors: 1dayluo
 * @LastEditTime: 2022-10-28 17:08:41
 * @Description: meow~Always coding for fun!
 */
var labApp = angular.module('lab1',[]);

labApp.controller('lab1_controller',['$scope','$http',function($scope,$http){
    $scope.login = function(){
        var code = '<?xml version="1.0"?>'+
        "<info>"+
        "<email>"+$scope.userEmail+"</email>"+
        "<password>"+$scope.userPassword+"</password>"+
        "</info>";
        $http(
            {
                method:"POST",
                url:"index.php",
                data: { 'email':$scope.userEmail,'password':$scope.userPassword}
                // data: code
            }
        ).then(function(data){
            $scope.infos = [data['data']['info']];
        })
    }

}]);
