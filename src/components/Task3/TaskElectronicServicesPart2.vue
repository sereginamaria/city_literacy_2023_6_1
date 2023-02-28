<template>
    <div class="background d-flex align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="instruction-block">
            <p>Перед тобой карта важных проблем нашего города. Кликнув на объект на карте, ты увидишь описание проблемы. Укажи, можно ли решить эту проблему, отправив заявку в электронный сервис?
            </p>
        </div>
        <div class="d-flex justify-content-center w-100 h-100">
            <div class="background-task-ElectronicServices2">
                <img src="../../assets/TaskVolunteersElectronicServicesMap.png" alt="">
                <img src="../../assets/TaskVolunteersElectronicServicesIconNoise.png" alt="" @click="openModalDialog('Noise')" style="width: 12%;
    position: absolute;
    top: 52%;
    left: 18%;">
                <img src="../../assets/TaskVolunteersElectronicServicesIconHomelessPerson.png" alt="" @click="openModalDialog('HomelessPerson')" style="    width: 12%;
    position: absolute;
    top: 42%;
    left: 33%;">
                <img src="../../assets/TaskVolunteersElectronicServicesIconPollution.png" alt="" @click="openModalDialog('Pollution')" style="width: 12%;
    position: absolute;
    top: 70%;
    left: 55%;">
                <img src="../../assets/TaskVolunteersElectronicServicesIconCat.png" alt="" @click="openModalDialog('Cat')" style="    width: 12%;
    position: absolute;
    top: 5%;
    left: 70%;">
            </div>
        </div>


        <div class="background-text">
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
            <MyButton class="white-buttons" @click="checkAnswer" v-if="this.answerHomelessPerson !== null || this.answerCat !== null ||
                      this.answerPollution !== null || this.answerNoise !== null">
                Готово
            </MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

    <div v-if="this.showModalDialog" class="dialog">
        <div class="dialog-content">
            <div class="mb-3">
                <img :src=" require('../../assets/' + this.imgSrc + '.png') " alt="" style="width: 100%">
                <div>
                    {{this.message}}
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <MyButton v-for="button in this.modalButtons" :key="button.value" @click="addAnswer(this.type, button.status)" style="width: 45%"
                          class="me-3 blue-buttons" :class="{yesButtonTrue: this.yesButtonTrue && button.status, noButtonTrue: this.noButtonTrue && !button.status}"
                >
                    {{button.value}}
                </MyButton>
            </div>

        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskElectronicServicesPart2",
        data() {
            return {
                type: '',
                showModalDialog: false,
                modalButtons: [],
                imgSrc: '',
                message: '',
                yesButtonTrue: false,
                noButtonTrue: false,
                answers: {
                    answerHomelessPerson: null,
                    answerCat: null,
                    answerPollution: null,
                    answerNoise: null,
                }
            }
        },
        props: {
            screen: {},
            constTaskVolunteers: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            openModalDialog(type){
                this.yesButtonTrue = false
                this.noButtonTrue = false
                this.type = type
                this.showModalDialog = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                if (type === 'Noise'){
                    this.imgSrc = 'TaskVolunteersElectronicServicesIconModalNoise'
                    this.message = 'В 7 вечера, когда я делаю домашнюю работу, мой сосед слушает музыку и мешает'
                    for(const [key, value] of Object.entries(this.answers)){
                        if(key === 'answerNoise' && value === true){
                            this.yesButtonTrue = true
                            this.noButtonTrue = false
                        }
                        if(key === 'answerNoise' && value === false){
                            this.yesButtonTrue = false
                            this.noButtonTrue = true
                        }
                    }
                }
                if (type === 'HomelessPerson'){
                    this.imgSrc = 'TaskVolunteersElectronicServicesIconModalHomelessPerson'
                    this.message = 'В городских парках и у метро живут бездомные люди'
                    for(const [key, value] of Object.entries(this.answers)){
                        if(key === 'answerHomelessPerson' && value === true){
                            this.yesButtonTrue = true
                            this.noButtonTrue = false
                        }
                        if(key === 'answerHomelessPerson' && value === false){
                            this.yesButtonTrue = false
                            this.noButtonTrue = true
                        }
                    }
                }
                if (type === 'Pollution'){
                    this.imgSrc = 'TaskVolunteersElectronicServicesIconModalPollution'
                    this.message = 'В водоем на окраине города регулярно выливают какую-то жидкость из цистерн'
                    for(const [key, value] of Object.entries(this.answers)){
                        if(key === 'answerPollution' && value === true){
                            this.yesButtonTrue = true
                            this.noButtonTrue = false
                        }
                        if(key === 'answerPollution' && value === false){
                            this.yesButtonTrue = false
                            this.noButtonTrue = true
                        }
                    }
                }
                if (type === 'Cat'){
                    this.imgSrc = 'TaskVolunteersElectronicServicesIconModalCat'
                    this.message = 'Во дворе сидит и мяукает потерявшийся котенок с ошейником'
                    for(const [key, value] of Object.entries(this.answers)){
                        if(key === 'answerCat' && value === true){
                            this.yesButtonTrue = true
                            this.noButtonTrue = false
                        }
                        if(key === 'answerCat' && value === false){
                            this.yesButtonTrue = false
                            this.noButtonTrue = true
                        }
                    }
                }
            },
            addAnswer(type, status) {
                if(type === 'HomelessPerson'){
                    this.answers.answerHomelessPerson = status
                }
                if(type === 'Cat'){
                    this.answers.answerCat = status
                }
                if(type === 'Pollution'){
                    this.answers.answerPollution = status
                }
                if(type === 'Noise'){
                    this.answers.answerNoise = status
                }
                this.showModalDialog = false
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskVolunteers.shownScreenID++
                this.mainJSON.taskVolunteers.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskVolunteers.shownScreenID) {
                        el.isShow = true
                    }
                })

                let ans = []
                if(this.answerHomelessPerson){
                    ans.push(1)
                } else ans.push(2)
                if(this.answerCat){
                    ans.push(3)
                } else ans.push(4)
                if(this.answerPollution){
                    ans.push(5)
                } else ans.push(6)
                if(this.answerNoise){
                    ans.push(7)
                } else ans.push(8)

                this.mainJSON.taskVolunteers.results.ULSE1_Log_SEK6_1 = ans.join()

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
    .yesButtonTrue {
        background: green;
        border-color: green;
    }
    .noButtonTrue {
        background: green;
        border-color: green;
    }
    .background-task-ElectronicServices2 {
        width: 83.33333%;
        height: 83.33333%;
        display: flex;
        justify-content: center;
        position: relative;
    }
</style>