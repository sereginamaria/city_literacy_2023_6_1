<template>
    <div class="d-flex chat-body">
        <!--Левая часть-->
        <div style="border-right: 1px solid #A7B0C6; width: 20%; padding: 20px">
            <div class="d-flex">
                <img src="" alt="Avatar" style="margin-right: 20px">
                <div>
                    <p class="text-bold">
                        Софья Ивановна
                    </p>
                </div>
            </div>
            <div class="d-flex">
                <img src="" alt="Avatar" style="margin-right: 20px">
                <div>
                    <p class="text-bold">
                        Мария
                    </p>
                </div>
            </div>
            <div class="d-flex">
                <img src="" alt="Avatar" style="margin-right: 20px">
                <div>
                    <p class="text-bold">
                        Егор Н.
                    </p>
                </div>
            </div>
        </div>

        <!--Правая часть -->
        <div class="d-flex flex-column" style="width: 80%">
            <div id="main" class="body-message" style="padding: 10px;border-bottom: 1px solid #A7B0C6; height: 60%" >
                <div style="overflow-y: scroll; padding-right: 10px; height: 100%">
                    <!--Приветственное сообщение-->
                    <div class="d-flex chat-message-body">
                        <img src="" alt="Avatar" style="margin-right: 20px">
                        <div>
                            <p class="text-bold">
                                Софья Ивановна
                            </p>
                            <div class="chat-message">
                                <p>
                                    Ребята, добрый день! В этом чате мы будем обсуждать проблемы здорового образа жизни (ЗОЖ), которые войдут в лекцию. Давайте подумаем о темах, на которые стоит поговорить на лекции со школьниками. Основные тезисы предлагаю вынести в презентацию нашей лекции.
                                </p>
                            </div>

                        </div>
                    </div>

                    <!--Block1-->
                    <div v-if="mainJSON.task2.block1MessageShow">
                        <ChatCheckBox1Message/>
                    </div>

                    <!--Block2-->
                    <div v-if="mainJSON.task2.block2MessageShow">
                        <ChatRadio1Message/>
                    </div>

                    <!--Block3-->
                    <div v-if="mainJSON.task2.block3MessageShow">
                        <ChatRadio2Message/>
                    </div>

                    <!--Block4-->
                    <div v-if="mainJSON.task2.block4MessageShow">
                        <ChatRadio3Message/>
                    </div>

                    <!--Block5-->
                    <div v-if="mainJSON.task2.block5MessageShow">
                        <ChatRadio4Message/>
                    </div>

                    <!--Block6-->
                    <div v-if="mainJSON.task2.block6MessageShow">
                        <ChatCheckBox2Message/>
                    </div>

                    <!--Block7-->
                    <div v-if="mainJSON.task2.block7MessageShow">
                        <ChatRadio5Message/>
                    </div>

                    <!--Block8-->
                    <div v-if="mainJSON.task2.block8MessageShow">
                        <ChatMap @done="showNextBlock" :blockID="8"/>
                    </div>

                    <!--Block9-->
                    <div v-if="mainJSON.task2.block9MessageShow">
                        <ChatRadio6Message/>
                    </div>

                    <!--Block10-->
                    <div v-if="mainJSON.task2.block10MessageShow">
                        <ChatRoute @done="showNextBlock" :blockID="10"/>
                    </div>

                    <!--Block11-->
                    <div v-if="mainJSON.task2.block11MessageShow">
                        <ChatRadio7Message/>
                    </div>

                    <!--Block12-->
                    <div v-if="mainJSON.task2.block12MessageShow">
                        <ChatMenu @done="showNextBlock" :blockID="12"/>
                    </div>
                </div>
            </div>

            <!-- Варианты ответов -->


            <div id="main3" class="body-answers" style="padding: 10px; height: 40%" >
                <div style="height: 100%; overflow-y: scroll; padding-right: 10px;">
                    <!--Block1-->
                    <div v-if="mainJSON.task2.block1AnswerShow">
                        <ChatCheckBox1Answer :blockID="1" @done="showNextBlock"/>
                    </div>

                    <!--Block2-->
                    <div v-if="mainJSON.task2.block2AnswerShow">
                        <ChatRadio1Answer :blockID="2" @done="showNextBlock"/>
                    </div>

                    <!--Block3-->
                    <div v-if="mainJSON.task2.block3AnswerShow">
                        <ChatRadio2Answer :blockID="3" @done="showNextBlock"/>
                    </div>

                    <!--Block4-->
                    <div v-if="mainJSON.task2.block4AnswerShow">
                        <ChatRadio3Answer :blockID="4" @done="showNextBlock"/>
                    </div>

                    <!--Block5-->
                    <div v-if="mainJSON.task2.block5AnswerShow">
                        <ChatRadio4Answer :blockID="5" @done="showNextBlock"/>
                    </div>

                    <!--Block6-->
                    <div v-if="mainJSON.task2.block6AnswerShow">
                        <ChatCheckBox2Answer :blockID="6" @done="showNextBlock"/>
                    </div>

                    <!--Block7-->
                    <div v-if="mainJSON.task2.block7AnswerShow">
                        <ChatRadio5Answer :blockID="7" @done="showNextBlock"/>
                    </div>

                    <!--Block8-->
                    <div v-if="mainJSON.task2.block8AnswerShow">

                    </div>

                    <!--Block9-->
                    <div v-if="mainJSON.task2.block9AnswerShow">
                        <ChatRadio6Answer :blockID="9" @done="showNextBlock"/>
                    </div>

                    <!--Block10-->
                    <div v-if="mainJSON.task2.block10AnswerShow">

                    </div>

                    <!--Block11-->
                    <div v-if="mainJSON.task2.block11AnswerShow">
                        <ChatRadio7Answer :blockID="11" @done="showNextBlock"/>
                    </div>

                    <!--Block12-->
                    <div v-if="mainJSON.task2.block12AnswerShow">

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
    import ChatCheckBox1Message from "@/components/Task2/Chat/ChatModules/ChatCheckBox1Message";
    import ChatCheckBox1Answer from "@/components/Task2/Chat/ChatModules/ChatCheckBox1Answer";
    import {mapGetters} from "vuex";
    import ChatRadio1Message from "@/components/Task2/Chat/ChatModules/ChatRadio1Message";
    import ChatRadio1Answer from "@/components/Task2/Chat/ChatModules/ChatRadio1Answer";
    import ChatCheckBox2Message from "@/components/Task2/Chat/ChatModules/ChatCheckBox2Message";
    import ChatRadio4Message from "@/components/Task2/Chat/ChatModules/ChatRadio4Message";
    import ChatRadio3Message from "@/components/Task2/Chat/ChatModules/ChatRadio3Message";
    import ChatRadio2Message from "@/components/Task2/Chat/ChatModules/ChatRadio2Message";
    import ChatRadio2Answer from "@/components/Task2/Chat/ChatModules/ChatRadio2Answer";
    import ChatRadio3Answer from "@/components/Task2/Chat/ChatModules/ChatRadio3Answer";
    import ChatRadio4Answer from "@/components/Task2/Chat/ChatModules/ChatRadio4Answer";
    import ChatCheckBox2Answer from "@/components/Task2/Chat/ChatModules/ChatCheckBox2Answer";
    import ChatRadio5Message from "@/components/Task2/Chat/ChatModules/ChatRadio5Message";
    import ChatRadio5Answer from "@/components/Task2/Chat/ChatModules/ChatRadio5Answer";
    import ChatMap from "@/components/Task2/Chat/ChatModules/ChatMap";
    import ChatRadio6Message from "@/components/Task2/Chat/ChatModules/ChatRadio6Message";
    import ChatRadio6Answer from "@/components/Task2/Chat/ChatModules/ChatRadio6Answer";
    import ChatRoute from "@/components/Task2/Chat/ChatModules/ChatRoute";
    import ChatRadio7Answer from "@/components/Task2/Chat/ChatModules/ChatRadio7Answer";
    import ChatRadio7Message from "@/components/Task2/Chat/ChatModules/ChatRadio7Message";
    import ChatMenu from "@/components/Task2/Chat/ChatModules/ChatMenu";
    export default {
        name: "ChatBody",
        components: {
            ChatMenu,
            ChatRadio7Message,
            ChatRadio7Answer,
            ChatRoute,
            ChatRadio6Answer,
            ChatRadio6Message,
            ChatMap,
            ChatRadio5Answer,
            ChatRadio5Message,
            ChatCheckBox2Answer,
            ChatRadio4Answer,
            ChatRadio3Answer,
            ChatRadio2Answer,
            ChatRadio2Message,
            ChatRadio3Message,
            ChatRadio4Message,
            ChatCheckBox2Message,
            ChatRadio1Answer, ChatRadio1Message, ChatCheckBox1Answer, ChatCheckBox1Message},
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
            showNextBlock(blockID){
                if(blockID !== 12){
                    let nextBlockID = blockID + 1

                    this.mainJSON.task2["block" + nextBlockID + "MessageShow"] = true
                    this.mainJSON.task2["block" + nextBlockID + "AnswerShow"] = true
                    this.mainJSON.task2["block" + blockID + "AnswerShow"] = false
                }
                else {
                    this.modalVisible = true
                    this.modalButtons = [
                        {value: "Завершить", status: "nextTask"},
                    ]
                    this.modalMessage = 'Ты выполнил все задачи, переходи к следующему заданию.'
                }
            },
            checkAnswer(status){
                if(status === "nextTask"){
                    this.mainJSON["task2Show"] = false
                    this.mainJSON["task3Show"] = true
                    this.mainJSON["instructionShow"] = true
                    this.mainJSON["mainPageShow"] = false
                }
            }
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
    .chat-content {
        overflow-y: scroll;
        padding-right: 10px;
        height: 100%;
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