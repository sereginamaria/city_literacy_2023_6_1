<template>
    <!--Задание 13 задание-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}" :class="{background5: mainJSON.task1.results.ULSCLL1_Log_SCK3_1 === 1,
    background6: mainJSON.task1.results.ULSCLL1_Log_SCK3_1 === 2, background7: mainJSON.task1.results.ULSCLL1_Log_SCK3_1 === 3, background8: mainJSON.task1.results.ULSCLL1_Log_SCK3_1 === 4}"
    >
        <div class="task13">
            <div v-for="el in mainJSON.task1.listOfAnswersTask13" :key="el.id" class="task13El" :class="{choosenAnswer1: el.id === mainJSON.task1.results.ULSCLL1_Log_SCK3_1}"
                 @click="chooseAnswer(el)">
                <div>
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                Инструкция: Что ответишь Коле? Где можно спрятаться от непогоды? Выбери все верные варианты ответа, кликнув на картинку.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK3_1 !== 'NA'">Готово</MyButton>
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

    export default {
        name: "TaskBadWeather",
        props: {
            screen: {},
            constTextTaskNightInTheMuseum: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
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
            showModal() {
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            chooseAnswer(el) {
                this.mainJSON.task1.results.ULSCLL1_Log_SCK3_1 = el.id
                console.log(this.mainJSON.task1.results.ULSCLL1_Log_SCK3_1)
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
    .task13 {
        display: flex;
        width: 100%;
        position: absolute;
        top: calc(100%/1.5);
        justify-content: center;
        padding: 0 calc(100%/10);
        flex-wrap: wrap;
        align-items: center;
    }
    .task13El {
        margin: 20px 50px;
        display: flex;
        min-height: 60px;
        width: calc(100%/4);
        /* min-width: max-content; */
        background: #FFFFFF;
        border: 1px solid #54BEDF;
        /* height: calc(100%/4); */
        align-items: center;
        justify-content: center;
    }
    .choosenAnswer1 {
        background: rgba(84, 190, 223, 0.8);
    }
    .background5 {
        background: url("../../assets/BackgroundModule58.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed !important;
    }
    .background6 {
        background: url("../../assets/BackgroundModule59.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed !important;
    }
    .background7 {
        background: url("../../assets/BackgroundModule60.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed !important;
    }
    .background8 {
        background: url("../../assets/BackgroundModule61.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed !important;
    }
</style>