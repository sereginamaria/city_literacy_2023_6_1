<template>
    <div>
        <div>
            <p class="text-bold" style="color: #2A91D6;">Что ответить?</p>
            <p class="text-bold" style="color: #2A91D6;">Выбери все подходящие ответы</p>
        </div>

        <div class="form-check" v-for="option in this.mainJSON.task2.checkBox2Options"
             :key="option.id">
            <input class="form-check-input" type="checkbox" :id=option.id
                   :value=option v-model="this.mainJSON.task2.checkBox2Selected"
            />
            <label :for=option.id>{{option.value}}</label>
        </div>
        <MyButton @click="save">Отправить</MyButton>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatCheckBox2Answer",
        computed: {
            ...mapGetters(['mainJSON']),
        },
        setup(){
            return {
                selected: []
            }
        },
        props: {
            blockID: {}
        },
        methods: {
            save() {
                this.mainJSON.task2.ULHLDT3_Log_HLK2 = this.mainJSON.task2.checkBox2Selected
                this.$emit('done', this.blockID)
            }
        }
    }
</script>

<style scoped>

</style>