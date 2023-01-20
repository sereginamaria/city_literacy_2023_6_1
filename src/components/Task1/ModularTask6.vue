<template>
    <!--Задание 6 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_26Show">
        <div class="background-text">
            <p>
                Коля заскучал и предлагает тебе уйти из музея.
            </p>
            <MyButton class="white-buttons" @click="show1_27">Далее</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ModularTask6",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
    .background0, .background1, .background2, .background3, .background4, .background5, .background6, .background7{
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
    }
    .background0 {
        background: url("../../assets/BackgroundModule23.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule16.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background2 {
        background: url("../../assets/BackgroundModule17.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background3 {
        background: url("../../assets/BackgroundModule18.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background4 {
        background: url("../../assets/BackgroundModule19.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background5 {
        background: url("../../assets/BackgroundModule20.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background6 {
        background: url("../../assets/BackgroundModule21.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background7 {
        background: url("../../assets/BackgroundModule22.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
</style>