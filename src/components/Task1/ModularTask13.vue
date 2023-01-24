<template>
    <!--Задание 12 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_56Show">
        <div class="background-text">
            <p>
                Коля: Ого! Сколько у вас в городе всего интересного! А есть такие сайты, где я мог бы посмотреть красивые места Москвы, не выходя из галереи?
            </p>
            <MyButton class="white-buttons" @click="show1_57">Далее</MyButton>
        </div>
    </div>
    <!--Задание 12 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_57Show">
        <div class="background-text">
            <p>
                Коля: Ого! Сколько у вас в городе всего интересного! А есть такие сайты, где я мог бы посмотреть красивые места Москвы, не выходя из галереи?
            </p>
            <MyButton class="white-buttons" @click="show1_58">Далее</MyButton>
        </div>
    </div>
    <!--Задание 12 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_58Show">
        <div class="background-text">
            <p>
                Коля: Ого! Сколько у вас в городе всего интересного! А есть такие сайты, где я мог бы посмотреть красивые места Москвы, не выходя из галереи?
            </p>
            <MyButton class="white-buttons" @click="show1_59">Далее</MyButton>
        </div>
    </div>
    <!--Задание 12 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_59Show">
        <div class="background-text">
            <p>
                Коля: Ого! Сколько у вас в городе всего интересного! А есть такие сайты, где я мог бы посмотреть красивые места Москвы, не выходя из галереи?
            </p>
            <MyButton class="white-buttons" @click="show1_60">Далее</MyButton>
        </div>
    </div>

    <!--Задание 12 задание-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_59Show">
        <div class="background-text">
            <p>
                Коля: Ого! Сколько у вас в городе всего интересного! А есть такие сайты, где я мог бы посмотреть красивые места Москвы, не выходя из галереи?
            </p>
            <MyButton class="white-buttons" @click="show1_60">Далее</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ModularTask13",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>

</style>