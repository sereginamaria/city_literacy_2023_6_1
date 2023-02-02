<template>
    <!--Перетаскивание вещей из сумки-->
    <div class="background" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <draggable
                class="list-group draggable-backpack-end"
                :list="this.mainJSON.task1.listOfElementsEnd"
                group="draggingThings"
        >
            <template #item="{ element }">
                <img :src=" require('../../assets/' + element.src_dop) "
                     alt="Avatar"  :style="element.style"/>
            </template>
        </draggable>
        <div>
            <img src="../../assets/LittleBackpackOpen.png" alt="" class="little-backpack" style="bottom: calc(100%/5);">
            <draggable
                    class="list-group draggable-backpack-start"
                    :list="this.mainJSON.task1.listOfElementsStart"
                    group="draggingThings"
            >
                <template #item="{ element }">
                    <img :src=" require('../../assets/' + element.src) "
                         alt="Avatar" :style="element.style"/>
                </template>
            </draggable>
        </div>
        <div class="background-text">
            <p>
                {{constTaskNightInTheMuseum.screens[this.mainJSON.task1.shownScreenID].text}}
            </p>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.task1.listOfElementsEnd.length !== 0">Готово</MyButton>
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
    import draggable from "vuedraggable";

    export default {
        name: "TaskMovingThingsFromBag",
        props: {
            screen: {},
            constTaskNightInTheMuseum: {}
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: ''
            }
        },
        components: {
            draggable
        },
        computed: {
            ...mapGetters(['mainJSON', 'constTaskNightInTheMuseum']),
            screenID(){
                return this.mainJSON.task1.shownScreenID
            }
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
            checkAnswer(status){
                this.modalVisible = false

                if(status){
                    screen.isShow = false
                    this.mainJSON.task1.shownScreenID++
                    this.mainJSON.task1.screens.forEach(el => {
                        if (el.id === this.mainJSON.task1.shownScreenID) {
                            el.isShow = true
                        }
                    })
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
    .little-backpack {
        position: absolute;
        bottom: calc(100%/20);
        width: calc(100%/3.6);
        left: calc(100%/2.3);
    }
    .draggable-backpack-end {
        height: calc(100%/3);
        width: calc(100%/3.3);
        left: calc(100%/8.192);
        bottom: calc(100%/5);
        position: absolute;
    }
    .draggable-backpack-start {
        height: calc(100%/3);
        width: calc(100%/3.3);
        bottom: calc(100%/5);
        left: calc(100%/2.3);
        position: absolute;
    }
</style>