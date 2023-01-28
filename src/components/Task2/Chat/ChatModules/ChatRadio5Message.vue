<template>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Мария
            </p>
            <div class="chat-message">
                <p>
                    А раз уж мы заговорили о самокатах, то обязательно стоит упомянуть вопросы безопасной езды. А то вдруг школьник упадет где-нибудь в незнакомом месте и травмирует колено, например? Как в этом случае получить помощь максимально быстро? Разместим информацию об этом на слайде.
                </p>
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-end">
        <div>
            <p class="chat-message-answer chat-message" v-if="this.mainJSON.task2.results.ULHLDT3_Log_HLS2 !== 'NA'">
                {{this.mainJSON.task2.results.ULHLDT3_Log_HLS2}}
            </p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatRadio5Message",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>

</style>