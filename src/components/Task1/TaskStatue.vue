<template>
    <!--Задание 7 задание 1-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}"
         v-if="mainJSON.task1.screens[this.mainJSON.task1.shownScreenID].id === 31">
        <div class="instruction-block">
            <p>Инструкция:Что ответишь Коле? Выбери один ответ
            </p>
        </div>
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersTask8_1" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCS4_2}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(1, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                {{constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].text}}
            </p>
            <MyButton class="white-buttons" @click="nextTask(screen)" v-if="mainJSON.task1.results.ULSCLL1_Log_SCS4_2 !== 'NA'">Далее</MyButton>
            <MyButton class="white-buttons" disabled v-else>Далее</MyButton>
        </div>
    </div>
    <!--Задание 7 задание 2-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}"
         v-if="mainJSON.task1.screens[this.mainJSON.task1.shownScreenID].id === 34">
        <div class="instruction-block">
            <p>Инструкция: Что ответишь Коле? Выбери один вариант ответа.
            </p>
        </div>
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersTask8_2" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCS4_3}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(2, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                {{constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].text}}
            </p>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.task1.results.ULSCLL1_Log_SCS4_3 !== 'NA'">Готово</MyButton>
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
                    this.mainJSON.task1.results.ULSCLL1_Log_SCS4_2 = el.id
                }
                if(qID === 2){
                    this.mainJSON.task1.results.ULSCLL1_Log_SCS4_3 = el.id
                }
            },
            nextTask(screen){
                screen.isShow = false
                if(this.mainJSON.task1.results.ULSCLL1_Log_SCS4_2 === 1){
                    this.mainJSON.task1.shownScreenID++
                }
                else {
                    this.mainJSON.task1.shownScreenID+=2
                }
                this.mainJSON.task1.screens.forEach(el => {
                    if (el.id === this.mainJSON.task1.shownScreenID) {
                        el.isShow = true
                    }
                })
            },
            checkAnswer(){
                screen.isShow = false
                this.mainJSON.task1.shownScreenID++
                this.mainJSON.task1.screens.forEach(el => {
                    if (el.id === this.mainJSON.task1.shownScreenID) {
                        el.isShow = true
                    }
                })
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