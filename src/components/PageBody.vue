<template>
    <div class="background-body">
        <PageNavBar/>
        <Task1Model v-if="this.mainJSON.task1Show"/>
    </div>
</template>

<script>
    import Task1Model from "@/components/Task1/Task1Model";
    import PageNavBar from "@/components/PageNavBar"
    import {mapGetters} from "vuex";
    export default {
        name: "PageBody",
        components: {PageNavBar, Task1Model},
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
    .background-body {
        height: 100vh;
        backdrop-filter: blur(5px);
        background: url("../assets/Background.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
        background-size: cover;
    }
</style>