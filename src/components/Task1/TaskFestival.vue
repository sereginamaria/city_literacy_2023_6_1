<template>
    <!--Задание 11 задание-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="instruction-block">
            <p> Инструкция: Выбери из списка все фестивали, которые проходят в Москве.
            </p>
        </div>
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
                {{constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].text}}
            </p>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.task1.results.ULSCLL1_Log_LLK4_1 !== 'NA' && mainJSON.task1.results.ULSCLL1_Log_LLK4_1 !== ''">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskFestival",
        computed: {
            ...mapGetters(['mainJSON']),
        },
        props: {
            screen: {},
            constTaskNightInTheMuseum: {}
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
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
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.task1.shownScreenID++
                this.mainJSON.task1.screens.forEach(el => {
                    if (el.id === this.mainJSON.task1.shownScreenID) {
                        el.isShow = true
                    }
                })
                let maxScore = 0
                this.mainJSON.task1.listOfChoosenAnswersTask11.forEach(el => {
                    if(el === 11 || el === 12){
                        maxScore++
                    }
                })
                if(this.mainJSON.task1.listOfChoosenAnswersTask11.length === 2 && maxScore === 2){
                    this.mainJSON.task1.results.ULSCLL1_Score_LLK4_1 = 2
                }
                else if(this.mainJSON.task1.listOfChoosenAnswersTask11.length === 1 && maxScore === 1){
                    this.mainJSON.task1.results.ULSCLL1_Score_LLK4_1 = 1
                }
                else {
                    this.mainJSON.task1.results.ULSCLL1_Score_LLK4_1 = 0
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