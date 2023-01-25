<template>
    <!--Задание 6 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_26Show">
        <div class="background-text">
            <p>
                Коля заскучал и предлагает тебе уйти из музея.
            </p>
            <MyButton class="white-buttons" @click="show1_27">Далее</MyButton>
        </div>
    </div>
    <!--Задание 6 реплика 2-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_27Show">
        <div class="background-text">
            <p>
                Коля: Давай уйдем из музея! Пусть Ася дальше смотрит картины, а мы погуляем. Ну, что, идем?
            </p>
            <MyButton class="white-buttons" @click="show1_28">Далее</MyButton>
        </div>
    </div>
    <!--Задание 6 задание-->
    <div class="background2" v-if="mainJSON.task1.modularTask1_28Show">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersTask6" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCS4_1}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                Инструкция: Что ответишь Коле? Выбери один вариант ответа.
            </p>
            <MyButton class="white-buttons" @click="show1_29" v-if="mainJSON.task1.results.ULSCLL1_Log_SCS4_1 !== 'NA'">Далее</MyButton>
            <MyButton class="white-buttons"  disabled v-else>Далее</MyButton>
        </div>
    </div>

    <!--Задание 6 выбраны отвветы 2 или 4 реплика 1-->
    <div class="background3" v-if="mainJSON.task1.modularTask1_29Show">
        <div class="background-text">
            <p>
                Ася: Я все слышу! Так нельзя, ведь я буду волноваться. Ночью в городе опасно гулять без взрослых.
            </p>
            <MyButton class="white-buttons" @click="show1_30">Далее</MyButton>
        </div>
    </div>
    <!--Задание 6 выбраны отвветы 2 или 4 реплика 2-->
    <div class="background4" v-if="mainJSON.task1.modularTask1_30Show">
        <div class="background-text">
            <p>
                Коля: Ладно. Но хотя бы покажите мне, как выглядит улица возле музея. Хоть одним глазочком хочу увидеть Москву!
            </p>
            <MyButton class="white-buttons" @click="show1_31">Далее</MyButton>
        </div>
    </div>
    <!--Задание 6 выбраны отвветы 2 или 4 реплика 3-->
    <div class="background5" v-if="mainJSON.task1.modularTask1_31Show">
        <div class="background-text">
            <p>
                Ася: Так и быть, давайте немного погуляем с вами по городу.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCS4_1 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

    <!--Задание 6 выбран отввет 1 реплика 2-->
    <div class="background6" v-if="mainJSON.task1.modularTask1_32Show">
        <div class="background-text">
            <p>
                Коля: Ладно. Но я так хочу увидеть Москву! Покажите мне, как выглядит улица возле музея.
            </p>
            <MyButton class="white-buttons" @click="show1_33">Далее</MyButton>
        </div>
    </div>
    <!--Задание 6 выбран отввет 1 реплика 2-->
    <div class="background7" v-if="mainJSON.task1.modularTask1_33Show">
        <div class="background-text">
            <p>
                Ася: Мы можем немного погулять по городу.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCS4_1 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

    <!--Задание 6 выбран отввет 3 реплика 1-->
    <div class="background8" v-if="mainJSON.task1.modularTask1_34Show">
        <div class="background-text">
            <p>
                Ася: Я вас слышу. Хорошо, давайте немного погуляем с вами по городу.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCS4_1 !== 'NA'">Готово</MyButton>
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
        name: "ModularTask6",
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: ''
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            showModal(){
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            chooseAnswer(el){
                this.mainJSON.task1.results.ULSCLL1_Log_SCS4_1 = el.id
            },
            show1_27(){
                this.mainJSON.task1.modularTask1_26Show = false
                this.mainJSON.task1.modularTask1_27Show = true
            },
            show1_28(){
                this.mainJSON.task1.modularTask1_27Show = false
                this.mainJSON.task1.modularTask1_28Show = true
            },
            show1_29(){
                this.mainJSON.task1.modularTask1_28Show = false
                console.log('task6')
                console.log(this.mainJSON.task1.results.ULSCLL1_Log_SCS4_1)
                if(this.mainJSON.task1.results.ULSCLL1_Log_SCS4_1 === 2 || this.mainJSON.task1.results.ULSCLL1_Log_SCS4_1 === 4){
                    this.mainJSON.task1.modularTask1_29Show = true
                }
                if(this.mainJSON.task1.results.ULSCLL1_Log_SCS4_1 === 1){
                    this.mainJSON.task1.modularTask1_32Show = true
                }
                if(this.mainJSON.task1.results.ULSCLL1_Log_SCS4_1 === 3){
                    this.mainJSON.task1.modularTask1_34Show = true
                }
            },
            show1_30(){
                this.mainJSON.task1.modularTask1_29Show = false
                this.mainJSON.task1.modularTask1_30Show = true
            },
            show1_31(){
                this.mainJSON.task1.modularTask1_30Show = false
                this.mainJSON.task1.modularTask1_31Show = true
            },
            show1_33(){
                this.mainJSON.task1.modularTask1_32Show = false
                this.mainJSON.task1.modularTask1_33Show = true
            },
            checkAnswer(status){
                this.modalVisible = false

                if(status) {
                    this.mainJSON.task1.modularTask1_31Show = false
                    this.mainJSON.task1.modularTask1_33Show = false
                    this.mainJSON.task1.modularTask1_34Show = false
                    this.mainJSON.task1.modularTask1_35Show = true
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
    .background0, .background1, .background2, .background3, .background4, .background5, .background6, .background7, .background8{
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
    }
    .background0 {
        background: url("../../assets/BackgroundModule23.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule24.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background2 {
        background: url("../../assets/BackgroundModule25.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background3 {
        background: url("../../assets/BackgroundModule26.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background4 {
        background: url("../../assets/BackgroundModule27.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background5 {
        background: url("../../assets/BackgroundModule28.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background6 {
        background: url("../../assets/BackgroundModule29.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background7 {
        background: url("../../assets/BackgroundModule28.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background8 {
        background: url("../../assets/BackgroundModule30.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
</style>