<template>
    <!--Задание 7 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_38Show">
        <div class="background-text">
            <p>
                Вы вышли из здания музея и пошли гулять по городу.
            </p>
            <MyButton class="white-buttons" @click="show1_39">Далее</MyButton>
        </div>
    </div>
    <!--Задание 7 реплика 2-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_39Show">
        <div class="background-text">
            <p>
                Коля: Смотрите, какие-то ребята разрисовывают статую! Присоединимся к ним?
            </p>
            <MyButton class="white-buttons" @click="show1_40">Далее</MyButton>
        </div>
    </div>
    <!--Задание 7 задание 1-->
    <div class="background2" v-if="mainJSON.task1.modularTask1_40Show">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersTask8_1" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCS4_2}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(1, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                Инструкция: Что ответишь Коле? Выбери один ответ
            </p>
            <MyButton class="white-buttons" @click="show1_41" v-if="mainJSON.task1.results.ULSCLL1_Log_SCS4_2 !== 'NA'">Далее</MyButton>
            <MyButton class="white-buttons" disabled v-else>Далее</MyButton>
        </div>
    </div>

    <!--Задание 7 выбран ответ да реплика 1-->
    <div class="background3" v-if="mainJSON.task1.modularTask1_41Show">
        <div class="background-text">
            <p>
                Ася: Нельзя портить культурные объекты!
            </p>
            <MyButton class="white-buttons" @click="show1_43">Далее</MyButton>
        </div>
    </div>
    <!--Задание 7 выбран овтет нет реплика 1-->
    <div class="background4" v-if="mainJSON.task1.modularTask1_42Show">
        <div class="background-text">
            <p>
                Ася: Верно, нельзя портить культурные объекты.
            </p>
            <MyButton class="white-buttons" @click="show1_43">Далее</MyButton>
        </div>
    </div>

    <!--Задание 7 реплика 3-->
    <div class="background5" v-if="mainJSON.task1.modularTask1_43Show">
        <div class="background-text">
            <p>
                Коля: Наверное, нужно что-то делать. Как нам поступить?
            </p>
            <MyButton class="white-buttons" @click="show1_44">Далее</MyButton>
        </div>
    </div>
    <!--Задание 7 задание 2-->
    <div class="background6" v-if="mainJSON.task1.modularTask1_44Show">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersTask8_2" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCS4_3}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(2, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                Инструкция: Что ответишь Коле? Выбери один вариант ответа.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCS4_3 !== 'NA'">Готово</MyButton>
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
        name: "ModularTask8",
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
            showModal(){
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            chooseAnswer(qID, el){
                if(qID === 1){
                    this.mainJSON.task1.results.ULSCLL1_Log_SCS4_2 = el.id
                }
                if(qID === 2){
                    this.mainJSON.task1.results.ULSCLL1_Log_SCS4_3 = el.id
                }
            },
            show1_39(){
                this.mainJSON.task1.modularTask1_38Show = false
                this.mainJSON.task1.modularTask1_39Show = true
            },
            show1_40(){
                this.mainJSON.task1.modularTask1_39Show = false
                this.mainJSON.task1.modularTask1_40Show = true
            },
            show1_41(){
                this.mainJSON.task1.modularTask1_40Show = false
                console.log(this.mainJSON.task1.results.ULSCLL1_Log_SCS4_2)
                if(this.mainJSON.task1.results.ULSCLL1_Log_SCS4_2 === 1){
                    this.mainJSON.task1.modularTask1_41Show = true
                }
                else {
                    this.mainJSON.task1.modularTask1_42Show = true
                }
            },
            show1_43(){
                this.mainJSON.task1.modularTask1_41Show = false
                this.mainJSON.task1.modularTask1_42Show = false
                this.mainJSON.task1.modularTask1_43Show = true
            },
            show1_44(){
                this.mainJSON.task1.modularTask1_43Show = false
                this.mainJSON.task1.modularTask1_44Show = true
            },
            checkAnswer(status){
                this.modalVisible = false

                if(status) {
                    this.mainJSON.task1.modularTask1_44Show = false
                    this.mainJSON.task1.modularTask1_45Show = true
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
    .background0, .background1, .background2, .background3, .background4, .background5, .background6{
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
    }
    .background0 {
        background: url("../../assets/BackgroundModule34.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule35.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background2 {
        background: url("../../assets/BackgroundModule36.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background3 {
        background: url("../../assets/BackgroundModule37.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background4 {
        background: url("../../assets/BackgroundModule38.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background5 {
        background: url("../../assets/BackgroundModule39.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background6 {
        background: url("../../assets/BackgroundModule40.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
</style>