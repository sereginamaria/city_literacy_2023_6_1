<?php
require_once "UserServer.php";

$arr = array();
//$arr = $HTTP_POST_VARS;
$data = file_get_contents('php://input');
//var_dump($data);

 $arr = json_decode ( $data , true );

$str_test ='{"loginJSON":{"login":"log_1000","password":"pass_1000"}}';


$usr_srv = new UserServer();
//$arr = json_decode ($str_test , true );

//echo $arr['loginJSON']['login'];
//echo "_";
// var_dump(json_encode($usr_srv->login_user($arr['loginJSON']['login'],$arr['loginJSON']['password'])));

if (array_key_exists('init', $arr)) {
    echo '{"status":"init"}';
}
else if(array_key_exists('login', $arr ) && array_key_exists('hash', $arr)) {
    echo json_encode($usr_srv -> get_json_data($arr['login'], $arr["hash"]));
}
else
    echo json_encode($usr_srv->login_user($arr['loginJSON']['login'],$arr['loginJSON']['password']));


