<template>
    <!--Выбор рюкзака-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div>
            <img src="../../assets/BigBackpack.png" alt="" class="big-backpack" :class="{colorBackpack: mainJSON.task1.results.ULSCLL1_Log_SCK1_1 === '1'}"
                 @click="addAnswer('1')" @mouseover="onHover($event, 'Большой рюкзак')" @mouseout="this.toolTipVisible = false">
            <img src="../../assets/LittleBackpack.png" alt="" class="little-backpack" :class="{colorBackpack: mainJSON.task1.results.ULSCLL1_Log_SCK1_1 === '2'}"
                 @click="addAnswer('2')" @mouseover="onHover($event, 'Маленький рюкзак')" @mouseout="this.toolTipVisible = false">
        </div>
        <div class="background-text">
            <p>
                {{constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].text}}
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK1_1 !== 'NA'">Готово</MyButton>
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
                this.mainJSON.task1.results.ULSCLL1_Log_SCK1_1 = id
            },
            checkAnswer(status){
                this.modalVisible = false
                screen.isShow = false

                if(status === true && this.mainJSON.task1.results.ULSCLL1_Log_SCK1_1 === '1') {
                    this.mainJSON.task1.shownScreenID++
                }
                if(status === true && this.mainJSON.task1.results.ULSCLL1_Log_SCK1_1 === '2') {
                    this.mainJSON.task1.shownScreenID+=2
                }

                this.mainJSON.task1.screens.forEach(el => {
                    if (el.id === this.mainJSON.task1.shownScreenID) {
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
        filter: drop-shadow(0px 0px 55px #FFFFFF) drop-shadow(12.7928px 8.52851px 8.52851px rgba(0, 0, 0, 0.4));
    }
</style>