<template>
    <div>
       <!-- <PageNavBar/>-->
        <ModelTaskNightInTheMuseum v-if="this.mainJSON.taskNightInTheMuseum.isShow"/>
        <ModelTaskChatWalk v-if="this.mainJSON.taskChatWalk.isShow"/>
        <ModelTaskVolunteers v-if="this.mainJSON.taskVolunteers.isShow"/>
        <ModelForms v-if="this.mainJSON.forms.isShow"/>
    </div>
</template>

<script>
    import ModelTaskNightInTheMuseum from "@/components/Task1/ModelTaskNightInTheMuseum";
    import {mapGetters} from "vuex";
    import ModelTaskChatWalk from "@/components/Task2/ModelTaskChatWalk";
    import ModelTaskVolunteers from "@/components/Task3/ModelTaskVolunteers";
    import ModelForms from "@/components/Forms/ModelForms.vue";
    export default {
        name: "PageBody",
        components: {ModelForms, ModelTaskVolunteers, ModelTaskChatWalk, ModelTaskNightInTheMuseum},
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>