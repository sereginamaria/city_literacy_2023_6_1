<?php

// die('Logins allready created. See list_of_logins.php file for more information.');

// Массив для генерации логинов
// EKIS=>array(FROM, TO); FROM: номер уч-ся, TO: номер уч-ся
$list_of_logins = array(
// 566=>array(1,68),
// 12138=>array(1,40),
// 12224=>array(1,15),
// 12248=>array(1,52),
// 12678=>array(1,17),
// 12704=>array(1,15),
// 12756=>array(28,40),
// 12763=>array(1,78),
// 12891=>array(1,42),
// 13078=>array(1,72),
// 13310=>array(28,60),
// 13655=>array(1,60),
// 13661=>array(1,27),
// 13669=>array(1,40),
// 13697=>array(1,52),
// 13703=>array(1,55),
// 13721=>array(1,27),
// 13734=>array(1,27),
// 13765=>array(1,15),
// 13769=>array(1,52),
// 13830=>array(1,166),
// 13906=>array(1,59),
88888=>array(1,50)
);


$arr_reg = array();
// $arr_reg['13120_001']='nTU4XZAq';



generateNewLogins();

function generateNewLogins(){
	global $list_of_logins, $arr_reg;
	$file_logins = 'logins.php';
	file_put_contents($file_logins, "<?php\n/*\n");
	file_put_contents($file_logins, "!!! Don't modify! This file is generated automatically !!! \n\n", FILE_APPEND);
	foreach($list_of_logins as $key=>$value){
		for($log=$value[0]; $log<=$value[1]; $log++){
			// echo $key ." = from ". $value[0] . " to " . $value[1] ."<br>";
			$login = $key."_".sprintf("%03d", $log).'_1'; // _1 - номер версии
			$password = randomPassword();
			$arr_reg[$login] = $password;
		file_put_contents($file_logins, "EKIS:\t".$key ."\t". $login."\t=>\t" . $password . "\n", FILE_APPEND);
		}
	}
	file_put_contents($file_logins, "*/\n", FILE_APPEND);
}

function randomPassword() {
    $alphabet = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ1234567890';
    $pass = array(); //remember to declare $pass as an array
    $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
    for ($i = 0; $i < 8; $i++) {
        $n = rand(0, $alphaLength);
        $pass[] = $alphabet[$n];
    }
    return implode($pass); //turn the array into a string
}