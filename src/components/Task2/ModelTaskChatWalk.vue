<template>
    <div class="background" :style="{ background: 'url(' + require('../../assets/TaskChatBackground.webp') + ')'}">
        <ChatModel v-if="this.mainJSON.taskChatWalk.chatShow"/>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import ChatModel from "@/components/Task2/Chat/ChatModel";

    export default {
        name: "ModelTaskChatWalk",
        components: {ChatModel},
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>