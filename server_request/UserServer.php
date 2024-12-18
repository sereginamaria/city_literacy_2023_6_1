<?php

require_once "RedisConnector.php";


class  answers_enum{
    static public $update_page = "update_page";

    static public  $login_success = "login_success";
    static public  $login_failed_log = "login_failed_bad_login";
    static public  $login_failed_pass = "login_failed_bad_pass";

    static  public  $re_login_success = "re_login_success";
    static  public  $re_login_failed = "re_login_failed";

    static public  $session_true ="session_true";
    static public  $session_false ="session_false";

}

class UserServer
{
    private /*RedisConnector*/ $redis_connect;


    public function __construct($postfix){

        $this->redis_connect = new RedisConnector($postfix);
    }



    public function login_user( $login, $password){

        if(($str = $this->redis_connect->getPassword($login)) != null){


               if($password !== $str)
               //    return array("code"=>answers_enum::$login_failed_pass);
                   return array("status"=>"error","message"=>answers_enum::$login_failed_pass);
            // if user first login
               if($this->redis_connect->getUserHash($login) == null){
         // 1  if(!$this->redis_connect->isUserRegister($login)){
                    //1
                    //$this->redis_connect->setUserRegisterTrue($login);
                    //2
                    $usr_hash = $this->create_hash($login);

                    $this->redis_connect->setUserHash($login,$usr_hash);

               //     return array("code"=>answers_enum::$login_success,"answer"=>$usr_hash);
                      return array("status"=>"ok","message"=>answers_enum::$login_success,"hash"=>$usr_hash,"login"=>$login);
                    }
                else{

                    //2
                    $usr_hash = $this->create_hash($login);

               //     print("relog hash          !!! ".$usr_hash."\n");
                    $this->redis_connect->setUserHash($login,$usr_hash);

               //     return array("code"=>answers_enum::$re_login_success,"answer"=>$usr_hash,
                //        "value"=>$this->redis_connect->getDataJSON($login));
                    return array("status"=>"ok","message"=>answers_enum::$re_login_success,"hash"=>$usr_hash,"login"=>$login,
                        "json"=>$this->redis_connect->getDataJSON($login));
                }

        }

    //  return array("code"=>answers_enum::$login_failed_log);
        return array("status"=>"error","message"=>answers_enum::$login_failed_log);

    }

    public function put_json_data( $login, $user_hash, $json){
        $usr_curr_hash = $this->redis_connect->getUserHash($login);
        if($usr_curr_hash !== $user_hash)
       //     return answers_enum::$session_false;
              return array("status"=>"error","message"=>answers_enum::$session_false);

        $this->redis_connect->putDataJSON($login,$json);
    //    return answers_enum::$session_true;

        return array("status"=>"ok","message"=>answers_enum::$session_true,"login"=>$login);
    }
    public function get_json_data( $login, $user_hash){

        $usr_curr_hash = $this->redis_connect->getUserHash($login);
        if($usr_curr_hash !== $user_hash)
    //        return answers_enum::$session_false;
            return array("status"=>"error","message"=>answers_enum::$session_false);

        return array("status" => "ok", "message" => answers_enum::$update_page, "json" => $this->redis_connect->getDataJSON($login));
    }

    public function add_register_data(array $data_log_pass){

        foreach($data_log_pass as $log => $pass){

            $this->redis_connect->setPassword($log,$pass);
        }

    }

    private function create_hash( $login){
        $login.=time();
        return md5 ($login,false );

    }

    public function get_all_redis_items(){
        return $this->redis_connect->get_all_data();
    }
}