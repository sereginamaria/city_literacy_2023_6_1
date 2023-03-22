<template>
    <!--Задание 6 задание-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block">
            <p>Что ответишь Коле? Выбери один вариант ответа.
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in constTaskNightInTheMuseum.listOfAnswersTaskEscape" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_1}"
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
            <MyButton class="white-buttons" @click="nextTask(screen)" v-if="mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_1 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons"  disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskEscape",
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

                if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_1 === 2 || this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_1 === 4){
                    this.mainJSON.taskNightInTheMuseum.shownScreenID++
                }
                if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_1 === 1){
                    this.mainJSON.taskNightInTheMuseum.shownScreenID+=4
                }
                if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_1 === 3){
                    this.mainJSON.taskNightInTheMuseum.shownScreenID+=6
                }

                this.mainJSON.taskNightInTheMuseum.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskNightInTheMuseum.shownScreenID) {
                        el.isShow = true
                    }
                })

                if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_1 === 3 || this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_1 === 1){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCS4_1 = 1
                }
                else {
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCS4_1 = 0
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
            },
            chooseAnswer(el){
                this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCS4_1 = el.id
            },
        }
    }
</script>

<style scoped>

</style>