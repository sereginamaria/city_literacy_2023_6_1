<template>
  <div class="background-body">
    Привет
  </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        name: "Task1Model",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
  .background-body {
    height: 100vh;
    backdrop-filter: blur(5px);/*
    background: rgba(255, 255, 255, 0.01); url("../assets/Task1Background.png") no-repeat center center fixed;*/
    background-size: cover;
  }
</style>