<template>
    <table class="table">
        <tbody>
        <tr>
            <td></td>
            <td v-for="answer in currentForm.answers" :key="answer.id">
                {{answer.name}}
            </td>
        </tr>
        <tr v-for="question in currentForm.questions" :key="question.id">
            <td>{{question.name}}</td>


            <td v-for="answer in currentForm.answers" :key="answer.id">
                <input type="radio" :id="currentForm.id + '_' + question.id + '_' + answer.id" :name="currentForm.id + '_' + question.id"
                       class="custom-control-input" v-model="this.mainJSON.forms.results[this.currentForm.resultIndicator + question.id]"
                       :value="answer.id"
                       @click="addAnswer(question.id, answer.id)">
                <label class="custom-control-label" :for="currentForm.id + '_' + question.id + '_' + answer.id"></label>
            </td>
        </tr>
        </tbody>
    </table>

    <div v-if="currentForm.extraAnswers !== undefined">
        <ExtraTableView v-if="mainJSON.forms.results[currentForm.resultIndicator + this.questionID] === currentForm.extraAnswers.rightAnswerId"
                        :currentForm="currentForm.extraAnswers"/>
    </div>

    <MyButton @click="prevQuestion" v-if="mainJSON.forms.shownFormID > 1" class="blue-buttons me-2">Назад</MyButton>
    <MyButton disabled v-else class="blue-buttons me-2">Назад</MyButton>

    <MyButton @click="nextQuestion" v-if="mainJSON.forms.shownFormID > 0 && mainJSON.forms.shownFormID < 14 " class="blue-buttons">Далее</MyButton>
    <MyButton @click="endForms" v-else class="blue-buttons">Завершить</MyButton>

    <MyModal v-model:show="modalVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import ExtraTableView from "@/components/Forms/ExtraTableView.vue";

export default {
    name: "TableView",
    components: {ExtraTableView},
    props: {
        currentForm: {}
    },
    computed: {
        ...mapGetters(['mainJSON']),
    },
    data(){
        return{
            questionID: null,
            modalVisible: false,
            modalButtons: [],
            modalMessage: '',
        }
    },
    methods: {
        ...mapMutations(["push_mainJSON"]),
        addAnswer(questionID, answerID){
            this.mainJSON.forms.results[this.currentForm.resultIndicator + questionID] = answerID
            this.questionID = questionID
        },
        nextQuestion(){
            this.mainJSON.forms.shownFormID++
        },
        prevQuestion(){
            this.mainJSON.forms.shownFormID--
            this.push_mainJSON({
                push: this.mainJSON
            })
        },
        endForms(){
            this.modalVisible = true
            this.modalButtons = [
                {value: "Завершить", status: true}
            ]
            this.modalMessage = 'Молодец! Ты выполнил все задания! Нажми кнопку "Завершить" чтобы выйти из программы.'
        },
        checkAnswer() {
            this.modalVisible = false

            let t = new Date()
            this.mainJSON.results.dataTimeEnd = this.mainJSON.results.dataTimeLastUpdate =
                [
                    t.getFullYear(),
                    ('0' + (t.getMonth() + 1)).slice(-2),
                    ('0' + t.getDate()).slice(-2)
                ].join('-') + ' ' + [
                    ('0' + (t.getHours())).slice(-2),
                    ('0' + (t.getMinutes())).slice(-2),
                    ('0' + t.getSeconds()).slice(-2)
                ].join(':');

            this.mainJSON.forms['isShow'] = false
            this.mainJSON['resultsShow'] = true
            this.push_mainJSON({
                push: this.mainJSON
            })
        },
    }
}
</script>

<style scoped>
    .table tr, .table td {
        border: 1px solid grey;
    }
</style>