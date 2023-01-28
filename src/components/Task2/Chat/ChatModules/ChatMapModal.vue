<template>
    <div v-if="show" class="dialog">
        <div class="dialog-body">
            <div style="text-align: center;">
                <p class="text-title">Карта загрязнения атмосферного воздуха в городе</p>
            </div>

            <div class="chat-map">
                <div>
                    <img src="../../../../assets/task2-map.png" alt="" style="width: 1000px">
                    <div v-for="option in this.mainJSON.task2.chatMapOptions" :key="option.id">
                        <div class="d-flex marker-container" :style="{top: option.top, left: option.left}">
                            <div @click="chooseMarker(option)"
                                 :class="{colorOfMarker: option.choose, marker: !option.bicycle, marker_b: option.bicycle}">
                            </div>
                            <div class="park-name">
                                <p>{{option.value}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-end" v-if="this.mainJSON.task2['block' + blockID + 'AnswerShow']">
                <MyButton v-if="this.mainJSON.task2.chatMapAnswers.length !== 0" @click="checkAnswer">Готово</MyButton>
                <MyButton v-if="this.mainJSON.task2.chatMapAnswers.length === 0" disabled>Готово</MyButton>
                <MyButton @click="close">Закрыть</MyButton>
            </div>
            <div class="d-flex justify-content-end" v-if="!this.mainJSON.task2['block' + blockID + 'AnswerShow']">
                <MyButton disabled>Готово</MyButton>
                <MyButton @click="close">Закрыть</MyButton>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatMapModal",
        computed: {
            ...mapGetters(['mainJSON']),
        },
        props: {
            show: {
                type: Boolean
            },
            blockID: {}
        },
        methods: {
            close(){
                this.$emit('update:show', false)
            },
            checkAnswer(){
                this.$emit('update', true)
            },
            chooseMarker(el){
                console.log(this.mainJSON.task2.chatMapAnswers)
                console.log(this.mainJSON.task2['block' + this.blockID + 'AnswerShow'])
                el.choose = !el.choose
                if(this.mainJSON.task2.chatMapAnswers.indexOf(el) === -1){
                    this.mainJSON.task2.chatMapAnswers.push(el)
                }
                else {
                    this.mainJSON.task2.chatMapAnswers.splice(this.mainJSON.task2.chatMapAnswers.indexOf(el), 1)
                }
            }
        }
    }
</script>

<style scoped>
    .dialog-body {
        margin: auto;
        background: #fff;
        border-radius: 12px;
        padding: 20px;
        width: 80%;
        height: 80%;
    }
    .chat-map {
        width: 100%;
        height: 90%;
        overflow: scroll;
        position: relative;
    }

    .marker-container {
        position: absolute;
    }

    .marker {
        width: 15px;
        /*        width: 20px;
                height: 20px;
                border-radius: 20px;*/
        /*       background-color: darkgreen;*/
        cursor: pointer;
        background: url("../../../../assets/marker.svg") no-repeat;
    }
    .marker_b {
        width: 30px;
        height: 40px;
        /*        width: 20px;
                height: 20px;
                border-radius: 20px;*/
        /*       background-color: darkgreen;*/
        cursor: pointer;
        background: url("../../../../assets/marker-b.svg") no-repeat;
    }

    .park-name {
        border: 1px solid #333333;
        background-color: #FFFFFF;
        border-radius: 20px;
        height: 25px;
    }
    .park-name p{
        padding: 0 5px 0 5px;
        font-size: 12px;
        margin-bottom: 0;
        color: #333333;

    }
    .colorOfMarker {
        /*   background-color: blue;*/
        background: url("../../../../assets/marker-choose.svg") no-repeat;
    }
</style>