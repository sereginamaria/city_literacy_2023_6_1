<template>
    <!--Инструкция перед выбором обуви-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_5Show">
        <div class="background-text">
            <p>
                Ася: Нам осталось только обуться, и можно выходить. Достань, пожалуйста, обувь из шкафа для себя и для меня.
            </p>
            <MyButton class="white-buttons" @click="show1_6">Далее</MyButton>
        </div>
    </div>

    <!--Выбор обуви-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_6Show">
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
                Инструкция: Выбери ту полку, на которой находится подходящая обувь для тебя и для Аси. Помни, что обувь должна подходить для музея, где будет много людей.
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
        name: "ModularTask2",
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
            show1_6(){
                this.mainJSON.task1.modularTask1_5Show = false
                this.mainJSON.task1.modularTask1_6Show = true
            },
            addAnswer(id){
                this.mainJSON.task1.results.ULSCLL1_Log_SCK1_3 = id
            },
            checkAnswer(status){
                this.modalVisible = false

                if(status) {
                    this.mainJSON.task1.modularTask1_6Show = false
                    this.mainJSON.task1.modularTask1_7Show = true
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
    .background0, .background1{
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
    }
    .background0 {
        background: url("../../assets/BackgroundModule4.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule7.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .colorBoots {
        filter: drop-shadow(0px 0px 55px #FFFFFF) drop-shadow(12.7928px 8.52851px 8.52851px rgba(0, 0, 0, 0.4));
    }
</style>