<template>
    <!--Первый экран-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_0Show">
        <div class="background-text">
            <p>
                Старшая сестра Ася, 20 лет: Давай собираться. Выбери рюкзак, с которым пойдешь в музей.
            </p>
            <MyButton class="white-buttons" @click="show1_1">Далее</MyButton>
        </div>
    </div>

    <!--Выбор рюкзака-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_1Show">
        <div>
            <img src="../../assets/BigBackpack.png" alt="" class="big-backpack" :class="{colorBackpack: mainJSON.task1.results.ULSCLL1_Log_SCK1_1 === '1'}"
                 @click="addAnswer('1')" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Большой рюкзак">
            <img src="../../assets/LittleBackpack.png" alt="" class="little-backpack" :class="{colorBackpack: mainJSON.task1.results.ULSCLL1_Log_SCK1_1 === '2'}"
                 @click="addAnswer('2')" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Маленький рюкзак">
        </div>
        <div class="background-text">
            <p>
                Инструкция: Выбери рюкзак, с которым пойдешь в музей.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK1_1 !== 'NA'">Выбрать</MyButton>
            <MyButton class="white-buttons" disabled v-else>Выбрать</MyButton>
        </div>
    </div>

    <!--Выбор первого рюкзака-->
    <div class="background2" v-if="mainJSON.task1.modularTask1_2Show">
        <div class="background-text">
            <p>
                Ася: Возьми другой рюкзак. Этот слишком большой и со шнуровкой, это неудобно и небезопасно для музея. Кстати, мне кажется, что не все вещи в рюкзаке можно брать в музей. Подумай, что из этого охранник попросит тебя выложить.
            </p>
            <MyButton class="white-buttons" @click="show1_4(2)">Далее</MyButton>
        </div>
    </div>

    <!--Выбор второго рюкзака-->
    <div class="background3" v-if="mainJSON.task1.modularTask1_3Show">
        <div class="background-text">
            <p>
                Ася: Перед выходом проверь рюкзак. Мне кажется, что не все вещи в рюкзаке можно брать в музей. Подумай, что из этого охранник попросит тебя выложить.
                Какие вещи в рюкзаке небезопасно проносить в музей? Выложи их, перетащив из рюкзака на стол. Чтобы вернуть вещь в рюкзак, снова перетащи ее.
            </p>
            <MyButton class="white-buttons" @click="show1_4(3)">Далее</MyButton>
        </div>
    </div>

    <!--Перетаскивание вещей-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_4Show">
        <draggable
                class="list-group draggable-backpack-end"
                :list="this.mainJSON.task1.listOfElementsEnd"
                group="draggingThings"
        >
            <template #item="{ element }">
                <img :src="'img/'+element.src_dop"
                     alt="Avatar"  :style="element.style"/>
            </template>
        </draggable>
        <div>
            <img src="../../assets/LittleBackpackOpen.png" alt="" class="little-backpack" style="bottom: calc(100%/5);">
            <draggable
                    class="list-group draggable-backpack-start"
                    :list="this.mainJSON.task1.listOfElementsStart"
                    group="draggingThings"
            >
                <template #item="{ element }">
                    <img :src="'img/'+element.src"
                         alt="Avatar" :style="element.style"/>
                </template>
            </draggable>
        </div>
        <div class="background-text">
            <p>
                Инструкция: Какие вещи в сумке небезопасно проносить в музей? Выложи их, перетащив из сумки на стол. Чтобы вернуть вещь в сумку, снова перетащи ее.
            </p>
            <MyButton class="white-buttons" @click="showDragModal" v-if="mainJSON.task1.listOfElementsEnd.length !== 0">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

    <MyModal v-model:show="modalVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>
    <MyModal v-model:show="modalDragVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";
    export default {
        name: "ModularTask1",
        data() {
            return {
                modalVisible: false,
                modalDragVisible: false,
                modalButtons: [],
                modalMessage: ''
            }
        },
        components: {
            draggable
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
            showDragModal(){
                this.modalDragVisible = true
                this.modalButtons = [
                    {value: "Да", status: "trueDrag"},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            show1_1(){
                this.mainJSON.task1.modularTask1_0Show = false
                this.mainJSON.task1.modularTask1_1Show = true
            },
            addAnswer(id){
                this.mainJSON.task1.results.ULSCLL1_Log_SCK1_1 = id
            },
            show1_4(id){
                this.mainJSON.task1["modularTask1_" + id + "Show"] = false
                this.mainJSON.task1.modularTask1_4Show = true
            },
            checkAnswer(status){
                this.modalVisible = false
                this.modalDragVisible = false

                if(status === true && this.mainJSON.task1.results.ULSCLL1_Log_SCK1_1 === '1') {
                    this.mainJSON.task1.modularTask1_1Show = false
                    this.mainJSON.task1.modularTask1_2Show = true
                }
                if(status === true && this.mainJSON.task1.results.ULSCLL1_Log_SCK1_1 === '2') {
                    this.mainJSON.task1.modularTask1_1Show = false
                    this.mainJSON.task1.modularTask1_3Show = true
                }
                if(status === "trueDrag"){
                    this.mainJSON.task1.modularTask1_4Show = false
                    this.mainJSON.task1.modularTask1_5Show = true
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
    .background0, .background1, .background2, .background3 {
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
    }
    .background0 {
        background: url("../../assets/BackgroundModule1.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule6.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background2 {
        background: url("../../assets/BackgroundModule2.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background3 {
        background: url("../../assets/BackgroundModule3.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
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
    .draggable-backpack-end {
        height: calc(100%/3);
        width: calc(100%/3.3);
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
    .colorBackpack {
        filter: drop-shadow(0px 0px 55px #FFFFFF) drop-shadow(12.7928px 8.52851px 8.52851px rgba(0, 0, 0, 0.4));
    }
</style>