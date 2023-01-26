<template>
    <div>
       <!-- <PageNavBar/>-->
        <Task1Model v-if="this.mainJSON.task1Show"/>
        <Task2Model v-if="this.mainJSON.task2Show"/>
    </div>
</template>

<script>
    import Task1Model from "@/components/Task1/Task1Model";
    import {mapGetters} from "vuex";
    import Task2Model from "@/components/Task2/Task2Model";
    export default {
        name: "PageBody",
        components: {Task2Model, Task1Model},
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>