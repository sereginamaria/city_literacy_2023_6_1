<template>
  <ModularTask1/>
</template>

<script>
    import {mapGetters} from "vuex";
    import ModularTask1 from "@/components/Task1/ModularTask1";
    export default {
        name: "Task1Model",
      components: {ModularTask1},
      computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>