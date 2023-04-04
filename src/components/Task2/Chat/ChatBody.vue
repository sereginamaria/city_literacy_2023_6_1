<template>
    <div class="d-flex chat-body">
        <!--Левая часть-->
        <div style="border-right: 1px solid #A7B0C6; width: 20%; padding: 20px">
            <div class="d-flex align-items-center">
                <img src="../../../assets/TaskChatWalkChat.png" alt="Аватар чат" style="margin-right: 20px">
                <div>
                    <p class="text-bold">
                        Чат
                    </p>
                </div>
            </div>
        </div>

        <!--Правая часть -->
        <div class="d-flex flex-column" style="width: 80%">
            <div  class="body-message" style="padding: 10px;border-bottom: 1px solid #A7B0C6; height: 60%" >
                <div id="main" style="overflow-y: scroll; padding-right: 10px; height: 100%">
                    <div v-for="screen in mainJSON.taskChatWalk.screens" :key="screen.id">
                        <ChatRadioMessage v-if="screen.isShow" :currentScreenConst="this.constTaskChatWalk.screens[screen.id]" :currentScreen="currentScreen"/>
                    </div>
                </div>
            </div>

            <!-- Варианты ответов -->
            <div id="main3" class="body-answers" style="padding: 10px; height: max-content; max-height: 40%" >
                <div style="height: 100%; overflow-y: scroll; padding-right: 10px;">
                    <ChatRadioAnswer v-if="currentScreen.isShow && currentScreen.type === 'radio'" :screenConst="screenConst"/>
                    <ChatCheckBoxAnswer v-if="currentScreen.isShow && currentScreen.type === 'checkBox'" :screenConst="screenConst" />

                    <div class="message-answer" v-if="currentScreen.isShow && currentScreen.type === 'end'">
                        <MyButton @click="endTask">Завершить</MyButton>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <MyModal v-model:show="modalVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import ChatRadioAnswer from "@/components/Task2/Chat/ChatModules/ChatRadioAnswer";
    import ChatRadioMessage from "@/components/Task2/Chat/ChatModules/ChatRadioMessage";
    import ChatCheckBoxAnswer from "@/components/Task2/Chat/ChatModules/ChatCheckBoxAnswer";
    export default {
        name: "ChatBody",
        components: {
            ChatCheckBoxAnswer,
            ChatRadioMessage,
            ChatRadioAnswer,
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: '',
                listOfNotDoneTasks: [],
            }
        },
        computed: {
            ...mapGetters(['mainJSON', 'constTaskChatWalk']),
            screenID(){
                return this.mainJSON.taskChatWalk.shownScreenID
            },
            currentScreen(){
                return this.mainJSON.taskChatWalk.screens[this.screenID]
            },
            screenConst(){
                return this.constTaskChatWalk.screens[this.screenID]
            },
        },
        updated(){
            let el =  document.getElementById("main")
            el.addEventListener("DOMSubtreeModified", function () {
                this.counth = el.scrollHeight
            }, false);

            let block1 = document.getElementById("main");
            block1.scrollTop = block1.scrollHeight;
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            endTask(){
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

                let ULHLDT1_Log_HLK1_1 = this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLK1_1.split(',')
                let ULHLDT1_Log_HLK1_1_answer = 0
                ULHLDT1_Log_HLK1_1.forEach(el => {
                    if (el === '1'){
                        ULHLDT1_Log_HLK1_1_answer++
                    }
                    if (el === '4'){
                        ULHLDT1_Log_HLK1_1_answer++
                    }
                })
                if(ULHLDT1_Log_HLK1_1.length === 2 && ULHLDT1_Log_HLK1_1_answer === 2){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK1_1 = 2
                }
                else if (ULHLDT1_Log_HLK1_1.length === 1 && ULHLDT1_Log_HLK1_1_answer === 1) {
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK1_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK1_1 = 0

                let ULHLDT1_Log_HLK2_1 = this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLK2_1.split(',')
                let ULHLDT1_Log_HLK2_1_answer = 0
                ULHLDT1_Log_HLK2_1.forEach(el => {
                    if (el === '4'){
                        ULHLDT1_Log_HLK2_1_answer++
                    }
                    if (el === '3'){
                        ULHLDT1_Log_HLK2_1_answer++
                    }
                })
                if(ULHLDT1_Log_HLK2_1.length === 2 && ULHLDT1_Log_HLK2_1_answer === 2){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK2_1 = 2
                }
                else if (ULHLDT1_Log_HLK2_1.length === 1 && ULHLDT1_Log_HLK2_1_answer === 1) {
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK2_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK2_1 = 0

                if(this.mainJSON.taskChatWalk.results.ULHLDT1_Log_DTS1_1 === 3){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS1_1 = 1
                }
                else this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS1_1 = 0

                let ULHLDT1_Log_HLK4_1 = this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLK4_1.split(',')
                let ULHLDT1_Log_HLK4_1_answer = 0
                ULHLDT1_Log_HLK4_1.forEach(el => {
                    if (el === '1'){
                        ULHLDT1_Log_HLK4_1_answer++
                    }
                    if (el === '3'){
                        ULHLDT1_Log_HLK4_1_answer++
                    }
                })
                if(ULHLDT1_Log_HLK4_1.length === 2 && ULHLDT1_Log_HLK4_1_answer === 2){
                    this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK4_1 = 2
                }
                else if (ULHLDT1_Log_HLK4_1.length === 1 && ULHLDT1_Log_HLK4_1_answer === 1) {
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

                this.mainJSON.listOfTasks.forEach( el => {
                    if(el.name === 'taskChatWalk'){
                        el.done = true
                        let t = new Date()
                        this.mainJSON.results.dataTimeLastUpdate = this.mainJSON.results.dataTimeEndtaskChatWalk =
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
                    if(el.done === false){
                        this.listOfNotDoneTasks.push(el.name)
                    }
                })
                if(this.listOfNotDoneTasks.length === 0){
                    let t = new Date()
                    this.mainJSON.results.dataTimeLastUpdate = this.mainJSON.results.dataTimeEnd =
                        [
                            t.getFullYear(),
                            ('0' + (t.getMonth() + 1)).slice(-2),
                            ('0' + t.getDate()).slice(-2)
                        ].join('-') + ' ' + [
                            ('0' + (t.getHours())).slice(-2),
                            ('0' + (t.getMinutes())).slice(-2),
                            ('0' + t.getSeconds()).slice(-2)
                        ].join(':');
                    this.modalVisible = true
                    this.modalButtons = [
                        {value: "Выйти", status: 'exit'}
                    ]
                    this.modalMessage = 'Ты завершил все задания, нажми кнопку "Выйти" для выхода из системы.'
                }
                else {
                    let randomElement = this.listOfNotDoneTasks[Math.floor(Math.random()*this.listOfNotDoneTasks.length)]
                    this.mainJSON[randomElement].isShow = true
                    this.mainJSON["instructionShow"] = true
                    this.mainJSON["mainPageShow"] = false
                    this.listOfNotDoneTasks = []
                    this.mainJSON.taskChatWalk["isShow"] = false
                }
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
            },
            checkAnswer(status) {
                if(status === 'exit'){
                    this.mainJSON['resultsShow'] = true
                    /*this.mainJSON['loginShow'] = true
                    this.mainJSON['mainPageShow'] = false*/
                    this.mainJSON.taskChatWalk["isShow"] = false
                }
            },
        },
        mounted() {
            let el =  document.getElementById("main")
            el.addEventListener("DOMSubtreeModified", function () {
                this.counth = el.scrollHeight
            }, false);

            let block1 = document.getElementById("main");
            block1.scrollTop = block1.scrollHeight;
        }
    }
</script>

<style>
    .chat-body{
        background: white;
        height: calc(100% - 36px);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .chat-message-body {
        margin: 20px 20px;
    }
    .chat-message {
        background: #FFFFFF;
        border: 1px solid #A7B0C7;
        box-shadow: 0px 2px 4px rgb(190 190 190 / 50%);
        border-radius: 8px;
        padding: 10px;
    }
    .chat-message-answer {
        background: #74A2CE;
        color: white;
    }
    .message-answer {
        min-width: 200px;
        min-height: 30px;
        margin-bottom: 10px;
        border: 1px solid #A7B0C6;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 5px;
        color: #344A5F;
    }
    .message-answer:hover {
        background: #74A2CE;
        color: white;
    }

</style>