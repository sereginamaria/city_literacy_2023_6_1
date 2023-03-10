const date = {
    "login": '',
    "hash": '',
    "loginShow": true,
    "instructionShow": false,
    "mainPageShow": false,
    "pauseShow": false,
    "resultsShow": false,
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
    "listOfTasks": [
        {'name': 'taskNightInTheMuseum', 'done': false},
        {'name': 'taskChatWalk', 'done': false},
        {'name': 'taskVolunteers', 'done': false}
    ],
    "taskNightInTheMuseum": {
        "results": {
            //1 ChooseBag and Moving things from bag
            "ULSCLL1_Log_SCK1_1": "NA",
            "ULSCLL1_Log_SCK1_2": "NA",// todo поразмислыть в контексте state machine
            "ULSCLL1_Score_SCK1_1": "NA",
            "ULSCLL1_Score_SCK1_2": "NA",

            //2 Choose shoes
            "ULSCLL1_Log_SCK1_3": "NA",
            "ULSCLL1_Score_SCK1_3": "NA",

            //3 Metro
            "ULSCLL1_Log_SCK2_1": "NA",
            "ULSCLL1_Score_SCK2_1": "NA",

            //4 Workbook
            "ULSCLL1_Log_LLK1_1": "NA",
            "ULSCLL1_Log_LLK1_2": "NA",
            "ULSCLL1_Log_LLK1_3": "NA",
            "ULSCLL1_Log_LLK1_4": "NA",
            "ULSCLL1_Score_LLK1_1": "NA",
            "ULSCLL1_Score_LLK1_2": "NA",
            "ULSCLL1_Score_LLK1_3": "NA",
            "ULSCLL1_Score_LLK1_4": "NA",

            //5 Museum Paintings
            "ULSCLL1_Log_SCK2_2": "NA",
            "ULSCLL1_Log_SCK2_3": "NA",
            "ULSCLL1_Log_SCK2_4": "NA",
            "ULSCLL1_Score_SCK2_2": "NA",
            "ULSCLL1_Score_SCK2_3": "NA",
            "ULSCLL1_Score_SCK2_4": "NA",

            //6 Escape
            "ULSCLL1_Log_SCS4_1": "NA",
            "ULSCLL1_Score_SCS4_1": "NA",

            //7 Fire
            "ULSCLL1_Log_SCK1_4": "NA",
            "ULSCLL1_Score_SCK1_4": "NA",

            //8 Statue
            "ULSCLL1_Log_SCS4_2": "NA",
            "ULSCLL1_Log_SCS4_3": "NA",
            "ULSCLL1_Score_SCS4_2": "NA",
            "ULSCLL1_Score_SCS4_3": "NA",

            //9 Map
            "ULSCLL1_Log_LLK3_1": "NA",
            "ULSCLL1_Score_LLK3_1": "NA",

            //10 Attractions
            "ULSCLL1_Log_LLK2_1": "NA",
            "ULSCLL1_Score_LLK2_1": "NA",

            //11 Festival
            "ULSCLL1_Log_LLK4_1": "NA",
            "ULSCLL1_Score_LLK4_1": "NA",

            //12 Sites
            "ULSCLL1_Log_LLK5_1": "NA",
            "ULSCLL1_Score_LLK5_1": "NA",

            //13 Bag Weather
            "ULSCLL1_Log_SCK3_1": "NA",
            "ULSCLL1_Score_SCK3_1": "NA",

            //14 Warning Signs
            "ULSCLL1_Log_SCK3_2": "NA",
            "ULSCLL1_Log_SCK3_3": "NA",
            "ULSCLL1_Log_SCK3_4": "NA",
            "ULSCLL1_Log_SCK3_5": "NA",
            "ULSCLL1_Score_SCK3_2": "NA",

            //15 Weather Forecast
            "ULSCLL1_Log_LLK6_1": "NA",
            "ULSCLL1_Log_LLK6_2": "NA",
            "ULSCLL1_Log_LLK6_3": "NA",
            "ULSCLL1_Log_LLK6_4": "NA",
            "ULSCLL1_Score_LLK6_1": "NA",
        },
        "isShow": false,
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
                "style_dop": "width: calc(100%/5); position: absolute; bottom: 20%; left: calc(100%/6)",
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
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.64); left: calc(100%/2.1)",
                "style_dop": "rotate: 90deg; width: 6.5%; position: absolute; bottom: 0; left: calc(100%/2.1)",
                "toolTip": "ручка"
            },
        ],
        "listOfElementsEnd": [],

        //Задание рабочая тетрадь
        "modularTask1_14Show": false,
        //Картинки ко второму вопросу
        "modularTask1_15Show": false,
        //Картинки к третьему вопросу
        "modularTask1_16Show": false,
        //Картинки к четвертому вопросу
        "modularTask1_17Show": false,
        "ULSCLL1_Log_LLK1_1": "NA",
        "ULSCLL1_Log_LLK1_2": "NA",
        "ULSCLL1_Log_LLK1_3": "NA",
        "ULSCLL1_Log_LLK1_4": "NA",

        //Задание 9 задание
        "listOfElementsTask9": [  // todo контекстуальные стили? подумать про state machine
            {
                "src": "Stiker1.png",
                "name": "Парк Таганский",
                "id": 1,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/6.8); left: calc(100%/4)"
            },
            {
                "src": "Stiker2.png",
                "name": "Пруд Королевский",
                "id": 2,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.6); left: calc(100%/3.8)"
            },
            {
                "src": "Stiker3.png",
                "name": "Красная Площадь",
                "id": 3,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.95); left: calc(100%/2.1)"
            },
            {
                "src": "Stiker4.png",
                "name": "Кремль",
                "id": 4,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/2.4); left: calc(100%/2.25)"
            },
            {
                "src": "Stiker5.png",
                "name": "Патриаршие пруды",
                "id": 5,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.65); left: calc(100%/3)"
            },
            {
                "src": "Stiker6.png",
                "name": "Тверская улица",
                "id": 6,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.65); left: calc(100%/2.4)"
            },
            {
                "src": "Stiker7.png",
                "name": "Садовое кольцо",
                "id": 7,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.3); left: calc(100%/2.4)"
            },
            {
                "src": "Stiker8.png",
                "name": "Бульварное кольцо",
                "id": 8,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.5); left: calc(100%/2)"
            },
            {
                "src": "Stiker9.png",
                "name": "Река Ока",
                "id": 9,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/7); left: calc(100%/1.32)"
            },
            {
                "src": "Stiker10.png",
                "name": "Река Яуза",
                "id": 10,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.8); left: calc(100%/1.4)"
            },
            {
                "src": "Stiker11.png",
                "name": "Чистые пруды",
                "id": 11,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.8); left: calc(100%/1.7)"
            },
            {
                "src": "Stiker12.png",
                "name": "Парк Зарядье",
                "id": 12,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/2.4); left: calc(100%/2)"
            },
            {
                "src": "Stiker13.png",
                "name": "Музеон",
                "id": 13,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/4.7); left: calc(100%/2.4)"
            },
            {
                "src": "Stiker14.png",
                "name": "Москва Река",
                "id": 14,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: 35%; left: 60%"
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
    "taskChatWalk": {
        "isShow": false,
        "results": {
            //0
            "ULHLDT1_Log_HLS1_1": "NA",
            "ULHLDT1_Score_HLS1_1": "NA",
            //1
            "ULHLDT1_Log_HLS4_1": "NA",
            "ULHLDT1_Score_HLS4_1": "NA",
            //2
            "ULHLDT1_Log_DTS2_1": "NA",
            "ULHLDT1_Score_DTS2_1": "NA",
            //3
            "ULHLDT1_Log_HLS5_1": "NA",
            "ULHLDT1_Score_HLS5_1": "NA",
            //4
            "ULHLDT1_Log_HLK1_1": "NA",
            "ULHLDT1_Score_HLK1_1": "NA",
            //5
            "ULHLDT1_Log_HLK2_1": "NA",
            "ULHLDT1_Score_HLK2_1": "NA",
            //6
            "ULHLDT1_Log_DTS1_1": "NA",
            "ULHLDT1_Score_DTS1_1": "NA",
            //7
            "ULHLDT1_Log_HLK4_1": "NA",
            "ULHLDT1_Score_HLK4_1": "NA",
            //8
            "ULHLDT1_Log_DTK1_1": "NA",
            "ULHLDT1_Score_DTK1_1": "NA",
            //9
            "ULHLDT1_Log_HLK3_1": "NA",
            "ULHLDT1_Score_HLK3_1": "NA",
            //10
            "ULHLDT1_Log_HLS3_1": "NA",
            "ULHLDT1_Score_HLS3_1": "NA",
            //11
            "ULHLDT1_Log_HLS1_2": "NA",
            "ULHLDT1_Score_HLS1_2": "NA",
            //12
            "ULHLDT1_Log_HLK2_2": "NA",
            "ULHLDT1_Score_HLK2_2": "NA",
            //13
            "ULHLDT1_Log_DTS1_2": "NA",
            "ULHLDT1_Score_DTS1_2": "NA",
            //14
            "ULHLDT1_Log_DTS3_1": "NA",
            "ULHLDT1_Score_DTS3_1": "NA",
            //15
            "ULHLDT1_Log_HLS2_1": "NA",
            "ULHLDT1_Score_HLS2_1": "NA",
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
    "taskVolunteers": {
        "isShow": false,
        "results": {
            //Who is a volunteer
            "ULSE1_Log_SEK4_1": "NA",
            "ULSE1_Log_SEK4_2": "NA",
            "ULSE1_Log_SEK4_3": "NA",
            "ULSE1_Score_SEK4_1": "NA",

            //Card about volunteering
            "ULSE1_Log_SEK4_4": "NA",
            "ULSE1_Score_SEK4_2": "NA",

            //Rights and Obligations part 1
            "ULSE1_Log_SEK3": "NA",
            "ULSE1_Score_SEK3": "NA",

            //Rights and Obligations part 2
            "ULSE1_Log_SEK3_1": "NA",
            "ULSE1_Log_SEK3_2": "NA",
            "ULSE1_Score_SEK3_1": "NA",

            //Social institutions
            "ULSE1_Log1_SEK2_1": "NA",
            "ULSE1_Log2_SEK2_1": "NA",
            "ULSE1_Log3_SEK2_1": "NA",
            "ULSE1_Log4_SEK2_1": "NA",
            "ULSE1_Score1_SEK2_1": "NA",

            //Who planted the tree
            "ULSE1_Log_SEK2_2": "NA",
            "ULSE1_Score_SEK2_2": "NA",

            //Urban problems
            "ULSE1_Log1_SEK1_1": "NA",
            "ULSE1_Log2_SEK1_1": "NA",
            "ULSE1_Log3_SEK1_1": "NA",
            "ULSE1_Score1_SEK1_1": "NA",
            "ULSE1_Score2_SEK1_1": "NA",
            "ULSE1_Score3_SEK1_1": "NA",

            //Electronic Services 1_1
            "ULSE1_Log1_SEK5_1": "NA",
            "ULSE1_Score1_SEK5_1": "NA",

            //Electronic Services 1_2
            "ULSE1_Log2_SEK5_1": "NA",
            "ULSE1_Score2_SEK5_1": "NA",

            //Electronic Services 2
            "ULSE1_Log_SEK6_1": "NA",
            "ULSE1_Score_SEK6_1": "NA",

            //Cristmas Tree
            "ULSE1_Log_SES1_1": "NA",
            "ULSE1_Score_SES1_1": "NA",

            //Sorting Garbage
            "ULSE1_Log_SES2_1": "NA",
            "ULSE1_Log_SES2_2": "NA",
            "ULSE1_Log_SES2_3": "NA",
            "ULSE1_Log_SES2_4": "NA",
            "ULSE1_Log_SES2_5": "NA",
            "ULSE1_Log_SES3": "NA",
            "ULSE1_Score_SES2": "NA",
            "ULSE1_Score_SES3": "NA",

            //OverternedTrashBin
            "ULSE1_Log_SES4": "NA",
            "ULSE1_Score_SES4": "NA",

            //Woman with stroller
            "ULSE1_Log_SES5": "NA",
            "ULSE1_Score_SES5": "NA",

            //Taske off the backpack
            "ULSE1_Log_SES6": "NA",
            "ULSE1_Score_SES6": "NA",

            //Annn feels bad
            "ULSE1_Log_SES7": "NA",
            "ULSE1_Score_SES7": "NA",

            //Waxwing
            "ULSE1_Log_SES1": "NA",
            "ULSE1_Score_SES1": "NA",

        },
        "shownScreenID": 0, 
        "screens": [
            {"id": 0, "isShow": true, "imgURL": "TaskVolunteersAcquaintanceMax", "haveTask": false,
                "description": ''},
            {"id": 1, "isShow": false, "imgURL": "TaskVolunteersAcquaintanceAnn", "haveTask": false,
                "description": ''},
            {"id": 2, "isShow": false, "imgURL": "TaskVolunteersWhoIsAVolunteerMax", "haveTask": false,
                "description": ''},
            {"id": 3, "isShow": false, "imgURL": "TaskVolunteersAcquaintanceAnn", "haveTask": false,
                "description": ''},
            {"id": 4, "isShow": false, "imgURL": "TaskVolunteersAcquaintanceAnn", "haveTask": true, "taskName": "WhoIsAVolunteer",
                "description": 'Кто такой волонтер?'},
            {"id": 5, "isShow": false, "imgURL": "TaskVolunteersCardAboutVolunteeringMax", "haveTask": false,
                "description": ''},
            {"id": 6, "isShow": false, "imgURL": "TaskVolunteersCardAboutVolunteering", "haveTask": true, "taskName": "CardAboutVolunteering",
                "description": 'Карточка о волонтерстве'},
            {"id": 7, "isShow": false, "imgURL": "TaskVolunteersRightsAndObligationsMax", "haveTask": false,
                "description": ''},
            {"id": 8, "isShow": false, "imgURL": "TaskVolunteersRightsAndObligations", "haveTask": true, "taskName": "RightsAndObligationsPart1",
                "description": 'Права и обязанности часть 1'},
            {"id": 9, "isShow": false, "imgURL": "TaskVolunteersRightsAndObligationsAnn", "haveTask": false,
                "description": ''},
            {"id": 10, "isShow": false, "imgURL": "TaskVolunteersRightsAndObligationsAnn", "haveTask": true, "taskName": "RightsAndObligationsPart2",
                "description": 'Права и обязанности часть 2'},
            {"id": 11, "isShow": false, "imgURL": "TaskVolunteersSocialInstitutionsMax", "haveTask": false,
                "description": ''},
            {"id": 12, "isShow": false, "imgURL": "TaskVolunteersSocialInstitutionsAnn", "haveTask": false,
                "description": ''},
            {"id": 13, "isShow": false, "imgURL": "TaskVolunteersSocialInstitutionsAnn", "haveTask": true, "taskName": "SocialInstitutions",
                "description": 'Социальные институты'},
            {"id": 14, "isShow": false, "imgURL": "TaskVolunteersWhoPlantedTheTreeMax", "haveTask": false,
                "description": ''},
            {"id": 15, "isShow": false, "imgURL": "TaskVolunteersWhoPlantedTheTree", "haveTask": true, "taskName": "WhoPlantedTheTree",
                "description": 'Кто посадил дерево?'},
            {"id": 16, "isShow": false, "imgURL": "TaskVolunteersUrbanProblemsMax", "haveTask": false,
                "description": ''},
            {"id": 17, "isShow": false, "imgURL": "TaskVolunteersUrbanProblemsAnn", "haveTask": false,
                "description": ''},
            {"id": 18, "isShow": false, "imgURL": "TaskVolunteersUrbanProblems", "haveTask": true, "taskName": "UrbanProblems",
                "description": 'Городские проблемы'},
            {"id": 19, "isShow": false, "imgURL": "TaskVolunteersElectronicServicesMax1", "haveTask": false,
                "description": ''},
            {"id": 20, "isShow": false, "imgURL": "TaskVolunteersElectronicServicesAnn1", "haveTask": false,
                "description": ''},
            {"id": 21, "isShow": false, "imgURL": "TaskVolunteersElectronicServicesMax2", "haveTask": false,
                "description": ''},
            {"id": 22, "isShow": false, "imgURL": "TaskVolunteersElectronicServicesAnn2", "haveTask": false,
                "description": ''},
            {"id": 23, "isShow": false, "imgURL": "TaskVolunteersElectronicServicesAnn2", "haveTask": true, "taskName": "ElectronicServicesPart1_1",
                "description": 'Электронные сервисы часть 1'},
            {"id": 24, "isShow": false, "imgURL": "TaskVolunteersElectronicServicesMax3", "haveTask": false,
                "description": ''},
            {"id": 25, "isShow": false, "imgURL": "TaskVolunteersElectronicServicesAnn3", "haveTask": false,
                "description": ''},
            {"id": 26, "isShow": false, "imgURL": "TaskVolunteersElectronicServicesAnn2", "haveTask": true, "taskName": "ElectronicServicesPart1_2",
                "description": 'Электронные сервисы часть 1'},
            {"id": 27, "isShow": false, "imgURL": "TaskVolunteersElectronicServicesMax4", "haveTask": false,
                "description": ''},
            {"id": 28, "isShow": false, "imgURL": "TaskVolunteersElectronicServicesAnn4", "haveTask": false,
                "description": ''},
            {"id": 29, "isShow": false, "imgURL": "TaskVolunteersUrbanProblems", "haveTask": true, "taskName": "ElectronicServicesPart2",
                "description": '"Электронные сервисы часть 2'},
            {"id": 30, "isShow": false, "imgURL": "TaskVolunteersChristmasTreeMax1", "haveTask": false,
                "description": ''},
            {"id": 31, "isShow": false, "imgURL": "TaskVolunteersChristmasTreeMax2", "haveTask": false,
                "description": ''},
            {"id": 32, "isShow": false, "imgURL": "TaskVolunteersChristmasTreeAnn", "haveTask": false,
                "description": ''},
            {"id": 33, "isShow": false, "imgURL": "TaskVolunteersChristmasTreeMax3", "haveTask": false,
                "description": ''},
            {"id": 34, "isShow": false, "imgURL": "TaskVolunteersChristmasTree", "haveTask": true, "taskName": "ChristmasTree",
                "description": 'Елочка'},
            {"id": 35, "isShow": false, "imgURL": "TaskVolunteersSortingGarbageBackground", "haveTask": false,
                "description": ''},
            {"id": 36, "isShow": false, "imgURL": "TaskVolunteersSortingGarbageMax1", "haveTask": false,
                "description": 'Карта'},
            {"id": 37, "isShow": false, "imgURL": "TaskVolunteersSortingGarbageAnn", "haveTask": false,
                "description": ''},
            {"id": 38, "isShow": false, "imgURL": "TaskVolunteersSortingGarbageMax2", "haveTask": false,
                "description": ''},
            {"id": 39, "isShow": false, "imgURL": "TaskVolunteersSortingGarbage", "haveTask": true, "taskName": "SortingGarbage",
                "description": 'Сортировка мусора'},
            {"id": 40, "isShow": false, "imgURL": "TaskVolunteersOverturnedTrashBinMax", "haveTask": false,
                "description": ''},
            {"id": 41, "isShow": false, "imgURL": "TaskVolunteersOverturnedTrashBinBackground", "haveTask": false,
                "description": ''},
            {"id": 42, "isShow": false, "imgURL": "TaskVolunteersOverturnedTrashBinSchoolgirl", "haveTask": false,
                "description": ''},
            {"id": 43, "isShow": false, "imgURL": "TaskVolunteersOverturnedTrashBin", "haveTask": true, "taskName": "OverturnedTrashBin",
                "description": 'Перевернутая урна с мусором'},
            {"id": 44, "isShow": false, "imgURL": "TaskVolunteersOverturnedTrashBinAnn", "haveTask": false,
                "description": ''},
            {"id": 45, "isShow": false, "imgURL": "TaskVolunteersWomanWithStrollerAnn", "haveTask": false,
                "description": ''},
            {"id": 46, "isShow": false, "imgURL": "TaskVolunteersWomanWithStrollerSchoolboy", "haveTask": false,
                "description": ''},
            {"id": 47, "isShow": false, "imgURL": "TaskVolunteersWomanWithStrollerBackground", "haveTask": false,
                "description": ''},
            {"id": 48, "isShow": false, "imgURL": "TaskVolunteersWomanWithStrollerMax", "haveTask": false,
                "description": ''},
            {"id": 49, "isShow": false, "imgURL": "TaskVolunteersWomanWithStroller", "haveTask": true, "taskName": "WomanWithStroller",
                "description": 'Дама с коляской'},
            {"id": 50, "isShow": false, "imgURL": "TaskVolunteersTakeOffTheBackpackAnn", "haveTask": false,
                "description": ''},
            {"id": 51, "isShow": false, "imgURL": "TaskVolunteersTakeOffTheBackpackMax", "haveTask": false,
                "description": ''},
            {"id": 52, "isShow": false, "imgURL": "TaskVolunteersTakeOffTheBackpack", "haveTask": true, "taskName": "TakeOffTheBackpack",
                "description": 'Нужно ли снимать рюкзак'},
            {"id": 53, "isShow": false, "imgURL": "TaskVolunteersAnnFeelsBadAnn1", "haveTask": false,
                "description": ''},
            {"id": 54, "isShow": false, "imgURL": "TaskVolunteersAnnFeelsBadMax", "haveTask": false,
                "description": ''},
            {"id": 55, "isShow": false, "imgURL": "TaskVolunteersAnnFeelsBad",  "haveTask": true, "taskName": "AnnFeelsBad",
                "description": 'Анне плохо'},
            {"id": 56, "isShow": false, "imgURL": "TaskVolunteersAnnFeelsBadBackground", "haveTask": false,
                "description": ''},
            {"id": 57, "isShow": false, "imgURL": "TaskVolunteersAnnFeelsBadBackground", "haveTask": false,
                "description": ''},
            {"id": 58, "isShow": false, "imgURL": "TaskVolunteersAnnFeelsBadAnn2", "haveTask": false,
                "description": ''},
            {"id": 59, "isShow": false, "imgURL": "TaskVolunteersWaxwingMax1", "haveTask": false,
                "description": ''},
            {"id": 60, "isShow": false, "imgURL": "TaskVolunteersWaxwingAnn1", "haveTask": false,
                "description": ''},
            {"id": 61, "isShow": false, "imgURL": "TaskVolunteersWaxwingMax2", "haveTask": false,
                "description": ''},
            {"id": 62, "isShow": false, "imgURL": "TaskVolunteersWaxwing", "haveTask": true, "taskName": "Waxwing",
                "description": 'Свиристель'},
            {"id": 63, "isShow": false, "imgURL": "TaskVolunteersWaxwingAnn2", "haveTask": false,
                "description": ''},
            {"id": 64, "isShow": false, "imgURL": "TaskVolunteersEndMax", "haveTask": false,
                "description": ''},
            {"id": 65, "isShow": false, "imgURL": "TaskVolunteersEndAnn", "haveTask": false,
                "description": ''},

        ],
        "ULSE1_Log_SEK4_1": "Когда?",
        "ULSE1_Log_SEK4_2": "Какую?",
        "ULSE1_Log_SEK4_3": "Какого рода?",
        "listOfAnswersRightsAndObligationsPart2": [
            {
                "value": "Сохранять свое здоровье",
                "id": 1,
            },
            {
                "value": "Защищать свое Отечество",
                "id": 2,
            },
            {
                "value": "Сохранять природу",
                "id": 3,
            },
            {
                "value": "Участвовать в культурной жизни страны",
                "id": 4,
            },
            {
                "value": "Сохранять историческое и культурное наследие",
                "id": 5,
            },
            {
                "value": "Жить в благоприятной окружающей среде",
                "id": 6,
            }
        ],
        "listOfAnswersRightsAndObligationsPart2_list1": [],
        "listOfAnswersRightsAndObligationsPart2_list2": [],
        "listOfAnswersRightsAndObligationsPart2_list3": [],
        "listOfAnswersRightsAndObligationsPart2_list4": [],
        "listOfAnswersRightsAndObligationsPart2_list5": [],
        "listOfAnswersRightsAndObligationsPart2_list6": [],
        "listOfAnswersSocialInstitutions": [
            {
                "value": "Исследует экологические проблемы и ищет пути их решения",
                "id": 1,
            },
            {
                "value": "Воспитывает в детях бережное отношение к природе",
                "id": 2,
            },
            {
                "value": "Помогает защищать окружающую среду на добровольной основе",
                "id": 3,
            },
            {
                "value": "Разрабатывает и принимает законы об охране окружающей среды",
                "id": 4,
            },
        ],
        "listOfAnswersSocialInstitutions_list1": [],
        "listOfAnswersSocialInstitutions_list2": [],
        "listOfAnswersSocialInstitutions_list3": [],
        "listOfAnswersSocialInstitutions_list4": [],
        "listOfAnswersUrbanProblems": [
            {
                "value": "Большие площади ненужной земли используются с пользой",
                "id": 1,
            },
            {
                "value": "Выделяются парниковые газы, и повышается температура на планете",
                "id": 2,
            },
            {
                "value": "Растут траты на системы водоочистки и фильтрации",
                "id": 3,
            },
            {
                "value": "Идет выработка полезных для промышленности газов",
                "id": 4,
            },
            {
                "value": "В районы с новейшей застройкой приезжает больше туристов",
                "id": 5,
            },
            {
                "value": "Появляются альтернативные источники питья",
                "id": 6,
            },
            {
                "value": "Теряется исторический облик городских районов",
                "id": 7,
            },
            {
                "value": "Построенные взамен старых здания украшают облик города",
                "id": 8,
            },
            {
                "value": "Реки становятся более пригодными для городского хозяйства",
                "id": 9,
            }
        ],
        "listOfAnswersUrbanProblems_list1": [],
        "listOfAnswersUrbanProblems_list2": [],
        "listOfAnswersUrbanProblems_list3": [],

    }
}

export default {
    date
}