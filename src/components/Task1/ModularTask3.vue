<template>
    <!--Инструкция перед заданием про метро-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_7Show">
        <div class="background-text">
            <p>
                Ася: Ну что, выходим? Поедем на метро, так будет быстрее.
            </p>
            <MyButton class="white-buttons" @click="show1_8">Далее</MyButton>
        </div>
    </div>
    <!--Слова автора про метро-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_8Show">
        <div class="background-text">
            <p>
                Вы отправились в путь на метро и сейчас спускаетесь по эскалатору.
            </p>
            <MyButton class="white-buttons" @click="show1_9">Далее</MyButton>
        </div>
    </div>
    <!--Инструкция в метро-->
    <div class="background2" v-if="mainJSON.task1.modularTask1_9Show">
        <div class="background-text">
            <p>
                Ася: Ой, эскалатор остановился. А мы опаздываем. Что будем делать?
            </p>
            <MyButton class="white-buttons" @click="show1_10">Далее</MyButton>
        </div>
    </div>
    <!--Задание в метро-->
    <div class="background3" v-if="mainJSON.task1.modularTask1_10Show">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersMetro" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCK2_1}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(el)">
                    {{el.name}}
                </div>
            </div>
        </div>

        <div class="background-text">
            <p>
                Инструкция: Что ответить Асе? Выбери один вариант ответа
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK2_1 !== 'NA'">Готово</MyButton>
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
        name: "ModularTask3",
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
            show1_8(){
                this.mainJSON.task1.modularTask1_7Show = false
                this.mainJSON.task1.modularTask1_8Show = true
            },
            show1_9(){
                this.mainJSON.task1.modularTask1_8Show = false
                this.mainJSON.task1.modularTask1_9Show = true
            },
            show1_10(){
                this.mainJSON.task1.modularTask1_9Show = false
                this.mainJSON.task1.modularTask1_10Show = true
            },
            chooseAnswer(el){
                this.mainJSON.task1.results.ULSCLL1_Log_SCK2_1 = el.id
            },
            checkAnswer(status){
                this.modalVisible = false

                if(status) {
                    this.mainJSON.task1.modularTask1_10Show = false
                    this.mainJSON.task1.modularTask1_11Show = true
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
    .background0, .background1, .background2, .background3{
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
    }
    .background0 {
        background: url("../../assets/BackgroundModule5.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule8.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background2 {
        background: url("../../assets/BackgroundModule9.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background3 {
        background: url("../../assets/BackgroundModule10.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .choosenAnswer {
        background: rgba(84, 190, 223, 0.15);
    }
    .background-answers {
        background: #FFFFFF;
        border: 1px solid #54BEDF;
        left: calc(100%/1.8);
        width: calc(100%/3);
        position: absolute;
        bottom: calc(100%/2.5);
    }
</style>