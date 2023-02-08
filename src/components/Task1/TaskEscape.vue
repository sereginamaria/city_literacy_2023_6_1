<template>
    <!--Задание 6 задание-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="instruction-block">
            <p>Инструкция: Что ответишь Коле? Выбери один вариант ответа.
            </p>
        </div>
        <div class="background-answers">
            <div v-for="el in constTaskNightInTheMuseum.listOfAnswersTaskEscape" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCS4_1}"
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
            <MyButton class="white-buttons" @click="nextTask(screen)" v-if="mainJSON.task1.results.ULSCLL1_Log_SCS4_1 !== 'NA'">Далее</MyButton>
            <MyButton class="white-buttons"  disabled v-else>Далее</MyButton>
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

                if(this.mainJSON.task1.results.ULSCLL1_Log_SCS4_1 === 2 || this.mainJSON.task1.results.ULSCLL1_Log_SCS4_1 === 4){
                    this.mainJSON.task1.shownScreenID++
                }
                if(this.mainJSON.task1.results.ULSCLL1_Log_SCS4_1 === 1){
                    this.mainJSON.task1.shownScreenID+=4
                }
                if(this.mainJSON.task1.results.ULSCLL1_Log_SCS4_1 === 3){
                    this.mainJSON.task1.shownScreenID+=6
                }

                this.mainJSON.task1.screens.forEach(el => {
                    if (el.id === this.mainJSON.task1.shownScreenID) {
                        el.isShow = true
                    }
                })

                if(this.mainJSON.task1.results.ULSCLL1_Log_SCS4_1 === 3){
                    this.mainJSON.task1.results.ULSCLL1_Score_SCS4_1 = 1
                }
                else {
                    this.mainJSON.task1.results.ULSCLL1_Score_SCS4_1 = 0
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
                this.mainJSON.task1.results.ULSCLL1_Log_SCS4_1 = el.id
            },
        }
    }
</script>

<style scoped>

</style>