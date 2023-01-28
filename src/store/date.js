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
                "description": ''},
            {"id": 2, "isShow": false, "imgURL": "BackgroundModule2", "haveTask": false,
                "description": ''},
            {"id": 3, "isShow": false, "imgURL": "BackgroundModule3", "haveTask": false,
                "description": ''},
            {"id": 4, "isShow": false, "imgURL": "BackgroundModule1", "haveTask": true, "taskName": "MovingThingsFromBag",
                "description": 'Перетаскивание вещей'},
            {"id": 5, "isShow": false, "imgURL": "BackgroundModule5", "haveTask": false,
                "description": ''},
            {"id": 6, "isShow": false, "imgURL": "BackgroundModule6", "haveTask": true, "taskName": "ChooseShoes",
                "description": 'Выбор обуви'},
            {"id": 7, "isShow": false, "imgURL": "BackgroundModule7", "haveTask": false,
                "description": ''},
            {"id": 8, "isShow": false, "imgURL": "BackgroundModule8", "haveTask": false,
                "description": ''},
            {"id": 9, "isShow": false, "imgURL": "BackgroundModule9", "haveTask": false,
                "description": ''},
            {"id": 10, "isShow": false, "imgURL": "BackgroundModule10", "haveTask": true, "taskName": "Metro",
                "description": 'Метро'},
            {"id": 11, "isShow": false, "imgURL": "BackgroundModule11", "haveTask": false,
                "description": ''},
            {"id": 12, "isShow": false, "imgURL": "BackgroundModule12", "haveTask": false,
                "description": ''},
            {"id": 13, "isShow": false, "imgURL": "BackgroundModule13", "haveTask": false,
                "description": ''},
            {"id": 14, "isShow": false, "imgURL": "BackgroundModule14", "haveTask": true, "taskName": "WorkBook",
                "description": 'Раюочая тетрадь'},
            {"id": 15, "isShow": false, "imgURL": "BackgroundModule15", "haveTask": false,
                "description": ''},
            {"id": 16, "isShow": false, "imgURL": "BackgroundModule16", "haveTask": false,
                "description": ''},
            {"id": 17, "isShow": false, "imgURL": "BackgroundModule17", "haveTask": false,
                "description": ''},
            {"id": 18, "isShow": false, "imgURL": "BackgroundModule18", "haveTask": false,
                "description": ''},
            {"id": 19, "isShow": false, "imgURL": "BackgroundModule19", "haveTask": false,
                "description": ''},
            {"id": 20, "isShow": false, "imgURL": "BackgroundModule20", "haveTask": true, "taskName": "MuseumPaintings1",
                "description": 'Картины'},
            {"id": 21, "isShow": false, "imgURL": "BackgroundModule21", "haveTask": true, "taskName": "MuseumPaintings2",
                "description": 'Картины'},
            {"id": 22, "isShow": false, "imgURL": "BackgroundModule22", "haveTask": true, "taskName": "MuseumPaintings3",
                "description": 'Картины'},
            {"id": 23, "isShow": false, "imgURL": "BackgroundModule23", "haveTask": false,
                "description": ''},
            {"id": 24, "isShow": false, "imgURL": "BackgroundModule24", "haveTask": false,
                "description": ''},
            {"id": 25, "isShow": false, "imgURL": "BackgroundModule25", "haveTask": true, "taskName": "Escape",
                "description": 'Побег'},
            {"id": 26, "isShow": false, "imgURL": "BackgroundModule26", "haveTask": false,
                "description": '2 или 4 ответ'},
            {"id": 27, "isShow": false, "imgURL": "BackgroundModule27", "haveTask": false,
                "description": '2 или 4 ответ'},
            {"id": 28, "isShow": false, "imgURL": "BackgroundModule28", "haveTask": false,
                "description": '2 или 4 ответ'},
            {"id": 29, "isShow": false, "imgURL": "BackgroundModule29", "haveTask": false,
                "description": '1 ответ'},
            {"id": 30, "isShow": false, "imgURL": "BackgroundModule28", "haveTask": false,
                "description": '1 ответ'},
            {"id": 31, "isShow": false, "imgURL": "BackgroundModule31", "haveTask": false,
                "description": '3 ответ'},
            {"id": 32, "isShow": false, "imgURL": "BackgroundModule32", "haveTask": false,
                "description": ''},
            {"id": 33, "isShow": false, "imgURL": "BackgroundModule33", "haveTask": false,
                "description": ''},
            {"id": 34, "isShow": false, "imgURL": "BackgroundModule34", "haveTask": true, "taskName": "Fire",
                "description": 'Пожар'},
            {"id": 35, "isShow": false, "imgURL": "BackgroundModule35", "haveTask": false,
                "description": ''},
            {"id": 36, "isShow": false, "imgURL": "BackgroundModule36", "haveTask": false,
                "description": ''},
            {"id": 37, "isShow": false, "imgURL": "BackgroundModule37", "haveTask": true, "taskName": "Statue1",
                "description": 'Статуя'},
            {"id": 38, "isShow": false, "imgURL": "BackgroundModule38", "haveTask": false,
                "description": 'Ответ да'},
            {"id": 39, "isShow": false, "imgURL": "BackgroundModule39", "haveTask": false,
                "description": 'Ответ нет'},
            {"id": 40, "isShow": false, "imgURL": "BackgroundModule40", "haveTask": false,
                "description": ''},
            {"id": 41, "isShow": false, "imgURL": "BackgroundModule41", "haveTask": true, "taskName": "Statue2",
                "description": 'Вторая статуя'},
            {"id": 42, "isShow": false, "imgURL": "BackgroundModule42", "haveTask": false,
                "description": ''},
            {"id": 43, "isShow": false, "imgURL": "BackgroundModule43", "haveTask": false,
                "description": ''},
            {"id": 44, "isShow": false, "imgURL": "BackgroundModule44", "haveTask": true, "taskName": "Map",
                "description": 'Карта'},
            {"id": 45, "isShow": false, "imgURL": "BackgroundModule45", "haveTask": false,
                "description": ''},
            {"id": 46, "isShow": false, "imgURL": "BackgroundModule46", "haveTask": false,
                "description": ''},
            {"id": 47, "isShow": false, "imgURL": "BackgroundModule46", "haveTask": true, "taskName": "Attractions",
                "description": 'Достопримечательности'},
            {"id": 48, "isShow": false, "imgURL": "BackgroundModule48", "haveTask": false,
                "description": ''},
            {"id": 49, "isShow": false, "imgURL": "BackgroundModule49", "haveTask": false,
                "description": ''},
            {"id": 50, "isShow": false, "imgURL": "BackgroundModule50", "haveTask": true, "taskName": "Festival",
                "description": 'Фестиваль'},
            {"id": 51, "isShow": false, "imgURL": "BackgroundModule48", "haveTask": false,
                "description": ''},
            {"id": 52, "isShow": false, "imgURL": "BackgroundModule52", "haveTask": true, "taskName": "Sites",
                "description": 'Сайты'},
            {"id": 53, "isShow": false, "imgURL": "BackgroundModule53", "haveTask": false,
                "description": ''},
            {"id": 54, "isShow": false, "imgURL": "BackgroundModule54", "haveTask": false,
                "description": ''},
            {"id": 55, "isShow": false, "imgURL": "BackgroundModule55", "haveTask": false,
                "description": ''},
            {"id": 56, "isShow": false, "imgURL": "BackgroundModule56", "haveTask": false,
                "description": ''},
            {"id": 57, "isShow": false, "imgURL": "BackgroundModule54", "haveTask": true, "taskName": "BadWeather",
                "description": 'Плохая погода (и 4 раза фон меняется)'},
            {"id": 58, "isShow": false, "imgURL": "BackgroundModule62", "haveTask": false,
                "description": 'Предупреждающие знаки коля'},
            {"id": 59, "isShow": false, "imgURL": "BackgroundModule63", "haveTask": false,
                "description": ''},
            {"id": 60, "isShow": false, "imgURL": "BackgroundModule63", "haveTask": true, "taskName": "WarningSigns",
                "description": 'Предупреждающие знаки'},
            {"id": 61, "isShow": false, "imgURL": "BackgroundModule64", "haveTask": false,
                "description": ''},
            {"id": 62, "isShow": false, "imgURL": "BackgroundModule64", "haveTask": true, "taskName": "WeatherForecast",
                "description": 'Прогноз погоды'},
            {"id": 63, "isShow": false, "imgURL": "BackgroundModule65", "haveTask": false,
                "description": ''},
        ],

        //Перетаскивание вещей в рюкзаке
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

        //Задание в метро
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

        //Задание рабочая тетрадь
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

        //Задание 5 пункт 1
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

        //Задание 6 задание
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

        //Задание 7 задание
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

        //Задание 8 задание 1
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

        //Задание 8 задание 2
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
                "name": "А) Фестиваль “Путешествие в рождество”",
                "id": 1,
                "choose": false,
            },
            {
                "name": "Б) Фестиваль “Времена и эпохи”",
                "id": 2,
                "choose": false,
            },
            {
                "name": "В) Фестиваль “Ежевичное варенье”",
                "id": 3,
                "choose": false,
            }, {
                "name": "Г) Фестиваль Воздушных шаров",
                "id": 4,
                "choose": false,
            },
        ],
        "listOfChoosenAnswersTask11": [],

        //Задание 12 задание
        "listOfAnswersTask12": [
            {
                "name": "А) Культура Москвы Онлайн https://www.mos.ru/city/projects/kulturaonline",
                "id": 1,
                "choose": false,
            },
            {
                "name": "Б) Мероприятия и события в Москве https://mos-holidays.ru/news/",
                "id": 2,
                "choose": false,
            },
            {
                "name": "В) Узнай Москву https://um.mos.ru",
                "id": 3,
                "choose": false,
            }, {
                "name": "Г) Яндекс.Афиша: Куда сходить в Москве https://afisha.yandex.ru/moscow",
                "id": 4,
                "choose": false,
            },
        ],
        "listOfChoosenAnswersTask12": [],

        //Задание 13 задание
        "listOfAnswersTask13": [
            {
                "name": "А) Переждать ураган под деревом.",
                "id": 1,
                "choose": false,
            },
            {
                "name": "Б) Спрятаться у торговой палатки.",
                "id": 2,
                "choose": false,
            },
            {
                "name": "В) Зайти в ближайший магазин.",
                "id": 3,
                "choose": false,
            }, {
                "name": "Г) Найти укрытие на детской площадке.",
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
        "instruction": "Инструкция",
        //Первый экран с инструкцией
        "isShow": false,
        "results": {
            //Checkbox1
            "ULHLDT3_HLK1": "NA",
            "ULHLDT3_Log_HLK1": "NA",

            //Checkbox2
            "ULHLDT3_HLK2": "NA",
            "ULHLDT3_Log_HLK2": "NA",

            //Radio1
            "ULHLDT3_HLK3_1": "NA",
            "ULHLDT3_Log_HLK3_1": "NA",

            //Radio2
            "ULHLDT3_HLK3_2": "NA",
            "ULHLDT3_Log_HLK3_2": "NA",

            //Radio3
            "ULHLDT3_DTK1": "NA",
            "ULHLDT3_Log_DTK1": "NA",

            //Radio4
            "ULHLDT3_DTS3": "NA",
            "ULHLDT3_Log_DTS3": "NA",

            //Radio5
            "ULHLDT3_HLS2": "NA",
            "ULHLDT3_Log_HLS2": "NA",

            //Radio6
            "ULHLDT3_DTK2": "NA",
            "ULHLDT3_Log_DTK2": "NA",

            //Radio7
            "ULHLDT3_DTS5": "NA",
            "ULHLDT3_Log_DTS5": "NA",

            //Route
            "ULHLDT3_Log1_DTS2": "NA",
            "ULHLDT3_Log2_DTS2": "NA",
            "ULHLDT3_Log3_DTS1": "NA",
            "ULHLDT3_DTS2": "NA",
            "ULHLDT3_DTS1": "NA"

        },
        "ULHLDT3_Log_HLK1": [],
        "ULHLDT3_Log_HLK2": [],
        "checkBox1Selected": [],
        "checkBox2Selected": [],
        "chatShow": true,
        "block1MessageShow": true,
        "block1AnswerShow": true,
        "block2MessageShow": false,
        "block2AnswerShow": false,
        "block3MessageShow": false,
        "block3AnswerShow": false,
        "block4MessageShow": false,
        "block4AnswerShow": false,
        "block5MessageShow": false,
        "block5AnswerShow": false,
        "block6MessageShow": false,
        "block6AnswerShow": false,
        "block7MessageShow": false,
        "block7AnswerShow": false,
        "block8MessageShow": false,
        "block8AnswerShow": false,
        "block9MessageShow": false,
        "block9AnswerShow": false,
        "block10MessageShow": false,
        "block10AnswerShow": false,
        "block11MessageShow": false,
        "block11AnswerShow": false,
        "block12MessageShow": false,
        "block12AnswerShow": false,
        "checkBox1Options": [
            {"text": "Сбалансированное питание", "value": "Сбалансированное питание", "id": 1},
            {"text": "Употребление очень большого количества воды", "value": "Употребление очень большого количества воды", "id": 2},
            {"text": "Физическая активность по возможностям организма", "value": "Физическая активность по возможностям организма", "id": 3},
            {"text": "Ежедневные тяжелые двухчасовые тренировки", "value": "Ежедневные тяжелые двухчасовые тренировки", "id": 4},
            {"text": "Влажная уборка в квартире", "value": "Влажная уборка в квартире", "id": 5},
            {"text": "Ежедневный длительный сон до полудня", "value": "Ежедневный длительный сон до полудня", "id": 6},
            {"text": "Эмоциональная разгрузка", "value": "Эмоциональная разгрузка", "id": 7},
            {"text": "Соблюдение правильного режима дня", "value": "Соблюдение правильного режима дня", "id": 8},
            {"text": "Отсутствие вредных привычек", "value": "Отсутствие вредных привычек", "id": 9},
            {"text": "Длительное общение с друзьями в соцсетях", "value": "Длительное общение с друзьями в соцсетях", "id": 10},
            {"text": "Проветривание комнаты", "value": "Проветривание комнаты", "id": 11}
        ],
        "checkBox2Options": [
            {"text": "Отсутствие специальных знаков для езды на самокате", "value": "Отсутствие специальных знаков для езды на самокате", "id": 1},
            {"text": "Отсутствие единой системы дорожек для езды на самокате", "value": "Отсутствие единой системы дорожек для езды на самокате", "id": 2},
            {"text": "Вредные выбросы в атмосферу", "value": "Вредные выбросы в атмосферу", "id": 3},
            {"text": "Разговор по мобильному телефону", "value": "Разговор по мобильному телефону", "id": 4},
            {"text": "Обилие тротуаров, из-за которых надо часто тормозить", "value": "Обилие тротуаров, из-за которых надо часто тормозить", "id": 5},
            {"text": "Внезапное открытие двери припаркованной машины", "value": "Внезапное открытие двери припаркованной машины", "id": 6},
            {"text": "Много пыли в воздухе", "value": "Много пыли в воздухе", "id": 7},
            {"text": "Не везде можно проехать на самокате", "value": "Не везде можно проехать на самокате", "id": 8},
            {"text": "Трамвайные рельсы", "value": "Трамвайные рельсы", "id": 9},
            {"text": "Световое загрязнение", "value": "Световое загрязнение", "id": 10},
        ],
        "radio1Options": [
            {
                "id": 1,
                "name": "Я считаю, от завтрака можно отказаться. А вот от полноценного сна не менее 7 часов - нет. От недостатка сна очень скоро наступит постоянная усталость и мозг будет работать гораздо хуже."
            },
            {
                "id": 2,
                "name": "Думаю, вполне можно спать поменьше, останется больше времени на важные дела. А вот завтрак - это очень важный прием пищи. Без нормального завтрака появятся проблемы с пищеварением и даже обменом веществ."
            },
            {
                "id": 3,
                "name": "Думаю, автор видео предлагает отличные идеи. Поменьше есть - похудеешь. Поменьше спать - будешь больше успевать."
            },
            {
                "id": 4,
                "name": "Это опасные советы, и следовать им нельзя. От недосыпа будешь все время усталым и раздражительным. А ходить до обеда голодным очень вредно для желудка."
            }
        ],
        "radio2Options": [
            {
                "id": 1,
                "name": "Да ну ты что! В фастфуде полно быстрых углеводов и трансжиров, и даже немного фастфуда может привести к нарушениям пищеварения и обмена веществ."
            },
            {
                "id": 2,
                "name": "Мне кажется, нормальная идея. Главное - действительно есть понемногу, и какая разница, что это фастфуд, молодому здоровому организму это не вредно. А если пить много воды, вообще все будет отлично."
            },
            {
                "id": 3,
                "name": "Для меня идея выглядит убедительно. Растущему организму необходимо получать около 3000 калорий в день. В фастфуде много калорий, значит, он поможет соблюдать эту норму. "
            },
            {
                "id": 4,
                "name": "Фастфуд такой вкусный из-за усилителей вкуса, а еще он содержит трансжиры. Это очень вредные для пищеварения вещества, а тут предлагается есть только его. К тому же, есть всего на 500 калорий в день в принципе не полезно. "
            }
        ],
        "radio3Options": [
            {
                "id": 1,
                "name": "В этом поможет специальное приложение или сайт, где люди ищут компаньона для занятий спортом"
            },
            {
                "id": 2,
                "name": "Нужно открыть карту города, там обычно отмечены специализированные площадки для каждого вида спорта"
            },
            {
                "id": 3,
                "name": "Достаточно просто пройтись по району и спросить ребят на спортивных площадках "
            },
            {
                "id": 4,
                "name": "У себя в соцсети написать, что хотите сегодня поиграть и ищете партнера "
            }
        ],
        "radio4Options": [
            {
                "id": 1,
                "name": "«Люблю совушек»"
            },
            {
                "id": 3,
                "name": "«МаринКА»"
            },
            {
                "id": 4,
                "name": "«Савченко К.Н.»"
            },
            {
                "id": 5,
                "name": "«Женя З.»"
            },
            {
                "id": 6,
                "name": "Думаю, без разницы, выбирай любого"
            }
        ],
        "radio5Options": [
            {
                "id": 1,
                "name": "Позвонить по номеру 112"
            },
            {
                "id": 2,
                "name": "Позвонить близким"
            },
            {
                "id": 3,
                "name": "Попросить прохожих вызвать скорую помощь"
            },
            {
                "id": 4,
                "name": "Искать ближайший травмпункт"
            },
            {
                "id": 5,
                "name": "Позвонить в поликлинику"
            },
            {
                "id": 6,
                "name": "Доехать до дома"
            }
        ],
        "radio6Options": [
            {
                "id": 1,
                "name": "Официальный сайт Департамента транспорта нашего города"
            },
            {
                "id": 2,
                "name": "Интерактивная карта метро"
            },
            {
                "id": 3,
                "name": "Популярные интерактивные карты нашего города"
            },
            {
                "id": 4,
                "name": "Карта пунктов проката самокатов"
            }
        ],
        "radio7Options": [
            {
                "id": 1,
                "name": "Первый сайт "
            },
            {
                "id": 2,
                "name": "Второй сайт "
            },
            {
                "id": 3,
                "name": "Третий сайт "
            },
            {
                "id": 4,
                "name": "Четвертый сайт"
            }
        ],
        "chatMapOptions": [
            //Красная зона
            {
                "id": 1, "value": "Парк «Золотой»", "top": "200px", "left": "140px",
                "choose": false,
                "bicycle": true
            },
            {
                "id": 2, "value": "Парк «Средиземье»", "top": "350px", "left": "360px",
                "choose": false,
                "bicycle": false
            },
            {
                "id": 3, "value": "Дендропарк уникальных деревьев", "top": "230px", "left": "420px",
                "choose": false,
                "bicycle": false
            },
            {
                "id": 4, "value": "Парк песчаных скульптур»", "top": "230px", "left": "220px",
                "choose": false,
                "bicycle": false
            },
            {
                "id": 5, "value": "Парк 100-летия города", "top": "370px", "left": "200px",
                "choose": false,
                "bicycle": false
            },
            //Розовая зона
            {
                "id": 6, "value": "Парк редких растений", "top": "260px", "left": "190px",
                "choose": false,
                "bicycle": false
            },
            {
                "id": 7, "value": "Дворцовый парк Усачева", "top": "320px", "left": "240px",
                "choose": false,
                "bicycle": false
            },
            {
                "id": 8, "value": "Парк семейного отдыха 'Спорт для всех'", "top": "380px", "left": "460px",
                "choose": false,
                "bicycle": false
            },
            {
                "id": 9, "value": "Парк - зона отдыха 'Цветущие луга'", "top": "160px", "left": "140px",
                "choose": false,
                "bicycle": false
            },
            {
                "id": 10, "value": "Парк «Хвойный»", "top": "410px", "left": "350px",
                "choose": false,
                "bicycle": true
            },
            {
                "id": 11, "value": "Парк «Птичий край»", "top": "270px", "left": "370px",
                "choose": false,
                "bicycle": false
            },
            //Желтая зона
            {
                "id": 12, "value": "Парк «Есенинские холмы»", "top": "130px", "left": "180px",
                "choose": false,
                "bicycle": false
            },
            {
                "id": 13, "value": "Елизаветенский парк", "top": "290px", "left": "160px",
                "choose": false,
                "bicycle": false
            },
            {
                "id": 14, "value": "Парк им.50-летия Победы", "top": "150px", "left": "370px",
                "choose": false,
                "bicycle": false
            },
            {
                "id": 15, "value": "Парк «Волшебные горы»", "top": "300px", "left": "400px",
                "choose": false,
                "bicycle": false
            },
            {
                "id": 16, "value": "Парк при Институте ботаники", "top": "410px", "left": "480px",
                "choose": false,
                "bicycle": false
            },
            //Зеленая зона
            {
                "id": 17, "value": "Парк «Времена года»", "top": "320px", "left": "80px",
                "choose": false,
                "bicycle": false
            },
            {
                "id": 18, "value": "Парк «Водопады»", "top": "440px", "left": "530px",
                "choose": false,
                "bicycle": true
            },
            {
                "id": 19, "value": "Парк «Еловая аллея»", "top": "80px", "left": "150px",
                "choose": false,
                "bicycle": false
            },
            {
                "id": 20, "value": "Парк «Зеленый сад»", "top": "200px", "left": "310px",
                "choose": false,
                "bicycle": true
            },
            {
                "id": 21, "value": "Парк у прудов «Цапля»", "top": "100px", "left": "330px",
                "choose": false,
                "bicycle": false
            }
        ],
        "chatMapAnswers": [],
        "busShow": false,
        "carShow": false,
        "bikeShow": false,
        "manShow": false,
        "busChoose": false,
        "carChoose": false,
        "bikeChoose": false,
        "manChoose": false,
        "chatRouteFrom": [
            {"id": 0, "value": "Выбери ответ:"},
            {"id": 1, "value": 'ул. Буковая, 26'},
            {"id": 2, "value": 'ул. Боковая, 26'},
            {"id": 3, "value": 'ул. Борковая, 26'},
            {"id": 4, "value": 'Буковая аллея, 26'},
            {"id": 5, "value": 'ул. Букова, 26'}
        ],
        "chatRouteTo": [
            {"value": "Выбери ответ:", "id": 0},
            {"value": 'Парк «Зелёный сад»', "id": 1},
            {"value": 'Парк «Золотой»', "id": 2},
            {"value": 'Парк «Средиземье»', "id": 3},
            {"value": 'Дендропарк уникальных деревьев', "id": 4},
            {"value": 'Парк песчаных скульптур', "id": 5}
        ],
        "chatRouteShare": false,
        "chatRouteScrin": false,
        "highlight1": false,
        "highlight2": false,
        "highlight3": false,
        "highlight4": false,
        "highlight5": false,
        "highlight6": false,
        "highlight7": false,
        "highlight8": false,
        "highlight9": false,
        "highlight10": false,
        "highlight11": false,
        "highlight12": false,
        "highlight13": false,
        "highlight14": false,
        "highlight15": false,
        "highlight16": false,
        "highlight17": false,
        "highlight18": false,
        "highlight19": false,
        "highlight20": false,
        "highlight21": false,
        "highlight22": false,
        "highlight23": false,
        "highlight24": false,
        "highlight25": false,
        "highlight26": false,
        "highlight27": false,
        "highlight28": false,
        "highlight29": false,
        "highlight30": false,
        "highlight31": false,
        "highlight32": false,
        "highlight33": false,
        "highlight34": false,
        "highlight35": false,
        "highlight36": false,
        "highlight37": false,
        "highlight38": false,
        "highlight39": false,
        "highlight40": false,
        "highlight41": false,
    }
}

export default {
    date
}