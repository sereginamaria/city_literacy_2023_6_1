<template>
  <ModularTask1 style="position: relative"/>
  <ModularTask2/>
  <ModularTask3/>
  <ModularTask4/>
  <ModularTask5/>
  <ModularTask6/>
  <ModularTask7/>
  <ModularTask8/>
  <ModularTask9/>
  <ModularTask10/>
  <ModularTask11/>
  <ModularTask12/>
  <ModularTask13/>
  <ModularTask14/>
  <ModularTask15/>
  <ModularTask16/>
</template>

<script>
    import {mapGetters} from "vuex";
    import ModularTask1 from "@/components/Task1/ModularTask1";
    import ModularTask2 from "@/components/Task1/ModularTask2";
    import ModularTask3 from "@/components/Task1/ModularTask3";
    import ModularTask4 from "@/components/Task1/ModularTask4";
    import ModularTask5 from "@/components/Task1/ModularTask5";
    import ModularTask6 from "@/components/Task1/ModularTask6";
    import ModularTask7 from "@/components/Task1/ModularTask7";
    import ModularTask8 from "@/components/Task1/ModularTask8";
    import ModularTask9 from "@/components/Task1/ModularTask9";
    import ModularTask10 from "@/components/Task1/ModularTask10";
    import ModularTask11 from "@/components/Task1/ModularTask11";
    import ModularTask12 from "@/components/Task1/ModularTask12";
    import ModularTask13 from "@/components/Task1/ModularTask13";
    import ModularTask14 from "@/components/Task1/ModularTask14";
    import ModularTask15 from "@/components/Task1/ModularTask15";
    import ModularTask16 from "@/components/Task1/ModularTask16";
    export default {
        name: "Task1Model",
      components: {
        ModularTask16,
        ModularTask15,
        ModularTask14,
        ModularTask13,
        ModularTask12,
        ModularTask11,
        ModularTask10,
        ModularTask9,
        ModularTask8,
        ModularTask7, ModularTask6, ModularTask5, ModularTask4, ModularTask3, ModularTask2, ModularTask1},
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
</style>