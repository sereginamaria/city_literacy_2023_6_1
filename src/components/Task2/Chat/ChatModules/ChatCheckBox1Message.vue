<template>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Егор Н.
            </p>
            <div class="chat-message">
                <p>
                    Добрый день! Не уверен, что все правильно понимают этот термин - ЗОЖ. Так что в начале лекции стоит пояснить, что стоит за этим понятием. Давайте определим, какие правила и действия необходимо выполнять, чтобы поддерживать здоровый образ жизни?
                </p>
            </div>

        </div>
    </div>

    <div class="d-flex justify-content-end">
        <div class="d-flex flex-column">
            <p class="chat-message-answer chat-message"
               v-for="element in this.mainJSON.task2.ULHLDT3_Log_HLK1" :key="element.id">
                {{element.value}}
            </p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatCheckBox1Message",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>