<template>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Мария
            </p>
            <div class="chat-message">
                <p>
                    Хочу вернуться к вопросу питания. Вы знаете, что в нашем волонтерском центре открывают
                    столовую? Сейчас я помогаю администрации в составлении <span style="color: blue;"
                                                                                 @click="showModal">
                                                                     меню </span> :) Я тут подготовила опрос
                    для выбора блюд и напитков. Пожалуйста, посмотрите и выделите цветом хотя бы пять пунктов
                    для нового меню. Постарайтесь выбрать блюда из каждого раздела. Для того, чтобы увеличить,
                    кликните на макет.
                </p>
            </div>
        </div>
    </div>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Егор Н.
            </p>
            <div class="chat-message">
                <p>
                    Так, я ответил.
                </p>
            </div>
        </div>
    </div>
    <div class="d-flex chat-message-body">
        <img src="" alt="Avatar" style="margin-right: 20px">
        <div>
            <p class="text-bold">
                Софья Ивановна
            </p>
            <div class="chat-message">
                <p>
                    Я тоже.
                </p>
            </div>
        </div>
    </div>

    <ChatMenuModal v-model:show="modalVisible" :blockID="blockID"
                    @update="checkAnswer"
    >
    </ChatMenuModal>
</template>

<script>
    import ChatMenuModal from "@/components/Task2/Chat/ChatModules/ChatMenuModal";
    export default {
        name: "ChatMenu",
        components: {ChatMenuModal},
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