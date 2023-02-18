<template>
    <div class="background"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}"
    >
        <div class="background-text">
            <div class="d-flex">
                <div class="me-2">
                    <img src="../../assets/TaskVolunteersAvatarAnn.png" alt="" style="width: 50px"
                         v-if="constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].name === 'Анна Ивановна: ' ||
                         constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].name === 'Руководитель школьного клуба волонтеров Анна Ивановна: '">
                    <img src="../../assets/TaskVolunteersAvatarMax.png" alt="" style="width: 50px"
                         v-if="constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].name === 'Макс: ' ||
                         constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].name === 'Гость: '">
                    <img src="../../assets/TaskVolunteersAvatarSchoolgirl.png" alt="" style="width: 50px"
                         v-if="constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].name === 'Школьница: '">
                    <img src="../../assets/TaskVolunteersAvatarSchoolboy.png" alt="" style="width: 50px"
                         v-if="constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].name === 'Школьник: '">
                </div>
                <p>
                    <span class="name-in-dialog">{{constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].name}}</span>
                    {{constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="nextTask(screen)" style="height: 40px">Далее</MyButton>
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
        name: "TextScreen",
        props: {
            screen: {},
            constTaskVolunteers: {}
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
            checkAnswer(status) {
                this.modalVisible = false

                if (status) {
                    screen.isShow = false

                    this.mainJSON.task3['isShow'] = false
                    this.mainJSON.task4['isShow'] = true
                    this.mainJSON['instructionShow'] = true
                    this.mainJSON['mainPageShow'] = false
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
            nextTask(screen){
                if(screen.id === 65){
                    this.modalVisible = true
                    this.modalButtons = [
                        {value: "Хорошо", status: true}
                    ]
                    this.modalMessage = 'Молодец! Переходи к следующему заданию!'
                }
                else {
                    screen.isShow = false
                    this.mainJSON.task3.shownScreenID++
                    this.mainJSON.task3.screens.forEach(el => {
                        if (el.id === this.mainJSON.task3.shownScreenID) {
                            el.isShow = true
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
</style>