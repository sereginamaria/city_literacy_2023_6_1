<template>
    <div class="background1" v-if="mainJSON.task1.modularTask1_0Show">
        <div class="background-text">
            <p>
                Старшая сестра Ася, 20 лет: Давай собираться. Выбери рюкзак, с которым пойдешь в музей.
            </p>
            <MyButton class="white-buttons" @click="show1_1">Далее</MyButton>
        </div>
    </div>
    <div class="background2" v-if="mainJSON.task1.modularTask1_1Show">
        <div>
            <img src="../../assets/BigBackpack.png" alt="">
            <img src="../../assets/LittleBackpack.png" alt="">
        </div>
        <div class="background-text">
            <p>
                Инструкция: Выбери рюкзак, с которым пойдешь в музей.
            </p>
            <MyButton class="white-buttons" @click="show1_1">Выбрать</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ModularTask1",
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            show1_1(){
                this.mainJSON.task1.modularTask1_0Show = false
                this.mainJSON.task1.modularTask1_1Show = true
            }
        }
    }
</script>

<style scoped>
    .background-text {
        display: flex;
        justify-content: space-between;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 3.79%, rgba(0, 0, 0, 0.72) 12.58%);
        padding: 20px;
        width: 100%;
        position: fixed;
        bottom: 0;
    }
    .background-text p{
        color: white;
    }
    .background1 {
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background: url("../../assets/BackgroundModule1.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
        background-size: cover;
    }
    .background2 {
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background: url("../../assets/BackgroundModule6.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
        background-size: cover;
    }
</style>