<template>
    <div class="container-fluid d-flex justify-content-end align-items-center footer" :class="{'justify-content-between': this.mainJSON.taskChatWalk.isShow}">
        <div v-if="this.mainJSON.taskChatWalk.isShow">
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
                modalMessage: '',
                listOfNotDoneTasks: [],
                change: 0
            }
        },
        methods: {
            openChat(){
                if(this.mainJSON.taskChatWalk.isShow){
                    this.mainJSON.taskChatWalk.chatShow = !this.mainJSON.taskChatWalk.chatShow
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
            checkAnswer(status){
                this.modalVisible = false

                if(status){
                    this.change = 0
                    if(this.mainJSON.taskNightInTheMuseum.isShow && this.change === 0){
                        this.mainJSON.taskNightInTheMuseum["isShow"] = false
                        this.nextTask('taskNightInTheMuseum')
                    }
                    if(this.mainJSON.taskChatWalk.isShow  && this.change === 0){
                        this.addAnswersTaskChatWalk()
                        this.mainJSON.taskChatWalk["isShow"] = false
                        this.nextTask('taskChatWalk')
                    }
                    if(this.mainJSON.taskVolunteers.isShow  && this.change === 0){
                        this.mainJSON.taskVolunteers["isShow"] = false
                        this.nextTask('taskVolunteers')
                    }
                }
                if(status === 'exit'){
                    this.mainJSON['resultsShow'] = true

                  /*  this.mainJSON['loginShow'] = true
                    this.mainJSON['mainPageShow'] = false*/
                }
            },
            nextTask(taskName){
                this.mainJSON.listOfTasks.forEach( el => {
                    if(el.name === taskName){
                        el.done = true
                    }
                    if(el.done === false){
                        this.listOfNotDoneTasks.push(el.name)
                    }
                })
                if (this.listOfNotDoneTasks.length === 0){
                    this.endTask()
                }
                else {
                    let randomElement = this.listOfNotDoneTasks[Math.floor(Math.random()*this.listOfNotDoneTasks.length)]
                    this.mainJSON[randomElement].isShow = true
                    this.mainJSON["instructionShow"] = true
                    this.mainJSON["mainPageShow"] = false
                    this.change++
                    this.listOfNotDoneTasks = []
                }
            },
            endTask(){
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Выйти", status: 'exit'}
                ]
                this.modalMessage = 'Ты завершил все задания, нажми кнопку "Выйти" для выхода из системы.'
            },
            addAnswersTaskChatWalk(){
                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLS1_1 === 3){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS1_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS1_1 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLS4_1 === 1){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS4_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS4_1 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_DTS2_1 === 2){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS2_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS2_1 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLS5_1 === 2){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS5_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS5_1 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLK1_1 === ""){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK1_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK1_1 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLK2_1 === ""){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK2_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK2_1 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_DTS1_1 === 3){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS1_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS1_1 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLK4_1 === ""){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK4_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK4_1 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_DTK1_1 === 2){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTK1_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTK1_1 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLK3_1 === 2){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK3_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK3_1 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLS3_1 === 2){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS3_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS3_1 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLS1_2 === 2){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS1_2 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS1_2 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLK2_2 === 1){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK2_2 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK2_2 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_DTS1_2 === 3){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS1_2 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS1_2 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_DTS3_1 === 4){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS3_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS3_1 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLS2_1 === 3){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS2_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS2_1 = 0
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