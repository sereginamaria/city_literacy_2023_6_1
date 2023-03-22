<template>
    <div class="background d-flex align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Сопоставь в презентации проявления проблем с их последствиями. Перетащи фразы внизу в нужные ячейки на схеме.
            </p>
        </div>
        <div class="d-flex justify-content-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="background-task" style="border: unset">
                <p style="font-size: 24px;color: #EE5959;font-weight: bold;">Городские проблемы и их последствия</p>
                <div style="border: 2px solid #54BEDF">
                    <table class="table">
                        <thead>
                            <tr style="background: #EDFFF6;">
                                <th scope="col" class="w-50">Проблемы</th>
                                <th scope="col" class="w-50">Последствия</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Загрязнение источников питьевой воды</td>
                            <td>
                                <draggable
                                        @add="error(1)"
                                        class="list-group list-group-el"
                                        :list="this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list1"
                                        group="listOfAnswersUrbanProblems"
                                >
                                    <template #item="{ element }">
                                        <div>
                                            {{element.value}}
                                        </div>
                                    </template>
                                </draggable>
                            </td>
                        </tr>
                        <tr style="background: #EDFFF6;">
                            <td>Снос исторических зданий</td>
                            <td>
                                <draggable
                                        @add="error(2)"
                                        class="list-group list-group-el"
                                        :list="this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list2"
                                        group="listOfAnswersUrbanProblems"
                                >
                                    <template #item="{ element }">
                                        <div>
                                            {{element.value}}
                                        </div>
                                    </template>
                                </draggable>
                            </td>
                        </tr>
                        <tr>
                            <td>Рост площадей мусорных полигонов</td>
                            <td>
                                <draggable
                                        @add="error(3)"
                                        class="list-group list-group-el"
                                        :list="this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list3"
                                        group="listOfAnswersUrbanProblems"
                                >
                                    <template #item="{ element }">
                                        <div>
                                            {{element.value}}
                                        </div>
                                    </template>
                                </draggable>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <draggable
                            class="list-group d-flex flex-row flex-wrap justify-content-center align-items-center"
                            :list="this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems"
                            group="listOfAnswersUrbanProblems" style="background: #EDFFF6;"
                    >
                        <template #item="{ element }">
                            <div class="list-of-answers" style="width: unset">
                                {{element.value}}
                            </div>
                        </template>
                    </draggable>
                </div>

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
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list1.length !== 0 ||
            mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list2.length !== 0 || mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list3.length !== 0">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskUrbanProblems",
        props: {
            screen: {},
            constTaskVolunteers: {}
        },
        data() {
            return {
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
            error(id) {
                if(this.mainJSON.taskVolunteers["listOfAnswersUrbanProblems_list" + id].length > 1){
                    this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems.push(this.mainJSON.taskVolunteers["listOfAnswersUrbanProblems_list" + id][1])
                    this.mainJSON.taskVolunteers["listOfAnswersUrbanProblems_list" + id].splice(1, 1)
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

                if(this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list1.length !== 0) {
                    this.mainJSON.taskVolunteers.results.ULSE1_Log1_SEK1_1 = this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list1[0].id
                    if(this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list1[0].id === 4){
                        this.mainJSON.taskVolunteers.results.ULSE1_Score1_SEK1_1 = 1
                    }
                    else this.mainJSON.taskVolunteers.results.ULSE1_Score1_SEK1_1 = 0
                }
                if(this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list2.length !== 0) {
                    this.mainJSON.taskVolunteers.results.ULSE1_Log2_SEK1_1 = this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list2[0].id
                    if(this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list2[0].id === 6){
                        this.mainJSON.taskVolunteers.results.ULSE1_Score2_SEK1_1 = 1
                    }
                    else this.mainJSON.taskVolunteers.results.ULSE1_Score2_SEK1_1 = 0
                }
                if(this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list3.length !== 0) {
                    this.mainJSON.taskVolunteers.results.ULSE1_Log3_SEK1_1 = this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list3[0].id

                    if(this.mainJSON.taskVolunteers.listOfAnswersUrbanProblems_list3[0].id === 2){
                        this.mainJSON.taskVolunteers.results.ULSE1_Score3_SEK1_1 = 1
                    }
                    else this.mainJSON.taskVolunteers.results.ULSE1_Score3_SEK1_1 = 0
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
    .list-group-el {
        margin: 0;
        width: unset;
    }
    .list-of-answers {
        background: #FAFEFF;
        border: 1px dashed #333333;
    }
</style>