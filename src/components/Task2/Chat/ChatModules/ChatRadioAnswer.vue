<template>
    <div>
        <div>
            <p class="text-bold" style="color: #2A91D6;">Что ответить?</p>
            <p class="text-bold" style="color: #2A91D6;">Выбери один вариант ответа.</p>
        </div>

        <div class="message-answer" v-for="element in screenConst.answers"
             :key="element.id" @click="save(element)">
            {{element.value}}
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatRadioAnswer",
        props: {
            screenConst: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            save(el) {
                this.mainJSON.taskChatWalk.results[this.screenConst.resultIndicator] = el.value
                this.mainJSON.taskChatWalk.shownScreenID++
                this.mainJSON.taskChatWalk.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskChatWalk.shownScreenID) {
                        el.isShow = true
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>