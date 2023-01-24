<template>
    <!--Задание 12 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_54Show">
        <div class="background-text">
            <p>
                Коля: Ого! Сколько у вас в городе всего интересного! А есть такие сайты, где я мог бы посмотреть красивые места Москвы, не выходя из галереи?
            </p>
            <MyButton class="white-buttons" @click="show1_55">Далее</MyButton>
        </div>
    </div>
    <!--Задание 12 задание-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_55Show">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersTask7" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_LLK5_1}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                Инструкция: Выбери ВСЕ подходящие сайты, которыми можно воспользоваться, чтобы посмотреть достопримечательности Москвы онлайн.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_LLK5_1 !== 'NA'">Готово</MyButton>
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
        name: "ModularTask12",
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
            chooseAnswer(qID, el) {
                if (qID === 1) {
                    this.mainJSON.task1.results.ULSCLL1_Log_LLK5_1 = el.id
                }
            },
            show1_55() {
                this.mainJSON.task1.modularTask1_54Show = false
                this.mainJSON.task1.modularTask1_55Show = true
            },
            checkAnswer(status) {
                this.modalVisible = false

                if (status) {
                    this.mainJSON.task1.modularTask1_55Show = false
                    this.mainJSON.task1.modularTask1_56Show = true
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
    .background0, .background1{
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
    }
    .background0 {
        background: url("../../assets/BackgroundModule46.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule49.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
</style>