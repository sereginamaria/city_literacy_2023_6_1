<template>
    <div>
        <div>
            <p class="text-bold" style="color: #2A91D6;">Что ответить?</p>
            <p class="text-bold" style="color: #2A91D6;">Выбери один подходящий ответ</p>
        </div>

        <div class="message-answer" v-for="element in this.mainJSON.task2.radio6Options"
             :key="element.id" @click="save(element)">
            {{element.name}}
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatRadio6Answer",
        computed: {
            ...mapGetters(['mainJSON']),
        },
        props: {
            blockID: {}
        },
        methods: {
            save(el) {
                this.mainJSON.task2.results.ULHLDT3_Log_DTK2 = el.name
                this.$emit('done', this.blockID)
            }
        }
    }
</script>

<style scoped>

</style>