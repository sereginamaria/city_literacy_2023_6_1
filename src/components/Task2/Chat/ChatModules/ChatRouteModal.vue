<template>
    <div v-if="show" class="dialog">
        <div class="dialog-body">
            <div class="chat-route">
                <div :class="{mapBus: this.mainJSON.task2.busChoose,
                                                 mapCar: this.mainJSON.task2.carChoose,
                                                 mapBicycle: this.mainJSON.task2.bikeChoose,
                                                 mapPedestrain: this.mainJSON.task2.manchoose
                                                 }" class="map">

                    <div class="d-flex flex-column task2-map3-search">
                        <MySelect :list="this.mainJSON.task2.chatRouteFrom" :listID="'from'" @answer="addAnswer"
                                  :selected="this.mainJSON.task2.results.ULHLDT3_Log1_DTS2" class="select">

                        </MySelect>
                        <MySelect :list="this.mainJSON.task2.chatRouteTo" :listID="'to'" @answer="addAnswer"
                                  :selected="this.mainJSON.task2.results.ULHLDT3_Log1_DTS2" class="select">

                        </MySelect>

                        <div class="d-flex justify-content-between align-items-center">
                            <div @click="choose('car')" class="transport-buttons"
                                 :class="{transportButtonChoose: this.mainJSON.task2.carShow}">
                                <img v-if="!this.mainJSON.task2.carShow"
                                     src="../../../../assets/car.png" alt="" style="width: 30px">
                                <img v-if="this.mainJSON.task2.carShow"
                                     src="../../../../assets/carwhite.png" alt="">
                            </div>
                            <div @click="choose('bus')" class="transport-buttons"
                                 :class="{transportButtonChoose: this.mainJSON.task2.busShow}">
                                <img v-if="!this.mainJSON.task2.busShow"
                                     src="../../../../assets/bus.png" alt="" style="width: 28px">
                                <img v-if="this.mainJSON.task2.busShow"
                                     src="../../../../assets/buswhite.png" alt="">
                            </div>
                            <div @click="choose('bike')" class="transport-buttons"
                                 :class="{transportButtonChoose: this.mainJSON.task2.bikeShow}">
                                <img v-if="!this.mainJSON.task2.bikeShow"
                                     src="../../../../assets/bike.png" alt="" style="width: 30px">
                                <img v-if="this.mainJSON.task2.bikeShow"
                                     src="../../../../assets/bikewhite.png" alt="">
                            </div>
                            <div @click="choose('man')" class="transport-buttons"
                                 :class="{transportButtonChoose: this.mainJSON.task2.manShow}">
                                <img v-if="!this.mainJSON.task2.manShow"
                                     src="../../../../assets/man.png" alt="" style="width: 15px">
                                <img v-if="this.mainJSON.task2.manShow"
                                     src="../../../../assets/manwhite.png" alt="">
                            </div>
                            <MyButton @click="doneMarsrute" style="background: #f3ae4e; border: #f3ae4e; max-width: 130px;">
                                <p>Построить маршрут</p>
                            </MyButton>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center" style="position: absolute; bottom: 5%; left: calc(50% - 100px)">
                        <div style="padding: 10px; background: #FFFFFF;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);
                        border-radius: 10px; width: 300px" >
                            <div class="d-flex justify-content-between align-items-center"
                                 v-if="this.mainJSON.task2['block' + blockID + 'AnswerShow']" >
                                <div>
                                    <img @click="mapShare" src="../../../../assets/shareblack.png" alt=""
                                         v-if="!this.mainJSON.task2.chatRouteShare"
                                    >
                                    <img @click="mapShare" src="../../../../assets/share.png" alt=""
                                         v-if="this.mainJSON.task2.chatRouteShare"
                                    >
                                </div>
                                <div>
                                    <img @click="mapScrin" src="../../../../assets/scrinblack.png" alt=""
                                         v-if="!this.mainJSON.task2.chatRouteScrin"
                                    >
                                    <img @click="mapScrin" src="../../../../assets/scrin.png" alt=""
                                         v-if="this.mainJSON.task2.chatRouteScrin"
                                    >
                                </div>

                                <MyButton @click="checkAnswer" style="background: #f3ae4e; border: #f3ae4e">Отправить</MyButton>
                                <MyButton @click="close" style="background: #f3ae4e; border: #f3ae4e">Закрыть</MyButton>
                            </div>

                            <div class="d-flex justify-content-between" v-if="!this.mainJSON.task2['block' + blockID + 'AnswerShow']">
                                <div>
                                    <img src="../../../../assets/share.png" alt="">
                                </div>
                                <div>
                                    <img src="../../../../assets/scrin.png" alt="">
                                </div>
                                <MyButton disabled style="background: #f3ae4e; border: #f3ae4e">Отправить</MyButton>
                                <MyButton @click="close" style="background: #f3ae4e; border: #f3ae4e">Закрыть</MyButton>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatRouteModal",
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
            mapScrin(){
                this.mainJSON.task2.chatRouteScrin = !this.mainJSON.task2.chatRouteScrin
                if(this.mainJSON.task2.chatRouteScrin){
                    this.mainJSON.task2.chatRouteShare = false
                }
            },
            mapShare(){
                this.mainJSON.task2.chatRouteShare = !this.mainJSON.task2.chatRouteShare
                if(this.mainJSON.task2.chatRouteShare){
                    this.mainJSON.task2.chatRouteScrin = false
                }
            },
            choose(status){
                if(status === 'car'){
                    this.mainJSON.task2.carShow = !this.mainJSON.task2.carShow
                    if(this.mainJSON.task2.carShow){
                        this.mainJSON.task2.busShow = this.mainJSON.task2.bikeShow = this.mainJSON.task2.manShow = false
                    }
                }
                if(status === 'bus'){
                    this.mainJSON.task2.busShow = !this.mainJSON.task2.busShow
                    if(this.mainJSON.task2.busShow){
                        this.mainJSON.task2.carShow = this.mainJSON.task2.bikeShow = this.mainJSON.task2.manShow = false
                    }
                }
                if(status === 'bike'){
                    this.mainJSON.task2.bikeShow = !this.mainJSON.task2.bikeShow
                    if(this.mainJSON.task2.bikeShow){
                        this.mainJSON.task2.busShow = this.mainJSON.task2.carShow = this.mainJSON.task2.manShow = false
                    }
                }
                if(status === 'man'){
                    this.mainJSON.task2.manShow = !this.mainJSON.task2.manShow
                    if(this.mainJSON.task2.manShow){
                        this.mainJSON.task2.busShow = this.mainJSON.task2.bikeShow = this.mainJSON.task2.carShow = false
                    }
                }
            },
            checkAnswer(){
                this.$emit('update', true)
            },
            doneMarsrute(){
                if(this.mainJSON.task2.carShow){
                    this.mainJSON.task2.carChoose = true
                    this.mainJSON.task2.busChoose = false
                    this.mainJSON.task2.bikeChoose = false
                    this.mainJSON.task2.manChoose = false
                }
                if(this.mainJSON.task2.busShow){
                    this.mainJSON.task2.carChoose = false
                    this.mainJSON.task2.busChoose = true
                    this.mainJSON.task2.bikeChoose = false
                    this.mainJSON.task2.manChoose = false
                }
                if(this.mainJSON.task2.bikeShow){
                    this.mainJSON.task2.carChoose = false
                    this.mainJSON.task2.busChoose = false
                    this.mainJSON.task2.bikeChoose = true
                    this.mainJSON.task2.manChoose = false
                }
                if(this.mainJSON.task2.manShow){
                    this.mainJSON.task2.carChoose = false
                    this.mainJSON.task2.busChoose = false
                    this.mainJSON.task2.bikeChoose = false
                    this.mainJSON.task2.manChoose = true
                }
            },
            addAnswer(el, listID){
                if(listID === 'from'){
                    console.log('from' + el)
                }
                if(listID === 'to'){
                    console.log('to' + el)
                }
            },
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
        position: relative;
    }
    .chat-route {
        width: 100%;
        height: 90%;
        min-width: 200px;
        min-height: 200px;
    }
    .map {
        height: 100%;
        background: url("../../../../assets/mapZOH.png") no-repeat ;
        background-size: contain;
    }
    .mapPedestrain {
        background: url("../../../../assets/mapZOH4.png") no-repeat ;
    }
    .mapBicycle {
        background: url("../../../../assets/mapZOH3.png") no-repeat ;
    }
    .mapCar {
        background: url("../../../../assets/mapZOH1.png") no-repeat ;
    }
    .mapBus {
        background: url("../../../../assets/mapZOH2.png") no-repeat ;
    }
    .task2-map3-search{
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
        border-radius: 10px;
        position: absolute;
        max-width: 350px;
        margin: 30px;
        padding: 20px;
    }
    .select select {
        height: 30px;
        width: 100%;
        border-radius: 200px;
        margin-bottom: 10px;
    }

    .transport-buttons {
        display: flex;
        width: 40px;
        height: 40px;
        align-items: center;
        justify-content: center;
    }

    .transportButtonChoose {
        background-color: #f3ae4e;
        border-radius: 50%;
    }
</style>