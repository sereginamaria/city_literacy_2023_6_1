<?php
if(isset($_GET['t']) && date('Ymd')==$_GET['t']){
	// ok
}else{
	die('no access');
}


$pathArray = explode("/", $_SERVER['PHP_SELF']);
$postfix = '_'.$pathArray[2]; // 2023_6_1
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
<form method='post'>
 	<input type='submit' name="variable" value="showAllLogins">
</form>
<form method='post'>
 	<input type='submit' name="variable" value="showAuthUsers">
</form>
<form method='post'>
 	<input type='submit' name="variable" value="showResulst">
</form>
PRE;


// in_array('DOU', $_SESSION['user']['lm_rights']) ? true : die('no access');

// get JSON

require_once "PDOConnection.php";
require_once "UserSqlTable.php";
require_once "Converter_JSON_SQL.php";

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
			// echo '<div><b>Your action is blocked!!!</b></div>';
  			break;
  	case 'push_data_to_MySQL' : 
  			$test = new ButtonOperation();
  			$obj = new Converter_JSON_SQL();
  			break;
		case 'create_csv' :
				require_once "csv_maker.php";
				// $csv = new csv_maker();
				// echo '<pre>';print_r($csv);echo '</pre>';exit;
				// fileDownload(__DIR__ . DIRECTORY_SEPARATOR . 'result.csv');
				break;
		case 'create_test_logins' :
			if(isset($_POST['input_'])){
				$count = (int)$_POST['input_'];
				$arr_reg = array();
				for($i =0; $i<$count; ++$i) $arr_reg["log_".$i] = "pass_".$i;
				
				// echo '<pre>';print_r($arr_reg); echo '</pre>';exit;
				$usr_srv = new UserServer($postfix);
				$usr_srv->add_register_data($arr_reg);
			}
			break;
		case 'create_real_logins_from_file' :
				echo 'List of logins:<br />';
				$arr_reg = array();
				include('list_of_logins.php');
				if($list_of_logins){
					// list_of_logins
				}
				
				// echo '<pre>';print_r($arr_reg); echo '</pre>';exit;
				$usr_srv = new UserServer($postfix);
				$usr_srv->add_register_data($arr_reg);
				echo 'Logins was created<hr>';
			break;

		case 'showResulst' :
			showData('showResulst');
			break;
		case 'showAllLogins' :
			showData('showAllLogins');
			break;
		case 'showAuthUsers' :
			showData('showAuthUsers');
			break;
 }

}

//***********************************
//	Redis key cods : 5 = map, 2 =set
//
//***********************************
function showData($dataType){
	global $postfix;
	$redis = new Redis();
	$redis->connect('127.0.0.1', 6379);
	// echo '<pre>';print_r($redis);echo '</pre>';
	//    $this->redis->auth('password');
	if (1 && $redis->ping()){   
		
		echo "Redis connect: OK<br>";
		echo '<style>
			table, tr, td {
				border-collapse: collapse;
				border: 1px solid gray;
				padding: 4px;
			}
		</style>';
		echo '<table>';
		$allKeys = $redis->keys('*');
		foreach($allKeys as $key=>$value){
			
			if(strpos($value, $postfix)){
				// echo $value;echo '<br>';
				$key_type_int = $redis->type($value);
				echo "<tr><td>keyType: $key_type_int</td><td>name: $value</td></tr>";
				// вывод ключа
				if($key_type_int == 2){
					$arr_val = $redis->smembers($value);
					foreach ($arr_val as $key_ ) {
						echo "<tr><td>keyType: $key_type_int</td><td>smembers: $key_</td></tr>";
					}
				}
				// вывод значения
				if($key_type_int == 5){
					$arr_val = $redis->hgetall($value);
					foreach ($arr_val as $key_m => $value_M ) {
						
						switch ($dataType){

							case 'showResulst' :
								// значение результатов в JSON 
								if('city_literacy_json_map'.$postfix ==$value){
									$results = json_decode($value_M, true);
									$login = $results['login'];
									$html = '<ul>
										<li>allDone: '.$results['allDone'].'</li>
										<li>currentPushTime: '.$results['currentPushTime'].'</li>
										<li>currentTime: '.$results['currentTime'].'</li>
										<li>ret: '.$results['ret'].'</li>
										<li>dataTimeStart: '.$results['results']['dataTimeStart'].'</li>
										<li>dataTimeEndtaskNightInTheMuseum: '.$results['results']['dataTimeEndtaskNightInTheMuseum'].'</li>
										<li>dataTimeEndtaskChatWalk: '.$results['results']['dataTimeEndtaskChatWalk'].'</li>
										<li>dataTimeEndtaskVolunteers: '.$results['results']['dataTimeEndtaskVolunteers'].'</li>
										<li>dataTimeEnd: '.$results['results']['dataTimeEnd'].'</li>
										<li>dataTimeLastUpdate: '.$results['results']['dataTimeLastUpdate'].'</li>
									</ul>';
									// echo '<pre>';print_r($results);echo '</pre>'; // nothing here
									echo "<tr><td>$key_m</td><td>".$html."</td></tr>";
								}
							break;
							case 'showAllLogins' :
								// все учетки
								if('city_literacy_login_password_map'.$postfix ==$value){
									echo "<tr><td>$key_m</td><td>$value_M</td></tr>";
								}
							break;
							case 'showAuthUsers' :
								// авторизованные пользователи
								if('city_literacy_login_hash_map'.$postfix ==$value){
									echo "<tr><td>$key_m</td><td>$value_M</td></tr>";
								}
							break;
						}
						
					}

				}
			}
		}
		// echo '<pre>';print_r($allKeys);echo '</pre>'; // nothing here
		echo "</table>";
	}
}



function delete_redis_data($str_base_name){

	global $postfix;

	$redis = new Redis();
	$redis->connect('127.0.0.1', 6379);
//  $this->redis->auth('password');
	if ($redis->ping()){
		echo "<p>DELETE</p>Ping from Redis: Ok<br>";
		$allKeys = $redis->keys('*');
		foreach($allKeys as $key=>$value){
			$key_type_int = $redis->type($value);
			
			if($value === "city_literacy_json_map".$postfix)
				$redis->del($value);
			if($value === "city_literacy_login_hash_map".$postfix)
				$redis->del($value);
			if($value === "city_literacy_login_password_map".$postfix)
				$redis->del($value);

			
			
		}
	// print_r($allKeys); // nothing here
	// echo "";
		}

	}
/*
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
*/