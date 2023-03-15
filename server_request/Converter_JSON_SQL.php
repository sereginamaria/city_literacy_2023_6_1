<?php


require_once "RedisConnector.php";


require_once "PDOConnection.php";




class Converter_JSON_SQL
{
	
    
	private $test_str ='  {"loginJSON": {
            "login": "x",
            "hash": ["v1" ,"v2"]}
        }';
 
	private $vector = array();
    private $vector_name = array();

    private /* RedisConnector */ $redis_connect;

    private  /*PDOConnection */ $pdo_connect;

    public function __construct(){

        
        $this->redis_connect = new RedisConnector();

		$this->pdo_connect =  PDOConnection::init();
 //       $this->rec_parse(json_decode($this->test_str,true));
//        var_dump(json_decode($this->test_str,true));
        

        $flag = true;
        $count = 0;

           $test_str ='  {"loginJSON": {
            "login": "x",
            "hash": ["v1" ,"v2"],"setup":{"k1":"v1","k2":"v2"}}
        }';

        foreach($this->redis_connect->getAllDataJSON() as $log => $value){

       	    unset($this->vector);
            
            $this->vector =  array();

            unset($this->vector_name);
            $this->vector_name =  array();

     //  		var_dump(json_decode($value,true));
     //     printf($value."__________<xxxx>________________\n");
       		
        	$json_decode = json_decode($value,true);

    //        $json_decode = json_decode($test_str,true);


    //        print("_________%%%%%____________\n");

    //        print($json_decode."_________%%%%%____________\n");

        	$this->rec_parse($json_decode,'.');
            $this->get_collumn_name($json_decode,'.');

	//		$this->rec_parse(json_decode($this->test_str,true));

            foreach($this->vector_name as $k => $v)
                foreach($v as $key => $value){
                    if(DEBUG) print("vector_NAME key_number: ".$key." key value: ".$value."\n");
                   
                }
                
            $arr_key_name = array();
            $arr_base_insert = array();
            $number = 0;

            if(DEBUG) print("count_______this is vector_______  : ".$count."\n");
            foreach($this->vector as $k => $v)
                foreach($v as $key => $value){
                    if(DEBUG) print("key: ".$key."    value: ".$value."\n");
                   if(DEBUG)  print("key_number: ".$number."    value: ".$value."\n");
                   
                // !   $arr_base_insert[$key] = $value;
                    $arr_base_insert[$number."_"] = $value;
                    array_push($arr_key_name,$number);
                    ++$number;

                }    
            if(DEBUG) print("count___________________  : end\n");
        
        if(true){       
        	
            if($flag){
                $table_SQL = new UserSQLTable($arr_key_name);
                $this->pdo_connect->createTable($table_SQL);
            }
            $flag = false;


			
			$this->pdo_connect->insertData("city_literacy_result",$arr_base_insert);
			
        	}
			
        //	return;
        }


    }


    
    private function rec_parse($array,$parrent_name){
    		foreach ($array as $key => $value) {
        		
			//	printf($key." ".gettype($value)."\n");
    			$name = $parrent_name."|".$key;
        		if(gettype($value) == "array")
        			$this->rec_parse($value,$name);
        		
        		else{
        //			$name = $parrent_name."|".$key;
                    if(substr($parrent_name,-7) == "results")
                        array_push($this->vector,array($name => $value));
					if(substr($parrent_name,-9) == "loginJSON")
						array_push($this->vector,array($name => $value));
                }

        		
        		
        	}	
    }





    private function get_collumn_name($array,$parrent_name){
        foreach ($array as $key => $value) {
                
                
                
                $name = $parrent_name."|".$key;
                    array_push($this->vector_name,array($name));

                if(gettype($value) == "array")
                    $this->get_collumn_name($value,$name);
             }	
	       }
}
// $obj = new Converter_JSON_SQL();

