<template>
    <div class="background d-flex align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Заполни таблицу, выбрав, что верно, а что не верно.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="background-task-card-about-volunteering">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Эта информация верна?</th>
                        <th scope="col">Да</th>
                        <th scope="col">Нет</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Волонтер помогает изменить к лучшему жизнь в своем городе.</td>
                        <td> <input class="form-check-input mt-0" type="radio" name="task-card-about-volunteering-1" @click="addAnswer(1)"></td>
                        <td> <input class="form-check-input mt-0" type="radio" name="task-card-about-volunteering-1" @click="addAnswer(2)"></td>
                    </tr>
                    <tr>
                        <td>Стать волонтером в возрасте до 14 лет можно без разрешения родителей.</td>
                        <td> <input class="form-check-input mt-0" type="radio" name="task-card-about-volunteering-2" @click="addAnswer(3)"></td>
                        <td> <input class="form-check-input mt-0" type="radio" name="task-card-about-volunteering-2" @click="addAnswer(4)"></td>
                    </tr>
                    <tr>
                        <td>Личная книжка волонтера — это документ, в котором фиксируются достижения волонтера в общественной жизни города.</td>
                        <td> <input class="form-check-input mt-0" type="radio" name="task-card-about-volunteering-3" @click="addAnswer(5)"></td>
                        <td> <input class="form-check-input mt-0" type="radio" name="task-card-about-volunteering-3" @click="addAnswer(6)"></td>
                    </tr>
                    </tbody>
                </table>

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
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.taskVolunteers.results.ULSE1_Log_SEK4_4 !== 'NA'">Готово</MyButton>
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
        name: "TaskCardAboutVolunteering",
        props: {
            screen: {},
            constTaskVolunteers: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: '',
                list1: [],
                list2: [],
                list3: [],
                rightAnswers: 0,
                height: 0
            }
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
            addAnswer(id) {
                if(id === 1 || id === 2){
                    this.list1 = []
                    this.list1.push(id)
                }
                if(id === 3 || id === 4){
                    this.list2 = []
                    this.list2.push(id)
                }
                if(id === 5 || id === 6){
                    this.list3 = []
                    this.list3.push(id)
                }
                if(id === 1 || id === 4 || id === 5){
                    this.rightAnswers++
                }
                let answer = this.list1.concat(this.list2).concat(this.list3)
                this.mainJSON.taskVolunteers.results.ULSE1_Log_SEK4_4 = answer.join()
                if(this.rightAnswers === 3) {
                    this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK4_2 = 1
                }
                else this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK4_2 = 0
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
    .background-task-card-about-volunteering {
        width: 40%;
        position: absolute;
        top: 20%;
        left: 28%;
    }

    .table td, th {
        border: 1px solid #54BEDF;
        padding: 20px 40px;
    }
</style>