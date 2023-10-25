<template>
  <TextScreen v-if="screen.isShow && !screen.haveTask" :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskMovingThingsFromBag v-if="screen.isShow && screen.haveTask && screen.taskName === 'MovingThingsFromBag'"
                           :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskChooseShoes v-if="screen.isShow && screen.haveTask && screen.taskName === 'ChooseShoes'"
                 :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskMetro v-if="screen.isShow && screen.haveTask && screen.taskName === 'Metro'"
             :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskWorkBook v-if="screen.isShow && screen.haveTask && screen.taskName === 'WorkBook'"
                :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskMuseumPaintings v-if="(screen.taskName === 'MuseumPaintings1' || screen.taskName === 'MuseumPaintings2') &&
                        screen.isShow && screen.haveTask"
                       :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskEscape v-if="screen.isShow && screen.haveTask && screen.taskName === 'Escape'"
              :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskFire v-if="screen.isShow && screen.haveTask && screen.taskName === 'Fire'"
            :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskStatue  v-if="(screen.taskName === 'Statue1' || screen.taskName === 'Statue2') &&
                screen.isShow && screen.haveTask"
               :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskMap v-if="screen.isShow && screen.haveTask && screen.taskName === 'Map'"
           :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskAttractions v-if="screen.isShow && screen.haveTask && screen.taskName === 'Attractions'"
                   :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskFestival v-if="screen.isShow && screen.haveTask && screen.taskName === 'Festival'"
                :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskSites v-if="screen.isShow && screen.haveTask && screen.taskName === 'Sites'"
             :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskBadWeather v-if="screen.isShow && screen.haveTask && screen.taskName === 'BadWeather'"
                  :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskWarningSigns v-if="screen.isShow && screen.haveTask && screen.taskName === 'WarningSigns'"
                    :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
  <TaskWeatherForecast v-if="screen.isShow && screen.haveTask && screen.taskName === 'WeatherForecast'"
                       :screen="screen" :constTaskNightInTheMuseum="constTaskNightInTheMuseum"/>
</template>

<script>
    import {mapGetters} from "vuex";
    import TextScreen from "@/components/Task1/TextScreen";
    import TaskMovingThingsFromBag from "@/components/Task1/TaskMovingThingsFromBag";
    import TaskChooseShoes from "@/components/Task1/TaskChooseShoes";
    import TaskMetro from "@/components/Task1/TaskMetro";
    import TaskWorkBook from "@/components/Task1/TaskWorkBook";
    import TaskMuseumPaintings from "@/components/Task1/TaskMuseumPaintings";
    import TaskEscape from "@/components/Task1/TaskEscape";
    import TaskFire from "@/components/Task1/TaskFire";
    import TaskStatue from "@/components/Task1/TaskStatue";
    import TaskMap from "@/components/Task1/TaskMap";
    import TaskAttractions from "@/components/Task1/TaskAttractions";
    import TaskFestival from "@/components/Task1/TaskFestival";
    import TaskSites from "@/components/Task1/TaskSites";
    import TaskBadWeather from "@/components/Task1/TaskBadWeather";
    import TaskWarningSigns from "@/components/Task1/TaskWarningSigns";
    import TaskWeatherForecast from "@/components/Task1/TaskWeatherForecast";
    export default {
        name: "ModelTaskNightInTheMuseum",
        components: {
          TaskWeatherForecast,
          TaskWarningSigns,
          TaskBadWeather,
          TaskSites,
          TaskFestival,
          TaskAttractions,
          TaskMap,
          TaskStatue,
          TaskFire,
          TaskEscape,
          TaskMuseumPaintings,
          TaskWorkBook,
          TaskMetro,
          TaskChooseShoes,
          TaskMovingThingsFromBag,
          TextScreen,
        },
        computed: {
            ...mapGetters(['mainJSON', 'constTaskNightInTheMuseum']),
          screenID(){
            return this.mainJSON.taskNightInTheMuseum.shownScreenID
          },
          screen(){
            return this.mainJSON.taskNightInTheMuseum.screens[this.screenID]
          }
        },
    }
</script>

<style>
  .background {
    height: calc(100vh -70px);
    backdrop-filter: blur(5px);
    background-size: cover !important;
    background-position: center !important;
  }

  .background-text {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 3.79%, rgba(0, 0, 0, 0.72) 12.58%);
    padding: 20px;
    width: 100%;
    position: fixed;
    bottom: 0;
  }

  .background-text-center {
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) -116.67%, #FFFFFF 47.55%, rgba(255, 255, 255, 0) 215.22%);
    padding: 20px;
    width: 100%;
    bottom: 50%;
    position: fixed;
}

  .background-text-center p{
    font-weight: bold;
    font-size: 26px;
    color: #333333;
  }

.background-task {
  background: #FFFFFF;
  border: 1px solid #54BEDF;
  width: calc(100%/1.2);
  height: calc(100%/1.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.background-text p{
  color: white;
  font-size: 18px;
}

.choosenAnswer {
  background: rgba(84, 190, 223, 0.15);
}

.option-answers-background {
  background: #FFFFFF;
  border: 1px solid #54BEDF;
  left: calc(100%/1.8);
  width: calc(100%/3);
  position: absolute;
  bottom: calc(100%/2.5);
}

.option-answers-border {
  border: 2px solid #54BEDF;
  padding: 10px 20px;
}

.instruction-block {
  margin: auto;
  background: #FFFFFF;
  border: 5px solid #54BEDF;
  width: 70%;
  padding: 20px;
  position: relative;
  z-index: 9;
}

.instruction-block p {
  font-size: 18px;
}

.name-in-dialog {
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  color: white;
}
</style>