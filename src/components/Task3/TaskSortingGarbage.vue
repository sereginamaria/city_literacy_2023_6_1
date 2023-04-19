<template>
    <div class="background d-flex align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Рассортируй отходы по контейнерам.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="background-task-sorting-garbage">
                <div class="d-flex w-100" style="height: 65%">
                    <div class="position-relative d-flex justify-content-center" style="width: 16%">
                        <img src="../../assets/TaskVolunteersSortingGarbagePlastic.png" alt="" class="little-backpack">
                        <draggable
                                
                                class="list-group list-group-el-sorting-garbage position-relative"
                                :list="this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list1"
                                group="listOfAnswersSocialInstitutions"
                        >
                            <template #item="{ element }">
                                <img :src=" require('../../assets/' + element.src + '.png') "
                                     alt="Avatar" style="z-index: 99; width: 50%; position: absolute"/>
                            </template>
                        </draggable>
                    </div>
                    <div class="position-relative d-flex justify-content-center" style="width: 16%">
                        <img src="../../assets/TaskVolunteersSortingGarbagePaper.png" alt="" class="little-backpack">
                        <draggable
                                
                                class="list-group list-group-el-sorting-garbage position-relative"
                                :list="this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list2"
                                group="listOfAnswersSocialInstitutions"
                        >
                            <template #item="{ element }">
                                <img :src=" require('../../assets/' + element.src + '.png') "
                                     alt="Avatar" style="z-index: 99; width: 50%; position: absolute"/>
                            </template>
                        </draggable>
                    </div>
                    <div class="position-relative d-flex justify-content-center" style="width: 16%">
                        <img src="../../assets/TaskVolunteersSortingGarbageGlass.png" alt="" class="little-backpack">
                        <draggable
                                
                                class="list-group list-group-el-sorting-garbage position-relative"
                                :list="this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list3"
                                group="listOfAnswersSocialInstitutions"
                        >
                            <template #item="{ element }">
                                <img :src=" require('../../assets/' + element.src + '.png') "
                                     alt="Avatar" style="z-index: 99; width: 50%; position: absolute"/>
                            </template>
                        </draggable>
                    </div>
                    <div class="position-relative d-flex justify-content-center" style="width: 16%">
                        <img src="../../assets/TaskVolunteersSortingGarbageMetal.png" alt="" class="little-backpack">
                        <draggable
                                
                                class="list-group list-group-el-sorting-garbage position-relative"
                                :list="this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list4"
                                group="listOfAnswersSocialInstitutions"
                        >
                            <template #item="{ element }">
                                <img :src=" require('../../assets/' + element.src + '.png') "
                                     alt="Avatar" style="z-index: 99; width: 50%; position: absolute"/>
                            </template>
                        </draggable>
                    </div>
                    <div class="position-relative d-flex justify-content-center" style="width: 16%">
                        <img src="../../assets/TaskVolunteersSortingGarbageFoodWaste.png" alt="" class="little-backpack">
                        <draggable
                                
                                class="list-group list-group-el-sorting-garbage position-relative"
                                :list="this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list5"
                                group="listOfAnswersSocialInstitutions"
                        >
                            <template #item="{ element }">
                                <img :src=" require('../../assets/' + element.src + '.png') "
                                     alt="Avatar" style="z-index: 99; width: 50%; position: absolute"/>
                            </template>
                        </draggable>
                    </div>
                    <div class="position-relative d-flex justify-content-center" style="width: 16%">
                        <img src="../../assets/TaskVolunteersSortingGarbageHazardousWaste.png" alt="" class="little-backpack">
                        <draggable
                                
                                class="list-group list-group-el-sorting-garbage position-relative "
                                :list="this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list6"
                                group="listOfAnswersSocialInstitutions"
                        >
                            <template #item="{ element }">
                                <img :src=" require('../../assets/' + element.src + '.png') "
                                     alt="Avatar" style="z-index: 99; width: 50%; position: absolute"/>
                            </template>
                        </draggable>
                    </div>
                </div>
                <draggable
                        class="list-group d-flex justify-content-center align-items-center flex-row"
                        :list="this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage"
                        group="listOfAnswersSocialInstitutions" style="width: 100%; height: 25%"
                >
                    <template #item="{ element }">
                        <img :src=" require('../../assets/' + element.src + '.png')" style="height: 100%" v-if="element.isShown"
                             alt="Avatar"  @mouseover="onHover($event, element.toolTip)" @mouseout="this.toolTipVisible = false"/>
                    </template>
                </draggable>
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
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list1.length !== 0 ||
            mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list2.length !== 0 || mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list3.length !== 0 ||
            mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list4.length !== 0 || mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list5.length !== 0 ||
            mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list6.length !== 0">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

    <MyTooltip :toolTipVisible="toolTipVisible" :toolTipMessage="toolTipMessage" :clientX="clientX" :clientY="clientY"/>

</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskSortingGarbage",
        props: {
            screen: {},
            constTaskVolunteers: {}
        },
        data() {
            return {
                toolTipVisible: false,
                toolTipMessage: '',
                clientX: 0,
                clientY: 0,
                height: 0
            }
        },
        components: {
            draggable
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            onHover(event, message) {
                const { clientX, clientY } = event;
                this.toolTipVisible = true;
                this.clientX = clientX - clientX/15;
                this.clientY = clientY  - clientY/15;
                this.toolTipMessage = message
            },
            addAnswer(el, listID) {
                this.mainJSON.taskVolunteers["ULSE1_Log_SEK4_" + listID] = el.value
                this.mainJSON.taskVolunteers.results["ULSE1_Log_SEK4_" + listID] = el.id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskVolunteers.shownScreenID++
                this.mainJSON.taskVolunteers.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskVolunteers.shownScreenID) {
                        el.isShow = true
                    }
                })

                this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage.forEach(el => {
                    if (el.id === 6){
                        el.isShown = true
                    }
                })

                let answers = 0
                let answersWithMistake = 0
                let listOfAnswers = []
                if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list1.length !== 0){
                    this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list1.forEach(elId => {
                        listOfAnswers.push(elId.id)
                        if (this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list1.length === 1 && elId.id === 1){
                            answers++
                        }
                        if (this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list1.length > 1 && elId.id === 1){
                            answersWithMistake++
                        }
                    })
                    this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_1 = listOfAnswers.join()
                    listOfAnswers = []
                }
                if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list2.length !== 0){
                    this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list2.forEach(elId => {
                        listOfAnswers.push(elId.id)
                        if (this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list2.length === 1 && elId.id === 2){
                            answers++
                        }
                        if (this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list2.length > 1 && elId.id === 2){
                            answersWithMistake++
                        }
                    })
                    this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_2 = listOfAnswers.join()
                    listOfAnswers = []
                }
                if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list3.length !== 0){
                    this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list3.forEach(elId => {
                        listOfAnswers.push(elId.id)
                        if (this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list3.length === 1 && elId.id === 3){
                            answers++
                        }
                        if (this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list3.length > 1 && elId.id === 3){
                            answersWithMistake++
                        }
                    })
                    this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_3 = listOfAnswers.join()
                    listOfAnswers = []
                }
                if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list4.length !== 0){
                    this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list4.forEach(elId => {
                        listOfAnswers.push(elId.id)
                        if (this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list4.length === 1 && elId.id === 4){
                            answers++
                        }
                        if (this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list4.length > 1 && elId.id === 4){
                            answersWithMistake++
                        }
                    })
                    this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_4 = listOfAnswers.join()
                    listOfAnswers = []
                }
                if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list5.length !== 0){
                    this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list5.forEach(elId => {
                        listOfAnswers.push(elId.id)
                        if (this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list5.length === 1 && elId.id === 5){
                            answers++
                        }
                        if (this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list5.length > 1 && elId.id === 5){
                            answersWithMistake++
                        }
                    })
                    this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_5 = listOfAnswers.join()
                    listOfAnswers = []
                }
                if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list6.length !== 0){
                    this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list6.forEach(elId => {
                        listOfAnswers.push(elId.id)
                        if (this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list6.length === 1 && elId.id === 6){
                            answers++
                        }
                        if (this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list6.length > 1 && elId.id === 6){
                            answersWithMistake++
                        }
                    })
                    this.mainJSON.taskVolunteers.results.ULSE1_Log_SES3 = listOfAnswers.join()
                    listOfAnswers = []
                }

                if(answers === 5){
                    this.mainJSON.taskVolunteers.results.ULSE1_Score_SES2 = 2
                }
                else if ((answers + answersWithMistake === 4) || (answers + answersWithMistake === 3)){
                    this.mainJSON.taskVolunteers.results.ULSE1_Score_SES2 = 1
                }
                else this.mainJSON.taskVolunteers.results.ULSE1_Score_SES2 = 0


                this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list1 = []
                this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list2 = []
                this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list3 = []
                this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list4 = []
                this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list5 = []
                this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list6 = []
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
        },
        mounted(){
            this.height = document.getElementById('background-text').offsetHeight + document.getElementById('instruction-block').offsetHeight
        }
    }
</script>

<style scoped>
    .background-task-sorting-garbage {
        padding: 0 3%;
        width: 90%;
        height: 80%;
    }
    .little-backpack {
        position: absolute;
        height: 100%;
    }
    .list-group-el-sorting-garbage {
        width: 80%;
        height: 100%;
    }
</style>