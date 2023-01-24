const date = {
    "login": '',
    "hash": '',
    "loginShow": true,
    "instructionShow": false,
    "mainPageShow": false,
    "pauseShow": false,
    "currentPushTime": 0,
    "currentTime": 5400,
    "ret": '',
    "retPush": '',
    "retPause": '',
    "task1Show": true,  // todo хранить свойства внутри объекта
    "task2Show": false,
    "task3Show": false,
    "results": {
        "dataTimeStart": null,
        "dataTimeEndTask1": null,
        "dataTimeEndTask2": null,
        "dataTimeEndTask3": null,
        "dataTimeEnd": null,
        "dataTimeLastUpdate": null
    },
    "task1": {
        "results": {
            "ULSCLL1_Log_SCK1_1": "NA",  // todo поразмислыть в контексте state machine
            "ULSCLL1_Log_SCK1_3": "NA",
            "ULSCLL1_Log_SCK2_1": "NA",

            "ULSCLL1_Log_LLK1_1": "NA",
            "ULSCLL1_Log_LLK1_2": "NA",
            "ULSCLL1_Log_LLK1_3": "NA",
            "ULSCLL1_Log_LLK1_4": "NA",

            "ULSCLL1_Log_SCK2_2": "NA",
            "ULSCLL1_Log_SCK2_3": "NA",
            "ULSCLL1_Log_SCK2_4": "NA",

            "ULSCLL1_Log_SCS4_1": "NA",

            "ULSCLL1_Log_SCK1_4": "NA",

            "ULSCLL1_Log_SCS4_2": "NA",
            "ULSCLL1_Log_SCS4_3": "NA",

            "ULSCLL1_Log_LLK3_1": "N",

            //10
            "ULSCLL1_Log_LLK2_1": "N",

            //11
            "ULSCLL1_Log_LLK4_1": "N",

            //12
            "ULSCLL1_Log_LLK5_1": "N",

        },
        // todo codestyle / вынести константы
        "instruction": "Этой весной в Москве проходит акция “Ночь музеев”, когда музеи города открыты для посетителей намного дольше, чем обычно. Ты со своей старшей сестрой Асей отправляешься в Новую Третьяковку на Крымском Валу и тебе предстоит выполнить различные задания. Обрати внимание: при выполнении каждого задания после нажатия кнопки «Готово» ты уже не сможешь изменить ответ.",
        //Первый экран с инструкцией
        "modularTask1_0Show": true,
        //Выбор рюкзака
        "modularTask1_1Show": false,  // todo к разговору про state machine
        //Экран в случае выбора первого
        "modularTask1_2Show": false,
        //Экран в случае выбора второго
        "modularTask1_3Show": false,
        //Перетаскивание вещей в рюкзаке
        "modularTask1_4Show": false,
        "listOfElementsStart": [  // todo контекстуальные стили? подумать про state machine
            {
                "src": "Element1.png",
                "src_dop": "Element1_dop.png",
                "id": 1,
                "style": "width: calc(100%/5); position: absolute; bottom: calc(100%/1.8); left: calc(100%/6)"
            },
            {
                "src": "Element2.png",
                "src_dop": "Element2_dop.png",
                "id": 2,
                "style": "width: calc(100%/10); position: absolute; bottom: calc(100%/6); left: calc(100%/25)"
            },
            {
                "src": "Element3.png",
                "src_dop": "Element3.png",
                "id": 3,
                "style": "width: calc(100%/5); position: absolute; bottom: calc(100%/12); left: calc(100%/5)"
            },
            {
                "src": "Element4.png",
                "src_dop": "Element4_dop.png",
                "id": 4,
                "style": "width: calc(100%/3); position: absolute; bottom: calc(100%/30); left: calc(100%/2.5)"
            },
            {
                "src": "Element5.png",
                "src_dop": "Element5.png",
                "id": 5,
                "style": "width: calc(100%/4); position: absolute; bottom: calc(100%/30); left: calc(100%/1.34)"
            },
            {
                "src": "Element6.png",
                "src_dop": "Element6_dop.png",
                "id": 6,
                "style": "width: calc(100%/6); position: absolute; bottom: calc(100%/1.7); left: calc(100%/1.83)"
            },
            {
                "src": "Element7.png",
                "src_dop": "Element7_dop.png",
                "id": 7,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/1.64); left: calc(100%/2.1)"
            },
        ],
        "listOfElementsEnd": [],
        //Инструкция перд выбором обуви
        "modularTask1_5Show": false,
        //Выбор обуви
        "modularTask1_6Show": false,
        //Инструкция перед заданием с метро
        "modularTask1_7Show": false,
        //Слова автора в метро
        "modularTask1_8Show": false,
        //Инструкция в метро
        "modularTask1_9Show": false,
        //Задание в метро
        "modularTask1_10Show": false,
        "listOfAnswersMetro": [
            {
                "name": "А) Спустимся самостоятельно вниз и узнаем, что случилось, у дежурного.",
                "id": 1,
            },
            {
                "name": "Б) Присядем на ступеньку и подождем, что скажут в объявлении.",
                "id": 2,
            },
            {
                "name": "В) Будем стоять и держаться за поручень до объявления дежурного.",
                "id": 3,
            }, {
                "name": "Г) Поднимемся самостоятельно наверх, чтобы спросить дежурного, что случилось.",
                "id": 4,
            },

        ],
        //Инструкция задание рабочая тетрадь
        "modularTask1_11Show": false,
        //Слова автора задание рабочая тетрадь
        "modularTask1_12Show": false,
        //Слова Коли рабочая тетрадь
        "modularTask1_13Show": false,
        //Задание рабочая тетрадь
        "modularTask1_14Show": false,
        "listWorkBook1": [
            {"id": 0, "value": "Выбери ответ:"},
            {"id": 1, "value": "1123"},
            {"id": 2, "value": "1147"},
            {"id": 3, "value": "1174"},
            {"id": 4, "value": "1212"},
        ],
        //Картинки ко второму вопросу
        "modularTask1_15Show": false,
        "listWorkBook2": [
            {
                "src": "Workbook1.png",
                "value": "Князь Юрий Долгорукий",
                "id": 1,
            },
            {
                "src": "Workbook2.png",
                "value": "Князь Иван Калита",
                "id": 2,
            },
            {
                "src": "Workbook3.png",
                "value": "Князь Даниил Московский",
                "id": 3,
            },
            {
                "src": "Workbook4.png",
                "value": "Боярин Степан Кучка",
                "id": 4,
            },
        ],
        //Картинки к третьему вопросу
        "modularTask1_16Show": false,
        "listWorkBook3": [
            {
                "src": "Workbook5.png",
                "value": "Кремль",
                "id": 1,
            },
            {
                "src": "Workbook6.png",
                "value": "Воскресенские ворота",
                "id": 2,
            },
            {
                "src": "Workbook7.png",
                "value": "Птичья башня",
                "id": 3,
            }
        ],
        //Картинки к четвертому вопросу
        "modularTask1_17Show": false,
        "listWorkBook4": [
            {
                "value": "Кириллу и Мефодию",
                "id": 1,
            },
            {
                "value": "Минину и Пожарскому",
                "id": 2,
            },
            {
                "value": "Потемкину и Суворову",
                "id": 3,
            }
        ],

        //Задание 5 инструкция 1
        "modularTask1_18Show": false,
        //Задание 5 инструкция 2
        "modularTask1_19Show": false,
        //Задание 5 инструкция 3
        "modularTask1_20Show": false,
        //Задание 5 инструкция 4
        "modularTask1_21Show": false,
        //Задание 5 инструкция 5
        "modularTask1_22Show": false,
        //Задание 5 пункт 1
        "modularTask1_23Show": false,
        "listOfAnswersTask5Point1": [
            {
                "name": "А) Нельзя переходить дорогу в неположенном месте.",
                "id": 1,
            },
            {
                "name": "Б) Нельзя переходить дорогу вдоль вертикальной разметки.",
                "id": 2,
            },
            {
                "name": "В) Нельзя переходить дорогу в обуви на каблуке.",
                "id": 3,
            }, {
                "name": "Г) Нельзя переходить дорогу без светоотражающих элементов одежды.",
                "id": 4,
            },
        ],
        //Задание 5 пункт 2
        "modularTask1_24Show": false,
        "listOfAnswersTask5Point2": [
            {
                "name": "А) При выходе из трамвая его нужно обходить спереди.",
                "id": 1,
            },
            {
                "name": "Б) При выходе из трамвая его нужно обходить сзади.",
                "id": 2,
            },
            {
                "name": "В) В трамвае нужно снимать головной убор.",
                "id": 3,
            }, {
                "name": "Г) Из трамвая нужно выходить через переднюю дверь.",
                "id": 4,
            },
        ],
        //Задание 5 пункт 3
        "modularTask1_25Show": false,
        "listOfAnswersTask5Point3": [
            {
                "name": "А) Велосипедистам нельзя ездить по дороге в платье.",
                "id": 1,
            },
            {
                "name": "Б) Велосипедистам нельзя ездить по дороге без шлема и наколенников.",
                "id": 2,
            },
            {
                "name": "В) Велосипедистам нельзя ездить по дороге без специального багажника.",
                "id": 3,
            }, {
                "name": "Г) Велосипедистам нельзя ездить по дороге в два ряда.",
                "id": 4,
            },
        ],

        //Задание 6 реплика 1
        "modularTask1_26Show": false,
        //Задание 6 реплика 2
        "modularTask1_27Show": false,
        //Задание 6 задание
        "modularTask1_28Show": false,
        "listOfAnswersTask6": [
            {
                "name": "А) Нет, ночью в городе опасно гулять без взрослых.",
                "id": 1,
            },
            {
                "name": "Б) Да, наверняка это будет весело.",
                "id": 2,
            },
            {
                "name": "В) Да, но только давай позовем с собой Асю.",
                "id": 3,
            }, {
                "name": "Г) Нет, не уходим, а быстро убегаем.",
                "id": 4,
            },
        ],

        //Задание 6 выбраны отвветы 2 или 4 реплика 1
        "modularTask1_29Show": false,
        //Задание 6 выбраны отвветы 2 или 4 реплика 2
        "modularTask1_30Show": false,
        //Задание 6 выбраны отвветы 2 или 4 реплика 3
        "modularTask1_31Show": false,

        //Задание 6 выбран отввет 1 реплика 1
        "modularTask1_32Show": false,
        //Задание 6 выбран отввет 1 реплика 2
        "modularTask1_33Show": false,

        //Задание 6 выбран отввет 3 реплика 1
        "modularTask1_34Show": false,

        //Задание 7 реплика 1
        "modularTask1_35Show": false,
        //Задание 7 реплика 2
        "modularTask1_36Show": false,
        //Задание 7 задание
        "modularTask1_37Show": false,
        "listOfAnswersTask7": [
            {
                "name": "А) Взять сестру за руку и следовать за ней к выходу.",
                "id": 1,
            },
            {
                "name": "Б) Не двигаться и ждать указаний персонала музея.",
                "id": 2,
            },
            {
                "name": "В) Игнорировать сигнализацию и продолжить осматривать музей, пока все ушли.",
                "id": 3,
            }, {
                "name": "Г) Подождать пока все люди уйдут и последними выйти из здания музея.",
                "id": 4,
            },
        ],

        //Задание 8 реплика 1
        "modularTask1_38Show": false,
        //Задание 8 реплика 2
        "modularTask1_39Show": false,
        //Задание 8 задание 1
        "modularTask1_40Show": false,
        "listOfAnswersTask8_1": [
            {
                "name": "А) Да, давай!",
                "id": 1,
            },
            {
                "name": "Б) Нет, не стоит этого делать.",
                "id": 2,
            }
        ],
        //Задание 8 выбран ответ да реплика 1
        "modularTask1_41Show": false,
        //Задание 8 выбран ответ нет реплика 1
        "modularTask1_42Show": false,
        //Задание 8 реплика 3
        "modularTask1_43Show": false,
        //Задание 8 задание 2
        "modularTask1_44Show": false,
        "listOfAnswersTask8_2": [
            {
                "name": "А) Нам стоит сообщить охране музея.",
                "id": 1,
            },
            {
                "name": "Б) Давайте сделаем фото и отправим в полицию.",
                "id": 2,
            },
            {
                "name": "В) Нужно сказать им, что нельзя так делать.",
                "id": 3,
            }, {
                "name": "Г) Подойдем к ним и отберем у них краску.",
                "id": 4,
            },
        ],

        //Задание 9 реплика 1
        "modularTask1_45Show": false,
        //Задание 9 реплика 2
        "modularTask1_46Show": false,
        //Задание 9 задание
        "modularTask1_47Show": false,

        //Задание 10 реплика 1
        "modularTask1_48Show": false,
        //Задание 10 реплика 2
        "modularTask1_49Show": false,
        //Задание 10 задание
        "modularTask1_50Show": false,

        //Задание 11 реплика 1
        "modularTask1_51Show": false,
        //Задание 11 реплика 2
        "modularTask1_52Show": false,
        //Задание 11 задание
        "modularTask1_53Show": false,

        //Задание 12 реплика 1
        "modularTask1_54Show": false,
        //Задание 12 задание
        "modularTask1_55Show": false,

        //Задание 13 реплика 1
        "modularTask1_56Show": false,
        //Задание 12=3 реплика 2
        "modularTask1_57Show": false,
        //Задание 13 реплика 3
        "modularTask1_58Show": false,
        //Задание 13 реплика 4
        "modularTask1_59Show": false,
        //Задание 13 задание
        "modularTask1_60Show": false,

    },
}

export default {
    date
}