<template>
    <div class="background d-flex align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Ответь на вопрос Макса. Выбери контейнер, куда выбросить батарейку.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="background-task-sorting-garbage">
                <div class="d-flex w-100" style="height: 65%">
                    <div class="position-relative d-flex justify-content-center" style="width: 16%">
                        <img src="../../assets/TaskVolunteersSortingGarbagePlastic.png" alt="" class="little-backpack">
                        <draggable
                                @add="this.nextTask = true"
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
                                @add="this.nextTask = true"
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
                                @add="this.nextTask = true"
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
                                @add="this.nextTask = true"
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
                                @add="this.nextTask = true"
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
                                @add="this.nextTask = true"
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
                        <img :src=" require('../../assets/' + element.src + '.png')" style="height: 100%"
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
            mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list4.length !== 0  ||
            mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list5.length !== 0 ||
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
        name: "TaskSortingGarbageBattery",
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
                height: 0,
                nextTask: false,
                listOfAnswersSortingGarbage: [
                    {
                        "src": "TaskVolunteersSortingGarbageBattery",
                        "id": 6,
                        "style": "width: calc(100%/4); position: absolute; bottom: calc(100%/30); left: calc(100%/1.34)",
                        "toolTip": "Батарейка"
                    }
                ]
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

                if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list1.length !== 0){
                    if( this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_1 !== "NA"){
                        this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_1 =  this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_1.toString() +
                            this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list1[0].id.toString()
                    }
                    else this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_1 = this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list1[0].id

                    if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list1[0].id === 6){
                        this.mainJSON.taskVolunteers.results.ULSE1_Score_SES3 = 0
                    }
                }
                if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list2.length !== 0){
                    if( this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_2 !== "NA"){
                        this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_2 =  this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_2.toString() +
                            this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list2[0].id.toString()
                    }
                    else this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_2 = this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list2[0].id

                    if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list2[0].id === 6){
                        this.mainJSON.taskVolunteers.results.ULSE1_Score_SES3 = 0
                    }
                }
                if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list3.length !== 0){
                    if( this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_3 !== "NA"){
                        this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_3 =  this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_3.toString() +
                            this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list3[0].id.toString()
                    }
                    else this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_3 = this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list3[0].id

                    if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list3[0].id === 6){
                        this.mainJSON.taskVolunteers.results.ULSE1_Score_SES3 = 0
                    }
                }
                if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list4.length !== 0){
                    if( this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_4 !== "NA"){
                        this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_4 =  this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_4.toString() +
                            this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list4[0].id.toString()
                    }
                    else this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_4 = this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list4[0].id

                    if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list4[0].id === 6){
                        this.mainJSON.taskVolunteers.results.ULSE1_Score_SES3 = 0
                    }
                }

                if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list5.length !== 0){
                    if( this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_5 !== "NA"){
                        this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_5 =  this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_5.toString() +
                            this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list5[0].id.toString()
                    }
                    else this.mainJSON.taskVolunteers.results.ULSE1_Log_SES2_5 = this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list5[0].id

                    if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list5[0].id === 6){
                        this.mainJSON.taskVolunteers.results.ULSE1_Score_SES3 = 0
                    }
                }

                if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list6.length !== 0){
                    if( this.mainJSON.taskVolunteers.results.ULSE1_Log_SES3 !== "NA"){
                        this.mainJSON.taskVolunteers.results.ULSE1_Log_SES3 =  this.mainJSON.taskVolunteers.results.ULSE1_Log_SES3.toString() +
                            this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list6[0].id.toString()
                    }
                    else this.mainJSON.taskVolunteers.results.ULSE1_Log_SES3 = this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list6[0].id

                    if(this.mainJSON.taskVolunteers.listOfAnswersSortingGarbage_list6[0].id === 6){
                        this.mainJSON.taskVolunteers.results.ULSE1_Score_SES3 = 1
                    }
                    else this.mainJSON.taskVolunteers.results.ULSE1_Score_SES3 = 0
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