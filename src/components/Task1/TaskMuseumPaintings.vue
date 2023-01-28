<template>
    <!--Задание 5 пункт 1-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}"
         v-if="mainJSON.task1.screens[this.mainJSON.task1.shownScreenID].id === 20">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersTask5Point1" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCK2_2}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(1, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                Вопрос: Какое современное правило дорожного движения нарушается на картине? Выбери один ответ.
            </p>
            <MyButton class="white-buttons" @click="nextTask(screen)" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK2_2 !== 'NA'">Далее</MyButton>
            <MyButton class="white-buttons" disabled v-else>Далее</MyButton>
        </div>
    </div>
    <!--Задание 5 пункт 2-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}"
         v-if="mainJSON.task1.screens[this.mainJSON.task1.shownScreenID].id === 21">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersTask5Point2" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCK2_3}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(2, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                Вопрос: Какое современное правило дорожного движения нарушается на картине? Выбери один ответ.
            </p>
            <MyButton class="white-buttons" @click="nextTask(screen)" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK2_3 !== 'NA'">Далее</MyButton>
            <MyButton class="white-buttons" disabled v-else>Далее</MyButton>
        </div>
    </div>
    <!--Задание 5 пункт 3-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}"
         v-if="mainJSON.task1.screens[this.mainJSON.task1.shownScreenID].id === 22">
        <div class="background-answers">
            <div v-for="el in mainJSON.task1.listOfAnswersTask5Point3" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.task1.results.ULSCLL1_Log_SCK2_4}"
                 style="padding: 10px 20px"
            >
                <div @click="chooseAnswer(3, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <p>
                Вопрос: Какое современное правило дорожного движения нарушается на картине? Выбери один ответ.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK2_4 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

    <MyModal v-model:show="modalVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskMuseumPaintings",
        props: {
            screen: {},
            constTaskNightInTheMuseum: {}
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: ''
            }
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
            showModal(){
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            chooseAnswer(id, el){
                id++
                this.mainJSON.task1.results["ULSCLL1_Log_SCK2_" + id] = el.id
            },
            checkAnswer(status){
                this.modalVisible = false

                if(status) {
                    screen.isShow = false
                    this.mainJSON.task1.shownScreenID++
                    this.mainJSON.task1.screens.forEach(el => {
                        if (el.id === this.mainJSON.task1.shownScreenID) {
                            el.isShow = true
                        }
                    })
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