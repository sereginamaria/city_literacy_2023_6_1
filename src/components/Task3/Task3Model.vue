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
    <TaskWhoPlantedTheTree v-if="screen.isShow && screen.haveTask && screen.taskName === 'WhoPlantedTheTree'"
                           :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskUrbanProblems v-if="screen.isShow && screen.haveTask && screen.taskName === 'UrbanProblems'"
                       :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskElectronicServicesPart1_1 v-if="screen.isShow && screen.haveTask && screen.taskName === 'ElectronicServicesPart1_1'"
                                   :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskElectronicServicesPart1_2 v-if="screen.isShow && screen.haveTask && screen.taskName === 'ElectronicServicesPart1_2'"
                                   :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskElectronicServicesPart2 v-if="screen.isShow && screen.haveTask && screen.taskName === 'ElectronicServicesPart2'"
                                 :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskChristmasTree v-if="screen.isShow && screen.haveTask && screen.taskName === 'ChristmasTree'"
                       :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskSortingGarbage v-if="screen.isShow && screen.haveTask && screen.taskName === 'SortingGarbage'"
                        :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskOverturnedTrashBin v-if="screen.isShow && screen.haveTask && screen.taskName === 'OverturnedTrashBin'"
                            :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskWomanWithStroller v-if="screen.isShow && screen.haveTask && screen.taskName === 'WomanWithStroller'"
                           :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskTakeOffTheBackpack v-if="screen.isShow && screen.haveTask && screen.taskName === 'TakeOffTheBackpack'"
                            :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskAnnFeelsBad v-if="screen.isShow && screen.haveTask && screen.taskName === 'AnnFeelsBad'"
                     :screen="screen" :constTaskVolunteers="constTaskVolunteers"/>
    <TaskWaxwing v-if="screen.isShow && screen.haveTask && screen.taskName === 'Waxwing'"
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
    import TaskWhoPlantedTheTree from "@/components/Task3/TaskWhoPlantedTheTree";
    import TaskUrbanProblems from "@/components/Task3/TaskUrbanProblems";
    import TaskElectronicServicesPart1_1 from "@/components/Task3/TaskElectronicServicesPart1_1";
    import TaskElectronicServicesPart1_2 from "@/components/Task3/TaskElectronicServicesPart1_2";
    import TaskElectronicServicesPart2 from "@/components/Task3/TaskElectronicServicesPart2";
    import TaskChristmasTree from "@/components/Task3/TaskChristmasTree";
    import TaskSortingGarbage from "@/components/Task3/TaskSortingGarbage";
    import TaskOverturnedTrashBin from "@/components/Task3/TaskOverturnedTrashBin";
    import TaskWomanWithStroller from "@/components/Task3/TaskWomanWithStroller";
    import TaskTakeOffTheBackpack from "@/components/Task3/TaskTakeOffTheBackpack";
    import TaskAnnFeelsBad from "@/components/Task3/TaskAnnFeelsBad";
    import TaskWaxwing from "@/components/Task3/TaskWaxwing";

    export default {
        name: "Task3Model",
        components: {
            TaskWaxwing,
            TaskAnnFeelsBad,
            TaskTakeOffTheBackpack,
            TaskWomanWithStroller,
            TaskOverturnedTrashBin,
            TaskSortingGarbage,
            TaskChristmasTree,
            TaskElectronicServicesPart2,
            TaskElectronicServicesPart1_2,
            TaskElectronicServicesPart1_1,
            TaskUrbanProblems,
            TaskWhoPlantedTheTree,
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
        width: 85%;
        max-height: 85%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3%;
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

    .list-of-answers {
        margin: 10px;
        width: 20%;
        background: #d2fff7;
        border-radius: 4px;
        padding: 10px 20px;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .list-group-el {
        margin: 20px;
        width: 80%;
        padding: 20px;
        background: #FFFFFF;
        border: 1px dashed #333333;
        border-radius: 4px;
    }

    .electronic_services_part1_img_block {
        display: flex;
        width: 45%;
        height: 45%;
        align-items: center;
        justify-content: center;
    }
    .electronic_services_part1_img_block img{
        height: 100%;
    }
</style>