<template>
    <!--Задание 7 задание 1-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}"
         v-if="mainJSON.taskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].id === 30">
        <div class="instruction-block">
            <p>Что ответишь Коле? Выбери один ответ
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in constTaskNightInTheMuseum.listOfAnswersTaskStatue1" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_2}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(1, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
                 <div class="d-flex">
                <div class="me-2">
                    <img src="../../assets/TaskNightInTheMuseumAvatarAsia.webp" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Ася: ' ||
                         constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Старшая сестра Ася, 20 лет: '">
                    <img src="../../assets/TaskNightInTheMuseumAvatarKolia.webp" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Коля: '">
                </div>
                <p>
                    <span class="name-in-dialog">{{constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name}}</span>
                    {{constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="nextTask(screen)" v-if="mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_2 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
    <!--Задание 7 задание 2-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}"
         v-if="mainJSON.taskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].id === 33">
        <div class="instruction-block">
            <p>Что ответишь Коле? Выбери один вариант ответа.
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in constTaskNightInTheMuseum.listOfAnswersTaskStatue2" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_3}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(2, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
                 <div class="d-flex">
                <div class="me-2">
                    <img src="../../assets/TaskNightInTheMuseumAvatarAsia.webp" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Ася: ' ||
                         constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Старшая сестра Ася, 20 лет: '">
                    <img src="../../assets/TaskNightInTheMuseumAvatarKolia.webp" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Коля: '">
                </div>
                <p>
                    <span class="name-in-dialog">{{constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name}}</span>
                    {{constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_3 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskStatue",
        props: {
            screen: {},
            constTaskNightInTheMuseum: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            chooseAnswer(qID, el){
                if(qID === 1){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_2 = el.id
                }
                if(qID === 2){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_3 = el.id
                }
            },
            nextTask(screen){
                screen.isShow = false
                if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_2 === 1){
                    this.mainJSON.taskNightInTheMuseum.shownScreenID++
                }
                else {
                    this.mainJSON.taskNightInTheMuseum.shownScreenID+=2
                }
                this.mainJSON.taskNightInTheMuseum.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskNightInTheMuseum.shownScreenID) {
                        el.isShow = true
                    }
                })
            },
            checkAnswer(){
                screen.isShow = false
                this.mainJSON.taskNightInTheMuseum.shownScreenID++
                this.mainJSON.taskNightInTheMuseum.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskNightInTheMuseum.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_2 === 2){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCS4_2 = 1
                }
                else {
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCS4_2 = 0
                }
                if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_3 === 1){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCS4_3 = 1
                }
                else {
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCS4_3 = 0
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