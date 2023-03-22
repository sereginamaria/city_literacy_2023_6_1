<template>
    <div class="background d-flex align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Заполни пропуски, выбирая слова, которые больше всего подходят.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="background-task h-50" style="width: 70%">
                <p style="font-size: 20px">Волонтёр — это человек, который
                    <MySelect :list="constTaskVolunteers.listOfAnswersTaskWhoIsAVolunteer1" :listID="1" @answer="addAnswer"
                              :selected="this.mainJSON.taskVolunteers.ULSE1_Log_SEK4_1" style="font-size: 20px"></MySelect>
                    осуществляет
                    <MySelect :list="constTaskVolunteers.listOfAnswersTaskWhoIsAVolunteer2" :listID="2" @answer="addAnswer"
                              :selected="this.mainJSON.taskVolunteers.ULSE1_Log_SEK4_2" style="font-size: 20px"></MySelect>
                    общественно полезную деятельность
                    <MySelect :list="constTaskVolunteers.listOfAnswersTaskWhoIsAVolunteer3" :listID="3" @answer="addAnswer"
                              :selected="this.mainJSON.taskVolunteers.ULSE1_Log_SEK4_3" style="font-size: 20px"></MySelect>.
                </p>
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
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.taskVolunteers.results.ULSE1_Log_SEK4_1 !== 'NA' ||
            mainJSON.taskVolunteers.results.ULSE1_Log_SEK4_2 !== 'NA' || mainJSON.taskVolunteers.results.ULSE1_Log_SEK4_3 !== 'NA'">Готово</MyButton>
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
        name: "TaskWhoIsAVolunteer",
        props: {
            screen: {},
            constTaskVolunteers: {}
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: '',
                height: 0
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            showModal(){
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            addAnswer(el, listID) {
                this.mainJSON.taskVolunteers["ULSE1_Log_SEK4_" + listID] = el
                this.mainJSON.taskVolunteers.results["ULSE1_Log_SEK4_" + listID] = el
            },
            checkAnswer(status) {
                this.modalVisible = false

                if(status) {
                    screen.isShow = false
                    this.mainJSON.taskVolunteers.shownScreenID++
                    this.mainJSON.taskVolunteers.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskVolunteers.shownScreenID) {
                            el.isShow = true
                        }
                    })
                    if(this.mainJSON.taskVolunteers.results.ULSE1_Log_SEK4_1 === 'в свободное от работы или учёбы время' &&
                        this.mainJSON.taskVolunteers.results.ULSE1_Log_SEK4_2 === 'добровольную' &&
                        this.mainJSON.taskVolunteers.results.ULSE1_Log_SEK4_3 === 'без денежного вознаграждения') {
                        this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK4_1 = 1
                    }
                    else this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK4_1 = 0
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
        },
        mounted(){
            this.height = document.getElementById('background-text').offsetHeight + document.getElementById('instruction-block').offsetHeight
        }
    }
</script>

<style scoped>
    .background-task-who-is-a-volunteer {
        padding: 0 5%;
        background: #fff;
        border: 1px solid #54bedf;
        width: 50%;
        height: 50%;
    }
</style>