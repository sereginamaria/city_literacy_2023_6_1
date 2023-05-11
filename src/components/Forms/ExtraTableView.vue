<template>
    <table class="table">
        <tbody>
        <tr>
            <th></th>
            <td v-for="answer in currentForm.answers" :key="answer.id">
                {{answer.name}}
            </td>
        </tr>
        <tr v-for="question in currentForm.questions" :key="question.id">
            <th>{{question.name}}</th>


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
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "ExtraTableView",
    props: {
        currentForm: {}
    },
    computed: {
        ...mapGetters(['mainJSON']),
    },
    methods: {
        addAnswer(questionID, answerID){
            this.mainJSON.forms.results[this.currentForm.resultIndicator + questionID] = answerID
        },
    }
}
</script>

<style scoped>
    .table tr, .table td {
        border: 1px solid grey;
    }
    .custom-control-input {
        transform: scale(1.3);
        cursor: pointer;
    }
</style>