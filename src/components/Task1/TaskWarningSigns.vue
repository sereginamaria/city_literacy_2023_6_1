<template>
    <!--Задание 14 задание-->
    <div class="background d-flex justify-content-center align-items-center"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}" style="backdrop-filter: blur(5px);">
        <div class="background-task justify-content-between" style="padding: 2%">
            <div class="d-flex" style="height: 30%">
                <div class="task14El">
                    <div class="task14El1"> Опасность падения груза</div>
                    <draggable
                            @add="error(1)"
                            class="list-group task14Triangle"
                            :list="this.mainJSON.task1.listOfAnswersTask14_1"
                            group="task14"
                    >
                        <template #item="{ element }">
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <img :src="'img/'+element.src"
                                     alt="Avatar"  style="height: inherit"/>
                            </div>
                        </template>
                    </draggable>
                </div>
                <div class="task14El">
                    <div class="task14El1">Осторожно, скользко!</div>
                    <draggable
                            @add="error(2)"
                            class="list-group task14Triangle"
                            :list="this.mainJSON.task1.listOfAnswersTask14_2"
                            group="task14"
                    >
                        <template #item="{ element }">
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <img :src="'img/'+element.src"
                                     alt="Avatar"  style="height: 95%"/>
                            </div>
                        </template>
                    </draggable>
                </div>
                <div class="task14El">
                    <div class="task14El1">Опасность поражения электрическим током</div>
                    <draggable
                            @add="error(3)"
                            class="list-group task14Triangle"
                            :list="this.mainJSON.task1.listOfAnswersTask14_3"
                            group="task14"
                    >
                        <template #item="{ element }">
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <img :src="'img/'+element.src"
                                     alt="Avatar"  style="height: 95%"/>
                            </div>
                        </template>
                    </draggable>
                </div>
                <div class="task14El">
                    <div class="task14El1">Внимание, опасность!</div>
                    <draggable
                            @add="error(4)"
                            class="list-group task14Triangle"
                            :list="this.mainJSON.task1.listOfAnswersTask14_4"
                            group="task14"
                    >
                        <template #item="{ element }">
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <img :src="'img/'+element.src"
                                     alt="Avatar"  style="height: 95%"/>
                            </div>
                        </template>
                    </draggable>
                </div>
            </div>
            <draggable
                    class="list-group list-of-answers d-flex flex-row flex-wrap justify-content-center align-items-center"
                    :list="this.mainJSON.task1.listOfAnswersTask14"
                    group="task14" style="    height: 50%; width: 80%;"
            >
                <template #item="{ element }">
                    <div>
                        <img :src="'img/'+element.src"
                             alt="Avatar" />
                    </div>
                </template>
            </draggable>
        </div>

        <div class="background-text">
            <p>
                Инструкция: Перемести предупреждающие знаки под соответствующие подписи.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK3_2 !== 'NA' || mainJSON.task1.results.ULSCLL1_Log_SCK3_3 !== 'NA'
            || mainJSON.task1.results.ULSCLL1_Log_SCK3_4 !== 'NA' || mainJSON.task1.results.ULSCLL1_Log_SCK3_5 !== 'NA'"
            >Готово</MyButton>
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
        name: "TaskWarningSigns",
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
                if(this.mainJSON.task1["listOfAnswersTask14_" + id].length > 1){
                    this.mainJSON.task1.listOfAnswersTask14.push(this.mainJSON.task1["listOfAnswersTask14_" + id][1])
                    this.mainJSON.task1["listOfAnswersTask14_" + id].splice(1, 1)
                }
                let idNew = id + 1
                this.mainJSON.task1.results['ULSCLL1_Log_SCK3_' + idNew] = this.mainJSON.task1["listOfAnswersTask14_" + id][0].id
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
    .task14Triangle {
        background: url("../../assets/triangle.png") rgba(255, 255, 255, 0.01) no-repeat;
        background-size: contain;
        height: 70%;
        width: 100%;
        background-position: center center;
    }
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
    .task14El{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        width: 25%;
        height: 100%;
    }
    .task14El1 {
        padding: 20px;
        background: #d2fff7;
        border-radius: 4px;
        height: 30%;
    }
</style>