<template>
    <div>
       <!-- <PageNavBar/>-->
        <Task1Model v-if="this.mainJSON.task1.isShow"/>
        <Task2Model v-if="this.mainJSON.task2.isShow"/>
        <Task3Model v-if="this.mainJSON.task3.isShow"/>
    </div>
</template>

<script>
    import Task1Model from "@/components/Task1/Task1Model";
    import {mapGetters} from "vuex";
    import Task2Model from "@/components/Task2/Task2Model";
    import Task3Model from "@/components/Task3/Task3Model";
    export default {
        name: "PageBody",
        components: {Task3Model, Task2Model, Task1Model},
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>