<template>
    <!--Задание 13 задание-->
    <div class="background backimp" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}" :class="{background5: mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK3_1 === 1,
    background6: mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK3_1 === 2, background7: mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK3_1 === 3, background8: mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK3_1 === 4}"
    >
        <div class="instruction-block">
            <p>Что ответишь Коле? Где можно спрятаться от непогоды? Выбери один ответ.
            </p>
        </div>
        <div class="task13">
            <div v-for="el in mainJSON.taskNightInTheMuseum.listOfAnswersTask13" :key="el.id" class="task13El" :class="{choosenAnswer1: el.id === mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK3_1}"
                 @click="chooseAnswer(el)">
                <div>
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
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK3_1 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskBadWeather",
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
                this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK3_1 = el.id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskNightInTheMuseum.shownScreenID++
                this.mainJSON.taskNightInTheMuseum.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskNightInTheMuseum.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK3_1 === 3){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK3_1 = 1
                }
                else {
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK3_1 = 0
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
    .task13 {
        display: flex;
        width: 100%;
        position: absolute;
        top: 60%;
        justify-content: center;
        padding: 0 calc(100%/10);
        flex-wrap: wrap;
        align-items: center;
    }
    .task13El {
        margin: 20px 50px;
        display: flex;
        min-height: 60px;
        width: calc(100%/4);
        /* min-width: max-content; */
        background: #FFFFFF;
        border: 1px solid #54BEDF;
        /* height: calc(100%/4); */
        align-items: center;
        justify-content: center;
    }
    .choosenAnswer1 {
        background: rgba(84, 190, 223, 0.8);
    }
    .backimp {
        background-position: unset !important;
    }
    .background5 {
        background: url("../../assets/BackgroundModule58.webp") !important;
        background-size: cover!important;
    }
    .background6 {
        background: url("../../assets/BackgroundModule59.webp") rgba(255, 255, 255, 0.01)  !important;
        background-size: cover!important;
    }
    .background7 {
        background: url("../../assets/BackgroundModule60.webp") rgba(255, 255, 255, 0.01)  !important;
        background-size: cover!important;
    }
    .background8 {
        background: url("../../assets/BackgroundModule61.webp") rgba(255, 255, 255, 0.01) !important;
        background-size: cover!important;
    }
</style>