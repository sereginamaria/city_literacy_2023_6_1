<template>
    <div class="background d-flex align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="instruction-block">
            <p>Соотнеси социальные институты и то, какой вклад они вносят в заботу о природе.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100 h-100">
            <div class="background-task flex-row">
                <div class="d-flex justify-content-center flex-column" style="width: 45%; background: #EDFFF6;">
                    <div class="d-flex">
                        <div style="width: 20%" class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/TaskVolunteersSocialInstitutions1.png" alt="" style="width: 100%">
                        </div>
                        <div style="width: 80%" class="d-flex flex-column align-items-center justify-content-center">
                            <div>Волонтёрство</div>
                            <draggable
                                    @add="error(1)"
                                    class="list-group list-group-el"
                                    :list="this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list1"
                                    group="listOfAnswersSocialInstitutions"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div style="width: 20%" class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/TaskVolunteersSocialInstitutions2.png" alt="" style="width: 100%">
                        </div>
                        <div style="width: 80%" class="d-flex flex-column align-items-center justify-content-center">
                            <div>Правительство</div>
                            <draggable
                                    @add="error(2)"
                                    class="list-group list-group-el"
                                    :list="this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list2"
                                    group="listOfAnswersSocialInstitutions"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div style="width: 20%" class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/TaskVolunteersSocialInstitutions3.png" alt="" style="width: 100%">
                        </div>
                        <div style="width: 80%" class="d-flex flex-column align-items-center justify-content-center">
                            <div>Семья</div>
                            <draggable
                                    @add="error(3)"
                                    class="list-group list-group-el"
                                    :list="this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list3"
                                    group="listOfAnswersSocialInstitutions"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div style="width: 20%" class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/TaskVolunteersSocialInstitutions4.png" alt="" style="width: 100%">
                        </div>
                        <div style="width: 80%" class="d-flex flex-column align-items-center justify-content-center">
                            <div>Наука</div>
                            <draggable
                                    @add="error(4)"
                                    class="list-group list-group-el"
                                    :list="this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list4"
                                    group="listOfAnswersSocialInstitutions"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                </div>

                <draggable
                        class="list-group d-flex flex-column justify-content-center align-items-center"
                        :list="this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions"
                        group="listOfAnswersSocialInstitutions" style="width: 45%"
                >
                    <template #item="{ element }">
                        <div class="list-of-answers" style="width: unset">
                            {{element.value}}
                        </div>
                    </template>
                </draggable>
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
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list1.length !== 0 ||
            mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list2.length !== 0 || mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list3.length !== 0 ||
            mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list4.length">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskSocialInstitutions",
        props: {
            screen: {},
            constTaskVolunteers: {}
        },
        components: {
            draggable
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            error(id) {
                if(this.mainJSON.taskVolunteers["listOfAnswersSocialInstitutions_list" + id].length > 1){
                    this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions.push(this.mainJSON.taskVolunteers["listOfAnswersSocialInstitutions_list" + id][1])
                    this.mainJSON.taskVolunteers["listOfAnswersSocialInstitutions_list" + id].splice(1, 1)
                }
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskVolunteers.shownScreenID++
                this.mainJSON.taskVolunteers.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskVolunteers.shownScreenID) {
                        el.isShow = true
                    }
                })
                let results = 0
                if(this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list1.length !== 0){
                    this.mainJSON.taskVolunteers.results.ULSE1_Log1_SEK2_1 = this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list1[0].id
                    if(this.mainJSON.taskVolunteers.results.ULSE1_Log1_SEK2_1 === 1){
                        results++
                    }
                }
                if(this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list2.length !== 0){
                    this.mainJSON.taskVolunteers.results.ULSE1_Log2_SEK2_1 = this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list2[0].id
                    if(this.mainJSON.taskVolunteers.results.ULSE1_Log2_SEK2_1 === 2){
                        results++
                    }
                }
                if(this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list3.length !== 0){
                    this.mainJSON.taskVolunteers.results.ULSE1_Log3_SEK2_1 = this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list3[0].id
                    if(this.mainJSON.taskVolunteers.results.ULSE1_Log3_SEK2_1 === 4){
                        results++
                    }
                }
                if(this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list4.length !== 0){
                    this.mainJSON.taskVolunteers.results.ULSE1_Log4_SEK2_1 = this.mainJSON.taskVolunteers.listOfAnswersSocialInstitutions_list4[0].id
                    if(this.mainJSON.taskVolunteers.results.ULSE1_Log4_SEK2_1 === 3){
                        results++
                    }
                }

                if(results === 4){
                    this.mainJSON.taskVolunteers.results.ULSE1_Score1_SEK2_1 = 2
                }
                else if(results === 2){
                    this.mainJSON.taskVolunteers.results.ULSE1_Score1_SEK2_1 = 1
                }
                else this.mainJSON.taskVolunteers.results.ULSE1_Score1_SEK2_1 = 0

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