<template>
    <div class="instruction-body">
        <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <div class="instruction-card">
                <div>
                    <p v-if="mainJSON.task1.isShow">{{constTextTaskNightInTheMuseum.instruction}}</p>
                    <p v-if="mainJSON.task2.isShow">{{mainJSON.task2.instruction}}</p>
                </div>
                <div class="d-flex justify-content-end">
                    <p style="font-style: italic; width: 700px; text-align: right;">
                        Все имена и события в тесте вымышлены, любые совпадения с реальными людьми и событиями случайны.
                    </p>
                </div>
                <div class="d-flex justify-content-center">
                    <MyButton style="width: 250px" @click="instruction" class="blue-buttons">Приступить</MyButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "InstructionPage",
        computed: {
            ...mapGetters(['mainJSON', 'constTextTaskNightInTheMuseum']),
        },
        methods: {
            instruction() {
                this.mainJSON['instructionShow'] = false
                this.mainJSON['mainPageShow'] = true
            }
        }
    }
</script>

<style scoped>
    .instruction-body {
        backdrop-filter: blur(5px);
        background: url("../assets/Background.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
        height: 100vh;
        background-size: cover;
    }
    .instruction-card {
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 957px;
        max-height: 750px;
        background: #fff;
        border: 1px solid #2a94d6;
        box-shadow: 0 2px 20px rgb(24 24 24 / 50%);
        border-radius: 15px;
        padding: 20px 40px;
    }
</style>