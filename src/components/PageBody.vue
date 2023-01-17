<template>
    <div>
       <!-- <PageNavBar/>-->
        <Task1Model v-if="this.mainJSON.task1Show"/>
    </div>
</template>

<script>
    import Task1Model from "@/components/Task1/Task1Model";
    import {mapGetters} from "vuex";
    export default {
        name: "PageBody",
        components: {Task1Model},
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>