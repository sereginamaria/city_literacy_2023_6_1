<template>
    <div class="dialog">
        <div class="dialog-content">
            <div class="d-flex flex-column">
                <h2 style="text-align: center">Все задания выполнены!</h2>
                <h3 style="text-align: center">О твоей городской грамотности</h3>
                <p>Ты - <span style="text-decoration: underline">{{ this.finalResult }} </span> ! </p>
                <p>В тесте были задания, связанные с разными важными вопросами жизни в крупном мегаполисе. 
                  В таблице приведен твой уровень по отдельным направлениям.
                </p>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Направление</th>
                        <th scope="col">Процент выполнения</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                          <p>Просоциальная вовлеченность</p>
                          <p style="color: gray; font-style: italic">(задания про твою готовность заботиться о городе, его жителях и природе)</p>
                        </td>
                        <td>{{ this.prosocialEngagement }}</td>
                    </tr>
                    <tr>
                       <td>
                          <p>Локальная грамотность</p>
                          <p style="color: gray; font-style: italic">(задания про историю, культуру и особенности нашего города)</p>
                        </td>
                        <td>{{this.securityInTheCity}}</td>
                    </tr>
                    <tr>
                       <td>
                          <p>Безопасность в городе</p>
                          <p style="color: gray; font-style: italic">(задания про безопасное взаимодействие с городом: с людьми и транспортом)</p>
                        </td>
                        <td>{{this.securityInTheCity}}</td>
                    </tr>
                    <tr>
                       <td>
                          <p>Здоровый образ жизни</p>
                          <p style="color: gray; font-style: italic">(задания про поддержание твоего здоровьяи благополучия в городе)</p>
                        </td>
                        <td>{{this.healthyLifestyle}}</td>
                    </tr>
                    <tr>
                       <td>
                          <p>Применение цифровых технологий</p>
                          <p style="color: gray; font-style: italic">(задания про разные городские цифровые ресурсы и сервисы)</p>
                        </td>
                        <td>{{this.applicationOfDigitalTechnologies}}</td>
                    </tr>
                    </tbody>
                </table>
                <h3 style="text-align: center">Благодарим за участие!</h3>
            </div>
          <div style="display: flex; justify-content: center">
             <MyButton @click="exit">Выйти</MyButton>
          </div>

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
            securityInTheCityLevel: 0,
            localLiteracyLevel: 0,
            healthyLifestyleLevel: 0,
            applicationOfDigitalTechnologiesLevel: 0,
            prosocialEngagementLevel: 0,

            countOf0Level: 0,
            countOf1Level: 0,
            countOf2Level: 0,
            countOf3Level: 0,
            finalResult: 0
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

        console.log(this.prosocialEngagement)
        console.log(this.securityInTheCity)
        console.log(this.localLiteracy)
        console.log(this.healthyLifestyle)
        console.log(this.applicationOfDigitalTechnologies)

        this.prosocialEngagement = Math.round(this.prosocialEngagement/23*100)
        this.securityInTheCity = Math.round(this.securityInTheCity/12*100)
        this.localLiteracy = Math.round(this.localLiteracy/11*100)
        this.healthyLifestyle = Math.round(this.healthyLifestyle/14*100)
        this.applicationOfDigitalTechnologies = Math.round(this.applicationOfDigitalTechnologies/7*100)


        console.log(this.prosocialEngagement)
        console.log(this.securityInTheCity)
        console.log(this.localLiteracy)
        console.log(this.healthyLifestyle)
        console.log(this.applicationOfDigitalTechnologies)

        if (this.prosocialEngagement < 25){
          this.prosocialEngagementLevel = 0
          this.countOf0Level++
        }
        if (this.prosocialEngagement >= 25 && this.prosocialEngagement <= 50){
          this.prosocialEngagementLevel = 1
          this.countOf1Level++
        }
        if (this.prosocialEngagement >= 51 && this.prosocialEngagement <= 75){
          this.prosocialEngagementLevel = 2
          this.countOf2Level++
        }
        if (this.prosocialEngagement > 76){
          this.prosocialEngagementLevel = 3
          this.countOf3Level++
        }

         if (this.securityInTheCity < 25){
          this.securityInTheCityLevel = 0
           this.countOf0Level++
        }
        if (this.securityInTheCity >= 25 && this.securityInTheCity <= 50){
          this.securityInTheCityLevel = 1
          this.countOf1Level++
        }
        if (this.securityInTheCity >= 51 && this.securityInTheCity <= 75){
          this.securityInTheCityLevel = 2
          this.countOf2Level++
        }
        if (this.securityInTheCity > 76){
          this.securityInTheCityLevel = 3
          this.countOf3Level++
        }

         if (this.localLiteracy < 25){
          this.localLiteracyLevel = 0
           this.countOf0Level++
        }
        if (this.localLiteracy >= 25 && this.localLiteracy <= 50){
          this.localLiteracyLevel = 1
          this.countOf1Level++
        }
        if (this.localLiteracy >= 51 && this.localLiteracy <= 75){
          this.localLiteracyLevel = 2
          this.countOf2Level++
        }
        if (this.localLiteracy > 76){
          this.localLiteracyLevel = 3
          this.countOf3Level++
        }

         if (this.healthyLifestyle < 25){
          this.healthyLifestyleLevel = 0
           this.countOf0Level++
        }
        if (this.healthyLifestyle >= 25 && this.healthyLifestyle <= 50){
          this.healthyLifestyleLevel = 1
          this.countOf1Level++
        }
        if (this.healthyLifestyle >= 51 && this.healthyLifestyle <= 75){
          this.healthyLifestyleLevel = 2
          this.countOf2Level++
        }
        if (this.healthyLifestyle > 76){
          this.healthyLifestyleLevel = 3
          this.countOf3Level++
        }

        if (this.applicationOfDigitalTechnologies < 25){
          this.applicationOfDigitalTechnologiesLevel = 0
          this.countOf0Level++
        }
        if (this.applicationOfDigitalTechnologies >= 25 && this.applicationOfDigitalTechnologies <= 50){
          this.applicationOfDigitalTechnologiesLevel = 1
          this.countOf1Level++
        }
        if (this.applicationOfDigitalTechnologies >= 51 && this.applicationOfDigitalTechnologies <= 75){
          this.applicationOfDigitalTechnologiesLevel = 2
          this.countOf2Level++
        }
        if (this.applicationOfDigitalTechnologies > 76){
          this.applicationOfDigitalTechnologiesLevel = 3
          this.countOf3Level++
        }

        console.log(this.prosocialEngagementLevel)
        console.log(this.securityInTheCityLevel)
        console.log(this.localLiteracyLevel)
        console.log(this.healthyLifestyleLevel)
        console.log(this.applicationOfDigitalTechnologiesLevel)

        console.log(this.countOf0Level++)
      console.log(this.countOf1Level++)
      console.log(this.countOf2Level++)
      console.log(this.countOf3Level++)


      if (this.countOf0Level >= 3 && this.countOf1Level <= 3 && this.countOf2Level <= 2 && this.countOf3Level <= 1){
        this.finalResult = 'Начинающий пользователь города'
      }
      else if (this.countOf0Level <= 1 && this.countOf1Level <= 2 && this.countOf2Level <= 4 && this.countOf3Level >= 2){
        this.finalResult = 'Продвинутый пользователь города'
      }
      else {
        this.finalResult = 'Уверенный пользователь города'
      }

      console.log(this.finalResult)


    }
}
</script>

<style scoped>
.dialog-content {
    /*overflow-y: scroll;*/
    height: 60vh;
    width: 60vw;
}
</style>