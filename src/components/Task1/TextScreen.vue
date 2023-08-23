<template>
    <div class="background"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}"
    >
        <div v-if="screen.id === 6 || screen.id === 9 || screen.id === 27 || screen.id === 29 || screen.id === 36 || screen.id === 44">
            <div class="background-text-center">
                <p>
                    <span class="name-in-dialog">{{constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name}}</span>
                    {{constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].text}}
                </p>
            </div>
            <div class="background-text" style="background: none; justify-content: end;">
                <MyButton class="white-buttons" @click="nextTask(screen)" style="height: 40px">Далее</MyButton>
            </div>
        </div>

        <div class="background-text" v-else>
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
            constTaskNightInTheMuseum: {}
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: '',
                listOfNotDoneTasks: [],
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
                    this.mainJSON.listOfTasks.forEach( el => {
                        if(el.name === 'taskNightInTheMuseum'){
                            el.done = true
                            let t = new Date()
                            this.mainJSON.results.dataTimeLastUpdate = this.mainJSON.results.dataTimeEndtaskNightInTheMuseum =
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
                        if(el.done === false){
                            this.listOfNotDoneTasks.push(el.name)
                        }
                    })

                    if(this.listOfNotDoneTasks.length === 0){
                        let t = new Date()
                        this.mainJSON.results.dataTimeLastUpdate = this.mainJSON.results.dataTimeEnd =
                            [
                                t.getFullYear(),
                                ('0' + (t.getMonth() + 1)).slice(-2),
                                ('0' + t.getDate()).slice(-2)
                            ].join('-') + ' ' + [
                                ('0' + (t.getHours())).slice(-2),
                                ('0' + (t.getMinutes())).slice(-2),
                                ('0' + t.getSeconds()).slice(-2)
                            ].join(':');
                        this.mainJSON.forms['isShow'] = true
                        this.mainJSON["instructionShow"] = true
                        this.mainJSON["mainPageShow"] = false
                        this.mainJSON.taskNightInTheMuseum["isShow"] = false
                    }
                    else {
                        let randomElement = this.listOfNotDoneTasks[Math.floor(Math.random()*this.listOfNotDoneTasks.length)]
                        this.mainJSON[randomElement].isShow = true
                        this.mainJSON["instructionShow"] = true
                        this.mainJSON["mainPageShow"] = false
                        this.listOfNotDoneTasks = []
                        this.mainJSON.taskNightInTheMuseum["isShow"] = false
                    }
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
                if(screen.id === 51){
                    this.modalVisible = true
                    this.modalButtons = [
                        {value: "Хорошо", status: true}
                    ]
                    this.modalMessage = 'Молодец! Переходи к следующему заданию!'
                }
                else {
                    screen.isShow = false
                    if(screen.id === 23 || screen.id === 25){
                        this.mainJSON.taskNightInTheMuseum.shownScreenID = 27
                    }
                    if(screen.id === 31){
                        this.mainJSON.taskNightInTheMuseum.shownScreenID = 33
                    }
                    if(screen.id !== 23 && screen.id !== 25 && screen.id !== 31) {
                        this.mainJSON.taskNightInTheMuseum.shownScreenID++
                    }

                    this.mainJSON.taskNightInTheMuseum.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskNightInTheMuseum.shownScreenID) {
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