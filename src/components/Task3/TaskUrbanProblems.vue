<template>
    <div class="background d-flex align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="instruction-block">
            <p>Сопоставь в презентации проявления проблем с их последствиями. Перетащи фразы внизу в нужные ячейки на схеме.
            </p>
        </div>
        <div class="d-flex justify-content-center w-100 h-100">
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
                                        :list="this.mainJSON.task3.listOfAnswersUrbanProblems_list1"
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
                                        :list="this.mainJSON.task3.listOfAnswersUrbanProblems_list2"
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
                                        :list="this.mainJSON.task3.listOfAnswersUrbanProblems_list3"
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
                            :list="this.mainJSON.task3.listOfAnswersUrbanProblems"
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
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.task3.listOfAnswersUrbanProblems_list1.length !== 0 ||
            mainJSON.task3.listOfAnswersUrbanProblems_list2.length !== 0 || mainJSON.task3.listOfAnswersUrbanProblems_list3.length !== 0">Готово</MyButton>
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
        components: {
            draggable
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            error(id) {
                if(this.mainJSON.task3["listOfAnswersUrbanProblems_list" + id].length > 1){
                    this.mainJSON.task3.listOfAnswersUrbanProblems.push(this.mainJSON.task3["listOfAnswersUrbanProblems_list" + id][1])
                    this.mainJSON.task3["listOfAnswersUrbanProblems_list" + id].splice(1, 1)
                }
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.task3.shownScreenID++
                this.mainJSON.task3.screens.forEach(el => {
                    if (el.id === this.mainJSON.task3.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.task3.listOfAnswersUrbanProblems_list1.length !== 0) {
                    this.mainJSON.task3.results.ULSE1_Log1_SEK1_1 = this.mainJSON.task3.listOfAnswersUrbanProblems_list1[0].id
                }
                if(this.mainJSON.task3.listOfAnswersUrbanProblems_list2.length !== 0) {
                    this.mainJSON.task3.results.ULSE1_Log2_SEK1_1 = this.mainJSON.task3.listOfAnswersUrbanProblems_list2[0].id
                }
                if(this.mainJSON.task3.listOfAnswersUrbanProblems_list3.length !== 0) {
                    this.mainJSON.task3.results.ULSE1_Log3_SEK1_1 = this.mainJSON.task3.listOfAnswersUrbanProblems_list3[0].id
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
    .list-group-el {
        margin: 0;
        width: unset;
    }
    .list-of-answers {
        background: #FAFEFF;
        border: 1px dashed #333333;
    }
</style>