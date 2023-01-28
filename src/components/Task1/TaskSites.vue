<template>
    <!--Задание 12 задание-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersTask12" :key="el.id" :class="{choosenAnswer: el.choose}"
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
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_LLK5_1 !== 'NA' && mainJSON.task1.results.ULSCLL1_Log_LLK5_1 !== ''">Готово</MyButton>
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
        name: "TaskSites",
        props: {
            screen: {},
            constTextTaskNightInTheMuseum: {}
        },
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
                this.mainJSON.task1.listOfChoosenAnswersTask12.forEach(elMass => {
                    if(elMass === el.id){
                        this.mainJSON.task1.listOfChoosenAnswersTask12.splice(this.mainJSON.task1.listOfChoosenAnswersTask12.indexOf(elMass), 1)
                        el.choose = false
                        k++
                    }
                })
                if(k === 0){
                    this.mainJSON.task1.listOfChoosenAnswersTask12.push(el.id)
                    el.choose = true
                }
                this.mainJSON.task1.results.ULSCLL1_Log_LLK5_1 = this.mainJSON.task1.listOfChoosenAnswersTask12.join()
            },
            checkAnswer(status) {
                this.modalVisible = false

                if (status) {
                    screen.isShow = false
                    this.mainJSON.task1.shownScreenID++
                    this.mainJSON.task1.screens.forEach(el => {
                        if (el.id === this.mainJSON.task1.shownScreenID) {
                            el.isShow = true
                        }
                    })
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

</style>