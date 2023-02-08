<template>
    <!--Задание 12 задание-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersTask12" :key="el.id" :class="{choosenAnswer: el.choose}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(el)">
                    <p>{{el.name}}</p>
                    <p style="color: #1F5EFF">{{el.link}}</p>
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                {{constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].text}}
            </p>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.task1.results.ULSCLL1_Log_LLK5_1 !== 'NA' && mainJSON.task1.results.ULSCLL1_Log_LLK5_1 !== ''">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskSites",
        props: {
            screen: {},
            constTaskNightInTheMuseum: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
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
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.task1.shownScreenID++
                this.mainJSON.task1.screens.forEach(el => {
                    if (el.id === this.mainJSON.task1.shownScreenID) {
                        el.isShow = true
                    }
                })
                let maxScore = 0
                this.mainJSON.task1.listOfChoosenAnswersTask12.forEach(el => {
                    if(el === 1 || el === 3){
                        maxScore++
                    }
                })
                if(this.mainJSON.task1.listOfChoosenAnswersTask12.length === 2 && maxScore === 2){
                    this.mainJSON.task1.results.ULSCLL1_Score_LLK5_1 = 2
                }
                else if(this.mainJSON.task1.listOfChoosenAnswersTask12.length === 1 && maxScore === 1){
                    this.mainJSON.task1.results.ULSCLL1_Score_LLK5_1 = 1
                }
                else {
                    this.mainJSON.task1.results.ULSCLL1_Score_LLK5_1 = 0
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