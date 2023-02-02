<template>
    <div>Задание 3</div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Task3Model",
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>