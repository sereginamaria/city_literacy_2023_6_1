<template>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Егор Н.
            </p>
            <div class="chat-message">
                <p>
                    Извините, на телефоне карта слишком мелкая, трудно отмечать...
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
                    Это полезная информация! Можем разместить ссылку на эту карту на слайде под названием «Выбираем места для занятий спортом».

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
                    Да, и еще добавим туда советы о том, как лучше перемещаться по городу на самокате. Особенно, если он тяжелый и не складывается. Кто знает, какими ресурсами можно воспользоваться для построения маршрутов на самокате?

                </p>
            </div>

        </div>
    </div>

    <div class="d-flex justify-content-end">
        <div>
            <p class="chat-message-answer chat-message" v-if="this.mainJSON.task2.results.ULHLDT3_Log_DTK2 !== 'NA'">
                {{this.mainJSON.task2.results.ULHLDT3_Log_DTK2}}
            </p>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatRadio6Message",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>