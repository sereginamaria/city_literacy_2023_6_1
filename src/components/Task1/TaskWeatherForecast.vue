<template>
    <!--Задание 15 задание-->
    <div class="background d-flex align-items-center flex-column"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}" style="backdrop-filter: blur(5px);">
        <div class="instruction-block">
            <p>Построй план прогулки по времени. Выбери, когда лучше посетить то или иное место. Перетащи подходящую активность в нужный временной промежуток.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100 h-100">
            <div class="background-task" style="height: 85%">
            <div class="d-flex" style="height: 60%">
                <div class="task15El">
                    <div class="d-flex justify-content-center align-items-center flex-column" style="height: 80%">
                        <p  style="font-weight: 700; font-size: 30px;">11:00</p>
                        <img src="../../assets/task15El1.webp" alt="" style="width: 90%;">
                    </div>
                    <draggable
                            @add="error(1)"
                            class="list-group list-group-el-weather-forecast"
                            :list="this.mainJSON.taskNightInTheMuseum.listOfAnswersTask15_1"
                            group="task15"
                    >
                        <template #item="{ element }">
                            <div>
                                {{element.value}}
                            </div>
                        </template>
                    </draggable>
                </div>
                <div class="task15El">
                    <div class="d-flex justify-content-center align-items-center flex-column" style="height: 80%">
                        <p  style="font-weight: 700; font-size: 30px;">13:00</p>
                        <img src="../../assets/task15El3.webp" alt="" style="width: 90%;">
                    </div>
                    <draggable
                            @add="error(2)"
                            class="list-group list-group-el-weather-forecast"
                            :list="this.mainJSON.taskNightInTheMuseum.listOfAnswersTask15_2"
                            group="task15"
                    >
                        <template #item="{ element }">
                            <div>
                                {{element.value}}
                            </div>
                        </template>
                    </draggable>
                </div>
                <div class="task15El">
                    <div class="d-flex justify-content-center align-items-center flex-column" style="height: 80%">
                        <p style="font-weight: 700; font-size: 30px;">16:00</p>
                        <img src="../../assets/task15El1.webp" alt="" style="width: 90%;">
                    </div>
                    <draggable
                            @add="error(3)"
                            class="list-group list-group-el-weather-forecast"
                            :list="this.mainJSON.taskNightInTheMuseum.listOfAnswersTask15_3"
                            group="task15"
                    >
                        <template #item="{ element }">
                            <div>
                                {{element.value}}
                            </div>
                        </template>
                    </draggable>
                </div>
                <div class="task15El">
                    <div class="d-flex justify-content-center align-items-center flex-column" style="height: 80%">
                        <p  style="font-weight: 700; font-size: 30px;">18:00</p>
                        <img src="../../assets/task15El2.webp" alt="" style="width: 90%;">
                    </div>
                    <draggable
                            @add="error(4)"
                            class="list-group list-group-el-weather-forecast"
                            :list="this.mainJSON.taskNightInTheMuseum.listOfAnswersTask15_4"
                            group="task15"
                    >
                        <template #item="{ element }">
                            <div>
                                {{element.value}}
                            </div>
                        </template>
                    </draggable>
                </div>
            </div>
            <draggable
                    class="list-group list-of-answers-weather-forecast d-flex flex-row flex-wrap justify-content-center align-items-center"
                    :list="this.mainJSON.taskNightInTheMuseum.listOfAnswersTask15"
                    group="task15"
            >
                <template #item="{ element }">
                    <div class="task15List">
                        {{element.value}}
                    </div>
                </template>
            </draggable>
        </div>
        </div>
        <div class="background-text">
                 <div class="d-flex">
                <div class="me-2">
                    <img src="../../assets/TaskNightInTheMuseumAvatarAsia.webp" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Ася: ' ||
                         constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Старшая сестра Ася, 20 лет: '">
                    <img src="../../assets/TaskNightInTheMuseumAvatarKolia.webp" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Коля: '">
                </div>
                <p>
                    <span class="name-in-dialog">{{constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name}}</span>
                    {{constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK6_1 !== 'NA' || mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK6_2 !== 'NA'
            || mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK6_3 !== 'NA' || mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK6_4 !== 'NA'"
            >Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskWeatherForecast",
        computed: {
            ...mapGetters(['mainJSON']),
        },
        props: {
            screen: {},
            constTaskNightInTheMuseum: {}
        },
        components: {
            draggable
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            error(id) {
                if(this.mainJSON.taskNightInTheMuseum["listOfAnswersTask15_" + id].length > 1){
                    this.mainJSON.taskNightInTheMuseum.listOfAnswersTask15.push(this.mainJSON.taskNightInTheMuseum["listOfAnswersTask15_" + id][1])
                    this.mainJSON.taskNightInTheMuseum["listOfAnswersTask15_" + id].splice(1, 1)
                }
                this.mainJSON.taskNightInTheMuseum.results['ULSCLL1_Log_LLK6_' + id] = this.mainJSON.taskNightInTheMuseum["listOfAnswersTask15_" + id][0].id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskNightInTheMuseum.shownScreenID++
                this.mainJSON.taskNightInTheMuseum.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskNightInTheMuseum.shownScreenID) {
                        el.isShow = true
                    }
                })
                if((this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK6_1 === 1 || this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK6_1 === 3) &&
                    (this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK6_3 === 1 || this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK6_3 === 3)) {
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK6_1 = 1
                }
                else {
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK6_1 = 0
                }
                let t = new Date()
                this.mainJSON.results.dataTimeLastUpdate =
                    [
                        t.getFullYear(),
                        ('0' + (t.getMonth() + 1)).slice(-2),
                        ('0' + t.getDate()).slice(-2)
                    ].join('-') + ' ' + [
                        ('0' + (t.getHours())).slice(-2),
                        ('0' + (t.getMinutes())).slice(-2),
                        ('0' + t.getSeconds()).slice(-2)
                    ].join(':');

                this.push_mainJSON({
                    push: this.mainJSON
                })
            }
        }
    }
</script>

<style scoped>
    .list-of-answers-weather-forecast {
        text-align: center;
        height: 30%;
        width: 100%;
    }
    .list-group-el-weather-forecast {
        background: #FFFFFF;
        border: 1px dashed #333333;
        border-radius: 4px;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 15%;
        min-height: 15%;
    }
    .task15El{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 20px;
        width: 25%;
        height: 100%;
        padding: 20px;
        background: #d2fff7;
        border-radius: 4px;
    }
    .task15List {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        width: 20%;
        padding: 20px;
        background: #d2fff7;
        border-radius: 4px;
        height: 30%;
    }
</style>