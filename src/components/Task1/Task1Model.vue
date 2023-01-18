<template>
  <ModularTask1 style="position: relative"/>
  <ModularTask2/>
  <ModularTask3/>
</template>

<script>
    import {mapGetters} from "vuex";
    import ModularTask1 from "@/components/Task1/ModularTask1";
    import ModularTask2 from "@/components/Task1/ModularTask2";
    import ModularTask3 from "@/components/Task1/ModularTask3";
    export default {
        name: "Task1Model",
      components: {ModularTask3, ModularTask2, ModularTask1},
      computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style>
  .background-text {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 3.79%, rgba(0, 0, 0, 0.72) 12.58%);
    padding: 20px;
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  .background-text p{
    color: white;
  }
</style>