<?php
require_once "UserServer.php";
    $str ='{"mainJSON": {  "login": {"loginShow": false,"user_out": ""  },  "task1": {"module0": {  "module0Show": false,  "currentPushTime": 0},"module1": {  "module1Show": true,  "currentTimeTask": 600,  "currentTimeAll": 2700,  "browserShow": false,  "taskManagerShow": true,  "task1": false,  "task2": false,  "task3": false,  "task4": false,  "task5": false},"module2": {  "tab1Show": false,  "tab2Show": true,  "tab3Show": true,  "tab4Show": true,  "tab5Show": true,  "tab6Show": true,  "tab7Show": true,  "tab1ContentShow": false,  "tab2ContentShow": true,  "tab3ContentShow": true,  "tab4ContentShow": true,  "tab5ContentShow": true,  "tab6ContentShow": true,  "tab7ContentShow": true,  "selectedLike1": "",  "selectedLike2": "",  "selectedLike3": "",  "selectedLike4": "",  "selectedLike5": "",  "selectedBasket1": "",  "selectedBasket2": "",  "selectedBasket3": "",  "selectedBasket4": "",  "selectedBasket5": "",  "commResult1": "missing",  "commResult2": "missing",  "commResult3": "missing",  "commResult4": "missing",  "commResult5": "missing",  "numberOfNotice": 5,  "numberOfMessage": 0,  "numberOfUnansweredComments": 5,  "doneShow": true,  "show6Posts": true,  "selectedComm1": "",  "selectedComm2": [],  "selectedComm3": [],  "selectedComm4": "",  "selectedComm5": "",  "selectedComm6": "",  "commAnswerResult1": "missing",  "commAnswerResult2": "missing",  "commAnswerResult3": "missing",  "commAnswerResult4": "missing",  "commAnswerResult5": "missing",  "comm1ChangeShow": true,  "comm2ChangeShow": true,  "comm3ChangeShow": true,  "comm4ChangeShow": true,  "comm5ChangeShow": true,  "comm6ChangeShow": true,  "numberOfLikeMouseOn": 0,  "likeDisabled": false,  "numberOfBasketMouseOn": 0,  "basketDisabled": false,  "messageAnswer": "",  "messageAnswerShow": true,  "messageAnswerResult": "Missing"},"module3": {  "listOfThemes": [{  "name": "1.\tЗагрязнение садово-парковых территорий. Проект «Чистый лес»",  "id": 1},{  "name": "2.\tВолонтеры дают бесплатные уроки русского языка мигрантам",  "id": 2},{  "name": "3.\tПомощь городским птицам. Движение «Накорми утку»",  "id": 3},{  "name": "4.\tДети-волонтеры и Формула-1: удачный синтез",  "id": 4},{  "name": "5.\tВолонтеры на спортивных фестивалях. Обучение как сервис",  "id": 5},{  "name": "6.\tУроки онлайн для пенсионеров. Наш опыт",  "id": 6},{  "name": "7.\tВолонтеры помогают туристам на ВДНХ",  "id": 7},{  "name": "8.\tЧипирование бездомных собак. Уроки для нашего города",  "id": 8},{  "name": "9.\tНаш опыт участия в акции «Дети вместо цветов»",  "id": 9}  ],  "listRow1": [],  "listRow2": [],  "listRow3": [],  "resultRow1": 0,  "resultRow2": 0,  "resultRow3": 0},"module4": {  "mainPageShow": false,  "larsPageShow": true,  "aminaPageShow": true,  "greetingLars": null,  "nameLars": null,  "youYou1Lars": null,  "wouldlikeLars": null,  "youYou2Lars": null,  "youYou3Lars": null,  "youYou4Lars": null,  "regardsLars": null,  "greetingLarsResult": 0,  "nameLarsResult": 0,  "youYou1LarsResult": 0,  "wouldlikeLarsResult": 0,  "youYou2LarsResult": 0,  "youYou3LarsResult": 0,  "youYou4LarsResult": 0,  "regardsLarsResult": 0,  "greetingAmina": null,  "nameAmina": null,  "youYou1Amina": null,  "wouldlikeAmina": null,  "youYou2Amina": null,  "gratitudeAmina": null,  "youYou3Amina": null,  "youYou4Amina": null,  "regardsAmina": null,  "greetingAminaResult": 0,  "nameAminaResult": 0,  "youYou1AminaResult": 0,  "wouldlikeAminaResult": 0,  "youYou2AminaResult": 0,  "gratitudeAminaResult": 0,  "youYou3AminaResult": 0,  "youYou4AminaResult": 0,  "regardsAminaResult": 0,  "larsDone": false,  "aminaDone": false},"module5_1": {  "listOfEffects": [{  "name": "1.\tЗвуки и огни автотрасс, постоянное сенсорное воздействие торговых и развлекательных комплексов вызывают привыкание и постепенную атрофию сенсорных систем жителей больших городов.",  "id": 1},{  "name": "2.\tОдним из последствий неправильного устройства и управления ими может стать образование фильтрата. В случае некачественной подготовки дна, плохой гидроизоляции фильтрат постепенно просачивается в верхние водоносные горизонты, а оттуда попадает в реки.",  "id": 2},{  "name": "3.\tСтроительные работы, автотрассы, круглосуточное мерцание торговых центров и развлекательных комплексов, навязчивая наружная реклама и пр., оказывают серьёзное давление на нервную систему человека, могут вести к головным болям, расстройству сна и другим болезням.",  "id": 3},{  "name": "4.\tК повышению уровня загрязненности приводит множество условий: количества использующих их предприятий, транспортной нагрузки в навигационный период, близости и загруженности автодорог, наличия сооружений очистки сточных вод и др.",  "id": 4},{  "name": "5.\tДанный вид загрязнений ведет к увеличению затрат на водоподготовку (когда очищают питьевую воду, используется термин «водоподготовка»), без которых невозможно обеспечение качества питьевой воды.",  "id": 5},{  "name": "6.\tВ долгосрочной перспективе эта проблема приводит к развитию у людей болезней, связанных с выделительной системой, опорно-двигательным аппаратом и нарушением пищевого поведения.",  "id": 6},{  "name": "7.\tВ превышающих ПДК концентрациях озон может вызывать среди прочего раздражение слизистой оболочки глаз; обострение сердечных заболеваний, усугубление аллергических реакций.",  "id": 7},{  "name": "8.\tОни являются крупнейшими источниками выделяющихся в атмосферу парниковых газов. Основной состав такого газа — это метан и диоксид углерода, а также большое количество токсических органических соединений, которые также являются источником неприятного запаха.",  "id": 8},{  "name": "9.\tМелкодисперсные твердые частицы вызывают привыкание организма к ощущению эйфории и в долгосрочной перспективе ведут к нарушению гормонального фона.",  "id": 9},{  "name": "10.\tВ водохранилищах развиваются микроводоросли, и некоторые их виды содержат токсичные вещества. Цветение водорослей негативным образом сказывается на состоянии гидробионтов, снижает биоразнообразие.",  "id": 10}  ],  "list1": [],  "list2": [],  "list3": [],  "list4": [],  "doneShow": false,  "time": 0,  "tab6Task1Show": true,  "tab6Task2Show": true,  "tab6Final": true,  "UL1SEIIDT_ecolog_SEK3_1": 0,  "UL1SEIIDT_ecolog_SEK3_2": 0,  "UL1SEIIDT_ecolog_SEK3_3": 0,  "UL1SEIIDT_ecolog_SEK3_4": 0},"module5_2": {  "listOfEffects": [{  "name": " 1.\tВ условиях старения населения необходимость в обеспечении развития системы ухода будет только нарастать, что приведет к еще большей перегруженности системы, росту стресса персонала и снижению качества жизни и комфорта проживающих в них людей. ",  "id": 1},{  "name": " 2.\tК непосредственным причинам данной социальной проблемы относятся природные и социальные катастрофы (землетрясения, наводнения, этнические конфликты) или, например, экономическая миграция.",  "id": 2},{  "name": " 3.\tДля самих агрессоров травля также ведет к негативным последствиям их психического здоровья, повышается риск их нетрудоустройства и антисоциального поведения в будущем.",  "id": 3},{  "name": "4.\tНа одного престарелого жителя будет приходиться все меньшее число представителей трудоспособного населения, и даже приток мигрантов не сможет компенсировать низкую рождаемость и растущую продолжительность жизни. ",  "id": 4},{  "name": " 5.\tВ обществе формируется негативное отношение к этим людям, они подвергаются дискриминации, что нарушает базовые гуманитарные нормы в самом обществе",  "id": 5},{  "name": "6.\tТравля является феноменом, охватывающим не только сферу образования; он возможен в любых организациях, где существует иерархия и возможность установления отношений подчинения между субъектами. ",  "id": 6},{  "name": "7.\tВ период пандемии коронавируса, люди с ОВЗ находятся в группе риска из-за повышенной восприимчивости к коронавирусу и наличия хронических заболеваний, осложняющих протекание болезни. ",  "id": 7},{  "name": "8.\tИнвалидность может приводить к низкой воспринимаемой социальной поддержке, повышению уровня депрессии, проблемам психического здоровья и ухудшению физического здоровья.  ",  "id": 8},{  "name": " 9.\tВзрослые, подвергшиеся буллингу в школе, имеют высокий уровень тревожности, испытывают недоверие к людям, а также имеют проблемы со здоровьем в целом. ",  "id": 9}  ],  "list1": [],  "list2": [],  "list3": [],  "list4": [],  "doneShow": false,  "time": 0,  "UL1SEIIDT_socio_SEK3_5": 0,  "UL1SEIIDT_socio_SEK3_6": 0,  "UL1SEIIDT_socio_SEK3_7": 0,  "UL1SEIIDT_socio_SEK3_8": 0},"module6": {  "doneShow": false}  }}  }';


    // $str_repl ="this is the end!";
    $str_repl = $str;

    $arr_reg = array();
    $arr_hash = array();
    $SIZE = 100;

    for($i =0; $i<$SIZE; ++$i)
        $arr_reg["log_".$i] = "pass_".$i;

    $usr_srv = new UserServer();

    $usr_srv->add_register_data($arr_reg);

    return 0;

    $start = time();
    print($start);
    print("\n");

    foreach($arr_reg as $log=>$pass) {
        $arr = $usr_srv->login_user($log, $pass);
        if ($arr["status"] == 'ok')
            $arr_hash[$log] = $arr["hash"];
        // print($arr["message"]."  $pass\n");
    }
    foreach($arr_hash as $log=>$hash)
        // print ( 
		$usr_srv->put_json_data($log,$hash,$str);
		// ."\n");
	print('time: ' . (time() - $start));
	return;
    cout_info($usr_srv);

    foreach($arr_hash as $log=>$hash)
        // print (  
		$usr_srv->put_json_data($log,$hash,$str_repl);
		// ."\n");

//    sleep(3);

    foreach($arr_reg as $log=>$pass) {
        $arr = $usr_srv->login_user($log, $pass);
        if ($arr["message"] == 'ok')
            $arr_hash[$log] = $arr["hash"];
        // print($arr["message"]."\n");
    }

    cout_info($usr_srv);



    $arr_reg_bad =  array();
    for($i =0; $i<$SIZE; ++$i)
        $arr_reg_bad["bad_log_".$i] = "pass_".$i;

    foreach($arr_reg_bad as $log=>$pass) {
        $arr = $usr_srv->login_user($log, $pass);
  //      print($arr["message"]."\n");
    }
    // print("________________________\n");
    $arr_reg_bad_pass =  array();
    for($i =0; $i<$SIZE; ++$i)
        $arr_reg_bad_pass["log_".$i] = "bad_pass_".$i;
 //   for($i =0; $i<5; ++$i)
 //       $arr_reg_bad_pass["log_".$i] = "";

    foreach($arr_reg_bad_pass as $log=>$pass) {
        $arr = $usr_srv->login_user($log, $pass);
        // print($arr["message"]."\n");
    }
    // print("________________________\n");
    $arr_reg_bad_hash =  array();
    for($i =0; $i<$SIZE; ++$i)
        $arr_reg_bad_hash["log_".$i] = "bad_pass_".$i;

    foreach($arr_reg_bad_hash as $log=>$hash) {
        // print (
            $usr_srv->put_json_data($log,$hash,"_xXx_");
            // ."\n");

    }
print('time: ' . (time() - $start));
print("<br />");

function cout_info(UserServer $srv){

    // $arr = $srv->get_all_redis_items();
    // var_dump($arr);

}


