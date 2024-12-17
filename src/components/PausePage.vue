<template>
    <div class="dialog">
        <div class="dialog-content" style="background: none">
            <div style="text-align: center">
                <p style="color: white">Сделай перерыв 5 минут.</p>
                <p style="color: white">
                    Выполни гимнастику для глаз.
                </p>
                <p style="color: white">{{this.mainJSON.retPause}}</p>
                <MyButton style="margin-top: 10px" @click="$emit('skipPause')">Пропустить</MyButton>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "PausePage",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
    .dialog {
        background: url("../assets/Pause.webp") no-repeat;
        background-size: 100% 100%;
    }
</style>