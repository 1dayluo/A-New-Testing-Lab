<?php  
/*
 * @Author: 1dayluo
 * @Date: 2022-11-01 17:40:45
 * @LastEditors: 1dayluo
 * @LastEditTime: 2022-11-02 15:27:32
 * @Description: meow~Always coding for fun!
 */

//  echo $_SERVER['X-Forwarded-Host'];
$headers = getallheaders();
if(array_key_exists('X-Forwarded-Host', $headers))
{
    echo $headers['X-Forwarded-Host'];
} else {
    echo "no";
}
?>