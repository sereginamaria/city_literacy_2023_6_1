<template>
    <!--Инструкция перед заданием про метро-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_7Show">
        <div class="background-text">
            <p>
                Ася: Ну что, выходим? Поедем на метро, так будет быстрее.
            </p>
            <MyButton class="white-buttons" @click="show1_8">Далее</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ModularTask3",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
    .background0, .background1{
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
    }
    .background0 {
        background: url("../../assets/BackgroundModule5.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule7.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
</style>