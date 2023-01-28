<template>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Софья Ивановна
            </p>
            <div class="chat-message">
                <p>
                    Кстати о спорте. Вы заметили, как много людей у нас в городе сейчас ездит на самокатах? Уверена, нам нужно посвятить один слайд факторам, негативно влияющим на здоровье тех, кто передвигается таким образом по городу. Какие это могут быть факторы?
                </p>
            </div>

        </div>
    </div>

    <div class="d-flex justify-content-end">
        <div class="d-flex flex-column">
            <p class="chat-message-answer chat-message"
               v-for="element in this.mainJSON.task2.ULHLDT3_Log_HLK2" :key="element.id">
                {{element.value}}
            </p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatCheckBox2Message",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>