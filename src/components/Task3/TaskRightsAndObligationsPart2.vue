<template>
    <div class="background d-flex align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="instruction-block">
            <p>Дополни схему, перетащив фразы снизу в соответствующий пустой блок.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100 h-100">
            <div class="background-task">
                <div class="d-flex justify-content-center w-100" style="height: 70%">
                    <div class="top-block ">
                        <div>Права</div>
                        <draggable
                                @add="error(1)"
                                class="list-group list-group-el"
                                :list="this.mainJSON.task3.listOfAnswersRightsAndObligationsPart2_list1"
                                group="listOfAnswersRightsAndObligationsPart2"
                        >
                            <template #item="{ element }">
                                <div>
                                    {{element.value}}
                                </div>
                            </template>
                        </draggable>
                        <draggable
                                @add="error(2)"
                                class="list-group list-group-el"
                                :list="this.mainJSON.task3.listOfAnswersRightsAndObligationsPart2_list2"
                                group="listOfAnswersRightsAndObligationsPart2"
                        >
                            <template #item="{ element }">
                                <div>
                                    {{element.value}}
                                </div>
                            </template>
                        </draggable>
                        <draggable
                                @add="error(3)"
                                class="list-group list-group-el"
                                :list="this.mainJSON.task3.listOfAnswersRightsAndObligationsPart2_list3"
                                group="listOfAnswersRightsAndObligationsPart2"
                        >
                            <template #item="{ element }">
                                <div>
                                    {{element.value}}
                                </div>
                            </template>
                        </draggable>
                    </div>
                    <div class="top-block">
                        <div>Обязанности</div>
                        <draggable
                                @add="error(4)"
                                class="list-group list-group-el"
                                :list="this.mainJSON.task3.listOfAnswersRightsAndObligationsPart2_list4"
                                group="listOfAnswersRightsAndObligationsPart2"
                        >
                            <template #item="{ element }">
                                <div>
                                    {{element.value}}
                                </div>
                            </template>
                        </draggable>
                        <draggable
                                @add="error(5)"
                                class="list-group list-group-el"
                                :list="this.mainJSON.task3.listOfAnswersRightsAndObligationsPart2_list5"
                                group="listOfAnswersRightsAndObligationsPart2"
                        >
                            <template #item="{ element }">
                                <div>
                                    {{element.value}}
                                </div>
                            </template>
                        </draggable>
                        <draggable
                                @add="error(6)"
                                class="list-group list-group-el"
                                :list="this.mainJSON.task3.listOfAnswersRightsAndObligationsPart2_list6"
                                group="listOfAnswersRightsAndObligationsPart2"
                        >
                            <template #item="{ element }">
                                <div>
                                    {{element.value}}
                                </div>
                            </template>
                        </draggable>
                    </div>
                </div>
                <draggable
                        class="list-group d-flex flex-row flex-wrap justify-content-center align-items-center"
                        :list="this.mainJSON.task3.listOfAnswersRightsAndObligationsPart2"
                        group="listOfAnswersRightsAndObligationsPart2" style="height: 50%; width: 80%;"
                >
                    <template #item="{ element }">
                        <div class="list-of-answers">
                            {{element.value}}
                        </div>
                    </template>
                </draggable>
            </div>
        </div>
        <div class="background-text">
        <div class="d-flex">
                <p>
                    {{constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].name}}
                </p>
                <p>
                    {{constTaskVolunteers.screens[this.mainJSON.task3.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.task3.results.ULSE1_Log_SEK4_1 !== 'NA' ||
            mainJSON.task3.results.ULSE1_Log_SEK4_2 !== 'NA' || mainJSON.task3.results.ULSE1_Log_SEK4_3 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskRightsAndObligationsPart2",
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
                if(this.mainJSON.task3["listOfAnswersRightsAndObligationsPart2_list" + id].length > 1){
                    this.mainJSON.task3.listOfAnswersRightsAndObligationsPart2.push(this.mainJSON.task3["listOfAnswersRightsAndObligationsPart2_list" + id][1])
                    this.mainJSON.task3["listOfAnswersRightsAndObligationsPart2_list" + id].splice(1, 1)
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
    .list-of-answers {
        margin: 10px;
        width: 20%;
        background: #d2fff7;
        border-radius: 4px;
        padding: 10px 20px;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .list-group-el {
        margin: 20px;
        width: 80%;
        padding: 20px;
        background: #FFFFFF;
        border: 1px dashed #333333;
        border-radius: 4px;
    }
    .top-block {
        margin: 0 5%;
        background: #EDFFF6;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>