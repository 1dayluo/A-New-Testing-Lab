<?php
/*
 * @Author: 1dayluo
 * @Date: 2022-10-28 18:29:58
 * @LastEditors: 1dayluo
 * @LastEditTime: 2022-10-31 16:38:26
 * @Description: meow~Always coding for fun!
 */



# 判断字符串是否是Json
function isJson($string) {
    json_decode($string);
    return json_last_error() === JSON_ERROR_NONE;
 }

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1); 
error_reporting(E_ALL);
$email = '';
$password = '';
$data = file_get_contents("php://input");
$xml_data = trim($data);

echo $xml_data;
if(!isJson($xml_data)) {
    // ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);
    libxml_disable_entity_loader (false);
    $dom = new DOMDocument();
    $dom->loadXML($xml_data, LIBXML_NOENT | LIBXML_DTDLOAD);
    $info = simplexml_import_dom($dom);
    $email = (string)$info -> email;
    $password = (string)$info -> password;

} else {
    $fdata = json_decode($data);
    $email = $fdata -> email;
    $password = $fdata -> password;
}

$api_return = array('email'=>$email,'info'=>'not login');

if($email == 'admin@1dayluolab.com'&& $password == 'Y29kaW5nZm9ybDB2Mwo=')
{
    $api_return = array('email'=>$email,'info'=>'logined in admin');

}
else {
    $api_return = array('email'=>$email,'info'=>'username or password failed!');
    
}
// echo json_encode($api_return);
?>