<template>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Егор Н.
            </p>
            <div class="chat-message">
                <p>
                    Ого, я и не знал, что существуют приложения для поиска партнеров для занятий спортом. Я опробовал одно, и сразу же получил ответ. Как вы думаете, кого из ответивших выбрать?
                </p>
                <img src="../../../../assets/cats.png" alt="" style="width: 100%">
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-end">
        <div>
            <p class="chat-message-answer chat-message" v-if="this.mainJSON.task2.results.ULHLDT3_Log_DTS3 !== 'NA'">
                {{this.mainJSON.task2.results.ULHLDT3_Log_DTS3}}
            </p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatRadio4Message",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>

</style>