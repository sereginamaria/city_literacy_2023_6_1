<template>
    <div>
        <div>
            <p class="text-bold" style="color: #2A91D6;">Что ответить?</p>
            <p class="text-bold" style="color: #2A91D6;">Выбери один подходящий ответ</p>
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
                this.mainJSON.task2.results[this.screenConst.resultIndicator] = el.value

                console.log(typeof this.mainJSON.task2.results[this.screenConst.resultIndicator])
                this.mainJSON.task2.shownScreenID++
                this.mainJSON.task2.screens.forEach(el => {
                    if (el.id === this.mainJSON.task2.shownScreenID) {
                        el.isShow = true
                    }
                })

                var block = document.getElementById("main");
                console.log(block)
                block.scrollIntoView({behavior: 'smooth'});
            }
        }
    }
</script>

<style scoped>

</style>