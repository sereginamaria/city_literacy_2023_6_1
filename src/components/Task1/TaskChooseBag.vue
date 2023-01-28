<template>
    <!--Выбор рюкзака-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div>
            <img src="../../assets/BigBackpack.png" alt="" class="big-backpack" :class="{colorBackpack: mainJSON.task1.results.ULSCLL1_Log_SCK1_1 === '1'}"
                 @click="addAnswer('1')" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Большой рюкзак">
            <img src="../../assets/LittleBackpack.png" alt="" class="little-backpack" :class="{colorBackpack: mainJSON.task1.results.ULSCLL1_Log_SCK1_1 === '2'}"
                 @click="addAnswer('2')" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Маленький рюкзак">
        </div>
        <div class="background-text">
            <p>
                {{constTextTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].text}}
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK1_1 !== 'NA'">Выбрать</MyButton>
            <MyButton class="white-buttons" disabled v-else>Выбрать</MyButton>
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

    export default {
        name: "taskChooseBag",
        props: {
            screen: {},
            constTextTaskNightInTheMuseum: {}
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: ''
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
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
        width: calc(100%/3);
        left: calc(100%/10);
        bottom: calc(100%/8);
    }
    .little-backpack {
        bottom: calc(100%/20);
        width: calc(100%/3.6);
        left: calc(100%/2.3);
    }
    .colorBackpack {
        filter: drop-shadow(0px 0px 55px #FFFFFF) drop-shadow(12.7928px 8.52851px 8.52851px rgba(0, 0, 0, 0.4));
    }
</style>