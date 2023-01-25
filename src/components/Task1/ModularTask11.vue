<template>
    <!--Задание 11 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_51Show">
        <div class="background-text">
            <p>
                Коля: Здорово, что мы с вами сегодня встретились. Но такие интересные события как наша Ночь музеев, наверное, бывают в Москве только раз в году?
            </p>
            <MyButton class="white-buttons" @click="show1_52">Далее</MyButton>
        </div>
    </div>
    <!--Задание 11 реплика 2-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_52Show">
        <div class="background-text">
            <p>
                Коля: Ну почему же? В Москве много интересных мероприятий. Расскажешь Коле?
            </p>
            <MyButton class="white-buttons" @click="show1_53">Далее</MyButton>
        </div>
    </div>
    <!--Задание 11 задание-->
    <div class="background2" v-if="mainJSON.task1.modularTask1_53Show">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersTask11" :key="el.id" :class="{choosenAnswer: el.choose}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                Инструкция: Выбери из списка все фестивали, которые проходят в Москве.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_LLK4_1 !== 'NA' && mainJSON.task1.results.ULSCLL1_Log_LLK4_1 !== ''">Готово</MyButton>
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
        name: "ModularTask11",
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
                let k = 0
                this.mainJSON.task1.listOfChoosenAnswersTask11.forEach(elMass => {
                    if(elMass === el.id){
                        this.mainJSON.task1.listOfChoosenAnswersTask11.splice(this.mainJSON.task1.listOfChoosenAnswersTask11.indexOf(elMass), 1)
                        el.choose = false
                        k++
                    }
                })
                if(k === 0){
                    this.mainJSON.task1.listOfChoosenAnswersTask11.push(el.id)
                    el.choose = true
                }
                this.mainJSON.task1.results.ULSCLL1_Log_LLK4_1 = this.mainJSON.task1.listOfChoosenAnswersTask11.join()
            },
            show1_52() {
                this.mainJSON.task1.modularTask1_51Show = false
                this.mainJSON.task1.modularTask1_52Show = true
            },
            show1_53() {
                this.mainJSON.task1.modularTask1_52Show = false
                this.mainJSON.task1.modularTask1_53Show = true
            },
            checkAnswer(status) {
                this.modalVisible = false

                if (status) {
                    this.mainJSON.task1.modularTask1_53Show = false
                    this.mainJSON.task1.modularTask1_54Show = true
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
    .background0, .background1, .background2{
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
    }
    .background0 {
        background: url("../../assets/BackgroundModule46.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule47.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background2 {
        background: url("../../assets/BackgroundModule48.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
</style>