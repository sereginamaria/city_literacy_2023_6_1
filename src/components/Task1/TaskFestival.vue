<template>
    <!--Задание 11 задание-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="instruction-block">
            <p>Выбери из списка все фестивали, которые проходят в Москве.
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in mainJSON.taskNightInTheMuseum.listOfAnswersTask11" :key="el.id" :class="{choosenAnswer: el.choose}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
                 <div class="d-flex">
                <div class="me-2">
                    <img src="../../assets/TaskNightInTheMuseumAvatarAsia.png" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Ася: ' ||
                         constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Старшая сестра Ася, 20 лет: '">
                    <img src="../../assets/TaskNightInTheMuseumAvatarKolia.png" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Коля: '">
                </div>
                <p>
                    <span class="name-in-dialog">{{constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name}}</span>
                    {{constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK4_1 !== 'NA' && mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK4_1 !== ''">Готово</MyButton>
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
                this.mainJSON.taskNightInTheMuseum.listOfChoosenAnswersTask11.forEach(elMass => {
                    if(elMass === el.id){
                        this.mainJSON.taskNightInTheMuseum.listOfChoosenAnswersTask11.splice(this.mainJSON.taskNightInTheMuseum.listOfChoosenAnswersTask11.indexOf(elMass), 1)
                        el.choose = false
                        k++
                    }
                })
                if(k === 0){
                    this.mainJSON.taskNightInTheMuseum.listOfChoosenAnswersTask11.push(el.id)
                    el.choose = true
                }
                this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK4_1 = this.mainJSON.taskNightInTheMuseum.listOfChoosenAnswersTask11.join()
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskNightInTheMuseum.shownScreenID++
                this.mainJSON.taskNightInTheMuseum.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskNightInTheMuseum.shownScreenID) {
                        el.isShow = true
                    }
                })
                let maxScore = 0
                this.mainJSON.taskNightInTheMuseum.listOfChoosenAnswersTask11.forEach(el => {
                    if(el === 1 || el === 2){
                        maxScore++
                    }
                })
                if(this.mainJSON.taskNightInTheMuseum.listOfChoosenAnswersTask11.length === 2 && maxScore === 2){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK4_1 = 2
                }
                else if(this.mainJSON.taskNightInTheMuseum.listOfChoosenAnswersTask11.length === 1 && maxScore === 1){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK4_1 = 1
                }
                else {
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK4_1 = 0
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