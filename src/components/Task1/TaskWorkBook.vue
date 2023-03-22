<template>
    <!--Задание рабочая тетрадь-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block">
            <p>Заполни пропуски в тексте.
            </p>
        </div>
        <div class="background-task1">
            <div style="line-height: 3; text-align: justify; font-size: 18px" id="collapseModularTask4">
                Москва была основана в
                <span data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ1" aria-expanded="false" aria-controls="collapseWorkBookQ1"
                      @click="openWorkBookQ(14)" style="text-decoration: underline; font-size: 18px" :class="{colorAnswers: this.mainJSON.taskNightInTheMuseum.ULSCLL1_Log_LLK1_1 === 'NA'}"
                >{{this.mainJSON.taskNightInTheMuseum.ULSCLL1_Log_LLK1_1 !== "NA" ? mainJSON.taskNightInTheMuseum.ULSCLL1_Log_LLK1_1 : "_______"}}</span>
                <div class="collapse" id="collapseWorkBookQ1" style="position: absolute" data-bs-parent="#collapseModularTask4">
                    <div class="card card-body">
                        <p>
                            В каком году была основана Москва?
                        </p>
                    </div>
                </div>
                году
                <span data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ2" aria-expanded="false" aria-controls="collapseWorkBookQ2"
                      @click="openWorkBookQ(15)" style="text-decoration: underline; font-size: 18px; font-size: 18px" :class="{colorAnswers: this.mainJSON.taskNightInTheMuseum.ULSCLL1_Log_LLK1_2 === 'NA'}"
                >{{this.mainJSON.taskNightInTheMuseum.ULSCLL1_Log_LLK1_2 !== "NA" ? mainJSON.taskNightInTheMuseum.ULSCLL1_Log_LLK1_2 : "_______"}}</span>.
                <div class="collapse" id="collapseWorkBookQ2" style="position: absolute" data-bs-parent="#collapseModularTask4">
                    <div class="card card-body">
                        <p>
                            Кто из них основал Москву?
                        </p>
                        <p>
                            Выбери правильный рисунок в правой части тетради.
                        </p>
                    </div>
                </div>
                По его указу на берегу Москвы-реки была возведена деревянная крепость. Сейчас на этом месте мы видим
                <span data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ3" aria-expanded="false" aria-controls="collapseWorkBookQ3"
                      @click="openWorkBookQ(16)" style="text-decoration: underline; font-size: 18px" :class="{colorAnswers: this.mainJSON.taskNightInTheMuseum.ULSCLL1_Log_LLK1_3 === 'NA'}"
                >{{this.mainJSON.taskNightInTheMuseum.ULSCLL1_Log_LLK1_3 !== "NA" ? mainJSON.taskNightInTheMuseum.ULSCLL1_Log_LLK1_3 : "_______"}}</span>.
                <div class="collapse" id="collapseWorkBookQ3" style="position: absolute" data-bs-parent="#collapseModularTask4">
                    <div class="card card-body">
                        <p>
                            Что сейчас находится на месте деревянной крепости?
                        </p>
                        <p>
                            Выбери правильный рисунок в правой части тетради.
                        </p>
                    </div>
                </div>
                В наше время рядом с этим местом находится памятник
                <span data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ4" aria-expanded="false" aria-controls="collapseWorkBookQ4"
                      @click="openWorkBookQ(17)" style="text-decoration: underline; font-size: 18px" :class="{colorAnswers: this.mainJSON.taskNightInTheMuseum.ULSCLL1_Log_LLK1_4 === 'NA'}"
                >{{this.mainJSON.taskNightInTheMuseum.ULSCLL1_Log_LLK1_4 !== "NA" ? mainJSON.taskNightInTheMuseum.ULSCLL1_Log_LLK1_4 : "_______"}}</span>.
                <div class="collapse" id="collapseWorkBookQ4" style="position: absolute" data-bs-parent="#collapseModularTask4">
                    <div class="card card-body">
                        <p>
                            Кому поставлен этот памятник?
                        </p>
                        <p>
                            Выбери правильный ответ в правой части тетради.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!--Первый вопрос-->
        <div class="background-task2" v-if="mainJSON.taskNightInTheMuseum.modularTask1_14Show">
            <div v-for="el in constTaskNightInTheMuseum.listOfAnswersTaskWorkBook1" :key="el.id">
                <div class="d-flex mt-2" @click="chooseWorkBookEl(1, 14, el)"
                     data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ1" aria-expanded="false" aria-controls="collapseWorkBookQ1"
                >
                    <div>
                        <p style="background: #FFFFFF; border: 1px solid #54BEDF; border-radius: 0px; padding: 10px 20px;">
                            {{el.value}}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!--Второй вопрос-->
        <div class="background-task2" v-if="mainJSON.taskNightInTheMuseum.modularTask1_15Show">
            <div v-for="el in constTaskNightInTheMuseum.listOfAnswersTaskWorkBook2" :key="el.id">
                <div class="d-flex mt-2" @click="chooseWorkBookEl(2, 15, el)"
                     data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ2" aria-expanded="false" aria-controls="collapseWorkBookQ2"
                >
                    <img :src=" require('../../assets/' + el.src) " alt="" style="width: 30%">
                    <div>
                        <p>
                            {{el.value}}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!--Третий вопрос-->
        <div class="background-task2" v-if="mainJSON.taskNightInTheMuseum.modularTask1_16Show">
            <div v-for="el in constTaskNightInTheMuseum.listOfAnswersTaskWorkBook3" :key="el.id">
                <div class="d-flex mt-2" @click="chooseWorkBookEl(3, 16, el)"
                     data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ3" aria-expanded="false" aria-controls="collapseWorkBookQ3"
                >
                    <img :src=" require('../../assets/' + el.src) " alt="" style="width: calc(100%/2.5);">
                    <div>
                        <p>
                            {{el.value}}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!--Четвертый вопрос-->
        <div class="background-task2" v-if="mainJSON.taskNightInTheMuseum.modularTask1_17Show">
            <img src="../../assets/Workbook8.webp" alt="" style="width: 90%">
            <div style="background: #fff; border: 1px solid #54bedf;" class="mt-2">
                <div v-for="el in constTaskNightInTheMuseum.listOfAnswersTaskWorkBook4" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK1_4}"
                     class="option-answers-border"
                >
                    <div @click="chooseAnswer(el)"
                         data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ4" aria-expanded="false" aria-controls="collapseWorkBookQ4"
                    >
                        {{el.value}}
                    </div>
                </div>
            </div>
        </div>

        <div class="background-text justify-content-end">
            <MyButton class="white-buttons" @click="checkAnswer"
                      v-if="mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK1_1 !== 'NA' || mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK1_2 !== 'NA'
                      || mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK1_3 !== 'NA' || mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK1_4 !== 'NA'"
            >
                Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskWorkBook",
        props: {
            screen: {},
            constTaskNightInTheMuseum: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            chooseAnswer(el){
                this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK1_4 = el.id
                this.mainJSON.taskNightInTheMuseum.ULSCLL1_Log_LLK1_4 = el.value
                this.mainJSON.taskNightInTheMuseum.modularTask1_17Show = false
            },
            chooseWorkBookEl(workBookID, id, el){
                this.mainJSON.taskNightInTheMuseum.results["ULSCLL1_Log_LLK1_" + workBookID] = el.id
                if(workBookID === 2){
                    if(el.value === 'Князь Юрий Долгорукий'){
                        this.mainJSON.taskNightInTheMuseum["ULSCLL1_Log_LLK1_" + workBookID] = 'Князем Юрием Долгоруким'
                    }
                    if(el.value === 'Князь Иван Калита'){
                        this.mainJSON.taskNightInTheMuseum["ULSCLL1_Log_LLK1_" + workBookID] = 'Князем Иваном Калитой'
                    }
                    if(el.value === 'Князь Даниил Московский'){
                        this.mainJSON.taskNightInTheMuseum["ULSCLL1_Log_LLK1_" + workBookID] = 'Князем Даниилом Московским'
                    }
                    if(el.value === 'Боярин Степан Кучка'){
                        this.mainJSON.taskNightInTheMuseum["ULSCLL1_Log_LLK1_" + workBookID] = 'Боярином Степаном Кучкой'
                    }
                }
                if(workBookID === 3){
                    if(el.value === 'Птичья башня'){
                        this.mainJSON.taskNightInTheMuseum["ULSCLL1_Log_LLK1_" + workBookID] = 'Птичью башню'
                    }
                    else {
                        this.mainJSON.taskNightInTheMuseum["ULSCLL1_Log_LLK1_" + workBookID] = el.value
                    }
                }
                if(workBookID === 1 || workBookID === 4){
                    this.mainJSON.taskNightInTheMuseum["ULSCLL1_Log_LLK1_" + workBookID] = el.value
                }
                this.mainJSON.taskNightInTheMuseum["modularTask1_" + id + "Show"] = false
            },
            openWorkBookQ(id){
                let k = 15
                while (k !== 18){
                    if(k !== id){
                        this.mainJSON.taskNightInTheMuseum["modularTask1_" + k + "Show"] = false
                    }
                    k++
                }
                this.mainJSON.taskNightInTheMuseum["modularTask1_" + id + "Show"] = !this.mainJSON.taskNightInTheMuseum["modularTask1_" + id + "Show"]
            },
            checkAnswer(){
                screen.isShow = false
                this.mainJSON.taskNightInTheMuseum.shownScreenID++
                this.mainJSON.taskNightInTheMuseum.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskNightInTheMuseum.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK1_1 ===  2){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK1_1 = 1
                }
                else {
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK1_1 = 0
                }
                if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK1_2 ===  1){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK1_2 = 1
                }
                else {
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK1_2 = 0
                }
                if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK1_3 ===  1){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK1_3 = 1
                }
                else {
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK1_3 = 0
                }
                if(this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Log_LLK1_4 ===  2){
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK1_4 = 1
                }
                else {
                    this.mainJSON.taskNightInTheMuseum.results.ULSCLL1_Score_LLK1_4 = 0
                }
                let t = new Date()
                this.mainJSON.results.dataTimeLastUpdate =
                    [
                        t.getFullYear(),
                        ('0' + (t.getMonth() + 1)).slice(-2),
                        ('0' + t.getDate()).slice(-2)
                    ].join('-') + ' ' + [
                        ('0' + (t.getHours())).slice(-2),
                        ('0' + (t.getMinutes())).slice(-2),
                        ('0' + t.getSeconds()).slice(-2)
                    ].join(':');

                this.push_mainJSON({
                    push: this.mainJSON
                })
            }
        }
    }
</script>

<style scoped>
    .background-task1 {
        width: calc(100%/3.5);
        position: absolute;
        top: calc(100%/6);
        left: calc(100%/5);
    }
    .background-task2 {
        width: calc(100%/3.5);
        position: absolute;
        top: calc(100%/8);
        left: calc(100%/1.8);
    }
    .card {
        background: #FFFFFF;
        border: 1px solid #54BEDF;
    }
    .colorAnswers {
        border-bottom-right-radius: 10%;
        border-bottom-left-radius: 10%;
        border-top-right-radius: 50%;
        box-shadow: 0px 0px 5px 3px rgba(84, 190, 223, 0.5);
        text-decoration: underline;
        border-top-left-radius: 50%;
        background: rgba(84, 190, 223, 0.5);
    }
</style>