<?php

require_once "RedisConnector.php";

class csv_maker
{
    private /*RedisConnector */ $redis_connect;
    private /*array*/ $vector ;

    public function __construct(){

        $this->redis_connect = new RedisConnector();

        $fp = fopen('result.csv', 'w');
        fclose($fp);
        $create_columns_name = true;

        foreach($this->redis_connect->getAllDataJSON() as $log => $value){

            unset($this->vector);
            $this->vector =  array();
            $json_decode = json_decode($value,true);
     //      print( "\n*".gettype($json_decode)."*\n");
            //        $json_decode = json_decode($test_str,true);


            //        print("_________%%%%%____________\n");

            //        print($json_decode."_________%%%%%____________\n");

            $this->rec_parse($json_decode,' ');
        //    $this->get_collumn_name($json_decode,'.');

            //		$this->rec_parse(json_decode($this->test_str,true));

            /*        foreach($this->vector_name as $k => $v)
                        foreach($v as $key => $value){
                            print("vector_NAME key_number: ".$key." key value: ".$value."\n");

                        }
            */
            $arr_key_name = array();
            $arr_base_insert = array();
            $number = 0;
/*
            print("_______this is vector_______  : \n");
            foreach($this->vector as $k => $v)
                foreach($v as $key => $value){
                    print("key: ".$key."    value: ".$value."\n");
                    print("key_number: ".$number."    value: ".$value."\n");

                    // !   $arr_base_insert[$key] = $value;
                    $arr_base_insert[$number."_"] = $value;
                    array_push($arr_key_name,$number);
                    ++$number;

                }
            */
            $separator = ";";

            if($create_columns_name){

                foreach($this->vector as $key => $value)
                {
                    file_put_contents('result.csv', $key, FILE_APPEND | LOCK_EX);
                    file_put_contents('result.csv', $separator, FILE_APPEND | LOCK_EX);
                }
                file_put_contents('result.csv', "\n", FILE_APPEND | LOCK_EX);

                foreach($this->vector as $k => $v)
                    foreach($v as $key => $value)
                    {
                    file_put_contents('result.csv', $key, FILE_APPEND | LOCK_EX);
                    file_put_contents('result.csv', $separator, FILE_APPEND | LOCK_EX);
                    }
                file_put_contents('result.csv', "\n", FILE_APPEND | LOCK_EX);
                $create_columns_name = false;
            }

            foreach($this->vector as $k => $v) 
                foreach($v as $key => $value) {

        //            print("###   ".$key." -> ".$value."</br>");

                    file_put_contents('result.csv', $value, FILE_APPEND | LOCK_EX);
                    file_put_contents('result.csv', $separator, FILE_APPEND | LOCK_EX);
                }
            file_put_contents('result.csv', "\n", FILE_APPEND | LOCK_EX);
            
        }




    }

    private function rec_parse($array,$parrent_name){

        foreach ($array as $key => $value) {

        //    print($key." -> ".gettype($value)."\n");
            $name = $parrent_name."_".$key;
            if(gettype($value) == "array")
                $this->rec_parse($value,$name);

            else{
             //   print("else ".$name."\n");
                //			$name = $parrent_name."|".$key;
                if(substr($parrent_name,-7) == "results"){
                    array_push($this->vector,array($name => $value));
           //         print("*  ".$name." => ".$value."</br>");
                }
                if(substr($parrent_name,-9) == "loginJSON")
                    array_push($this->vector,array($name => $value));
            }



        }
    }





    private function get_collumn_name($array,$parrent_name){
        foreach ($array as $key => $value) {



            $name = $parrent_name."_".$key;
            array_push($this->vector_name,array($name));

            if(gettype($value) == "array")
                $this->get_collumn_name($value,$name);
        }
    }


}
// $csv = new csv_maker();