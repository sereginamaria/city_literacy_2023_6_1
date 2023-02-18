<template>
    <!--Задание 5 пункт 1-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}"
         v-if="mainJSON.task1.screens[this.mainJSON.task1.shownScreenID].id === 17">
        <div class="instruction-block">
            <p>Какое современное правило дорожного движения нарушается на картине? Выбери один ответ.
            </p>
        </div>
        <div class="background-answers">
            <div v-for="el in constTaskNightInTheMuseum.listOfAnswersTaskMuseumPaintings1" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCK2_2}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(1, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
                 <div class="d-flex">
                <div class="me-2">
                    <img src="../../assets/TaskNightInTheMuseumAvatarAsia.png" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].name === 'Ася: ' ||
                         constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].name === 'Старшая сестра Ася, 20 лет: '">
                    <img src="../../assets/TaskNightInTheMuseumAvatarKolia.png" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].name === 'Коля: '">
                </div>
                <p>
                    <span class="name-in-dialog">{{constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].name}}</span>
                    {{constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="nextTask(screen)" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK2_2 !== 'NA'">Далее</MyButton>
            <MyButton class="white-buttons" disabled v-else>Далее</MyButton>
        </div>
    </div>
    <!--Задание 5 пункт 2-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}"
         v-if="mainJSON.task1.screens[this.mainJSON.task1.shownScreenID].id === 18">
        <div class="instruction-block">
            <p>Какое современное правило дорожного движения нарушается на картине? Выбери один ответ.
            </p>
        </div>
        <div class="background-answers">
            <div v-for="el in constTaskNightInTheMuseum.listOfAnswersTaskMuseumPaintings2" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCK2_3}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(2, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
                 <div class="d-flex">
                <div class="me-2">
                    <img src="../../assets/TaskNightInTheMuseumAvatarAsia.png" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].name === 'Ася: ' ||
                         constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].name === 'Старшая сестра Ася, 20 лет: '">
                    <img src="../../assets/TaskNightInTheMuseumAvatarKolia.png" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].name === 'Коля: '">
                </div>
                <p>
                    <span class="name-in-dialog">{{constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].name}}</span>
                    {{constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="nextTask(screen)" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK2_3 !== 'NA'">Далее</MyButton>
            <MyButton class="white-buttons" disabled v-else>Далее</MyButton>
        </div>
    </div>
    <!--Задание 5 пункт 3-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}"
         v-if="mainJSON.task1.screens[this.mainJSON.task1.shownScreenID].id === 19">
        <div class="instruction-block">
            <p>Какое современное правило дорожного движения нарушается на картине? Выбери один ответ.
            </p>
        </div>
        <div class="background-answers">
            <div v-for="el in constTaskNightInTheMuseum.listOfAnswersTaskMuseumPaintings3" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCK2_4}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(3, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
                 <div class="d-flex">
                <div class="me-2">
                    <img src="../../assets/TaskNightInTheMuseumAvatarAsia.png" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].name === 'Ася: ' ||
                         constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].name === 'Старшая сестра Ася, 20 лет: '">
                    <img src="../../assets/TaskNightInTheMuseumAvatarKolia.png" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].name === 'Коля: '">
                </div>
                <p>
                    <span class="name-in-dialog">{{constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].name}}</span>
                    {{constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK2_4 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskMuseumPaintings",
        props: {
            screen: {},
            constTaskNightInTheMuseum: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            nextTask(screen){
                screen.isShow = false
                this.mainJSON.task1.shownScreenID++
                this.mainJSON.task1.screens.forEach(el => {
                    if (el.id === this.mainJSON.task1.shownScreenID) {
                        el.isShow = true
                    }
                })
            },
            chooseAnswer(id, el){
                id++
                this.mainJSON.task1.results["ULSCLL1_Log_SCK2_" + id] = el.id
            },
            checkAnswer(){
                screen.isShow = false
                this.mainJSON.task1.shownScreenID++
                this.mainJSON.task1.screens.forEach(el => {
                    if (el.id === this.mainJSON.task1.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.task1.results.ULSCLL1_Log_SCK2_2 === 1){
                    this.mainJSON.task1.results.ULSCLL1_Score_SCK2_2 = 1
                }
                else {
                    this.mainJSON.task1.results.ULSCLL1_Score_SCK2_2 = 0
                }
                if(this.mainJSON.task1.results.ULSCLL1_Log_SCK2_3 === 1){
                    this.mainJSON.task1.results.ULSCLL1_Score_SCK2_3 = 1
                }
                else {
                    this.mainJSON.task1.results.ULSCLL1_Score_SCK2_3 = 0
                }
                if(this.mainJSON.task1.results.ULSCLL1_Log_SCK2_4 === 4){
                    this.mainJSON.task1.results.ULSCLL1_Score_SCK2_4 = 1
                }
                else {
                    this.mainJSON.task1.results.ULSCLL1_Score_SCK2_4 = 0
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