<?php
require_once "NoSqlSet.php";

class RedisConnector implements NoSqlSet
{

	private $redis; /*Redis*/  
	

    private  $city_literacy_login_password_map;
    private  $city_literacy_json_map;
    private  $city_literacy_login_hash_map;
    private  $city_literacy_login_register;


    public function __construct($postfix){

        //Connecting to Redis
        $this->redis = new Redis();
        $this->redis->connect('127.0.0.1', 6379);
		$this->city_literacy_login_password_map ="city_literacy_login_password_map".$postfix;
		$this->city_literacy_json_map = "city_literacy_json_map".$postfix;
		$this->city_literacy_login_hash_map ="city_literacy_login_hash_map".$postfix;
		$this->city_literacy_login_register ="city_literacy_login_register".$postfix;
		// echo ''.$postfix;
    //    $this->redis->auth('password');
        //if ($this->redis->ping())
         //   echo "ping from redis: PONG\n";

    }

    public function getPassword( $login)
    {

        return $this->redis->hget($this->city_literacy_login_password_map,$login);
    }



    public function getDataJSON( $login)
    {
        return $this->redis->hget($this->city_literacy_json_map,$login);
    }
    public function setPassword( $login,  $password)
    {
		// echo $this->city_literacy_login_password_map .' '.$login .' '.  $password.' <br />';
        $this->redis->hset($this->city_literacy_login_password_map,$login, $password);
    }
    public function putDataJSON( $login,  $json_data)
    {	
        $this->redis->hset($this->city_literacy_json_map,$login,$json_data);
    }

//________________________________________________________________________________________-
    public function setUserHash( $login,  $hash)
    {
        $this->redis->hset($this->city_literacy_login_hash_map,$login,$hash);
    }


    public function getUserHash( $login)
    {
        return $this->redis->hget($this->city_literacy_login_hash_map,$login);
    }

//___________________________________________________________________________________________
    public function isUserRegister( $login)
    {
        if($this->redis->sismember($this->city_literacy_login_register,$login))
            return true;
        return false;
    }

    public function setUserRegisterTrue( $login)
    {
        $this->redis->sadd($this->city_literacy_login_register,$login);
    }


    public function get_all_data(){
        $arr = array($this->city_literacy_login_password_map=>
                            $this->redis->hgetall($this->city_literacy_login_password_map),
                     $this->city_literacy_login_hash_map=>
                         $this->redis->hgetall($this->city_literacy_login_hash_map),
                     $this->city_literacy_json_map=>
                         $this->redis->hgetall($this->city_literacy_json_map),
            );

        return $arr;
    }
	
	public function getAllDataJSON()
    {
        return $this->redis->hgetall($this->city_literacy_json_map);
    }


}