<template>
    <div class="forms-body p-3">
        <TableView :currentForm="currentForm"/>
    </div>

</template>

<script>
import TableView from "@/components/Forms/TableView.vue";
import {mapGetters} from "vuex";

export default {
    name: "FormsBody",
    components: {TableView},
    computed: {
        ...mapGetters(['mainJSON', 'constForm']),
        currentForm() {
            return this.constForm.forms[this.mainJSON.forms.shownFormID - 1]
        }
    },
}
</script>

<style scoped>
    .forms-body{
        background: white;
        height: calc(100% - 36px);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
</style>