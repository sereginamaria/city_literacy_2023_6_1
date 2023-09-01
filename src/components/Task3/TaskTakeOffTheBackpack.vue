<template>
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block">
            <p>Ответь на вопрос Макса.
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in mainJSON.taskVolunteers.listOfAnswersTakeOffTheBackpack" :key="el.id" :class="{choosenAnswer: el.choose}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(el)">
                    <p>{{el.name}}</p>
                </div>
            </div>
        </div>
        <div class="background-text" id="background-text">
            <div class="d-flex">
                <div class="me-2">
                    <img src="../../assets/TaskVolunteersAvatarAnn.png" alt="" style="width: 50px"
                         v-if="constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name === 'Анна Ивановна: ' ||
                         constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name === 'Руководитель школьного клуба волонтеров Анна Ивановна: '">
                    <img src="../../assets/TaskVolunteersAvatarMax.png" alt="" style="width: 50px"
                         v-if="constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name === 'Макс: ' ||
                         constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name === 'Гость: '">
                    <img src="../../assets/TaskVolunteersAvatarSchoolgirl.png" alt="" style="width: 50px"
                         v-if="constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name === 'Школьница: '">
                    <img src="../../assets/TaskVolunteersAvatarSchoolboy.png" alt="" style="width: 50px"
                         v-if="constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name === 'Школьник: '">
                </div>
                <p>
                    <span class="name-in-dialog">{{constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name}}</span>
                    {{constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskVolunteers.results.ULSE1_Log_SEK3_3 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskTakeOffTheBackpack",
        props: {
            screen: {},
            constTaskVolunteers: {}
        },
        data() {
            return {
                height: 0
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            chooseAnswer(el) {
                let k = 0
                this.mainJSON.taskVolunteers.listOfChoosenAnswersTakeOffTheBackpack.forEach(elMass => {
                    if(elMass === el.id){
                        this.mainJSON.taskVolunteers.listOfChoosenAnswersTakeOffTheBackpack.splice(this.mainJSON.taskVolunteers.listOfChoosenAnswersTakeOffTheBackpack.indexOf(elMass), 1)
                        el.choose = false
                        k++
                    }
                })
                if(k === 0){
                    this.mainJSON.taskVolunteers.listOfChoosenAnswersTakeOffTheBackpack.push(el.id)
                    el.choose = true
                }
                this.mainJSON.taskVolunteers.results.ULSE1_Log_SEK3_3 = this.mainJSON.taskVolunteers.listOfChoosenAnswersTakeOffTheBackpack.join()
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskVolunteers.shownScreenID++
                this.mainJSON.taskVolunteers.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskVolunteers.shownScreenID) {
                        el.isShow = true
                    }
                })
                let maxScore = 0
                this.mainJSON.taskVolunteers.listOfChoosenAnswersTakeOffTheBackpack.forEach(el => {
                    if(el === 1 || el === 2){
                        maxScore++
                    }
                })
                if(this.mainJSON.taskVolunteers.listOfChoosenAnswersTakeOffTheBackpack.length === 2 && maxScore === 2){
                    this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK3_3 = 2
                }
                else if(this.mainJSON.taskVolunteers.listOfChoosenAnswersTakeOffTheBackpack.length === 1 && maxScore === 1){
                    this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK3_3 = 1
                }
                else {
                    this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK3_3 = 0
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