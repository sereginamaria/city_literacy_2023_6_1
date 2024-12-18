<template>
    <div class="dialog">
        <div class="dialog-content" style="background: none">
            <div style="text-align: center">
                <p style="color: white">Время на выполнение заданий истекло.</p>
                <MyButton style="margin-top: 10px" @click="$emit('endTime')">Результаты</MyButton>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "EndTimePage",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
    .dialog {
        //background: url("../assets/Pause.webp") no-repeat;
        background-size: 100% 100%;
    }
</style>