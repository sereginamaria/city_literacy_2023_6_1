<template>
    <div class="container-fluid d-flex justify-content-end align-items-center footer" :class="{'justify-content-between': this.mainJSON.task2.isShow}">
        <div v-if="this.mainJSON.task2.isShow">
            <MyButton class="ml-3 transparent-buttons"
                      data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Чат"
                      @click="openChat"
            >
                <img src="../assets/tak2-chat-icon.svg">
            </MyButton>
        </div>
        <MyButton style="background: #F3AE4E; border-color: #F3AE4E; width: 200px" @click="showModal">Завершить</MyButton>
    </div>

    <MyModal v-model:show="modalVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>

</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "PageFooter",
        computed: {
            ...mapGetters(['mainJSON']),
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: ''
            }
        },
        methods: {
            openChat(){
                if(this.mainJSON.task2.isShow){
                    this.mainJSON.task2.chatShow = !this.mainJSON.task2.chatShow
                }
            },
            showModal(){
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь завершить задание  перейти к следующему?'
            },
            checkAnswer(){
                this.modalVisible = false
                let change = 0
                if(this.mainJSON.task1.isShow && change === 0){
                    this.mainJSON.task1["isShow"] = false
                    this.mainJSON.task2["isShow"] = true
                    this.mainJSON["instructionShow"] = true
                    this.mainJSON["mainPageShow"] = false
                    change++
                }
                if(this.mainJSON.task2.isShow  && change === 0){
                    this.mainJSON.task2["isShow"] = false
                    this.mainJSON.task3["isShow"] = true
                    this.mainJSON["instructionShow"] = true
                    this.mainJSON["mainPageShow"] = false
                    change++
                }
                if(this.mainJSON.task3.isShow  && change === 0){
                    this.mainJSON["task2Show"] = false
                    this.mainJSON["task3Show"] = true
                    this.mainJSON["instructionShow"] = true
                    this.mainJSON["mainPageShow"] = false
                }
            }
        }
    }
</script>

<style scoped>
    .footer {
        height: 70px;
        background: #344A5F;
        backdrop-filter: blur(8.15485px);
        position: fixed;
        bottom: 0;
        z-index: 99;
    }
</style>