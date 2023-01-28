<template>
    <!--Выбор обуви-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div>
            <img src="../../assets/Boots1.png" alt="" :class="{colorBoots: mainJSON.task1.results.ULSCLL1_Log_SCK1_3 === '1'}"
                 @click="addAnswer('1')" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Большой рюкзак"
                 style="width: calc(100%/3.5);
    left: calc(100%/2.6);
    bottom: calc(100%/1.3);
    /* width: calc(100%/3); */
    position: absolute;"
            >
            <img src="../../assets/Boots2.png" alt="" :class="{colorBoots: mainJSON.task1.results.ULSCLL1_Log_SCK1_3 === '2'}"
                 @click="addAnswer('2')" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Маленький рюкзак"
                 style="width: calc(100%/3.5);
    left: calc(100%/2.6);
    bottom: calc(100%/1.8);
    /* width: calc(100%/3); */
    position: absolute;"
            >
            <img src="../../assets/Boots3.png" alt="" :class="{colorBoots: mainJSON.task1.results.ULSCLL1_Log_SCK1_3 === '3'}"
                 @click="addAnswer('3')" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Большой рюкзак"
                 style="width: calc(100%/3.5);
    left: calc(100%/2.6);
    bottom: calc(100%/4);
    /* width: calc(100%/3); */
    position: absolute;"
            >
            <img src="../../assets/Boots4.png" alt="" :class="{colorBoots: mainJSON.task1.results.ULSCLL1_Log_SCK1_3 === '4'}"
                 @click="addAnswer('4')" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Маленький рюкзак"
                 style="width: calc(100%/3.5);
    left: calc(100%/2.6);
    bottom: calc(100%/30);
    /* width: calc(100%/3); */
    position: absolute;"
            >
        </div>
        <div class="background-text">
            <p>
                {{constTextTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].text}}
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK1_3 !== 'NA'">Готово</MyButton>
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

    export default {
        name: "TaskChooseShoes",
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
                this.mainJSON.task1.results.ULSCLL1_Log_SCK1_3 = id
            },
            checkAnswer(status){
                this.modalVisible = false

                if(status) {
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
    .colorBoots {
        filter: drop-shadow(0px 0px 55px #FFFFFF) drop-shadow(12.7928px 8.52851px 8.52851px rgba(0, 0, 0, 0.4));
    }
</style>