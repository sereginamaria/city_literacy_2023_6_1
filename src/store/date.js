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
    "task1Show": true,
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
            "ULSCLL1_Log_SCK1_1": "NA",
            "ULSCLL1_Log_SCK1_3": "NA"
        },
        "instruction": "Этой весной в Москве проходит акция “Ночь музеев”, когда музеи города открыты для посетителей намного дольше, чем обычно. Ты со своей старшей сестрой Асей отправляешься в Новую Третьяковку на Крымском Валу и тебе предстоит выполнить различные задания. Обрати внимание: при выполнении каждого задания после нажатия кнопки «Готово» ты уже не сможешь изменить ответ.",
        //Первый экран с инструкцией
        "modularTask1_0Show": true,
        //Выбор рюкзака
        "modularTask1_1Show": false,
        //Экран в случае выбора первого
        "modularTask1_2Show": false,
        //Экран в случае выбора второго
        "modularTask1_3Show": false,
        //Перетаскивание вещей в рюкзаке
        "modularTask1_4Show": false,
        "listOfElementsStart": [
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
    },
   }

export default {
    date
}