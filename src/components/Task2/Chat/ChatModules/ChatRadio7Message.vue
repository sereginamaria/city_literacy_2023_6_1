<template>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Мария
            </p>
            <div class="chat-message">
                <p>
                    Кстати! Вы знаете, что сейчас часто устраивают массовые заезды на самокатах? Чтобы поучаствовать в таком заезде, обычно нужно заплатить оргвзнос. Думаю, важно поговорить со школьниками о сайтах, на которых точно безопасно производить оплату. Вот, например, какой из этих сайтов лучше выбрать для оплаты оргвзноса?
                </p>
            </div>
        </div>
    </div>

    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Мария
            </p>
            <div class="chat-message">
                <p>Скрин 1</p>
                <img src="../../../../assets/bankcard1.png" alt="" style="width: 100%">
            </div>
        </div>
    </div>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Мария
            </p>
            <div class="chat-message">
                <p>Скрин 2</p>
                <img src="../../../../assets/bankcard2.png" alt="" style="width: 100%">
            </div>
        </div>
    </div>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px" >
        <div>
            <p class="text-bold">
                Мария
            </p>
            <div class="chat-message">
                <p>Скрин 3</p>
                <img src="../../../../assets/bankcard3.png" alt="" style="width: 100%">
            </div>
        </div>
    </div>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Мария
            </p>
            <div class="chat-message">
                <p>Скрин 4</p>
                <img src="../../../../assets/bankcard4.png" alt="" style="width: 100%">
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-end">
        <div>
            <p class="chat-message-answer chat-message" v-if="this.mainJSON.task2.results.ULHLDT3_Log_DTS5 !== 'NA'">
                {{this.mainJSON.task2.results.ULHLDT3_Log_DTS5}}
            </p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatRadio7Message",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>

</style>