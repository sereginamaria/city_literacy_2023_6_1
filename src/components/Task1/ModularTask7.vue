<template>
    <!--Задание 7 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_35Show">
        <div class="background-text">
            <p>
                Вдруг в здании срабатывает пожарная сигнализация. Все посетители устремились к выходу.
            </p>
            <MyButton class="white-buttons" @click="show1_36">Далее</MyButton>
        </div>
    </div>
    <!--Задание 7 реплика 2-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_36Show">
        <div class="background-text">
            <p>
                Коля: Пожарная сигнализация! Что делать?
            </p>
            <MyButton class="white-buttons" @click="show1_37">Далее</MyButton>
        </div>
    </div>
    <!--Задание 7 задание-->
    <div class="background2" v-if="mainJSON.task1.modularTask1_37Show">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersTask7" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCK1_4}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                Инструкция: Что нужно делать в этой ситуации? Выбери один вариант ответа.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK1_4 !== 'NA'">Готово</MyButton>
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
        name: "ModularTask7",
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
            chooseAnswer(el){
                this.mainJSON.task1.results.ULSCLL1_Log_SCK1_4 = el.id
            },
            show1_36(){
                this.mainJSON.task1.modularTask1_35Show = false
                this.mainJSON.task1.modularTask1_36Show = true
            },
            show1_37(){
                this.mainJSON.task1.modularTask1_36Show = false
                this.mainJSON.task1.modularTask1_37Show = true
            },
            checkAnswer(status){
                this.modalVisible = false

                if(status) {
                    this.mainJSON.task1.modularTask1_37Show = false
                    this.mainJSON.task1.modularTask1_38Show = true
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
        background: url("../../assets/BackgroundModule31.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule32.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background2 {
        background: url("../../assets/BackgroundModule33.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
</style>