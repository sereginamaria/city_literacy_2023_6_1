<?php
if(isset($_GET['t']) && date('Ymd')==$_GET['t']){
	// ok
}else{
	die('no access');
}
echo <<<PRE
<form method='post'>
 
 <input type='submit' name="variable" value="delete_city_literacy">
</form>
<form method='post'>
 <input type='submit' name="variable" value="push_data_to_MySQL">
</form>
<form method='post'>
 <input type='submit' name="variable" value="create_csv">
</form> 

<form method='post'>
	<input type="text" name="input_" value="100">
 	<input type='submit' name="variable" value="create_test_logins">
</form>

<form method='post'>
 	<input type='submit' name="variable" value="create_real_logins_from_file">
</form>
PRE;


// in_array('DOU', $_SESSION['user']['lm_rights']) ? true : die('no access');

// get JSON

require_once "PDOConnection.php";
require_once "UserSqlTable.php";
require_once "Converter_JSON_SQL.php";
require_once "csv_maker.php";
require_once "UserServer.php";

// echo "TEST ECHO #1<br>";
// exit;
class ButtonOperation {
		
		public function __construct(){

      		$this->pdo_connect =  PDOConnection::init();
	    	$this->pdo_connect->dropTable(new UserSqlTable("+"));
			
			}
	}

// echo "TEST ECHO #2<br>";
// exit;
if(isset($_POST['variable'])){
	$action = $_POST['variable'];

	switch ($action){
  
  	case 'delete_city_literacy': 
  			delete_redis_data("city");
  			break;
  	case 'push_data_to_MySQL' : 
  			$test = new ButtonOperation();
  			$obj = new Converter_JSON_SQL();
  			break;
		case 'create_csv' :
				// $csv = new csv_maker();
				// echo '<pre>';print_r($csv);echo '</pre>';exit;
				// fileDownload(__DIR__ . DIRECTORY_SEPARATOR . 'result.csv');
				break;
		case 'create_test_logins' :
			if(isset($_POST['input_'])){
				$count = $_POST['input_'];
				$arr_reg = array();
				for($i =0; $i<$count; ++$i) $arr_reg["log_".$i] = "pass_".$i;
				$usr_srv = new UserServer();
				$usr_srv->add_register_data($arr_reg);
			}
			break;
		case 'create_real_logins_from_file' :
				echo 'List of logins:';
				$arr_reg = array();
				include('list_of_logins.php');
				
				
				// echo '<pre>';print_r($list_of_logins); echo '</pre>';
				// $usr_srv = new UserServer();
				// $usr_srv->add_register_data($arr_reg);
				echo '<hr>';
			break;

 
 }

}
//***********************************
//	Redis key cods : 5 = map, 2 =set
//
//***********************************
$redis = new Redis();
$redis->connect('127.0.0.1', 6379);
// echo '<pre>';print_r($redis);echo '</pre>';
//    $this->redis->auth('password');
if (1 && $redis->ping()){   
	
	echo "ping from redis: PONG<br>";
	$allKeys = $redis->keys('*');
	foreach($allKeys as $key=>$value){
		
		if($value[0]=='c' 
		&& $value[1]=='i' 
		&& $value[2]=='t' 
		&& $value[3]=='y'){
			// echo $value;echo '<br>';
			echo '<hr>';
			$key_type_int = $redis->type($value);
			echo "code: ";
			var_dump($key_type_int);
			echo "  name: ".$value.'<br>';
			if($key_type_int == 2){
				$arr_val = $redis->smembers($value);
				foreach ($arr_val as $key_ ) {
					echo "val: ".$key_.'<br>';
				}
			}
			if($key_type_int == 5){
				$arr_val = $redis->hgetall($value);
				foreach ($arr_val as $key_m => $value_M ) {
					echo "key: ".$key_m." val: ".$value_M.'<br>';
				}

			}
		}
	}
	// print_r($allKeys); // nothing here
	// echo "";
}



function delete_redis_data($str_base_name){


	$redis = new Redis();
	$redis->connect('127.0.0.1', 6379);
//  $this->redis->auth('password');
	if ($redis->ping()){
		echo "ping from redis: PONG<br>";
		$allKeys = $redis->keys('*');
		foreach($allKeys as $key=>$value){
			
			$key_type_int = $redis->type($value);
			
			if($value === "city_literacy_json_map")
				$redis->del($value);
			if($value === "city_literacy_login_hash_map")
				$redis->del($value);
			if($value === "city_literacy_login_password_map")
				$redis->del($value);

			
			
		}
	// print_r($allKeys); // nothing here
	// echo "";
		}

	}

function fileDownload($pathFileName){
	if(file_exists($pathFileName) && is_file($pathFileName)){	
			// header("Content-type: multipart/form-data");
			// header("Content-length: ".filesize($pathFileName));
			// header('Content-disposition: inline; filename="result.csv"');
			// header('Content-transfer-encoding: binary');
			
		header('Content-type: application/octet-stream');
		header("Content-Type: ".mime_content_type($pathFileName));
		header("Content-Disposition: attachment; filename=result.csv");
		while (ob_get_level()) {
			ob_end_clean();
		}
		readfile($pathFileName);
		}	
}


?>