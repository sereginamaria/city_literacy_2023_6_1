<template>
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
                <img :src=" require('../../../../assets/' + currentScreenConst.src + '.png') " alt=""
                     v-if="currentScreenConst.src !== '' && currentScreenConst.message.indexOf(message) === (currentScreenConst.message.length - 1)" style="width: 100%"
                >
            </div>

        </div>
    </div>

    <div class="d-flex justify-content-end" v-if="this.mainJSON.task2.results[currentScreenConst.resultIndicator] !== 'NA'">
        <div v-if="typeof this.mainJSON.task2.results[currentScreenConst.resultIndicator] === 'string'">
            <p class="chat-message-answer chat-message">
                {{this.mainJSON.task2.results[currentScreenConst.resultIndicator]}}
                123456
            </p>
        </div>
        <div v-else>
            <p class="chat-message-answer chat-message" v-for="el in this.mainJSON.task2.results[currentScreenConst.resultIndicator]" :key="el">
                {{el.value}}
                hsdkcwe
            </p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatRadioMessage",
        props: {
            currentScreenConst: {},
            currentScreen: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>

</style>