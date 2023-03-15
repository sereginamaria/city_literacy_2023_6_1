<template>
    <MyModal v-model:show="modalVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>
</template>

<script>
    import detect from "detect.js";
    export default {
        name: "BrowserCheck",
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: '',
            }
        },
        methods: {
            showModal(){
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Хорошо", status: 'close'}
                ]
                this.modalMessage = 'Ваш браузер устарел. Для правильной работы приложения рекомендуем обновить его до последней версии'
            },
            checkAnswer(){
                this.modalVisible = false
            }
        },
        created() {
            var browser = detect.parse(navigator.userAgent);

            console.log(browser.browser.family )
            if(browser.browser.family === 'Opera' && browser.browser.version <= '90'){
                this.showModal()
            }
            if(browser.browser.family === 'Chrome' && browser.browser.version <= '102'){
                this.showModal()
            }
            if(browser.browser.family === 'Firefox' && browser.browser.version <= '108'){
                this.showModal()
            }

        }
    }
</script>

<style scoped>

</style>