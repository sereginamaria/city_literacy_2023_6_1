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

            "ULSCLL1_Log_LLK3_1": "NA",

            //10
            "ULSCLL1_Log_LLK2_1": "NA",

            //11
            "ULSCLL1_Log_LLK4_1": "NA",

            //12
            "ULSCLL1_Log_LLK5_1": "NA",

            //13
            "ULSCLL1_Log_SCK3_1": "NA",

            //14
            "ULSCLL1_Log_SCK3_2": "NA",
            "ULSCLL1_Log_SCK3_3": "NA",
            "ULSCLL1_Log_SCK3_4": "NA",
            "ULSCLL1_Log_SCK3_5": "NA",

            //15
            "ULSCLL1_Log_LLK6_1": "NA",
            "ULSCLL1_Log_LLK6_2": "NA",
            "ULSCLL1_Log_LLK6_3": "NA",
            "ULSCLL1_Log_LLK6_4": "NA",
        },
        "isShow": true,
        "shownScreenID": 0,
        "screens": [
            {"id": 0, "isShow": true, "imgURL": "BackgroundModule0", "haveTask": false,
                "description": ''},
            {"id": 1, "isShow": false, "imgURL": "BackgroundModule1", "haveTask": true, "taskName": "ChooseBag",
                "description": 'Выбор рюкзака'},
            {"id": 2, "isShow": false, "imgURL": "BackgroundModule2", "haveTask": false,
                "description": ''},
            {"id": 3, "isShow": false, "imgURL": "BackgroundModule1", "haveTask": true, "taskName": "MovingThingsFromBag",
                "description": 'Перетаскивание вещей'},
            {"id": 4, "isShow": false, "imgURL": "BackgroundModule6", "haveTask": true, "taskName": "ChooseShoes",
                "description": 'Выбор обуви'},
            {"id": 5, "isShow": false, "imgURL": "BackgroundModule7", "haveTask": false,
                "description": ''},
            {"id": 6, "isShow": false, "imgURL": "BackgroundModule8", "haveTask": false,
                "description": ''},
            {"id": 7, "isShow": false, "imgURL": "BackgroundModule10", "haveTask": true, "taskName": "Metro",
                "description": 'Метро'},
            {"id": 8, "isShow": false, "imgURL": "BackgroundModule11", "haveTask": false,
                "description": ''},
            {"id": 9, "isShow": false, "imgURL": "BackgroundModule12", "haveTask": false,
                "description": ''},
            {"id": 10, "isShow": false, "imgURL": "BackgroundModule13", "haveTask": false,
                "description": ''},
            {"id": 11, "isShow": false, "imgURL": "BackgroundModule14", "haveTask": true, "taskName": "WorkBook",
                "description": 'Раюочая тетрадь'},
            {"id": 12, "isShow": false, "imgURL": "BackgroundModule15", "haveTask": false,
                "description": ''},
            {"id": 13, "isShow": false, "imgURL": "BackgroundModule16", "haveTask": false,
                "description": ''},
            {"id": 14, "isShow": false, "imgURL": "BackgroundModule17", "haveTask": false,
                "description": ''},
            {"id": 15, "isShow": false, "imgURL": "BackgroundModule18", "haveTask": false,
                "description": ''},
            {"id": 16, "isShow": false, "imgURL": "BackgroundModule19", "haveTask": false,
                "description": ''},
            {"id": 17, "isShow": false, "imgURL": "BackgroundModule20", "haveTask": true, "taskName": "MuseumPaintings1",
                "description": 'Картины'},
            {"id": 18, "isShow": false, "imgURL": "BackgroundModule21", "haveTask": true, "taskName": "MuseumPaintings2",
                "description": 'Картины'},
            {"id": 19, "isShow": false, "imgURL": "BackgroundModule22", "haveTask": true, "taskName": "MuseumPaintings3",
                "description": 'Картины'},
            {"id": 20, "isShow": false, "imgURL": "BackgroundModule23", "haveTask": false,
                "description": ''},
            {"id": 21, "isShow": false, "imgURL": "BackgroundModule25", "haveTask": true, "taskName": "Escape",
                "description": 'Побег'},
            {"id": 22, "isShow": false, "imgURL": "BackgroundModule26", "haveTask": false,
                "description": '2 или 4 ответ'},
            {"id": 23, "isShow": false, "imgURL": "BackgroundModule27", "haveTask": false,
                "description": '2 или 4 ответ'},
            {"id": 24, "isShow": false, "imgURL": "BackgroundModule28", "haveTask": false,
                "description": '2 или 4 ответ'},
            {"id": 25, "isShow": false, "imgURL": "BackgroundModule29", "haveTask": false,
                "description": '1 ответ'},
            {"id": 26, "isShow": false, "imgURL": "BackgroundModule28", "haveTask": false,
                "description": '1 ответ'},
            {"id": 27, "isShow": false, "imgURL": "BackgroundModule31", "haveTask": false,
                "description": '3 ответ'},
            {"id": 28, "isShow": false, "imgURL": "BackgroundModule32", "haveTask": false,
                "description": ''},
            {"id": 29, "isShow": false, "imgURL": "BackgroundModule34", "haveTask": true, "taskName": "Fire",
                "description": 'Пожар'},
            {"id": 30, "isShow": false, "imgURL": "BackgroundModule35", "haveTask": false,
                "description": ''},
            {"id": 31, "isShow": false, "imgURL": "BackgroundModule37", "haveTask": true, "taskName": "Statue1",
                "description": 'Статуя'},
            {"id": 32, "isShow": false, "imgURL": "BackgroundModule38", "haveTask": false,
                "description": 'Ответ да'},
            {"id": 33, "isShow": false, "imgURL": "BackgroundModule39", "haveTask": false,
                "description": 'Ответ нет'},
            {"id": 34, "isShow": false, "imgURL": "BackgroundModule41", "haveTask": true, "taskName": "Statue2",
                "description": 'Вторая статуя'},
            {"id": 35, "isShow": false, "imgURL": "BackgroundModule42", "haveTask": false,
                "description": ''},
            {"id": 36, "isShow": false, "imgURL": "BackgroundModule44", "haveTask": true, "taskName": "Map",
                "description": 'Карта'},
            {"id": 37, "isShow": false, "imgURL": "BackgroundModule45", "haveTask": false,
                "description": ''},
            {"id": 38, "isShow": false, "imgURL": "BackgroundModule46", "haveTask": false,
                "description": ''},
            {"id": 39, "isShow": false, "imgURL": "BackgroundModule46", "haveTask": true, "taskName": "Attractions",
                "description": 'Достопримечательности'},
            {"id": 40, "isShow": false, "imgURL": "BackgroundModule48", "haveTask": false,
                "description": ''},
            {"id": 41, "isShow": false, "imgURL": "BackgroundModule50", "haveTask": true, "taskName": "Festival",
                "description": 'Фестиваль'},
            {"id": 42, "isShow": false, "imgURL": "BackgroundModule48", "haveTask": false,
                "description": ''},
            {"id": 43, "isShow": false, "imgURL": "BackgroundModule52", "haveTask": true, "taskName": "Sites",
                "description": 'Сайты'},
            {"id": 44, "isShow": false, "imgURL": "BackgroundModule53", "haveTask": false,
                "description": ''},
            {"id": 45, "isShow": false, "imgURL": "BackgroundModule54", "haveTask": false,
                "description": ''},
            {"id": 46, "isShow": false, "imgURL": "BackgroundModule55", "haveTask": false,
                "description": ''},
            {"id": 47, "isShow": false, "imgURL": "BackgroundModule54", "haveTask": true, "taskName": "BadWeather",
                "description": 'Плохая погода (и 4 раза фон меняется)'},
            {"id": 48, "isShow": false, "imgURL": "BackgroundModule62", "haveTask": false,
                "description": 'Предупреждающие знаки коля'},
            {"id": 49, "isShow": false, "imgURL": "BackgroundModule63", "haveTask": false,
                "description": ''},
            {"id": 50, "isShow": false, "imgURL": "BackgroundModule63", "haveTask": true, "taskName": "WarningSigns",
                "description": 'Предупреждающие знаки'},
            {"id": 51, "isShow": false, "imgURL": "BackgroundModule64", "haveTask": false,
                "description": ''},
            {"id": 52, "isShow": false, "imgURL": "BackgroundModule64", "haveTask": true, "taskName": "WeatherForecast",
                "description": 'Прогноз погоды'},
            {"id": 53, "isShow": false, "imgURL": "BackgroundModule65", "haveTask": false,
                "description": ''},
        ],

        //Перетаскивание вещей в рюкзаке
        "listOfElementsStart": [  // todo контекстуальные стили? подумать про state machine
            {
                "src": "Element1.png",
                "src_dop": "Element1_dop.png",
                "id": 1,
                "style": "width: calc(100%/5); position: absolute; bottom: calc(100%/1.8); left: calc(100%/6)",
                "style_dop": "width: calc(100%/5); position: absolute; bottom: calc(100%/1.8); left: calc(100%/6)",
                "toolTip": "термокружка с чаем"
            },
            {
                "src": "Element2.png",
                "src_dop": "Element2_dop.png",
                "id": 2,
                "style": "width: calc(100%/10); position: absolute; bottom: calc(100%/6); left: calc(100%/25)",
                "style_dop": "rotate: 90deg; width: calc(100%/10); position: absolute; bottom: 0; left: calc(100%/25)",
                "toolTip": "бумажные платочки"
            },
            {
                "src": "Element3.png",
                "src_dop": "Element3.png",
                "id": 3,
                "style": "width: calc(100%/5); position: absolute; bottom: calc(100%/12); left: calc(100%/5)",
                "style_dop": "width: calc(100%/5); position: absolute; bottom: calc(100%/12); left: calc(100%/1.2)",
                "toolTip": "упаковка леденцов"
            },
            {
                "src": "Element4.png",
                "src_dop": "Element4_dop.png",
                "id": 4,
                "style": "width: calc(100%/3); position: absolute; bottom: calc(100%/30); left: calc(100%/2.5)",
                "style_dop": "width: calc(100%/3); position: absolute; bottom: calc(100%/30); left: calc(100%/2.5)",
                "toolTip": "блокнот"
            },
            {
                "src": "Element5.png",
                "src_dop": "Element5.png",
                "id": 5,
                "style": "width: calc(100%/4); position: absolute; bottom: calc(100%/30); left: calc(100%/1.34)",
                "style_dop": "width: calc(100%/4); position: absolute; bottom: calc(100%/30); left: calc(100%/1.34)",
                "toolTip": "зонт-трость"
            },
            {
                "src": "Element6.png",
                "src_dop": "Element6_dop.png",
                "id": 6,
                "style": "width: calc(100%/6); position: absolute; bottom: calc(100%/1.7); left: calc(100%/1.83)",
                "style_dop": "rotate: 90deg; width: calc(100%/6); position: absolute; bottom: 0; left: calc(100%/1.83)",
                "toolTip": "ножницы"
            },
            {
                "src": "Element7.png",
                "src_dop": "Element7_dop.png",
                "id": 7,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/1.64); left: calc(100%/2.1)",
                "style_dop": "rotate: 90deg; width: calc(100%/13); position: absolute; bottom: 0; left: calc(100%/2.1)",
                "toolTip": "ручка"
            },
        ],
        "listOfElementsEnd": [],

        //Задание в метро
        "listOfAnswersMetro": [
            {
                "name": "Спустимся самостоятельно вниз и узнаем, что случилось, у дежурного.",
                "id": 1,
            },
            {
                "name": "Присядем на ступеньку и подождем, что скажут в объявлении.",
                "id": 2,
            },
            {
                "name": "Будем стоять и держаться за поручень до объявления дежурного.",
                "id": 3,
            }, {
                "name": "Поднимемся самостоятельно наверх, чтобы спросить дежурного, что случилось.",
                "id": 4,
            },

        ],

        //Задание рабочая тетрадь
        "modularTask1_14Show": false,
        "listWorkBook1": [
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

        //Задание 5 пункт 1
        "listOfAnswersTask5Point1": [
            {
                "name": "Нельзя переходить дорогу в неположенном месте.",
                "id": 1,
            },
            {
                "name": "Нельзя создавать помехи транспортным средствам на пешеходном переходе",
                "id": 2,
            },
            {
                "name": "Нельзя переходить дорогу в обуви на каблуке.",
                "id": 3,
            }, {
                "name": "Нельзя переходить дорогу без светоотражающих элементов одежды.",
                "id": 4,
            },
        ],
        //Задание 5 пункт 2
        "listOfAnswersTask5Point2": [
            {
                "name": "При выходе из трамвая его нужно обходить спереди.",
                "id": 1,
            },
            {
                "name": "При выходе из трамвая его нужно обходить сзади.",
                "id": 2,
            },
            {
                "name": "В трамвае нужно снимать головной убор.",
                "id": 3,
            }, {
                "name": "Из трамвая нужно выходить через переднюю дверь.",
                "id": 4,
            },
        ],
        //Задание 5 пункт 3
        "listOfAnswersTask5Point3": [
            {
                "name": "Велосипедистам нельзя ездить по дороге в платье.",
                "id": 1,
            },
            {
                "name": "Велосипедистам нельзя ездить по дороге без шлема и наколенников.",
                "id": 2,
            },
            {
                "name": "Велосипедистам нельзя ездить по дороге без специального багажника.",
                "id": 3,
            }, {
                "name": "Велосипедистам нельзя ездить по дороге в два ряда.",
                "id": 4,
            },
        ],

        //Задание 6 задание
        "listOfAnswersTask6": [
            {
                "name": "Нет, ночью в городе опасно гулять без взрослых.",
                "id": 1,
            },
            {
                "name": "Да, наверняка это будет весело.",
                "id": 2,
            },
            {
                "name": "Да, но только давай позовем с собой Асю.",
                "id": 3,
            }, {
                "name": "Нет, не уходим, а быстро убегаем.",
                "id": 4,
            },
        ],

        //Задание 7 задание
        "listOfAnswersTask7": [
            {
                "name": "Взять сестру за руку и следовать за ней к выходу.",
                "id": 1,
            },
            {
                "name": "Не двигаться и ждать указаний персонала музея.",
                "id": 2,
            },
            {
                "name": "Игнорировать сигнализацию и продолжить осматривать музей, пока все ушли.",
                "id": 3,
            }, {
                "name": "Подождать пока все люди уйдут и последними выйти из здания музея.",
                "id": 4,
            },
        ],

        //Задание 8 задание 1
        "listOfAnswersTask8_1": [
            {
                "name": "Да, давай!",
                "id": 1,
            },
            {
                "name": "Нет, не стоит этого делать.",
                "id": 2,
            }
        ],

        //Задание 8 задание 2
        "listOfAnswersTask8_2": [
            {
                "name": "Нам стоит сообщить охране музея.",
                "id": 1,
            },
            {
                "name": "Давайте сделаем фото и отправим в полицию.",
                "id": 2,
            },
            {
                "name": "Нужно сказать им, что нельзя так делать.",
                "id": 3,
            }, {
                "name": "Подойдем к ним и отберем у них краску.",
                "id": 4,
            },
        ],

        //Задание 9 задание
        "listOfElementsTask9": [  // todo контекстуальные стили? подумать про state machine
            {
                "src": "Stiker1.png",
                "name": "Парк Таганский",
                "id": 1,
                "choose": false,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/6.8); left: calc(100%/4)"
            },
            {
                "src": "Stiker2.png",
                "name": "Пруд Королевский",
                "id": 2,
                "choose": false,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/1.6); left: calc(100%/3.8)"
            },
            {
                "src": "Stiker3.png",
                "name": "Красная Площадь",
                "id": 3,
                "choose": false,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/1.95); left: calc(100%/2.1)"
            },
            {
                "src": "Stiker4.png",
                "name": "Кремль",
                "id": 4,
                "choose": false,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/2.4); left: calc(100%/2.25)"
            },
            {
                "src": "Stiker5.png",
                "name": "Патриаршие пруды",
                "id": 5,
                "choose": false,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/1.65); left: calc(100%/3)"
            },
            {
                "src": "Stiker6.png",
                "name": "Тверская улица",
                "id": 6,
                "choose": false,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/1.65); left: calc(100%/2.4)"
            },
            {
                "src": "Stiker7.png",
                "name": "Садовое кольцо",
                "id": 7,
                "choose": false,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/1.3); left: calc(100%/2.4)"
            },
            {
                "src": "Stiker8.png",
                "name": "Бульварное кольцо",
                "id": 8,
                "choose": false,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/1.5); left: calc(100%/2)"
            },
            {
                "src": "Stiker9.png",
                "name": "Река Ока",
                "id": 9,
                "choose": false,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/7); left: calc(100%/1.32)"
            },
            {
                "src": "Stiker10.png",
                "name": "Река Яуза",
                "id": 10,
                "choose": false,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/1.8); left: calc(100%/1.4)"
            },
            {
                "src": "Stiker11.png",
                "name": "Чистые пруды",
                "id": 11,
                "choose": false,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/1.8); left: calc(100%/1.7)"
            },
            {
                "src": "Stiker12.png",
                "name": "Парк Зарядье",
                "id": 12,
                "choose": false,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/2.4); left: calc(100%/2)"
            },
            {
                "src": "Stiker13.png",
                "name": "Музеон",
                "id": 13,
                "choose": false,
                "style": "width: calc(100%/13); position: absolute; bottom: calc(100%/4.7); left: calc(100%/2.4)"
            },
        ],
        "listOfAnswersTask9": [],

        //Задание 10 задание
        "listOfElementsTask10": [
            {
                "id": 1,
                "value": "Московский Кремль"
            },
            {
                "id": 2,
                "value": "ВДНХ"
            },
            {
                "id": 3,
                "value": "Пушкинский музей"
            },
            {
                "id": 4,
                "value": "Большой театр"
            },
            {
                "id": 5,
                "value": "Московский зоопарк"
            },
            {
                "id": 6,
                "value": "Государственный исторический музей"
            },
            {
                "id": 7,
                "value": "Государственная Третьяковская галерея"
            },
            {
                "id": 8,
                "value": "Парк Горького"
            },
        ],
        "listOfAnswersTask10_1": [],
        "listOfAnswersTask10_2": [],
        "listOfAnswersTask10_3": [],
        "listOfAnswersTask10": [],

        //Задание 11 задание
        "listOfAnswersTask11": [
            {
                "name": "Фестиваль “Путешествие в рождество”",
                "id": 1,
                "choose": false,
            },
            {
                "name": "Фестиваль “Времена и эпохи”",
                "id": 2,
                "choose": false,
            },
            {
                "name": "Фестиваль “Ежевичное варенье”",
                "id": 3,
                "choose": false,
            }, {
                "name": "Фестиваль Воздушных шаров",
                "id": 4,
                "choose": false,
            },
        ],
        "listOfChoosenAnswersTask11": [],

        //Задание 12 задание
        "listOfAnswersTask12": [
            {
                "name": "Культура Москвы Онлайн",
                "link": "https://www.mos.ru/city/projects/kulturaonline",
                "id": 1,
                "choose": false,
            },
            {
                "name": "Мероприятия и события в Москве",
                "link": "https://mos-holidays.ru/news/",
                "id": 2,
                "choose": false,
            },
            {
                "name": "Узнай Москву",
                "link": "https://um.mos.ru",
                "id": 3,
                "choose": false,
            }, {
                "name": "Яндекс.Афиша: Куда сходить в Москве",
                "link": "https://afisha.yandex.ru/moscow",
                "id": 4,
                "choose": false,
            },
        ],
        "listOfChoosenAnswersTask12": [],

        //Задание 13 задание
        "listOfAnswersTask13": [
            {
                "name": "Переждать ураган под деревом.",
                "id": 1,
                "choose": false,
            },
            {
                "name": "Спрятаться у торговой палатки.",
                "id": 2,
                "choose": false,
            },
            {
                "name": "Зайти в ближайший магазин.",
                "id": 3,
                "choose": false,
            }, {
                "name": "Найти укрытие на детской площадке.",
                "id": 4,
                "choose": false,
            },
        ],
        "listOfChoosenAnswersTask13": [],

        //Задание 14 задание
        "listOfAnswersTask14": [
            {
                "src": "task14EL1.png",
                "src_dop": "Element1_dop.png",
                "id": 1,
            },
            {
                "src": "task14EL2.png",
                "src_dop": "Element2_dop.png",
                "id": 2,
            },
            {
                "src": "task14EL3.png",
                "src_dop": "Element3.png",
                "id": 3,
            },
            {
                "src": "task14EL4.png",
                "src_dop": "Element4_dop.png",
                "id": 4,
            },
            {
                "src": "task14EL5.png",
                "src_dop": "Element5.png",
                "id": 5,
            },
            {
                "src": "task14EL6.png",
                "src_dop": "Element6_dop.png",
                "id": 6,
            },
            {
                "src": "task14EL7.png",
                "src_dop": "Element7_dop.png",
                "id": 7,
            },
            {
                "src": "task14EL8.png",
                "src_dop": "Element7_dop.png",
                "id": 8,
            },
        ],
        "listOfAnswersTask14_1": [],
        "listOfAnswersTask14_2": [],
        "listOfAnswersTask14_3": [],
        "listOfAnswersTask14_4": [],

        //Задание 15 задание
        "listOfAnswersTask15": [
            {
                "id": 1,
                "value": "Попасть на экскурсию в Музей космонавтики"
            },
            {
                "id": 2,
                "value": "Погулять на улице в Парке Сокольники"
            },
            {
                "id": 3,
                "value": "Посетить Планетарий Москвы"
            },
            {
                "id": 4,
                "value": "Покормить птиц в Московском зоопарке"
            },
        ],
        "listOfAnswersTask15_1": [],
        "listOfAnswersTask15_2": [],
        "listOfAnswersTask15_3": [],
        "listOfAnswersTask15_4": [],

    },
    "task2": {
        "isShow": false,
        "results": {
            //0
            "ULHLDT1_Log_HLS1_1": "NA",
            //1
            "ULHLDT1_Log_HLS4_1": "NA",
            //2
            "ULHLDT1_Log_DTS2_1": "NA",
            //3
            "ULHLDT1_Log_HLS5_1": "NA",
            //4
            "ULHLDT1_Log_HLK1_1": "NA",
            //5
            "ULHLDT1_Log_HLK2_1": "NA",
            //6
            "ULHLDT1_Log_DTS1_1": "NA",
            //7
            "ULHLDT1_Log_HLK4_1": "NA",
            //8
            "ULHLDT1_Log_DTK1_1": "NA",
            //9
            "ULHLDT1_Log_HLK3_1": "NA",
            //10
            "ULHLDT1_Log_HLS3_1": "NA",
            //11
            "ULHLDT1_Log_HLS1_2": "NA",
            //12
            "ULHLDT1_Log_HLK2_2": "NA",
            //13
            "ULHLDT1_Log_DTS1_2": "NA",
            //14
            "ULHLDT1_Log_DTS3_1": "NA",
            //15
            "ULHLDT1_Log_HLS2_1": "NA"
        },
        "shownScreenID": 0,
        "screens": [
            {
                "id": 0, "type": "radio", "isShow": true, "haveImg": false,
                "description": ""
            },
            {
                "id": 1, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 2, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 3, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 4, "type": "checkBox", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 5, "type": "checkBox", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 6, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 7, "type": "checkBox", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 8, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 9, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 10, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 11, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 12, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 13, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 14, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 15, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 16, "type": "end", "isShow": false, "haveImg": false,
                "description": ""
            },
        ],
        "chatShow": true,
        "checkBox1Selected": [],
    },
    "task3": {
        "instruction": "Иструкция задание 3",
        "isShow": false,
        "results": {
            //0
            "ULHLDT1_Log_HLS1_1": "NA",
            //1
            "ULHLDT1_Log_HLS4_1": "NA",
            //2
            "ULHLDT1_Log_DTS2_1": "NA",
            //3
            "ULHLDT1_Log_HLS5_1": "NA",
            //4
            "ULHLDT1_Log_HLK1_1": "NA",
            //5
            "ULHLDT1_Log_HLK2_1": "NA",
            //6
            "ULHLDT1_Log_DTS1_1": "NA",
            //7
            "ULHLDT1_Log_HLK4_1": "NA",
            //8
            "ULHLDT1_Log_DTK1_1": "NA",
            //9
            "ULHLDT1_Log_HLK3_1": "NA",
            //10
            "ULHLDT1_Log_HLS3_1": "NA",
            //11
            "ULHLDT1_Log_HLS1_2": "NA",
            //12
            "ULHLDT1_Log_HLK2_2": "NA",
            //13
            "ULHLDT1_Log_DTS1_2": "NA",
            //14
            "ULHLDT1_Log_DTS3_1": "NA",
            //15
            "ULHLDT1_Log_HLS2_1": "NA"
        },
    }
}

export default {
    date
}