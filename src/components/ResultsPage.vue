<template>
    <div class="dialog">
        <div class="dialog-content">
            <div class="d-flex">
               <!-- <div class="m-3">
                    <p>TIME</p>
                    <div v-for="result in this.resultsTime" :key="result">
                        {{result.key}}: {{result.value}}
                    </div>
                </div>-->
                <div class="m-3">
                    <p>Ночь в музее</p>
                    <div v-for="result in this.resultsTaskNightInTheMuseum" :key="result">
                        {{result.key}}: {{result.value}}
                    </div>
                </div>
                <div class="m-3">
                    <p>Чат прогулка</p>
                    <div v-for="result in this.resultsTaskChatWalk" :key="result">
                        {{result.key}}: {{result.value}}
                    </div>
                </div>
                <div class="m-3">
                    <p>Волонтеры</p>
                    <div v-for="result in this.resultsTaskVolunteers" :key="result">
                        {{result.key}}: {{result.value}}
                    </div>
                </div>
            </div>
           <MyButton @click="exit">Выйти</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ResultsPage",
        data() {
            return {
                resultsTaskNightInTheMuseum: [],
                resultsTaskChatWalk: [],
                resultsTaskVolunteers: [],
                resultsTime: []
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
          exit(){
              this.mainJSON['loginShow'] = true
              this.mainJSON['mainPageShow'] = false
              this.mainJSON['resultsShow'] = false
            }
        },
        mounted(){
            for (const [key, value] of Object.entries(this.mainJSON.taskNightInTheMuseum.results)) {
                this.resultsTaskNightInTheMuseum.push({
                    key: `${key}`,
                    value: `${value}`
                })
            }
            for (const [key, value] of Object.entries(this.mainJSON.taskChatWalk.results)) {
                this.resultsTaskChatWalk.push({
                    key: `${key}`,
                    value: `${value}`
                })
            }
            for (const [key, value] of Object.entries(this.mainJSON.taskVolunteers.results)) {
                this.resultsTaskVolunteers.push({
                    key: `${key}`,
                    value: `${value}`
                })
            }
            for (const [key, value] of Object.entries(this.mainJSON.results)) {
                this.resultsTime.push({
                    key: `${key}`,
                    value: `${value}`
                })
            }
        }
    }
</script>

<style scoped>
    .dialog-content {
        overflow-y: scroll;
        max-height: 80vh;
        max-width: 80vw;
    }
</style>