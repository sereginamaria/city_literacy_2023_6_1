<template>
    <div class="background" :style="{ background: 'url(' + require('../../assets/TaskChatBackground.webp') + ')'}">
        <FormsModel v-if="this.mainJSON.forms.modelShow"/>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import FormsModel from "@/components/Forms/FormsModel.vue";

export default {
    name: "ModelForms",
    components: {FormsModel},
    computed: {
        ...mapGetters(['mainJSON']),
    },
}
</script>

<style scoped>
</style>