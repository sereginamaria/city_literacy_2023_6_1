<template>
    <div>
        <div>
            <p class="text-bold" style="color: #2A91D6;">Что ответить?</p>
            <p class="text-bold" style="color: #2A91D6;">Выбери один или несколько вариантов ответа.</p>
        </div>

        <div class="form-check" v-for="option in screenConst.answers"
             :key="option.id">
            <input class="form-check-input" type="checkbox" :id=option.id
                   :value=option v-model="this.mainJSON.taskChatWalk.checkBox1Selected"
            />
            <label :for=option.id>{{option.value}}</label>
        </div>
        <MyButton @click="save">Отправить</MyButton>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatCheckBoxAnswer",
        props: {
            screenConst: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            save() {
                this.mainJSON.taskChatWalk.results[this.screenConst.resultIndicator] = this.mainJSON.taskChatWalk.checkBox1Selected
                this.mainJSON.taskChatWalk.checkBox1Selected = []

                this.mainJSON.taskChatWalk.shownScreenID++
                this.mainJSON.taskChatWalk.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskChatWalk.shownScreenID) {
                        el.isShow = true
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>