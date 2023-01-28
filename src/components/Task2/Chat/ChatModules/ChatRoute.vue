<template>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Мария
            </p>
            <div class="chat-message">
                <p>
                    Посмотрите, есть такое приложение:  <span style="color: blue;"
                                                              @click="showModal">https/route_maps/org</span>.
                    Можно, к примеру,
                    проложить маршрут для самоката от пункта проката самокатов (ул. Буковая, 26)
                    до парка «Зеленый сад» и для наглядности разместить его на слайде. Кто сейчас
                    за компьютером, можете проложить маршрут и прислать в чат?
                </p>
            </div>
        </div>
    </div>

    <div class="chat-message-body d-flex justify-content-end" v-if="this.mainJSON.task2.chatRouteShare">
        <div>
            <p class="message-answer">
                route_maps.org/map1
            </p>
        </div>
    </div>

    <div v-if="this.mainJSON.task2.chatRouteScrin">
        <img src="../../../../assets/mapZOH1.png" alt="" v-if="this.mainJSON.task2.carChoose" style="width: 100%">

        <img src="../../../../assets/mapZOH2.png" alt="" v-if="this.mainJSON.task2.busChoose" style="width: 100%">

        <img src="../../../../assets/mapZOH3.png" alt="" v-if="this.mainJSON.task2.bikeChoose" style="width: 100%">

        <img src="../../../../assets/mapZOH4.png" alt="" v-if="this.mainJSON.task2.manChoose" style="width: 100%">
    </div>

    <ChatRouteModal v-model:show="modalVisible" :blockID="blockID"
                  @update="checkAnswer"
    >
    </ChatRouteModal>
</template>

<script>
    import ChatRouteModal from "@/components/Task2/Chat/ChatModules/ChatRouteModal";
    import {mapGetters} from "vuex";
    export default {
        name: "ChatRoute",
        computed: {
            ...mapGetters(['mainJSON']),
        },
        components: {ChatRouteModal},
        props: {
            blockID: {}
        },
        data() {
            return {
                modalVisible: false,
            }
        },
        methods: {
            showModal(){
                this.modalVisible = true
            },
            checkAnswer(){
                this.modalVisible = false
                this.$emit('done', this.blockID)
            }
        }
    }
</script>

<style scoped>

</style>