<template>
    <!--Задание 10 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_48Show">
        <div class="background-text">
            <p>
                Коля благодарен тебе за проверку карты. Вы отправляетесь на прогулку по вечернему городу.
            </p>
            <MyButton class="white-buttons" @click="show1_49">Далее</MyButton>
        </div>
    </div>
    <!--Задание 10 реплика 2-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_49Show">
        <div class="background-text">
            <p>
                Коля: Москва такая красивая! А что это такое?
            </p>
            <MyButton class="white-buttons" @click="show1_50">Далее</MyButton>
        </div>
    </div>
    <!--Задание 10 задание-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_50Show" style="backdrop-filter: blur(5px);">
        <div class="background-task">

        </div>

        <div class="background-text">
            <p>
                Добавь подписи к объектам на картинках, перенеси название выбранного объекта в нужное поле.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_LLK2_1 !== 'NA'">Готово</MyButton>
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
        name: "ModularTask10",
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
            show1_49() {
                this.mainJSON.task1.modularTask1_48Show = false
                this.mainJSON.task1.modularTask1_49Show = true
            },
            show1_50() {
                this.mainJSON.task1.modularTask1_49Show = false
                this.mainJSON.task1.modularTask1_50Show = true
            },
            checkAnswer(status) {
                this.modalVisible = false

                if (status) {
                    this.mainJSON.task1.modularTask1_50Show = false
                    this.mainJSON.task1.modularTask1_51Show = true
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
        background: url("../../assets/BackgroundModule44.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule45.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
</style>