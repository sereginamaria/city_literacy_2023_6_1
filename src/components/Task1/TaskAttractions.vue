<template>
    <!--Задание 10 задание-->
    <div class="background d-flex justify-content-center align-items-center" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="background-task">
            <div class="d-flex">
                <div style="display: flex; align-items: center; flex-direction: column; justify-content: center;">
                    <img src="../../assets/Task10Element1.png" alt="" style="width: calc(100%/1.2);">
                    <draggable
                            @add="error(1)"
                            class="list-group task10"
                            :list="this.mainJSON.task1.listOfAnswersTask10_1"
                            group="task10"
                    >
                        <template #item="{ element }">
                            <div class="answers2">
                                <p>{{element.value}}</p>
                            </div>
                        </template>
                    </draggable>
                </div>
                <div style="display: flex; align-items: center; flex-direction: column; justify-content: center;">
                    <img src="../../assets/Task10Element2.png" alt="" style="width: calc(100%/1.2);">
                    <draggable
                            @add="error(2)"
                            class="list-group task10"
                            :list="this.mainJSON.task1.listOfAnswersTask10_2"
                            group="task10"
                    >
                        <template #item="{ element }">
                            <div class="answers2">
                                <p>{{element.value}}</p>
                            </div>
                        </template>
                    </draggable>
                </div>
                <div style="display: flex; align-items: center; flex-direction: column; justify-content: center;">
                    <img src="../../assets/Task10Element3.png" alt="" style="width: calc(100%/1.2);">
                    <draggable
                            @add="error(3)"
                            class="list-group task10"
                            :list="this.mainJSON.task1.listOfAnswersTask10_3"
                            group="task10"
                    >
                        <template #item="{ element }">
                            <div class="answers2">
                                <p>{{element.value}}</p>
                            </div>
                        </template>
                    </draggable>
                </div>
            </div>

            <draggable
                    class="list-group d-flex list-of-answers"
                    :list="this.mainJSON.task1.listOfElementsTask10"
                    group="task10"
            >
                <template #item="{ element }">
                    <div class="answers">
                        <p>{{element.value}}</p>
                    </div>
                </template>
            </draggable>
        </div>

        <div class="background-text">
            <p>
                Добавь подписи к объектам на картинках, перенеси название выбранного объекта в нужное поле.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_LLK2_1 !== 'NA'">Готово</MyButton>
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
    import draggable from "vuedraggable";

    export default {
        name: "TaskAttractions",
        props: {
            screen: {},
            constTextTaskNightInTheMuseum: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        components: {
            draggable
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: ''
            }
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            error(id) {
                if(this.mainJSON.task1["listOfAnswersTask10_" + id].length > 1){
                    this.mainJSON.task1.listOfElementsTask10.push(this.mainJSON.task1["listOfAnswersTask10_" + id][1])
                    this.mainJSON.task1["listOfAnswersTask10_" + id].splice(1, 1)
                }
                if(this.mainJSON.task1.listOfAnswersTask10_1.length !== 0 && this.mainJSON.task1.listOfAnswersTask10_2.length !== 0 &&
                    this.mainJSON.task1.listOfAnswersTask10_3.length !== 0){
                    this.mainJSON.task1.results.ULSCLL1_Log_LLK2_1 =  "Слот 1: " + this.mainJSON.task1.listOfAnswersTask10_1[0].value + ", Слот 2: " +
                        this.mainJSON.task1.listOfAnswersTask10_2[0].value + ", Слот 3: " + this.mainJSON.task1.listOfAnswersTask10_3[0].value
                    console.log(this.mainJSON.task1.results.ULSCLL1_Log_LLK2_1)
                }
            },
            showModal() {
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            checkAnswer(status) {
                this.modalVisible = false
                this.mainJSON.task1.results.ULSCLL1_Log_LLK2_1 = ""
                if (status) {
                    screen.isShow = false
                    this.mainJSON.task1.shownScreenID++
                    this.mainJSON.task1.screens.forEach(el => {
                        if (el.id === this.mainJSON.task1.shownScreenID) {
                            el.isShow = true
                        }
                    })
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
    .background-task {
        background: #FFFFFF;
        border: 1px solid #54BEDF;
        width: calc(100%/1.2);
        height: calc(100%/1.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .task10 {
        min-height: 40px;
        width: calc(100%/1.5);
        border: 1px dashed #333333;
        border-radius: 4px;
        height: calc(100%/5);
        margin-top: 10px;
    }
    .answers {
        min-height: 40px;
        width: max-content;
        background: #D2FFF7;
        border: 1px dashed #333333;
        border-radius: 4px;
        padding: 10px 20px;
        margin: 20px 20px;
    }
    .answers2 {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: inherit; */
        background: #D2FFF7;
        border-radius: 4px;
    }
    .list-of-answers {
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        padding: 0 50px;
        margin-top: 20px;
    }
</style>