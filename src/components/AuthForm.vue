<template>
    <div class="w-100 h-100 position-absolute d-flex flex-column justify-content-center align-items-center">
        <img src="../assets/logoMCKO.png" alt="" style="margin-bottom: 20px">
        <h3 class="text-bold">Вариант 1</h3>
        <form class="row g-3"
              @submit.prevent="loginUser"
        >
            <div class="col-12">
                <label for="inputLogin" class="form-label">Логин</label>
                <input class="form-control" id="inputLogin"
                       placeholder="Введите логин"
                       v-model="login"
                >
            </div>
            <div class="col-12">
                <label for="inputPassword" class="form-label">Пароль</label>
                <input type="password" class="form-control" id="inputPassword"
                       placeholder="Введите пароль"
                       v-model="password"
                >
            </div>
            <div class="col-12 d-flex justify-content-center">
                <MyButton style="width: 250px" class="blue-buttons">Войти</MyButton>
            </div>
        </form>

        <div style="color: lightgrey; position: absolute; bottom: 0; right: 0">v-3.0.2.</div>

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
        name: "AuthForm",
        data() {
            return {
                login: '',
                password: '',
                modalVisible: false,
                modalButtons: [],
                modalMessage: ''
            }
        },
        computed: {
            ...mapGetters(['loginResponse']),
        },
        methods: {
            ...mapMutations(['push_login']),
            loginUser(){
                this.push_login({
                    login: this.login,
                    password: this.password
                })
            },
            checkAnswer(status){
                this.modalVisible = false

                if (status === 'results'){
                    this.$emit('showResults')
                }
            }
        },
        watch: {
            loginResponse: {
                handler(el) {
                    if (el.json !== undefined) {
                        if (JSON.parse(el.json).allDone === true){
                            this.modalVisible = true
                            this.modalButtons = [
                                {value: "OK", status: true},
                                {value: "Мои результаты", status: 'results'}
                            ]
                            this.modalMessage = 'Вы уже выполнили все задания.'
                        }
                    }
                    if (el.status === "error" && el.message === "login_failed_bad_login") {
                        this.modalVisible = true
                        this.modalButtons = [
                            {value: "OK", status: true}
                        ]
                        this.modalMessage = 'Неверный логин'
                    }
                    if (el.status === "error" && el.message === "login_failed_bad_pass") {
                        this.modalVisible = true
                        this.modalButtons = [
                            {value: "OK", status: true}
                        ]
                        this.modalMessage = 'Неверный пароль'
                    }
                },
                immediate: true
            },
        }
    }
</script>

<style scoped>
</style>