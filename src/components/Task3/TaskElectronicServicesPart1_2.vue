<template>
    <div class="background d-flex align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.png') + ')'}">
        <div class="instruction-block">
            <p>Какой электронный сервис поможет пожилой соседке Макса записаться на танцы в группу ровесников? Кликни на нужную картинку.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100 h-100">
            <div class="background-task flex-row flex-wrap" style="height: 85%; padding: 0">
                <div class="electronic_services_part1_img_block">
                    <img @click="choose(1)" src="../../assets/TaskVolunteersElectronicServices6.png" alt="" :class="{choose: mainJSON.taskVolunteers.results.ULSE1_Log2_SEK5_1 === 1}">
                </div>
                <div class="electronic_services_part1_img_block">
                    <img @click="choose(2)" src="../../assets/TaskVolunteersElectronicServices5.png" alt="" :class="{choose: mainJSON.taskVolunteers.results.ULSE1_Log2_SEK5_1 === 2}">
                </div>
                <div class="electronic_services_part1_img_block">
                    <img @click="choose(3)" src="../../assets/TaskVolunteersElectronicServices3.png" alt="" :class="{choose: mainJSON.taskVolunteers.results.ULSE1_Log2_SEK5_1 === 3}">
                </div>
                <div class="electronic_services_part1_img_block">
                    <img @click="choose(4)" src="../../assets/TaskVolunteersElectronicServices4.png" alt="" :class="{choose: mainJSON.taskVolunteers.results.ULSE1_Log2_SEK5_1 === 4}">
                </div>
            </div>
        </div>


        <div class="background-text">
            <div class="d-flex">
                      <div class="me-2">
                    <img src="../../assets/TaskVolunteersAvatarAnn.png" alt="" style="width: 50px"
                         v-if="constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name === 'Анна Ивановна: ' ||
                         constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name === 'Руководитель школьного клуба волонтеров Анна Ивановна: '">
                    <img src="../../assets/TaskVolunteersAvatarMax.png" alt="" style="width: 50px"
                         v-if="constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name === 'Макс: ' ||
                         constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name === 'Гость: '">
                    <img src="../../assets/TaskVolunteersAvatarSchoolgirl.png" alt="" style="width: 50px"
                         v-if="constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name === 'Школьница: '">
                    <img src="../../assets/TaskVolunteersAvatarSchoolboy.png" alt="" style="width: 50px"
                         v-if="constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name === 'Школьник: '">
                </div>
                <p>
                    <span class="name-in-dialog">{{constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].name}}</span>
                    {{constTaskVolunteers.screens[this.mainJSON.taskVolunteers.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskVolunteers.results.ULSE1_Log2_SEK5_1 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskElectronicServicesPart1_2",
        props: {
            screen: {},
            constTaskVolunteers: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            choose(id) {
                this.mainJSON.taskVolunteers.results.ULSE1_Log2_SEK5_1 = id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskVolunteers.shownScreenID++
                this.mainJSON.taskVolunteers.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskVolunteers.shownScreenID) {
                        el.isShow = true
                    }
                })
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
    .choose {
        border: 5px solid #54BEDF;
    }
</style>