<template>
    <vue-resizable
            class="resizable"
            ref="resizableComponent"
            style="z-index: 999;"
            :dragSelector="dragSelector"
            :active="handlers"
            :fit-parent="fit"
            :width="width"
            :height="height"
            :minWidth="minW"
            :minHeight="minH"
            :left="left"
            :top="top"
    >
        <div class="d-flex justify-content-between align-items-center handle" style="padding: 0 10px">
            <div class="d-flex align-items-center">
                <p style="color: #FFFFFF;">Чат</p>
            </div>
            <p class="close-button" @click="closeChat" style="color: white; margin-right: 10px;">
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
                left: 20,
                top: 70,
                height: `80%`,
                width: '70%',
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
        methods: {
            closeChat(){
                this.mainJSON.task2.chatShow = false
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