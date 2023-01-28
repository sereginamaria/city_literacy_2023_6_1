<template>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Софья Ивановна
            </p>
            <div class="chat-message">
                <p>
                    Авторитетные исследователи уже давно доказали, что полноценный сон и завтрак необходимы организму. Полагаю, нужно отдельно поговорить со школьниками о вреде таких советов.
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
                    Ох, правда?! А что думаете насчет такой идеи: вполне можно питаться одним фастфудом, если тебе так хочется, но следить за количеством калорий - не больше 500 калорий в день? Довольно логично выглядит такая схема.
                </p>
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-end">
        <div>
            <p class="chat-message-answer chat-message" v-if="this.mainJSON.task2.results.ULHLDT3_Log_HLK3_2 !== 'NA'">
                {{this.mainJSON.task2.results.ULHLDT3_Log_HLK3_2}}
            </p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatRadio2Message",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>

</style>