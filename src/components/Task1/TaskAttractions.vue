<template>
    <!--Задание 10 задание-->
    <div class="background d-flex justify-content-center align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block">
            <p>
                Коля: Москва такая красивая! А что это такое?
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100 h-100">
            <div class="background-task">
            <div class="d-flex">
                <div style="display: flex; align-items: center; flex-direction: column; justify-content: center;">
                    <img src="../../assets/Task10Element1.webp" alt="" style="width: calc(100%/1.2);">
                    <draggable
                            @add="error(1)"
                            class="list-group task10"
                            :list="this.mainJSON.taskNightInTheMuseum.listOfAnswersTask10_1"
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
                    <img src="../../assets/Task10Element2.webp" alt="" style="width: calc(100%/1.2);">
                    <draggable
                            @add="error(2)"
                            class="list-group task10"
                            :list="this.mainJSON.taskNightInTheMuseum.listOfAnswersTask10_2"
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
                    <img src="../../assets/Task10Element3.webp" alt="" style="width: calc(100%/1.2);">
                    <draggable
                            @add="error(3)"
                            class="list-group task10"
                            :list="this.mainJSON.taskNightInTheMuseum.listOfAnswersTask10_3"
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
                    class="list-group d-flex list-of-answers-attractions"
                    :list="this.mainJSON.taskNightInTheMuseum.listOfElementsTask10"
                    group="task10"
            >
                <template #item="{ element }">
                    <div class="answers">
                        <p>{{element.value}}</p>
                    </div>
                </template>
            </draggable>
        </div>
        </div>
        <div class="background-text">
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
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK2_1 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskAttractions",
        props: {
            screen: {},
            constTaskNightInTheMuseum: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        components: {
            draggable
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            error(id) {
                if(this.mainJSON.taskNightInTheMuseum["listOfAnswersTask10_" + id].length > 1){
                    this.mainJSON.taskNightInTheMuseum.listOfElementsTask10.push(this.mainJSON.taskNightInTheMuseum["listOfAnswersTask10_" + id][1])
                    this.mainJSON.taskNightInTheMuseum["listOfAnswersTask10_" + id].splice(1, 1)
                }
                if(this.mainJSON.taskNightInTheMuseum.listOfAnswersTask10_1.length !== 0 && this.mainJSON.taskNightInTheMuseum.listOfAnswersTask10_2.length !== 0 &&
                    this.mainJSON.taskNightInTheMuseum.listOfAnswersTask10_3.length !== 0){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK2_1 =  "Слот 1: " + this.mainJSON.taskNightInTheMuseum.listOfAnswersTask10_1[0].value + ", Слот 2: " +
                        this.mainJSON.taskNightInTheMuseum.listOfAnswersTask10_2[0].value + ", Слот 3: " + this.mainJSON.taskNightInTheMuseum.listOfAnswersTask10_3[0].value
                }
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskNightInTheMuseum.shownScreenID++
                this.mainJSON.taskNightInTheMuseum.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskNightInTheMuseum.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskNightInTheMuseum.listOfAnswersTask10_1[0].id === 6 && this.mainJSON.taskNightInTheMuseum.listOfAnswersTask10_2[0].id === 7 &&
                    this.mainJSON.taskNightInTheMuseum.listOfAnswersTask10_3[0].id === 8){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK2_1 = 1
                }
                else {
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK2_1 = 0
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
    .list-of-answers-attractions {
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        padding: 0 50px;
        margin-top: 20px;
    }
</style>