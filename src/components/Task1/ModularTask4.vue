<template>
    <!--Инструкция задание рабочая тетрадь-->
    <div class="background0" v-if="mainJSON.task1.modularTask1_11Show">
        <div class="background-text">
            <p>
                Ася: Наконец-то мы в музее! Сколько тут людей! Пойдём сначала вон в тот зал, там почти никого нет.
            </p>
            <MyButton class="white-buttons" @click="show1_12">Далее</MyButton>
        </div>
    </div>
    <!--Слова автора рабочая тетрадь-->
    <div class="background1" v-if="mainJSON.task1.modularTask1_12Show">
        <div class="background-text">
            <p>
                Вы вошли в зал музея, и вдруг одна из картин ожила.
            </p>
            <MyButton class="white-buttons" @click="show1_13">Далее</MyButton>
        </div>
    </div>
    <!--Слова Коли рабочая тетрадь-->
    <div class="background2" v-if="mainJSON.task1.modularTask1_13Show">
        <div class="background-text">
            <p>
                Коля: Эй! Привет! Я Коля. Живу в картине “Опять двойка”. Меня часто ругают за двойки, а я хочу гулять и веселиться! Помогите мне сделать домашку, пожалуйста!
            </p>
            <MyButton class="white-buttons" @click="show1_14">Далее</MyButton>
        </div>
    </div>
    <!--Задание рабочая тетрадь-->
    <div class="background3" v-if="mainJSON.task1.modularTask1_14Show">
        <div class="background-task">
            <div style="line-height: 3;">
                Москва была основана в
                <MySelect :list="this.mainJSON.task1.listWorkBook1" :listID="1" @answer="addAnswer"
                          :selected="this.mainJSON.task1.results.ULSCLL1_Log_LLK1_1"></MySelect>
                году
                <span type="button" data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ2" aria-expanded="false" aria-controls="collapseWorkBookQ2"
                      @click="openWorkBookQ(15)"
                >_______</span>.
                <div class="collapse" id="collapseWorkBookQ2" style="position: absolute">
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
                <span type="button" data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ3" aria-expanded="false" aria-controls="collapseWorkBookQ3"
                      @click="openWorkBookQ(16)"
                >_______</span>.
                <div class="collapse" id="collapseWorkBookQ3" style="position: absolute">
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
                <span type="button" data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ4" aria-expanded="false" aria-controls="collapseWorkBookQ4"
                      @click="openWorkBookQ(17)"
                >_______</span>.
                <div class="collapse" id="collapseWorkBookQ4" style="position: absolute">
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

        <!--Второй вопрос-->
        <div class="background-task2" v-if="mainJSON.task1.modularTask1_15Show">
            <div v-for="el in mainJSON.task1.listWorkBook2" :key="el.id">
                <div class="d-flex mt-2">
                    <img :src="'img/'+el.src" alt="" style="width: calc(100%/2.5);">
                    <div>
                        <p>
                            Рисунок №{{el.id}}
                        </p>
                        <p>
                            {{el.value}}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!--Третий вопрос-->
        <div class="background-task" v-if="mainJSON.task1.modularTask1_16Show">
            <p style="line-height: 3;">
                Москва была основана в
                <MySelect :list="this.mainJSON.task1.listWorkBook1" :listID="1" @answer="addAnswer"
                          :selected="this.mainJSON.task1.results.ULSCLL1_Log_LLK1_1"></MySelect>
                году
                <MySelect :list="this.mainJSON.task1.listWorkBook1" :listID="2" @answer="addAnswer"
                          :selected="this.mainJSON.task1.results.ULSCLL1_Log_LLK1_1"></MySelect>.
                По его указу на берегу Москвы-реки была возведена деревянная крепость. Сейчас на этом месте мы видим
                <MySelect :list="this.mainJSON.task1.listWorkBook1" :listID="3" @answer="addAnswer"
                          :selected="this.mainJSON.task1.results.ULSCLL1_Log_LLK1_1"></MySelect>.
                В наше время рядом с этим местом находится памятник
                <MySelect :list="this.mainJSON.task1.listWorkBook1" :listID="4" @answer="addAnswer"
                          :selected="this.mainJSON.task1.results.ULSCLL1_Log_LLK1_1"></MySelect>.
            </p>
        </div>

        <!--Четвертый вопрос-->
        <div class="background-task" v-if="mainJSON.task1.modularTask1_17Show">
            <p style="line-height: 3;">
                Москва была основана в
                <MySelect :list="this.mainJSON.task1.listWorkBook1" :listID="1" @answer="addAnswer"
                          :selected="this.mainJSON.task1.results.ULSCLL1_Log_LLK1_1"></MySelect>
                году
                <MySelect :list="this.mainJSON.task1.listWorkBook1" :listID="2" @answer="addAnswer"
                          :selected="this.mainJSON.task1.results.ULSCLL1_Log_LLK1_1"></MySelect>.
                По его указу на берегу Москвы-реки была возведена деревянная крепость. Сейчас на этом месте мы видим
                <MySelect :list="this.mainJSON.task1.listWorkBook1" :listID="3" @answer="addAnswer"
                          :selected="this.mainJSON.task1.results.ULSCLL1_Log_LLK1_1"></MySelect>.
                В наше время рядом с этим местом находится памятник
                <MySelect :list="this.mainJSON.task1.listWorkBook1" :listID="4" @answer="addAnswer"
                          :selected="this.mainJSON.task1.results.ULSCLL1_Log_LLK1_1"></MySelect>.
            </p>
        </div>

        <div class="background-text">
            <p>
                Инструкция: Заполни пропуски в тексте.
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.results.ULSCLL1_Log_SCK2_1 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

    <MyModal v-model:show="modalVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "ModularTask4",
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: ''
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            showModal(){
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            show1_12(){
                this.mainJSON.task1.modularTask1_11Show = false
                this.mainJSON.task1.modularTask1_12Show = true
            },
            show1_13(){
                this.mainJSON.task1.modularTask1_12Show = false
                this.mainJSON.task1.modularTask1_13Show = true
            },
            show1_14(){
                this.mainJSON.task1.modularTask1_13Show = false
                this.mainJSON.task1.modularTask1_14Show = true
            },
            addAnswer(el, listID){
                if(listID === 1){
                    this.mainJSON.task1.results.ULSCLL1_Log_LLK1_1 = el
                    if(el === 'этнографический парк' || el === 'центр искусств одаренных детей Севера'){
                        this.mainJSON.task1.results.UL3SEIIDT_InvitationsJarv_IIS5_1 = 1
                    }
                    else {
                        this.mainJSON.task1.results.UL3SEIIDT_InvitationsJarv_IIS5_1 = 0
                    }
                }
                if(listID === 2){
                    this.mainJSON.task1.results.UL3SEIIDT_InvitationsParf_Log_IIS5_2 = el
                    if(el === 'ярмарка современных народных промыслов малых народов России'){
                        this.mainJSON.task1.results.UL3SEIIDT_InvitationsJarv_IIS5_2 = 1
                    }
                    else {
                        this.mainJSON.task1.results.UL3SEIIDT_InvitationsJarv_IIS5_2 = 0
                    }
                }
                if(listID === 3){
                    this.mainJSON.task1.results.UL3SEIIDT_InvitationsParf_Log_IIS5_3 = el
                    if(el === 'фестиваль народной музыки северных народов России'){
                        this.mainJSON.task1.results.UL3SEIIDT_InvitationsJarv_IIS5_3 = 1
                    }
                    else {
                        this.mainJSON.task1.results.UL3SEIIDT_InvitationsJarv_IIS5_3 = 0
                    }
                }
                if(listID === 4){
                    this.mainJSON.task1.results.UL3SEIIDT_InvitationsParf_Log_IIS5_4 = el
                    if(el === 'калитки'){
                        this.mainJSON.task1.results.UL3SEIIDT_InvitationsJarv_IIS5_4 = 1
                    }
                    else {
                        this.mainJSON.task1.results.UL3SEIIDT_InvitationsJarv_IIS5_4 = 0
                    }
                }
            },
            openWorkBookQ(id){
                this.mainJSON.task1["modularTask1_" + id + "Show"] = !this.mainJSON.task1["modularTask1_" + id + "Show"]
            },
            checkAnswer(status){
                this.modalVisible = false

                if(status) {
                    this.mainJSON.task1.modularTask1_10Show = false
                    this.mainJSON.task1.modularTask1_11Show = true
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
    .background0, .background1, .background2, .background3{
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
    }
    .background0 {
        background: url("../../assets/BackgroundModule11.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background1 {
        background: url("../../assets/BackgroundModule12.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background2 {
        background: url("../../assets/BackgroundModule13.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background3 {
        background: url("../../assets/BackgroundModule14.png") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .background-task {
            width: calc(100%/3.5);
            position: absolute;
            top: calc(100%/4);
            left: calc(100%/5);
    }
    .background-task2 {
        width: calc(100%/3.5);
        position: absolute;
        top: calc(100%/7);
        left: calc(100%/1.8);
    }
    .card {
        background: #FFFFFF;
        border: 1px solid #54BEDF;
    }

</style>