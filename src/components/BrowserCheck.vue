<template>
    <MyModal v-model:show="modalVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>
</template>

<script>
 /*   import detect from "detect.js";*/
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
            navigator.sayswho= (function(){
                var ua= navigator.userAgent;
                var tem;
                var M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if(/trident/i.test(M[1])){
                    tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
                    return 'IE '+(tem[1] || '');
                }
                if(M[1]=== 'Chrome'){
                    tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
                    if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
                }
                M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
                if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
                return M.join(' ');
            })();

            console.log(navigator.sayswho);

            /*var browser = detect.parse(navigator.userAgent);

            console.log(browser.browser.family )
            if(browser.browser.family === 'Opera' && browser.browser.version <= '90'){
                this.showModal()
            }
            if(browser.browser.family === 'Chrome' && browser.browser.version <= '102'){
                this.showModal()
            }
            if(browser.browser.family === 'Firefox' && browser.browser.version <= '108'){
                this.showModal()
            }*/

        }
    }
</script>

<style scoped>

</style>