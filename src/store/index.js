import Vuex from 'vuex'
import axios from "axios";

import date from "./date"
import constTaskNightInTheMuseum from "./constTaskNightInTheMuseum"
import constTaskChatWalk from "@/store/constTaskChatWalk";
import constTaskVolunteers from "@/store/constTaskVolunteers";

export default new Vuex.Store({
    state: {
        mainJSON: {},
        constTaskNightInTheMuseum: {},
        constTaskChatWalk: {},
        constTaskVolunteers: {},
        loginResponse: {}
    },
    actions: {
        get_mainJSON({commit}){
            if (!localStorage.login && !localStorage.hash) {
                console.log('get_mainJSON no local storage')
                commit('first_set_mainJSON', date.date)
                commit('set_constTaskNightInTheMuseum', constTaskNightInTheMuseum.constTaskNightInTheMuseum)
                commit('set_constTaskChatWalk', constTaskChatWalk.constTaskChatWalk)
                commit('set_constTaskVolunteers', constTaskVolunteers.constTaskVolunteers)
            }
            else {
                axios.post( "/city_literacy/2023_6_1/server_request/auth_city.php", {
                    login: localStorage.login,
                    hash: localStorage.hash
                })
                    .then(function (response) {
                        console.log('get_mainJSON local storage')
                        if (response.data.status === "ok") {
                            console.log(response.data)
                            commit('set_mainJSON', JSON.parse(response.data.json))
                            commit('set_constTaskNightInTheMuseum', constTaskNightInTheMuseum.constTaskNightInTheMuseum)
                            commit('set_constTaskChatWalk', constTaskChatWalk.constTaskChatWalk)
                            commit('set_constTaskVolunteers', constTaskVolunteers.constTaskVolunteers)
                        }
                        if (response.data.status === "error") {
                            localStorage.clear()
                            window.location.reload();
                            commit('set_mainJSON', date.date)
                            commit('set_constTaskNightInTheMuseum', constTaskNightInTheMuseum.constTaskNightInTheMuseum)
                            commit('set_constTaskChatWalk', constTaskChatWalk.constTaskChatWalk)
                            commit('set_constTaskVolunteers', constTaskVolunteers.constTaskVolunteers)
                        }
                    })
                    .catch(function () {
                    })
            }
        }
    },
    mutations: {
        first_set_mainJSON: (state, el) => {
            state.mainJSON = el

            let randomElement = state.mainJSON.listOfTasks[Math.floor(Math.random()*state.mainJSON.listOfTasks.length)]
            state.mainJSON[randomElement.name].isShow = true
        },
        set_mainJSON: (state, el) => {
            state.mainJSON = el
        },
        set_constTaskNightInTheMuseum: (state, el) => {
            state.constTaskNightInTheMuseum = el
        },
        set_constTaskChatWalk: (state, el) => {
            state.constTaskChatWalk = el
        },
        set_constTaskVolunteers: (state, el) => {
            state.constTaskVolunteers = el
        },
        push_login: (state, auth) => {
            axios.post("/city_literacy/2023_6_1/server_request/auth_city.php", {  // todo разница между авторизацией и аутентификацией
                loginJSON: {
                    login: auth.login,
                    password: auth.password
                }
            })
                .then(function (response) {
                    if( response.data.status === "ok") {
                        console.log('ok')
                        console.log(response.data)
                        if(response.data.message === "re_login_success") {
                            state.mainJSON =  JSON.parse(response.data.json)
                            console.log('relogin')
                            console.log( response.data)
                            state.mainJSON.hash = response.data.hash
                            console.log(state.mainJSON)
                        }
                        else {
                            console.log('norelogin:')
                            console.log(response.data)
                            state.mainJSON.login = response.data.login
                            state.mainJSON.hash = response.data.hash
                            state.mainJSON.loginShow = false
                            state.mainJSON.instructionShow = true
                            let t = new Date()
                            state.mainJSON.results.dataTimeStart =
                                [
                                    t.getFullYear(),
                                    ('0' + (t.getMonth() + 1)).slice(-2),
                                    ('0' + t.getDate()).slice(-2)
                                ].join('-') + ' ' + [
                                    ('0' + (t.getHours())).slice(-2),
                                    ('0' + (t.getMinutes())).slice(-2),
                                    ('0' + t.getSeconds()).slice(-2)
                                ].join(':');
                        }

                        localStorage.hash = response.data.hash
                        localStorage.login = response.data.login

                        axios.post( "/city_literacy/2023_6_1/server_request/receiver.php", {
                            mainJSON: state.mainJSON
                        })
                    }
                    if (response.data.status === "error") {  // todo constants to enums
                        state.loginResponse = response.data
                    }
                })
                .catch(function () {
                })
        },
        push_mainJSON: (state, push) => {
            if (localStorage.login && localStorage.hash){
                axios.post( "/city_literacy/2023_6_1/server_request/receiver.php", {
                    mainJSON: push.push
                })
                    .then(function () {
                     // todo ?????????????????????????????
                     /*   Vue.set(state, "responsePushJSON", response.data)*/

                    })
                    .catch(function () {
     /*                   Vue.set(state, "responsePushJSON", "noInternet")*/
                        // todo ?????????????????????????????
                    })
            }
            else {

                window.location.reload();   // todo проверить случайбесконечных перезагрузок
            }
        },
    },
    getters: {
        mainJSON(state){
            return state.mainJSON;
        },
        constTaskNightInTheMuseum(state){
            return state.constTaskNightInTheMuseum;
        },
        constTaskChatWalk(state){
            return state.constTaskChatWalk;
        },
        constTaskVolunteers(state){
            return state.constTaskVolunteers;
        },
        loginResponse(state){
            return state.loginResponse;
        }
    },
})

