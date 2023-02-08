<template>
    <TextScreen v-if="screen.isShow && !screen.haveTask" :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskWhoIsAVolunteer v-if="screen.isShow && screen.haveTask && screen.taskName === 'WhoIsAVolunteer'"
                         :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskCardAboutVolunteering v-if="screen.isShow && screen.haveTask && screen.taskName === 'CardAboutVolunteering'"
                               :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskRightsAndObligationsPart1 v-if="screen.isShow && screen.haveTask && screen.taskName === 'RightsAndObligationsPart1'"
                                   :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskRightsAndObligationsPart2 v-if="screen.isShow && screen.haveTask && screen.taskName === 'RightsAndObligationsPart2'"
                                   :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskSocialInstitutions v-if="screen.isShow && screen.haveTask && screen.taskName === 'SocialInstitutions'"
                            :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
</template>

<script>
    import {mapGetters} from "vuex";
    import TaskWhoIsAVolunteer from "@/components/Task3/TaskWhoIsAVolunteer";
    import TextScreen from "@/components/Task3/TextScreen";
    import TaskCardAboutVolunteering from "@/components/Task3/TaskCardAboutVolunteering";
    import TaskRightsAndObligationsPart1 from "@/components/Task3/TaskRightsAndObligationsPart1";
    import TaskRightsAndObligationsPart2 from "@/components/Task3/TaskRightsAndObligationsPart2";
    import TaskSocialInstitutions from "@/components/Task3/TaskSocialInstitutions";

    export default {
        name: "Task3Model",
        components: {
            TaskSocialInstitutions,
            TaskRightsAndObligationsPart2,
            TaskRightsAndObligationsPart1, TaskCardAboutVolunteering, TextScreen, TaskWhoIsAVolunteer},
        computed: {
            ...mapGetters(['mainJSON', 'constTaskVolunteers']),
            screenID(){
                return this.mainJSON.task3.shownScreenID
            },
            screen(){
                return this.mainJSON.task3.screens[this.screenID]
            }
        },
    }
</script>

<style>
    .background {
        height: calc(100vh - 140px);
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

    .background-answers {
        background: #FFFFFF;
        border: 1px solid #54BEDF;
        left: calc(100%/1.8);
        width: calc(100%/3);
        position: absolute;
        bottom: calc(100%/2.5);
    }

    .instruction-block {
        margin: auto;
        background: #FFFFFF;
        border: 5px solid #54BEDF;
        width: 70%;
        padding: 20px;
    }

    .instruction-block p {
        font-size: 18px;
    }
</style>