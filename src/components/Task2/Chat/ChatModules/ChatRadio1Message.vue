<template>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Мария
            </p>
            <div class="chat-message">
                <p>
                    Может сделаем отдельный слайд с подобными полезными советами? Я недавно смотрела интересное видео «Как достичь максимальной результативности». Автор рекомендует полностью исключить завтрак из своего рациона.
                </p>
            </div>
        </div>
    </div>

    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Егор Н.
            </p>
            <div class="chat-message">
                <p>
                    О, я его тоже видел. Еще там была идея спать не больше 5 часов в сутки. Стоит ли нам использовать эти советы, как вы думаете?
                </p>
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-end">
        <div>
            <p class="chat-message-answer chat-message" v-if="this.mainJSON.task2.results.ULHLDT3_Log_HLK3_1 !== 'NA'">
                {{this.mainJSON.task2.results.ULHLDT3_Log_HLK3_1}}
            </p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatRadio1Message",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>

</style>