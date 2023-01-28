<template>
    <!--Задание 15 задание-->
    <div class="background d-flex justify-content-center align-items-center"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}" style="backdrop-filter: blur(5px);">
        <div class="background-task justify-content-between">
            <div class="d-flex" style="height: 70%">
                <div class="task15El">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <p  style="font-weight: 700; font-size: 30px;">11:00</p>
                        <img src="../../assets/task15El1.png" alt="" style="width: 100%;">
                    </div>
                    <draggable
                            @add="error(1)"
                            class="list-group list-group-el"
                            :list="this.mainJSON.task1.listOfAnswersTask15_1"
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
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <p  style="font-weight: 700; font-size: 30px;">13:00</p>
                        <img src="../../assets/task15El2.png" alt="" style="width: 100%;">
                    </div>
                    <draggable
                            @add="error(2)"
                            class="list-group list-group-el"
                            :list="this.mainJSON.task1.listOfAnswersTask15_2"
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
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <p style="font-weight: 700; font-size: 30px;">16:00</p>
                        <img src="../../assets/task15El1.png" alt="" style="width: 100%;">
                    </div>
                    <draggable
                            @add="error(3)"
                            class="list-group list-group-el"
                            :list="this.mainJSON.task1.listOfAnswersTask15_3"
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
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <p  style="font-weight: 700; font-size: 30px;">18:00</p>
                        <img src="../../assets/task15El3.png" alt="" style="width: 100%;">
                    </div>
                    <draggable
                            @add="error(4)"
                            class="list-group list-group-el"
                            :list="this.mainJSON.task1.listOfAnswersTask15_4"
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
                    class="list-group list-of-answers d-flex flex-row flex-wrap justify-content-center align-items-center"
                    :list="this.mainJSON.task1.listOfAnswersTask15"
                    group="task15" style="    height: 50%; width: 80%;"
            >
                <template #item="{ element }">
                    <div class="task15List">
                        {{element.value}}
                    </div>
                </template>
            </draggable>
        </div>

        <div class="background-text">
            <p>
                Инструкция: Построй план прогулки по времени. Выбери, когда лучше посетить то или иное место. Перетащи подходящую активность в нужный временной промежуток.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_LLK6_1 !== 'NA' || mainJSON.task1.results.ULSCLL1_Log_LLK6_2 !== 'NA'
            || mainJSON.task1.results.ULSCLL1_Log_LLK6_3 !== 'NA' || mainJSON.task1.results.ULSCLL1_Log_LLK6_4 !== 'NA'"
            >Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

    <MyModal v-model:show="modalVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>
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
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: ''
            }
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            error(id) {
                if(this.mainJSON.task1["listOfAnswersTask15_" + id].length > 1){
                    this.mainJSON.task1.listOfAnswersTask15.push(this.mainJSON.task1["listOfAnswersTask15_" + id][1])
                    this.mainJSON.task1["listOfAnswersTask15_" + id].splice(1, 1)
                }
                this.mainJSON.task1.results['ULSCLL1_Log_LLK6_' + id] = this.mainJSON.task1["listOfAnswersTask15_" + id][0].id
            },
            showModal() {
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            show1_65() {
                this.mainJSON.task1.modularTask1_64Show = false
                this.mainJSON.task1.modularTask1_65Show = true
            },
            checkAnswer(status) {
                this.modalVisible = false
                if (status) {
                    screen.isShow = false
                    this.mainJSON.task1.shownScreenID++
                    this.mainJSON.task1.screens.forEach(el => {
                        if (el.id === this.mainJSON.task1.shownScreenID) {
                            el.isShow = true
                        }
                    })
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
    .list-group-el {
        background: #FFFFFF;
        border: 1px dashed #333333;
        border-radius: 4px;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 15%;
    }
    .background-task {
        background: #FFFFFF;
        border: 1px solid #54BEDF;
        width: calc(100%/1.2);
        height: calc(100%/1.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
        width: 25%;
        padding: 20px;
        background: #d2fff7;
        border-radius: 4px;
        height: 30%;
    }
</style>