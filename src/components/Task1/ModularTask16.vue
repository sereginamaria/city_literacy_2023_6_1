<template>
    <!--Задание 13 реплика 1-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_66Show">
        <div class="background-text">
            <p>
                Коля: Ребята, сегодня я отлично провёл время и узнал много нового! Мне пора возвращаться обратно в музей, на мою картину. Спасибо вам! Надеюсь, скоро увидимся.
            </p>
            <MyButton class="white-buttons" @click="showModal">Завершить задание</MyButton>
        </div>
    </div>
    <MyModal v-model:show="modalVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "ModularTask16",
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
            ...mapMutations(["push_mainJSON"]),
            showModal() {
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Хорошо", status: true}
                ]
                this.modalMessage = 'Молодец! Переходи к следующему заданию!'
            },
            checkAnswer(status) {
                this.modalVisible = false

                if (status) {
                    this.mainJSON.task1.modularTask1_66Show = false
                    this.mainJSON.task1.modularTask2_0Show = true
                    this.mainJSON['task1Show'] = false
                    this.mainJSON['task2Show'] = true
                    this.mainJSON['instructionShow'] = true
                    this.mainJSON['mainPageShow'] = false
                }
                let t = new Date()
                this.mainJSON.results.dataTimeLastUpdate =
                    [
                        t.getFullYear(),
                        ('0' + (t.getMonth() + 1)).slice(-2),
                        ('0' + t.getDate()).slice(-2)
                    ].join('-') + ' ' + [
                        ('0' + (t.getHours())).slice(-2),
                        ('0' + (t.getMinutes())).slice(-2),
                        ('0' + t.getSeconds()).slice(-2)
                    ].join(':');

                this.push_mainJSON({
                    push: this.mainJSON
                })
            }
        }
    }
</script>

<style scoped>
    .background0{
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
    }
    .background0 {
        background: url("../../assets/BackgroundModule61.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
</style>