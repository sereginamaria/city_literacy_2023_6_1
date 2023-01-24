<template>
    <!--Задание 9 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_45Show">
        <div class="background-text">
            <p>
                Ася: Ну всё, вот теперь можем идти гулять! Идём!
            </p>
            <MyButton class="white-buttons" @click="show1_46">Далее</MyButton>
        </div>
    </div>
    <!--Задание 9 реплика 2-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_46Show">
        <div class="background-text">
            <p>
                Коля: Для прогулки нужно составить маршрут. У меня как раз есть карта, мне её передал друг. Проверь, она правильная?
            </p>
            <MyButton class="white-buttons" @click="show1_47">Далее</MyButton>
        </div>
    </div>
    <!--Задание 9 задание-->
    <div class="background2" v-if="mainJSON.task1.modularTask1_47Show">
        <div class="background-task">

        </div>

        <div class="background-text">
            <p>
                Инструкция: Проверь эту карту. Кликни на те объекты, которых на самом деле НЕТ в Москве. Ты можешь вернуть объект на карту, кликнув на него еще раз.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_LLK3_1 !== 'NA'">Готово</MyButton>
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
        name: "ModularTask9",
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
            show1_46() {
                this.mainJSON.task1.modularTask1_45Show = false
                this.mainJSON.task1.modularTask1_46Show = true
            },
            show1_47() {
                this.mainJSON.task1.modularTask1_46Show = false
                this.mainJSON.task1.modularTask1_47Show = true
            },
            checkAnswer(status) {
                this.modalVisible = false

                if (status) {
                    this.mainJSON.task1.modularTask1_47Show = false
                    this.mainJSON.task1.modularTask1_48Show = true
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
        background: url("../../assets/BackgroundModule41.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule42.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background2 {
        background: url("../../assets/BackgroundModule43.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
</style>