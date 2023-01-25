<template>
    <!--Задание 13 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_56Show">
        <div class="background-text">
            <p>
                Коля: Я хочу проводить вас до дома. И город посмотрю, и за вас волноваться не буду.
            </p>
            <MyButton class="white-buttons" @click="show1_57">Далее</MyButton>
        </div>
    </div>
    <!--Задание 13 реплика 2-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_57Show">
        <div class="background-text">
            <p>
                Когда ты, Коля, и Ася почти добрались до вашего двора, Ася получила важное SMS.
            </p>
            <MyButton class="white-buttons" @click="show1_58">Далее</MyButton>
        </div>
    </div>
    <!--Задание 13 реплика 3-->
    <div class="background2" v-if="mainJSON.task1.modularTask1_58Show">
        <div class="background-text">
            <p>
                Ася: МЧС предупреждает, что в ближайшее время начнется ураганный ветер. Нам нужно поскорее попасть домой, а то идти через дворы может быть опасно.
            </p>
            <MyButton class="white-buttons" @click="show1_59">Далее</MyButton>
        </div>
    </div>
    <!--Задание 13 реплика 4-->
    <div class="background3" v-if="mainJSON.task1.modularTask1_59Show">
        <div class="background-text">
            <p>
                Коля: А если сильный ветер застанет вас в пути… Где будете прятаться от непогоды?
            </p>
            <MyButton class="white-buttons" @click="show1_60">Далее</MyButton>
        </div>
    </div>

    <!--Задание 13 задание-->
    <div class="background4" v-if="mainJSON.task1.modularTask1_60Show" :class="{background5: mainJSON.task1.results.ULSCLL1_Log_LLK4_1}">
        <div class="background-text">
            <p>
                Инструкция: Что ответишь Коле? Где можно спрятаться от непогоды? Выбери все верные варианты ответа, кликнув на картинку.
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