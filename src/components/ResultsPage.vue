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
                <div class="m-3">
                    <p>Анкета</p>
                    <div v-for="result in this.resultsForms" :key="result">
                        {{result.key}}: {{result.value}}
                    </div>
                </div>
            </div>
            <div class="m-3">
                <div v-for="result in this.resultsTime" :key="result">
                    {{result.key}}: {{result.value}}
                </div>
            </div>
           <MyButton @click="exit">Выйти</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "ResultsPage",
        data() {
            return {
                resultsTaskNightInTheMuseum: [],
                resultsTaskChatWalk: [],
                resultsTaskVolunteers: [],
                resultsTime: [],
                resultsForms: []
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
          exit(){
              this.push_mainJSON({
                  push: this.mainJSON
              })

              let d = new Date()
              this.mainJSON.results.dataTimeEnd =  this.mainJSON.results.dataTimeLastUpdate = [
                  d.getFullYear(),
                  ('0' + (d.getMonth() + 1)).slice(-2),
                  ('0' + d.getDate()).slice(-2)
              ].join('-') + ' ' + [
                  ('0' + (d.getHours())).slice(-2),
                  ('0' + (d.getMinutes())).slice(-2),
                  ('0' + d.getSeconds()).slice(-2)
              ].join(':');

              this.mainJSON.taskVolunteers["isShow"] = false
              this.mainJSON.taskChatWalk["isShow"] = false
              this.mainJSON.taskNightInTheMuseum["isShow"] = false

              this.mainJSON['loginShow'] = true
              this.mainJSON['mainPageShow'] = false
              this.mainJSON['resultsShow'] = false

              localStorage.clear()

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
            for (const [key, value] of Object.entries(this.mainJSON.forms.results)) {
                this.resultsForms.push({
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