<?php
define("DEBUG", 0);

require_once "UserSqlTable.php";

class PDOConnection


{

    private  $host = '127.0.0.1';
    private  $dataBaseName = 'city_literacy';
    private  $user = 'city_literacy';
    private  $password = 'password';
    private  $charset = 'utf8';


    private //PDO
        $pdo;

    private  $option = array (
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
				PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'");

    private static $instance = null;

    private //TableColumnsSQL
          $usersTable;


    private function __construct(){

       $this->getConnect();

        $dsn = "mysql:host={$this->host};dbname={$this->dataBaseName};charset={$this->charset}";
        $this->pdo = new PDO($dsn, $this->user, $this->password, $this->option);




     //   $this->usersTable = new UserSqlTable();

    }


    public static function init(){
       if (is_null(self::$instance))
           self::$instance = new self();

       return self::$instance;
    }

    private function createMakeTableQuery(TableColumnsSQL $table){
        $sql ="CREATE TABLE IF NOT EXISTS {$table->getTableName()}({$table->getAllColumnsWithTypeAsString()}";
    //    print $sql;
        return $sql;
    }

    public function createTable(TableColumnsSQL $table){
        $this->pdo->exec($this->createMakeTableQuery($table));
    }

    public function dropTable(TableColumnsSQL $table){
        $statement = $this->pdo->exec("DROP TABLE IF EXISTS {$table->getTableName()}");
        
       
    }
    public function truncateTable(TableColumnsSQL $table){
        $this->createMakeTableQuery($table);
        $statement = $this->pdo->exec("TRUNCATE TABLE {$table->getTableName()}");
    }



    // $values = [
    //'telegram_id' => $telegram_id,
    //'first_name' => $first_name, etc];
    public function updateData( $dbName, $key, $value, $values){
        $sql="";
        $str1 = "UPDATE `{$this->dataBaseName}`.{$dbName} SET ";
        $str2 ="";
        foreach($values as $k=>$v)
            $str2.="{$k}=:{$k},";

    //    $str2[-1]=" ";
        $str2=substr_replace ($str2 , ' ' , strlen($str2)-1);

        $str3 ="WHERE {$key}=:{$key}";
        $values+=array($key=>$value);
        $sql.= $str1.$str2.$str3;
        // print $sql."\n";
        var_dump($values);


        $stmt= $this->pdo->prepare($sql);
        $stmt->execute($values);
    }




    // params = array(string key => string value)
    public function getValues( $dbName, $target ='*', $params =null){
        $output = array();
        if($params === null) {
            $stmt = $this->pdo->query("SELECT {$target} FROM `{$this->dataBaseName}`.{$dbName}");
            // print "SELECT {$target} FROM `{$this->dataBaseName}`.{$dbName}\n";
            $output= $stmt->fetchAll();

        }
        else {
            $sql ='';
            $str = "SELECT {$target} FROM `{$this->dataBaseName}`.{$dbName} WHERE";
            foreach ($params as $key => $value) {
                $str.=" {$key}=:{$key} AND";
            }
            $sql = substr_replace ($str , ';' , strlen($str)-3);
            $stmt= $this->pdo->prepare($sql);
           if(DEBUG) print $sql."\n";
           if(DEBUG) printf("{$sql} \n".__LINE__." file: ".__FILE__."\n");
            $stmt->execute($params);
            $output =$stmt->fetchALl();

        }
   //     var_dump($output);
        return $output;
    }

    public function insertData( $dbName, $params){
        $sql ='';
        $str1 = "INSERT INTO `{$this->dataBaseName}`.{$dbName} ";
        $str2="(";
        $str3=" VALUES (";
        foreach ($params as $key=>$value) {
            $str2.= "{$key},";
            $str3.= ":{$key},";
        }

        $str2=substr_replace ($str2 , ')' , strlen($str2)-1);
        $str3=substr_replace ($str3 , ')' , strlen($str3)-1);
    //    $str2[-1] =')';
    //    $str3[-1] =')';
        $sql.=$str1.$str2.$str3;
		
		// echo '<textarea>'.$sql . '</textarea>'; echo '<pre>';print_r($params); echo '</pre>';exit;
         //   $sql = "INSERT INTO {$this->dataBaseName}.{$dbName} (name, surname, sex) VALUES (:name, :surname, :sex)";
        
        $stmt= $this->pdo->prepare($sql);
        if(DEBUG) print $sql."\n";
        $stmt->execute($params);

    }


    private function getConnect(){
        $pathToSQLConnect = DIRECTORY_SEPARATOR . 'home' .
            DIRECTORY_SEPARATOR . 'clients' .
            DIRECTORY_SEPARATOR . 'mcko' .
            DIRECTORY_SEPARATOR . 'storage.module' .
            DIRECTORY_SEPARATOR . 'www' .
            DIRECTORY_SEPARATOR . 'storage' .
            DIRECTORY_SEPARATOR . 'connect.php';
        if(file_exists($pathToSQLConnect)){
            require_once($pathToSQLConnect);
        }else{
            die('<p><b>Connect file not found!<br />Error in file: ' . __FILE__ . '</b></p>');
        }

        $this->host = $host['dit'];
        // echo $this->host;
        $this->dataBaseName = "c-mcko-mid";
        $this->user =$user['dit'];
        $this->password =$pass['dit'];
		
		
    }


}