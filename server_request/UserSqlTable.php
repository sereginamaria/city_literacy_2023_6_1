<?php


require_once 'TableColumnsSQL.php';

class UserSqlTable implements TableColumnsSQL
{

   private  $tableName ="city_literacy_result";

   private  $userId = 'user_id';

  


   private  $nameAndType ;


   public function __construct($name_array){

      foreach($name_array as $name)
  //      $this->nameAndType[$name."_"]="VARCHAR(64)";
        $this->nameAndType[$name."_"] = "VARCHAR(256)";

      if(DEBUG) printf("_________________________________________@!@______________________________\n");  
      foreach($this->nameAndType as $key => $value)
          if(DEBUG) printf($key."<k  v>".$value."\n"); 
      if(DEBUG) printf("_________________________________________@!@_______________________________\n");  
      /* $this->nameAndType = array(
                                $this->userId=>'INT NOT NULL AUTO_INCREMENT PRIMARY KEY' ,
                                $this->telegramId =>'CHAR(32)',
                                $this->firstName =>'VARCHAR(16)',
                                $this->middleName=>'VARCHAR(16)',
                                $this->lastName=>'VARCHAR(16)',
                                $this->telNumber=>'VARCHAR(16)',
                                $this->isObserver=>'BOOL',
                                $this->isRegister=>'BOOL',
                                $this->isUserBlockBot=>'BOOL',
                                $this->userType=>'VARCHAR(32)',
                                $this->facility=>'VARCHAR(32)',
                                $this->facility_log =>'VARCHAR(32)',
                                $this->position=>'VARCHAR(32)',
                                $this->token=>'VARCHAR(64)',
                                $this->regData=>'DATETIME'
           ); */
   }

   function __get( $name){

       if(isset($name))
           return $this->$name;
       return "*";
   }

   public function getAllColumnsWithTypeAsString(){
       $str = null;
       foreach($this->nameAndType as $name=>$type)
           $str.="{$name} {$type},";

    //   $str[-1] =')';
    //   $str.=';';

       $str = rtrim($str, ",");
       $str .= ")";
       $str.=';';

       return $str;
   }

   public function getTableName(){
       return $this->tableName;
   }

}

