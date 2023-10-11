<template>
    <!--Задание 9 задание-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block">
            <p>Проверь эту карту. Выбери ДВА объекта, которых на самом деле НЕТ в Москве. Ты можешь вернуть объект на карту, кликнув на него еще раз.
            </p>
        </div>
        <div>
            <div v-for="el in mainJSON.taskNightInTheMuseum.listOfElementsTask9" :key="el.id">
                <img :src=" require('../../assets/' + el.src) " :class="{choose: el.choose}" @click="addAnswer(el)"
                     alt="Avatar" :style="el.style"/>
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
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK3_1 !== 'NA'">Готово</MyButton>
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
        name: "TaskMap",
        props: {
            screen: {},
            constTaskNightInTheMuseum: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: ''
            }
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            showModal() {
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            addAnswer(el){
                if (el.choose !== null) {
                    el.choose = !el.choose
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK3_1 = this.mainJSON.taskNightInTheMuseum.listOfAnswersTask9.join()
                }
            },
            checkAnswer(status) {
                this.modalVisible = false

                if (status) {
                    this.mainJSON.taskNightInTheMuseum.listOfElementsTask9.forEach( el => {
                        if(el.choose === true){
                            this.mainJSON.taskNightInTheMuseum.listOfAnswersTask9.push(el.name)
                        }
                    })
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK3_1 = this.mainJSON.taskNightInTheMuseum.listOfAnswersTask9.join()

                    screen.isShow = false
                    this.mainJSON.taskNightInTheMuseum.shownScreenID++
                    this.mainJSON.taskNightInTheMuseum.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskNightInTheMuseum.shownScreenID) {
                            el.isShow = true
                        }
                    })
                }

                let maxScore = 0
                this.mainJSON.taskNightInTheMuseum.listOfAnswersTask9.forEach( el => {
                    if(el === "Река Ока" || el === "Парк Таганай"){
                        maxScore++
                    }
                })
                if(this.mainJSON.taskNightInTheMuseum.listOfAnswersTask9.length === 2 && maxScore === 2){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK3_1 = 2
                }
                else if(this.mainJSON.taskNightInTheMuseum.listOfAnswersTask9.length === 2 && maxScore === 1){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK3_1 = 1
                }
                else{
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK3_1 = 0
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
    .choose {
        opacity: 0.5;
    }
</style>