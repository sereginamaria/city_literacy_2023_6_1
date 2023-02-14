<template>
    <div class="background d-flex align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="instruction-block">
            <p>Заполни пропуски, выбирая слова, которые больше всего подходят.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100 h-100">
            <div class="background-task-who-is-a-volunteer">
                <p>Волонтёр — это человек, который
                    <MySelect :list="constTaskVolunteers.listOfAnswersTaskWhoIsAVolunteer1" :listID="1" @answer="addAnswer"
                              :selected="this.mainJSON.task3.ULSE1_Log_SEK4_1"></MySelect>
                    осуществляет
                    <MySelect :list="constTaskVolunteers.listOfAnswersTaskWhoIsAVolunteer2" :listID="2" @answer="addAnswer"
                              :selected="this.mainJSON.task3.ULSE1_Log_SEK4_2"></MySelect>
                    общественно полезную деятельность
                    <MySelect :list="constTaskVolunteers.listOfAnswersTaskWhoIsAVolunteer3" :listID="3" @answer="addAnswer"
                              :selected="this.mainJSON.task3.ULSE1_Log_SEK4_3"></MySelect>
                </p>
            </div>
        </div>


        <div class="background-text">
            <div class="d-flex">
                <p>
                    <span class="name-in-dialog">{{constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].name}}</span>
                    {{constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.task3.results.ULSE1_Log_SEK4_1 !== 'NA' ||
            mainJSON.task3.results.ULSE1_Log_SEK4_2 !== 'NA' || mainJSON.task3.results.ULSE1_Log_SEK4_3 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskElectronicServicesPart1_2",
        props: {
            screen: {},
            constTaskVolunteers: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            addAnswer(el, listID) {
                this.mainJSON.task3["ULSE1_Log_SEK4_" + listID] = el.value
                this.mainJSON.task3.results["ULSE1_Log_SEK4_" + listID] = el.id
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