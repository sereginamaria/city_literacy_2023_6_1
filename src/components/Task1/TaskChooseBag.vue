<template>
    <!--Выбор рюкзака-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block">
            <p>Выбери рюкзак, с которым пойдешь в музей.</p>
        </div>
        <div>
            <img src="../../assets/BigBackpack.webp" alt="" class="big-backpack" :class="{colorBackpack: mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK1_1 === 2}"
                 @click="addAnswer(2)" @mouseover="onHover($event, 'Большой рюкзак')" @mouseout="this.toolTipVisible = false">
            <img src="../../assets/LittleBackpack.webp" alt="" class="little-backpack" :class="{colorBackpack: mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK1_1 === 1}"
                 @click="addAnswer(1)" @mouseover="onHover($event, 'Маленький рюкзак')" @mouseout="this.toolTipVisible = false">
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
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK1_1 !== 'NA'">Готово</MyButton>
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

    export default {
        name: "taskChooseBag",
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
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            onHover(event, message) {
                const { clientX, clientY } = event;
                this.toolTipVisible = true;
                this.clientX = clientX - clientX/20;
                this.clientY = clientY  - clientY/20;
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
            addAnswer(id){
                this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK1_1 = id
            },
            checkAnswer(status){
                this.modalVisible = false

                if(status) {
                    screen.isShow = false

                    if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK1_1 === 2) {
                        this.mainJSON.taskNightInTheMuseum.shownScreenID++
                        this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK1_1 = 0
                    }
                    if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_SCK1_1 === 1) {
                        this.mainJSON.taskNightInTheMuseum.shownScreenID+=2
                        this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK1_1 = 1
                    }

                    this.mainJSON.taskNightInTheMuseum.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskNightInTheMuseum.shownScreenID) {
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

        },
    }
</script>

<style scoped>
    .big-backpack, .little-backpack {
        position: absolute;
    }
    .big-backpack {
        width: 34%;
        left: calc(100%/10);
        bottom: calc(100%/8);
    }
    .little-backpack {
        bottom: calc(100%/20);
        width: 23%;
        left: calc(100%/2.3);
    }
    .colorBackpack {
        filter: drop-shadow(0 0 30px crimson);
    }
</style>