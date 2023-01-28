<template>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Софья Ивановна
            </p>
            <div class="chat-message">
                <p>
                    Из наших партнерских школ прислали список часто задаваемых вопросов. Нам нужно найти ответы на них. Давайте распределим, кто какую тему возьмет. Я поищу информацию о приложениях для правильного питания. Есть еще вопросы об упражнениях для повышения выносливости, про поиск мест для плавания, и что-то еще было...
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
                    О, возьму вопрос про поиск мест для плавания, но мне нужно будет время для поиска информации.
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
                <p>
                    А я хочу рассказать про повышение выносливости.
                </p>
            </div>
        </div>
    </div>

    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Софья Ивановна
            </p>
            <div class="chat-message">
                <p>
                    Тогда остался только один вопрос. Как быстро найти компанию для занятий теннисом?
                </p>
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-end">
        <div>
            <p class="chat-message-answer chat-message" v-if="this.mainJSON.task2.results.ULHLDT3_Log_DTK1 !== 'NA'">
                {{this.mainJSON.task2.results.ULHLDT3_Log_DTK1}}
            </p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatRadio3Message",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>

</style>