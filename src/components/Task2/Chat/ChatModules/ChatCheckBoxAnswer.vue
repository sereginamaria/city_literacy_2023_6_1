<template>
    <div>
        <div>
            <p class="text-bold" style="color: #2A91D6;">Что ответить?</p>
            <p class="text-bold" style="color: #2A91D6;">Выбери один или несколько вариантов ответа.</p>
        </div>

        <div class="form-check" v-for="option in screenConst.answers"
             :key="option.id">
            <input class="form-check-input" type="checkbox" :id=option.id
                   :value=option v-model="this.mainJSON.task2.checkBox1Selected"
            />
            <label :for=option.id>{{option.value}}</label>
        </div>
        <MyButton @click="save">Отправить</MyButton>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatCheckBoxAnswer",
        props: {
            screenConst: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            save() {
                this.mainJSON.task2.results[this.screenConst.resultIndicator] = this.mainJSON.task2.checkBox1Selected
                this.mainJSON.task2.checkBox1Selected = []

                this.mainJSON.task2.shownScreenID++
                this.mainJSON.task2.screens.forEach(el => {
                    if (el.id === this.mainJSON.task2.shownScreenID) {
                        el.isShow = true
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>