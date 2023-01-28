<template>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Мария
            </p>
            <div class="chat-message">
                <p>
                    Будет здорово обсудить со школьниками, в каких парках лучше не только кататься на самокате, но и просто гулять.
                    На слайде разместим вот такую интерактивную карту ‒ <span @click="showModal" style="color: blue;">ссылка</span>.
                    Надо отметить на ней самые полезные для здоровья
                    зоны для прогулок и спорта. </p>
            </div>
        </div>
    </div>

    <ChatMapModal v-model:show="modalVisible" :blockID="blockID"
             @update="checkAnswer"
    >
    </ChatMapModal>
</template>

<script>
    import ChatMapModal from "@/components/Task2/Chat/ChatModules/ChatMapModal";
    export default {
        name: "ChatMap",
        components: {ChatMapModal},
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