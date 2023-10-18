<template>
    <div>
        <div>
            <p class="text-bold" style="color: #2A91D6;">Что ответить?</p>
            <p class="text-bold" style="color: #2A91D6;">Выбери один вариант ответа.</p>
        </div>

        <div class="message-answer" v-for="element in screenConst.answers"
             :key="element.id" @click="save(element)" :class="{isShown: element.id === this.mainJSON.taskChatWalk.results[this.screenConst.resultIndicator]}">
            {{element.value}}
        </div>
        <MyButton @click="nextTask" style="border-color: #74a2ce" v-if="this.mainJSON.taskChatWalk.results[this.screenConst.resultIndicator] !== 'NA'">Готово</MyButton>
        <MyButton disabled style="border-color: #74a2ce" v-else>Готово</MyButton>
    </div>

    <MyModal v-model:show="modalVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "ChatRadioAnswer",
        props: {
            screenConst: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        data() {
            return {
                el: '',
                id: -1,
                modalVisible: false,
                modalButtons: [],
                modalMessage: '',
                instructionWasShown: false
            }
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            save(el) {
                this.mainJSON.taskChatWalk.results[this.screenConst.resultIndicator] = el.id
                this.el = el
                this.id = this.screenConst.id
            },
            showModal(){
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Понятно", status: true}
                ]
                this.modalMessage = 'Ты не сможешь изменить свой выбор после нажатия на кнопку "Готово".'
            },
            nextTask(){
                if(this.id === 0 && !this.instructionWasShown){
                    this.instructionWasShown = true
                    this.showModal()
                }
                else {
                    this.mainJSON.taskChatWalk[this.screenConst.resultIndicator] = this.el.value
                    this.mainJSON.taskChatWalk.shownScreenID++
                    this.mainJSON.taskChatWalk.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskChatWalk.shownScreenID) {
                            el.isShow = true
                        }
                    })
                    let t = new Date()
                    this.mainJSON.results.dataTimeLastUpdate =
                        [
                            t.getFullYear(),
                            ('0' + (t.getMonth() + 1)).slice(-2),
                            ('0' + t.getDate()).slice(-2)
                        ].join('-') + ' ' + [
                            ('0' + (t.getHours())).slice(-2),
                            ('0' + (t.getMinutes())).slice(-2),
                            ('0' + t.getSeconds()).slice(-2)
                        ].join(':');

                    this.push_mainJSON({
                        push: this.mainJSON
                    })
                }
            },
            checkAnswer() {
                this.modalVisible = false
            }
        }
    }
</script>

<style scoped>
    .isShown {
        color: white;
        background: #74a2ce;
    }
</style>