<template>
    <vue-resizable
            class="resizable"
            ref="resizableComponent"
            style="z-index: 999;"
            :dragSelector="dragSelector"
            :active="handlers"
            :fit-parent="fit"
            :width="mainJSON.taskChatWalk.width"
            :height="mainJSON.taskChatWalk.height"
            :minWidth="minW"
            :minHeight="minH"
            :left="mainJSON.taskChatWalk.left"
            :top="mainJSON.taskChatWalk.top"
    >
        <div class="d-flex justify-content-between align-items-center handle" style="padding: 0 10px">
            <div class="d-flex align-items-center">
                <p style="color: #FFFFFF;">Чат</p>
            </div>
            <p class="close-button" style="color: white; margin-right: 10px; font-size: 24px;">
                &times;
            </p>
        </div>
        <ChatBody/>
    </vue-resizable>
</template>


<script>
    import VueResizable from "vue-resizable";
    import {mapGetters} from "vuex";
    import ChatBody from "@/components/Task2/Chat/ChatBody";

    export default {
        name: "ChatModel",
        data() {
            /*      const tW = 1000;*/
            /*      const tH = 700;*/
            return {
                handlers: ["r", "rb", "b", "lb", "l", "lt", "t", "rt"],
                maxW: 1000,
                maxH: 700,
                minW: 700,
                minH: 200,
                fit: true,
                event: "",
                dragSelector: ".handle",
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        components: {
            ChatBody,
            VueResizable
        },
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