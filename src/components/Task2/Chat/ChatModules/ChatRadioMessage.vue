<template>

    <div v-if="(currentScreenConst.id === 4 && this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLS5_1 !== 2) ||
                (currentScreenConst.id === 7 && this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLK4_1 !== '1,3') ||
                (currentScreenConst.id === 7 && this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLK4_1 !== '3,1') ||
                (currentScreenConst.id === 10 && this.mainJSON.taskChatWalk.results.ULHLDT1_Log_HLK3_1 !== 2) ">
        <div class="d-flex chat-message-body" v-for="message_dop in currentScreenConst.message_dop" :key="message_dop.text">
            <img src="../../../../assets/TaskChatWalkZhenya.png" alt="Аватар Женя" style="margin-right: 20px; width: 50px; height: 50px" v-if="message_dop.name === 'Женя'">
            <img src="../../../../assets/TaskChatWalkDima.png" alt="Аватар Дима" style="margin-right: 20px; width: 50px; height: 50px" v-if="message_dop.name === 'Дима'">
            <img src="../../../../assets/TaskChatWalkMasha.png" alt="Аватар Маша" style="margin-right: 20px; width: 50px; height: 50px" v-if="message_dop.name === 'Маша'">
            <div>
                <p class="text-bold">
                    {{message_dop.name}}
                </p>
                <div class="chat-message">
                    <p>
                        {{message_dop.text}}
                    </p>
                    <div v-if="currentScreenConst.src !== '' && currentScreenConst.message_dop.indexOf(message_dop) === (currentScreenConst.message_dop.length - 1)">
                        <p style="font-style: italic">Нажми на картинку, чтобы ее развернуть</p>
                        <img :src=" require('../../../../assets/' + currentScreenConst.src + '.webp') " alt="" @click="openModalDialog(currentScreenConst.src)"
                             style="width: 40%"
                        >
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="d-flex chat-message-body" v-for="message in currentScreenConst.message" :key="message.text">
        <img src="../../../../assets/TaskChatWalkZhenya.png" alt="Аватар Женя" style="margin-right: 20px; width: 50px; height: 50px" v-if="message.name === 'Женя'">
        <img src="../../../../assets/TaskChatWalkDima.png" alt="Аватар Дима" style="margin-right: 20px; width: 50px; height: 50px" v-if="message.name === 'Дима'">
        <img src="../../../../assets/TaskChatWalkMasha.png" alt="Аватар Маша" style="margin-right: 20px; width: 50px; height: 50px" v-if="message.name === 'Маша'">
        <div>
            <p class="text-bold">
                {{message.name}}
            </p>
            <div class="chat-message">
                <p>
                    {{message.text}}
                </p>
                <div v-if="currentScreenConst.src !== '' && currentScreenConst.message.indexOf(message) === (currentScreenConst.message.length - 1)">
                    <p style="font-style: italic">Нажми на картинку, чтобы ее развернуть</p>
                    <img :src=" require('../../../../assets/' + currentScreenConst.src + '.webp') " alt="" @click="openModalDialog(currentScreenConst.src)"
                         style="width: 40%"
                    >
                </div>

            </div>
        </div>
    </div>

    <div class="d-flex justify-content-end" v-if="this.mainJSON.taskChatWalk[currentScreenConst.resultIndicator] !== 'NA'">
        <div v-if="typeof this.mainJSON.taskChatWalk[currentScreenConst.resultIndicator] === 'string'">
            <p class="chat-message-answer chat-message">
                {{this.mainJSON.taskChatWalk[currentScreenConst.resultIndicator]}}
            </p>
        </div>
        <div v-else>
            <p class="chat-message-answer chat-message" v-for="el in this.mainJSON.taskChatWalk[currentScreenConst.resultIndicator]" :key="el">
                {{el.value}}
            </p>
        </div>
    </div>

    <div v-if="showModal" class="dialog">
        <div class="dialog-content" style="max-width: 80%; max-height: 85%; padding: 0; margin: 0 auto">
            <div class="d-flex justify-content-end align-items-center handle" style="padding: 0 10px">
                <p class="close-button" @click="closeModalDialog" style="color: white; margin-right: 10px; font-size: 24px;">
                    &times;
                </p>
            </div>
            <div style="height: calc(100% - 36px);">
                <div style="height: 100%">
                    <img :src=" require('../../../../assets/' + modalSrc + '.webp') " alt="" style="width: 100%; height: 100%;" class="p-3">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatRadioMessage",
        data() {
            return {
                showModal: false,
                modalSrc: '',
            }
        },
        props: {
            currentScreenConst: {},
            currentScreen: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            openModalDialog(src){
                this.showModal = true
                this.modalSrc = src
            },
            closeModalDialog(){
                this.showModal = false
            }
        }
    }
</script>

<style scoped>
    .handle{
        height: 36px;
        background: #45607B;
        box-shadow: 0px 0px 5px rgba(201, 201, 201, 0.5);
        border-radius: 10px 10px 0px 0px;
    }
</style>