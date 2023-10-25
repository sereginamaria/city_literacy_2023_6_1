<template>
    <div class="dialog">
        <div class="dialog-content">
            <div class="d-flex flex-column">
                <p>Результаты выполнения теста "Городская грамотность"</p>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Компонент</th>
                        <th scope="col">Результат (%)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Просоциальная вовлеченность</td>
                        <td>{{ this.prosocialEngagement }}</td>
                    </tr>
                    <tr>
                        <td>Локальная грамотность</td>
                        <td>{{this.localLiteracy}}</td>
                    </tr>
                    <tr>
                        <td>Безопасность в городе</td>
                        <td>{{this.securityInTheCity}}</td>
                    </tr>
                    <tr>
                        <td>Здоровый образ жизни</td>
                        <td>{{this.healthyLifestyle}}</td>
                    </tr>
                    <tr>
                        <td>Применение цифровых технологий</td>
                        <td>{{this.applicationOfDigitalTechnologies}}</td>
                    </tr>
                    </tbody>
                </table>
                <p>Благодарим за участие!</p>
            </div>
            <MyButton @click="exit">Выйти</MyButton>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
    name: "FeedbackPage",
    data() {
        return {
            securityInTheCity: 0,
            localLiteracy: 0,
            healthyLifestyle: 0,
            applicationOfDigitalTechnologies: 0,
            prosocialEngagement: 0,
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
            this.mainJSON['feedbackShow'] = false
            this.mainJSON['allDone'] = true

            localStorage.clear()
            window.location.reload();

        }
    },
    mounted(){
        console.log('feedback')
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK1_2 === 1){
            this.securityInTheCity++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK1_2 === 2){
            this.securityInTheCity+=2
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK1_3 === 1){
            this.securityInTheCity++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK2_1 === 1){
            this.securityInTheCity++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK2_2 === 1){
            this.securityInTheCity++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK2_3 === 1){
            this.securityInTheCity++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCS4_1 === 1){
            this.securityInTheCity++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK1_4 === 1){
            this.securityInTheCity++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCS4_2 === 1){
            this.securityInTheCity++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCS4_3 === 1){
            this.securityInTheCity++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK3_1 === 1){
            this.securityInTheCity++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_SCK3_2 === 1){
            this.securityInTheCity++
        }


        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK1_1 === 1){
            this.localLiteracy++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK1_2 === 1){
            this.localLiteracy++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK1_3 === 1){
            this.localLiteracy++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK1_4 === 1){
            this.localLiteracy++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK3_1 === 1){
            this.localLiteracy++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK3_1 === 2){
            this.localLiteracy+=2
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK2_1 === 1){
            this.localLiteracy++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK4_1 === 1){
            this.localLiteracy++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK5_1 === 1){
            this.localLiteracy++
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK5_1 === 2){
            this.localLiteracy+=2
        }
        if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK6_1 === 1){
            this.localLiteracy++
        }


        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS1_1 === 1){
            this.healthyLifestyle++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS4_1 === 1){
            this.healthyLifestyle++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS2_1 === 1){
            this.applicationOfDigitalTechnologies++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS3_1 === 1){
            this.applicationOfDigitalTechnologies++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS5_1 === 1){
            this.healthyLifestyle++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK1_1 === 1){
            this.healthyLifestyle++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK1_1 === 2){
            this.healthyLifestyle+=2
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK2_1 === 1){
            this.healthyLifestyle++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK2_1 === 2){
            this.healthyLifestyle+=2
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS1_1 === 1){
            this.applicationOfDigitalTechnologies++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK4_1 === 1){
            this.healthyLifestyle++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK4_1 === 2){
            this.healthyLifestyle+=2
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTK1_1 === 1){
            this.applicationOfDigitalTechnologies++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK3_1 === 1){
            this.healthyLifestyle++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS4_2 === 1){
            this.healthyLifestyle++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS2_1 === 1){
            this.healthyLifestyle++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLK2_2 === 1){
            this.healthyLifestyle++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS2_2 === 1){
            this.applicationOfDigitalTechnologies++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS1_2 === 1){
            this.applicationOfDigitalTechnologies++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_DTS3_2 === 1){
            this.applicationOfDigitalTechnologies++
        }
        if(this.mainJSON.taskChatWalk.results.ULHLDT1_Score_HLS3_1 === 1){
            this.healthyLifestyle++
        }


        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK4_1 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK4_2 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK3 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK3_1 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK3_1 === 2){
            this.prosocialEngagement+=2
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score1_SEK2_1 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK2_2 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score1_SEK1_1 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score2_SEK1_1 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score3_SEK1_1 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score1_SEK5_1 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score2_SEK5_1 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK6_1 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK6_1 === 2){
            this.prosocialEngagement+=2
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SES1_1 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SES2 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SES3 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SES4 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SES5 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK3_3 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SEK3_3 === 2){
            this.prosocialEngagement+=2
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SES5_1 === 1){
            this.prosocialEngagement++
        }
        if(this.mainJSON.taskVolunteers.results.ULSE1_Score_SES1 === 1){
            this.prosocialEngagement++
        }

        // console.log(this.prosocialEngagement)
        // console.log(this.securityInTheCity)
        // console.log(this.localLiteracy)
        // console.log(this.healthyLifestyle)
        // console.log(this.applicationOfDigitalTechnologies)

        this.prosocialEngagement = Math.round(this.prosocialEngagement/23*100)
        this.securityInTheCity = Math.round(this.securityInTheCity/12*100)
        this.localLiteracy = Math.round(this.localLiteracy/11*100)
        this.healthyLifestyle = Math.round(this.healthyLifestyle/14*100)
        this.applicationOfDigitalTechnologies = Math.round(this.applicationOfDigitalTechnologies/7*100)
    }
}
</script>

<style scoped>
.dialog-content {
    /*overflow-y: scroll;*/
    max-height: 80vh;
    max-width: 80vw;
}
</style>