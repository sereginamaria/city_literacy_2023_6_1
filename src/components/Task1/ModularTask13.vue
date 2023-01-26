<template>
    <!--Задание 13 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_56Show">
        <div class="background-text">
            <p>
                Коля: Я хочу проводить вас до дома. И город посмотрю, и за вас волноваться не буду.
            </p>
            <MyButton class="white-buttons" @click="show1_57">Далее</MyButton>
        </div>
    </div>
    <!--Задание 13 реплика 2-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_57Show">
        <div class="background-text">
            <p>
                Когда ты, Коля, и Ася почти добрались до вашего двора, Ася получила важное SMS.
            </p>
            <MyButton class="white-buttons" @click="show1_58">Далее</MyButton>
        </div>
    </div>
    <!--Задание 13 реплика 3-->
    <div class="background2" v-if="mainJSON.task1.modularTask1_58Show">
        <div class="background-text">
            <p>
                Ася: МЧС предупреждает, что в ближайшее время начнется ураганный ветер. Нам нужно поскорее попасть домой, а то идти через дворы может быть опасно.
            </p>
            <MyButton class="white-buttons" @click="show1_59">Далее</MyButton>
        </div>
    </div>
    <!--Задание 13 реплика 4-->
    <div class="background3" v-if="mainJSON.task1.modularTask1_59Show">
        <div class="background-text">
            <p>
                Коля: А если сильный ветер застанет вас в пути… Где будете прятаться от непогоды?
            </p>
            <MyButton class="white-buttons" @click="show1_60">Далее</MyButton>
        </div>
    </div>

    <!--Задание 13 задание-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_60Show" :class="{background5: mainJSON.task1.results.ULSCLL1_Log_SCK3_1 === 1,
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
        name: "ModularTask13",
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
            show1_57() {
                this.mainJSON.task1.modularTask1_56Show = false
                this.mainJSON.task1.modularTask1_57Show = true
            },
            show1_58() {
                this.mainJSON.task1.modularTask1_57Show = false
                this.mainJSON.task1.modularTask1_58Show = true
            },
            show1_59() {
                this.mainJSON.task1.modularTask1_58Show = false
                this.mainJSON.task1.modularTask1_59Show = true
            },
            show1_60() {
                this.mainJSON.task1.modularTask1_59Show = false
                this.mainJSON.task1.modularTask1_60Show = true
            },
            checkAnswer(status) {
                this.modalVisible = false
                if (status) {
                    this.mainJSON.task1.modularTask1_60Show = false
                    this.mainJSON.task1.modularTask1_61Show = true
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
    .background0, .background1, .background2, .background3, .background5, .background6, .background7, .background8{
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
    }
    .background0 {
        background: url("../../assets/BackgroundModule50.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule51.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background2 {
        background: url("../../assets/BackgroundModule52.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background3 {
        background: url("../../assets/BackgroundModule53.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background5 {
        background: url("../../assets/BackgroundModule54.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background6 {
        background: url("../../assets/BackgroundModule55.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background7 {
        background: url("../../assets/BackgroundModule56.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background8 {
        background: url("../../assets/BackgroundModule57.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
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
</style>