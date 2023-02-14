<template>
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="instruction-block">
            <p>Что ответить Максу? Выбери один вариант ответа.
            </p>
        </div>
        <div class="background-answers">
            <div v-for="el in constTaskVolunteers.listOfAnswersRightsAndObligationsPart1" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task3.results.ULSE1_Log_SEK3}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(el)">
                    {{el.value}}
                </div>
            </div>
        </div>
        <div class="background-text">
        <div class="d-flex">
                <p>
                    <span class="name-in-dialog">{{constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].name}}</span>
                    {{constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.task3.results.ULSE1_Log_SEK3 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskRightsAndObligationsPart1",
        props: {
            screen: {},
            constTaskVolunteers: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            chooseAnswer(el){
                this.mainJSON.task3.results.ULSE1_Log_SEK3 = el.id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.task3.shownScreenID++
                this.mainJSON.task3.screens.forEach(el => {
                    if (el.id === this.mainJSON.task3.shownScreenID) {
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