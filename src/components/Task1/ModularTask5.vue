<template>
    <!--Задание 5 инструкция 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_18Show">
        <div class="background-text">
            <p>
                Коля: Спасибо за помощь! Можно я сегодня погуляю с вами?
            </p>
            <MyButton class="white-buttons" @click="show1_19">Далее</MyButton>
        </div>
    </div>
    <!--Задание 5 инструкция 2-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_19Show">
        <div class="background-text">
            <p>
                Ася: Хорошо, тогда идем смотреть картины!
            </p>
            <MyButton class="white-buttons" @click="show1_20">Далее</MyButton>
        </div>
    </div>
    <!--Задание 5 инструкция 3-->
    <div class="background2" v-if="mainJSON.task1.modularTask1_20Show">
        <div class="background-text">
            <p>
                Коля: Наверное, мир сегодня не такой как на этих картинах?
            </p>
            <MyButton class="white-buttons" @click="show1_21">Далее</MyButton>
        </div>
    </div>
    <!--Задание 5 инструкция 4-->
    <div class="background3" v-if="mainJSON.task1.modularTask1_21Show">
        <div class="background-text">
            <p>
                Ася: Да. Например, правила поведения на дорогах и в транспорте на этих картинах точно не соблюдаются!
            </p>
            <MyButton class="white-buttons" @click="show1_22">Далее</MyButton>
        </div>
    </div>
    <!--Задание 5 инструкция 5-->
    <div class="background4" v-if="mainJSON.task1.modularTask1_22Show">
        <div class="background-text">
            <p>
                Коля: Что ты имеешь в виду?
            </p>
            <MyButton class="white-buttons" @click="show1_23">Далее</MyButton>
        </div>
    </div>

    <!--Задание 5 пункт 1-->
    <div class="background5" v-if="mainJSON.task1.modularTask1_23Show">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersMetro" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCK2_2}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(1, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                Вопрос: Какое современное правило дорожного движения нарушается на картине? Выбери один ответ.
            </p>
            <MyButton class="white-buttons" @click="show1_24" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK2_2 !== 'NA'">Далее</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
    <!--Задание 5 пункт 2-->
    <div class="background6" v-if="mainJSON.task1.modularTask1_24Show">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersMetro" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCK2_3}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(2, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                Вопрос: Какое современное правило дорожного движения нарушается на картине? Выбери один ответ.
            </p>
            <MyButton class="white-buttons" @click="show1_25" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK2_3 !== 'NA'">Далее</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
    <!--Задание 5 пункт 3-->
    <div class="background7" v-if="mainJSON.task1.modularTask1_25Show">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersMetro" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCK2_4}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(3, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                Вопрос: Какое современное правило дорожного движения нарушается на картине? Выбери один ответ.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK2_4 !== 'NA'">Готово</MyButton>
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
        name: "ModularTask5",
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
            show1_19(){
                this.mainJSON.task1.modularTask1_18Show = false
                this.mainJSON.task1.modularTask1_19Show = true
            },
            show1_20(){
                this.mainJSON.task1.modularTask1_19Show = false
                this.mainJSON.task1.modularTask1_20Show = true
            },
            show1_21(){
                this.mainJSON.task1.modularTask1_20Show = false
                this.mainJSON.task1.modularTask1_21Show = true
            },
            show1_22(){
                this.mainJSON.task1.modularTask1_21Show = false
                this.mainJSON.task1.modularTask1_22Show = true
            },
            show1_23(){
                this.mainJSON.task1.modularTask1_22Show = false
                this.mainJSON.task1.modularTask1_23Show = true
            },
            show1_24(){
                this.mainJSON.task1.modularTask1_23Show = false
                this.mainJSON.task1.modularTask1_24Show = true
            },
            show1_25(){
                this.mainJSON.task1.modularTask1_24Show = false
                this.mainJSON.task1.modularTask1_25Show = true
            },
            chooseAnswer(id, el){
                id++
                this.mainJSON.task1.results["ULSCLL1_Log_SCK2_" + id] = el.id
            },
            checkAnswer(status){
                this.modalVisible = false

                if(status) {
                    this.mainJSON.task1.modularTask1_25Show = false
                    this.mainJSON.task1.modularTask1_26Show = true
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
    .background0, .background1, .background2, .background3, .background4, .background5, .background6, .background7{
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
    }
    .background0 {
        background: url("../../assets/BackgroundModule15.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule16.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background2 {
        background: url("../../assets/BackgroundModule17.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background3 {
        background: url("../../assets/BackgroundModule18.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background4 {
        background: url("../../assets/BackgroundModule19.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background5 {
        background: url("../../assets/BackgroundModule20.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background6 {
        background: url("../../assets/BackgroundModule21.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background7 {
        background: url("../../assets/BackgroundModule22.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
</style>