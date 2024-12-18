<template>
  <AuthForm v-if="mainJSON.loginShow" @show-results="showResults()"/>
  <InstructionPage v-if="mainJSON.instructionShow"/>

  <div v-if="mainJSON.mainPageShow">
    <PageNavBar/>
    <PageBody/>
    <PageFooter/>
  </div>


    <PausePage v-if="this.mainJSON.pauseShow" @skip-pause="skipPause()"/>
    <EndTimePage v-if="this.mainJSON.endTimeShow" @end-time="endTime()"/>
    <ResultsPage v-if="this.mainJSON.resultsShow"/>
    <FeedbackPage v-if="this.mainJSON.feedbackShow"/>
</template>

<script>

  import {mapActions, mapGetters, mapMutations} from "vuex";
  import PageBody from "@/components/PageBody";
  import PageFooter from "@/components/PageFooter";
  import AuthForm from "@/components/AuthForm";
  import InstructionPage from "@/components/InstructionPage";
  import PausePage from "@/components/PausePage";
  import PageNavBar from "@/components/PageNavBar";
  import ResultsPage from "@/components/ResultsPage";
  import FeedbackPage from "@/components/FeedbackPage.vue";
  import EndTimePage from "@/components/EndTimePage.vue";

  export default {
    name: 'App',
    components: {
      EndTimePage,
        FeedbackPage,
      ResultsPage,
      PageNavBar,
      PausePage,
      InstructionPage,
      AuthForm,
      PageFooter,
      PageBody,
    },
    data() {
      return {
        timer: '',
        timerPush: '',
        timerPause: ''
      }
    },
    computed: {
      ...mapGetters(['mainJSON']),
      currentTime() {
        return this.mainJSON.currentTime
      },
      currentPushTime() {
        return this.mainJSON.currentPushTime
      },
     currentPauseTime() {
      return this.mainJSON.currentPauseTime
    }
    },
    watch: {
      currentPushTime: {
        handler(newValue) {
          if (newValue === 60 || newValue > 60) {
            this.stopPushTimer()
          }
        },
        immediate: true
      },
      currentPauseTime: {
        handler(newValue) {
          if (newValue === 0 ) {
            this.mainJSON["pauseShow"] = false  // TODO codestyle
            this.mainJSON["mainPageShow"] = true
            this.startPushTimer()
            this.startTimer()
            this.stopPauseTimer()
          }
        },
        immediate: true
      },
      currentTime: {
        handler(newValue) {
          if (newValue === 0) {
            if (!this.mainJSON["allDone"]){
              this.stopTimer()
              this.mainJSON["endTimeShow"] = true
              this.mainJSON["mainPageShow"] = false
            }
          }
          /*if(newValue === 3000){
            this.mainJSON["pauseShow"] = true
            this.mainJSON["mainPageShow"] = false
            this.pushMainJSON()
            this.stopPushTimer()
          }
          if (newValue < 3000 && newValue > 2700) {
            let time = newValue - 2700
            let hours_all = Math.floor(time / 3600)  // TODO разобраться с DateTime
            let minutes_all = Math.floor((time - (hours_all*3600))/60)
            let seconds_all = time - (hours_all * 3600) - (minutes_all * 60)

            if (minutes_all < 10) {
              minutes_all = "0" + minutes_all
            }
            if (seconds_all < 10) {
              seconds_all = "0" + seconds_all
            }
            this.mainJSON['retPause'] = minutes_all + ":" + seconds_all
          }

          if (newValue === 2700) {
            this.mainJSON["pauseShow"] = false
            this.mainJSON["mainPageShow"] = true
            this.startPushTimer()
          }*/

          if (newValue === 1200) {
            this.mainJSON["pauseShow"] = true
            this.mainJSON["mainPageShow"] = false
            this.pushMainJSON()
            this.stopPushTimer()
            this.stopTimer()
            this.startPauseTimer()

          }

          /*if(newValue < 2669 && newValue > 2500){
            let time = newValue - 2500
            let hours_all = Math.floor(time / 3600)
            let minutes_all = Math.floor((time - (hours_all*3600))/60)
            let seconds_all = time - (hours_all * 3600) - (minutes_all * 60)

            if (minutes_all < 10) {
              minutes_all = "0" + minutes_all
            }
            if (seconds_all < 10) {
              seconds_all = "0" + seconds_all
            }
            this.mainJSON['retPause'] = minutes_all + ":" + seconds_all
          }

          if (newValue === 2500) {
            this.mainJSON["pauseShow"] = false  // TODO codestyle
            this.mainJSON["mainPageShow"] = true
            this.startPushTimer()
            this.startTimer()
          }*/
        },
        immediate: true
      }
    },
    methods: {
      ...mapMutations(["push_mainJSON"]),  // todo eslint
      ...mapActions(['get_mainJSON']),
      showResults(){
         this.mainJSON['feedbackShow'] = true
      },
      endTime(){
        this.stopTimer()
        this.stopPauseTimer()
        this.stopPushTimer()

        this.mainJSON.taskVolunteers["isShow"] = false
        this.mainJSON.taskChatWalk["isShow"] = false
        this.mainJSON.taskNightInTheMuseum["isShow"] = false
        this.mainJSON['endTimeShow'] = false
        this.mainJSON['feedbackShow'] = true

        this.push_mainJSON()

      },
       skipPause(n){
          console.log(n)
           this.mainJSON["pauseShow"] = false  // TODO codestyle
            this.mainJSON["mainPageShow"] = true
            this.startPushTimer()
            this.startTimer()
            this.stopPauseTimer()
      },
      startTimer() {
        this.timer = setInterval(() => {

          if(this.mainJSON.loginShow === false) {
            this.mainJSON.currentTime--
            var sec_num_all = parseInt(this.mainJSON.currentTime, 10)
            var hours_all = Math.floor(sec_num_all / 3600)
            var minutes_all = Math.floor((sec_num_all - (hours_all * 3600)) / 60)
            var seconds_all = sec_num_all - (hours_all * 3600) - (minutes_all * 60)

            if (hours_all < 10) {
              hours_all = "0" + hours_all
            }
            if (minutes_all < 10) {
              minutes_all = "0" + minutes_all
            }
            if (seconds_all < 10) {
              seconds_all = "0" + seconds_all
            }

            this.mainJSON['ret'] = hours_all + ":" + minutes_all + ":" + seconds_all
          }
        }, 1000)

      },
      startPauseTimer() {
        this.pauseTimer = setInterval(() => {

            this.mainJSON.currentPauseTime--
          console.log(this.mainJSON.currentPauseTime)
            var sec_num_all = parseInt(this.mainJSON.currentPauseTime, 10)
            var hours_all = Math.floor(sec_num_all / 3600)
            var minutes_all = Math.floor((sec_num_all - (hours_all * 3600)) / 60)
            var seconds_all = sec_num_all - (hours_all * 3600) - (minutes_all * 60)

            if (hours_all < 10) {
              hours_all = "0" + hours_all
            }
            if (minutes_all < 10) {
              minutes_all = "0" + minutes_all
            }
            if (seconds_all < 10) {
              seconds_all = "0" + seconds_all
            }

            this.mainJSON['retPause'] = hours_all + ":" + minutes_all + ":" + seconds_all
        }, 1000)
      },
      startPushTimer() {
        if(this.mainJSON.loginShow === false) {
          this.timerPush = setInterval(() => {
            this.mainJSON.currentPushTime++
            var sec_num_all = parseInt(this.mainJSON.currentPushTime, 10)
            var hours_all = Math.floor(sec_num_all / 3600)
            var minutes_all = Math.floor((sec_num_all - (hours_all * 3600)) / 60)
            var seconds_all = sec_num_all - (hours_all * 3600) - (minutes_all * 60)

            if (hours_all < 10) {
              hours_all = "0" + hours_all
            }
            if (minutes_all < 10) {
              minutes_all = "0" + minutes_all
            }
            if (seconds_all < 10) {
              seconds_all = "0" + seconds_all
            }
            this.mainJSON['retPush'] = hours_all + ":" + minutes_all + ":" + seconds_all
          }, 1000)
        }
      },

      stopTimer() {
        clearTimeout(this.timer)
      },
       stopPauseTimer() {
        clearTimeout(this.pauseTimer)
      },
      stopPushTimer() {
        clearTimeout(this.timerPush)
        this.pushMainJSON()
        this.mainJSON["currentPushTime"] = 0
        this.startPushTimer();
      },
      pushMainJSON(){
        this.push_mainJSON({
          push: this.mainJSON
        })
      }
    },
    mounted() {
      this.get_mainJSON();
      this.startTimer();
      this.startPushTimer();

      window.addEventListener('beforeunload', () => {
        this.push_mainJSON()
      });
    },
  }
</script>


<style>
  @font-face {
    font-family: 'SF UI Text';
    src: url('./fonts/sf_ui_text_regular.eot');
    src: url('./fonts/sf_ui_text_regular.eot?iefix') format('eot'),
    url('./fonts/sf_ui_text_regular.woff') format('woff'),  /* todo разобраться с путями для стилей и шрифтов */
    url('./fonts/sf_ui_text_regular.ttf') format('truetype'),
    url('./fonts/sf_ui_text_regular.svg#webfont') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  ::-webkit-scrollbar {
    margin-left: 15px;
    width: 5px; /* ширина для вертикального скролла */
    height: 5px;
    background: linear-gradient(0deg, #DCDCDC, #DCDCDC), #DCDCDC;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(0deg, #F3AE4E, #F3AE4E), #DCDCDC;
    /*   height: 175px;*/
  }

  :not(:root):fullscreen::backdrop {
    background: white;
  }

  * {
    font-family: SF UI Text;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: black;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  .transparent-buttons {
    background: transparent;
    border-color: transparent;
    border-radius: unset;
  }
  .transparent-buttons:hover {
    background: transparent;
    border-color: transparent;
    border-radius: unset;
  }
  .transparent-buttons:active {
    background: transparent !important;
    border-color: transparent !important;
    border-radius: unset;
  }
  .transparent-buttons:focus-visible {
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    border-radius: unset;
  }
  .blue-buttons {
    background: #2a94d6;
    border-color: #2a94d6;
    border-radius: unset;
  }
  .white-buttons {
      background: #FCFCFC;
      border: 1px solid #54BEDF;
      color: #333333;
      border-radius: unset;
      align-items: end;
      height: 40px;
      width: 8%
  }
  .white-buttons:hover {
    background: #FCFCFC;
    border: 1px solid #54BEDF;
    color: #333333;
    border-radius: unset;
  }
  .white-buttons:active {
    background: #FCFCFC !important;
    border: 1px solid #54BEDF !important;
    color: #333333 !important;
    border-radius: unset !important;
  }
  .white-buttons:focus-visible {
    background: #FCFCFC;
    border: 1px solid #54BEDF;
    color: #333333;
    box-shadow: none;
    border-radius: unset;
  }
  .white-buttons:disabled {
    background: #FCFCFC;
    border: 1px solid #54BEDF;
    color: #333333;
    box-shadow: none;
    border-radius: unset;
  }

  .dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    z-index: 99999;
  }
  .dialog-content {
    margin: auto;
    background: white;
    border-radius: 12px;
    //min-height: 100px;
    //min-width: 300px;
    //max-width: 600px;
    padding: 20px;
  }

  .text-bold {
    font-weight: bold
  }

  .instruction-block {
      margin: 0 auto;
      background: #FFFFFF;
      border: 5px solid #54BEDF;
      width: 70%;
      padding: 20px;
      position: relative;
      z-index: 9;
      text-align: center;
  }

  .instruction-block p {
      font-size: 18px;
  }
</style>
