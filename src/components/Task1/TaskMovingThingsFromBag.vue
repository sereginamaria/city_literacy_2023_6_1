<template>
    <!--Перетаскивание вещей из сумки-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block">
            <p>Какие вещи в сумке небезопасно проносить в музей? Выложи их, перетащив из сумки на стол. Чтобы вернуть вещь в сумку, снова перетащи ее.</p>
        </div>
        <draggable
                class="list-group draggable-backpack-end"
                :list="this.mainJSON.taskNightInTheMuseum.listOfElementsEnd"
                group="draggingThings"
        >
            <template #item="{ element }">
                <img :src=" require('../../assets/' + element.src_dop) "
                     alt="Avatar"  :style="element.style_dop"  @mouseover="onHover($event, element.toolTip)" @mouseout="this.toolTipVisible = false"/>
            </template>
        </draggable>
        <div>
            <img src="../../assets/LittleBackpackOpen.webp" alt="" class="little-backpack" style="bottom: calc(100%/5);">
            <draggable
                    class="list-group draggable-backpack-start"
                    :list="this.mainJSON.taskNightInTheMuseum.listOfElementsStart"
                    group="draggingThings"
            >
                <template #item="{ element }">
                    <img :src=" require('../../assets/' + element.src) "
                         alt="Avatar" :style="element.style"  @mouseover="onHover($event, element.toolTip)" @mouseout="this.toolTipVisible = false"/>
                </template>
            </draggable>
        </div>
        <div class="background-text">
                 <div class="d-flex">
                <div class="me-2">
                    <img src="../../assets/TaskNightInTheMuseumAvatarAsia.webp" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Ася: ' ||
                         constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Старшая сестра Ася, 20 лет: '">
                    <img src="../../assets/TaskNightInTheMuseumAvatarKolia.webp" alt="" style="width: 50px"
                         v-if="constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name === 'Коля: '">
                </div>
                <p>
                    <span class="name-in-dialog">{{constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].name}}</span>
                    {{constTaskNightInTheMuseum.screens[this.mainJSON.taskNightInTheMuseum.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.taskNightInTheMuseum.listOfElementsEnd.length !== 0">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

    <MyTooltip :toolTipVisible="toolTipVisible" :toolTipMessage="toolTipMessage" :clientX="clientX" :clientY="clientY"/>

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
        name: "TaskMovingThingsFromBag",
        props: {
            screen: {},
            constTaskNightInTheMuseum: {}
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: '',
                toolTipVisible: false,
                toolTipMessage: '',
                clientX: 0,
                clientY: 0,
            }
        },
        components: {
            draggable
        },
        computed: {
            ...mapGetters(['mainJSON', 'constTaskNightInTheMuseum']),
            screenID(){
                return this.mainJSON.taskNightInTheMuseum.shownScreenID
            }
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
            showModal(){
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            checkAnswer(status){
                this.modalVisible = false

                if(status){
                    screen.isShow = false
                    this.mainJSON.taskNightInTheMuseum.shownScreenID++
                    this.mainJSON.taskNightInTheMuseum.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskNightInTheMuseum.shownScreenID) {
                            el.isShow = true
                        }
                    })

                    let answers = []
                    let maxScore = 0
                    let middleScore = 0
                    this.mainJSON.taskNightInTheMuseum.listOfElementsEnd.forEach(el => {
                        answers.push(el.id)
                        if(el.id === 4 || el.id === 5 || el.id === 7){
                            maxScore++
                        }
                        if(el.id === 1 || el.id === 2 || el.id === 3 || el.id === 6){
                            middleScore++
                        }
                    })
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK1_2 = answers.join()
                    if(this.mainJSON.taskNightInTheMuseum.listOfElementsEnd.length === 3 && maxScore === 3){
                        this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK1_2 = 2
                    }
                    else if(this.mainJSON.taskNightInTheMuseum.listOfElementsEnd.length === 4 && maxScore === 3 && middleScore === 1){
                        this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK1_2 = 1
                    }
                    else {
                        this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK1_2 = 0
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
    }
</script>

<style scoped>
    .little-backpack {
        position: absolute;
        bottom: calc(100%/20);
        width: calc(100%/3.6);
        left: calc(100%/2.3);
    }
    .draggable-backpack-end {
        height: 50%;
        width: 30%;
        left: calc(100%/8.192);
        bottom: calc(100%/5);
        position: absolute;
    }
    .draggable-backpack-start {
        height: calc(100%/3);
        width: calc(100%/3.3);
        bottom: calc(100%/5);
        left: calc(100%/2.3);
        position: absolute;
    }
</style>