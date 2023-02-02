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
                    <div v-for="screen in mainJSON.task2.screens" :key="screen.id">
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
</template>

<script>
    import {mapGetters} from "vuex";
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
        computed: {
            ...mapGetters(['mainJSON', 'constTaskChatWalk']),
            screenID(){
                return this.mainJSON.task2.shownScreenID
            },
            currentScreen(){
                return this.mainJSON.task2.screens[this.screenID]
            },
            screenConst(){
                return this.constTaskChatWalk.screens[this.screenID]
            },
        },
        methods: {
            endTask(){
                this.mainJSON.task2["isShow"] = false
                this.mainJSON.task3["isShow"] = true
                this.mainJSON["instructionShow"] = true
                this.mainJSON["mainPageShow"] = false
            }
        },
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