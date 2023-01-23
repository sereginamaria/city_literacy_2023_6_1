<template>
  <AuthForm v-if="mainJSON.loginShow"/>
  <InstructionPage v-if="mainJSON.instructionShow"/>

  <div v-if="mainJSON.mainPageShow">
    <PageNavBar/>
    <PageBody/>
    <PageFooter/>
  </div>

  <PausePage v-if="this.mainJSON.pauseShow"/>
</template>

<script>

  import {mapActions, mapGetters, mapMutations} from "vuex";
  import PageBody from "@/components/PageBody";
  import PageFooter from "@/components/PageFooter";
  import AuthForm from "@/components/AuthForm";
  import InstructionPage from "@/components/InstructionPage";
  import PausePage from "@/components/PausePage";
  import PageNavBar from "@/components/PageNavBar";

  export default {
    name: 'App',
    components: {
      PageNavBar,
      PausePage,
      InstructionPage,
      AuthForm,
      PageFooter,
      PageBody,
    },
    date() {
      return {
        timer: '',
        timerPush: '',
      }
    },
    computed: {
      ...mapGetters(['mainJSON']),
      currentTime() {
        return this.mainJSON.currentTime
      },
      currentPushTime() {
        return this.mainJSON.currentPushTime
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
      currentTime: {
        handler(newValue) {
          if (newValue === 0) {
            this.stopTimer()
          }
          if(newValue === 3600){
            this.mainJSON["pauseShow"] = true
            this.mainJSON["mainPageShow"] = false
            this.pushMainJSON()
            this.stopPushTimer()
          }
          if (newValue < 3600 && newValue > 3300) {
            let time = newValue - 3300
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

          if (newValue === 3300) {
            this.mainJSON["pauseShow"] = false
            this.mainJSON["mainPageShow"] = true
            this.startPushTimer()
          }

          if (newValue === 1500) {
            this.mainJSON["pauseShow"] = true
            this.mainJSON["mainPageShow"] = false
            this.pushMainJSON()
            this.stopPushTimer()
          }

          if(newValue < 1500 && newValue > 1200){
            let time = newValue - 1200
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

          if (newValue === 1200) {
            this.mainJSON["pauseShow"] = false  // TODO codestyle
            this.mainJSON["mainPageShow"] = true
            this.startPushTimer()
          }
        },
        immediate: true
      }
    },
    methods: {
      ...mapMutations(["push_mainJSON"]),  // todo eslint
      ...mapActions(['get_mainJSON']),
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
      startPushTimer() {
        this.timerPush = setInterval(() => {
          this.mainJSON.currentPushTime++
          var sec_num_all = parseInt(this.mainJSON.currentPushTime, 10)
          var hours_all = Math.floor(sec_num_all / 3600)
          var minutes_all = Math.floor((sec_num_all - (hours_all*3600))/60)
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
      },
      stopTimer() {
        clearTimeout(this.timer)
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
        this.pushMainJSON()
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

  * {
    font-family: SF UI Text;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #333;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  .transparent-buttons {
    background: transparent;
    border-color: transparent;
  }
  .transparent-buttons:hover {
    background: transparent;
    border-color: transparent;
  }
  .transparent-buttons:active {
    background: transparent !important;
    border-color: transparent !important;
  }
  .transparent-buttons:focus-visible {
    background: transparent;
    border-color: transparent;
    box-shadow: none;
  }
  .blue-buttons {
    background: #2a94d6;
    border-color: #2a94d6;;
  }
  .white-buttons {
    background: #FCFCFC;
    border: 1px solid #54BEDF;
    color: #333333;
  }
  .white-buttons:hover {
    background: #FCFCFC;
    border: 1px solid #54BEDF;
    color: #333333;
  }
  .white-buttons:active {
    background: #FCFCFC !important;
    border: 1px solid #54BEDF !important;
    color: #333333 !important;
  }
  .white-buttons:focus-visible {
    background: #FCFCFC;
    border: 1px solid #54BEDF;
    color: #333333;
    box-shadow: none;
  }
  .white-buttons:disabled {
    background: #FCFCFC;
    border: 1px solid #54BEDF;
    color: #333333;
    box-shadow: none;
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
    min-height: 100px;
    min-width: 300px;
    max-width: 600px;
    padding: 20px;
  }
</style>
