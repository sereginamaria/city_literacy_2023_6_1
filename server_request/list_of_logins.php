<?php

/*
Массив для генерации логинов
EKIS_ID=>array(USER_ID_FROM, USER_ID_TO)
123	13898	20
625	13673	25
1362	13912	20
1467	12714	25
1793	13925	130
2001	13087	25
2009	12891	50
2055	13231	20
2200	13703	49
*/

$list_of_logins = array(
13898=>array(1,20),
13673=>array(1,25),
13912=>array(1,20),
12714=>array(1,25),
13925=>array(1,130),
13087=>array(1,25),
12891=>array(1,50),
13231=>array(1,20),
13703=>array(1,49)
);


foreach($list_of_logins as $key=>$value){
	echo $key ." = from ". $value[0] . " to " . $value[1] ."<br>";
}
