<template>
    <div v-if="show" class="dialog">
        <div class="dialog-body">
            <div class="chat-menu d-flex flex-column align-items-center">
                <img src="../../../../assets/menu.png" alt="" style="width: 600px">
                <div class="list-of-menu">
                    <div style="position: absolute; left: 50px; width: 260px; top: 170px">
                        <p>Творожная запеканка 168 кКал:</p>
                        <ul>
                            <li @click="highlightMenu(1)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight1}">со сметаной 20% 103 ккал</li>
                            <li @click="highlightMenu(2)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight2}">с вареньем 125 кКал</li>
                            <li @click="highlightMenu(3)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight3}">со свежими фруктами 25 кКал</li>
                            <li @click="highlightMenu(4)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight4}">с шоколадным соусом 110 кКал</li>
                        </ul>
                        <p>Овсяная каша 88 ккал:</p>
                        <ul>
                            <li @click="highlightMenu(5)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight5}">с вареньем 125 кКал</li>
                            <li @click="highlightMenu(6)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight6}">с печеным яблоком 30 кКал</li>
                        </ul>
                        <p>Готовый завтрак:</p>
                        <ul>
                            <li @click="highlightMenu(7)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight7}">шоколадные шарики 206 кКал</li>
                            <li @click="highlightMenu(8)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight8}">Подушечки с шоколадной начинкой 238 кКал</li>
                            <li @click="highlightMenu(9)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight9}">Сосиски отварные с горошком консервированным 181 кКал</li>
                            <li @click="highlightMenu(10)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight10}">Сэндвич с индейкой и салатом 156 кКал</li>
                            <li @click="highlightMenu(11)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight11}">Мини-пицца 182 кКал</li>
                            <li @click="highlightMenu(12)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight12}">Омлет 184 кКал</li>
                        </ul>



                        <ul style="margin-top: 50px;">
                            <li @click="highlightMenu(13)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight13}">Молоко 102 кКал</li>
                            <li @click="highlightMenu(14)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight14}">Какао с сахаром 106 кКал</li>
                            <li @click="highlightMenu(15)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight15}">Фруктовый  компот 60 кКал</li>
                            <li @click="highlightMenu(16)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight16}">Лимонад газированный 50 кКал</li>

                        </ul>

                        <p style="margin-top: 40px;">Салаты:</p>
                        <ul>
                            <li @click="highlightMenu(17)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight17}">Оливье с колбасой 202 кКал</li>
                            <li @click="highlightMenu(18)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight18}">Мимоза с консервированной горбушей 272 кКал</li>
                            <li @click="highlightMenu(19)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight19}">Витаминный с капустой 68 кКал</li>
                            <li @click="highlightMenu(20)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight20}">Из свежих овощей 67 кКал</li>

                        </ul>


                    </div>
                    <div style="position: absolute; left: 320px; width: 250px; top: 110px">


                        <p  style="margin-top: 40px;">Супы:</p>
                        <ul>
                            <li @click="highlightMenu(21)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight21}">Рыбный суп 33 кКал</li>
                            <li @click="highlightMenu(22)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight22}">Овощной суп-пюре 18 кКал</li>
                            <li @click="highlightMenu(23)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight23}">Гороховый суп с копчёностями 119 кКал</li>
                            <li @click="highlightMenu(24)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight24}">Солянка 67 кКал</li>

                            <li @click="highlightMenu(25)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight25}">Рассольник 40 кКал</li>

                        </ul>

                        <p style="margin-top: 30px">Основное:</p>
                        <ul>
                            <li @click="highlightMenu(26)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight26}">Тефтели из говядины  172 кКал</li>
                            <li @click="highlightMenu(27)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight27}">Рыбные палочки 206 кКал</li>
                            <li @click="highlightMenu(28)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight28}">Сардельки телячьи  215 кКал</li>
                            <li @click="highlightMenu(29)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight29}">Запечённые куриные котлеты 197 кКал</li>
                            <li @click="highlightMenu(30)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight30}">Куриные наггетсы 237 кКал</li>
                            <li @click="highlightMenu(31)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight31}">Отбивная из индейки 110 кКал</li>

                        </ul>

                        <p >Гарнир:</p>
                        <ul>
                            <li @click="highlightMenu(32)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight32}">Картофель фри (во фритюре) 305 кКал</li>
                            <li @click="highlightMenu(33)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight33}">Макароны с маслом 152 кКал</li>
                            <li @click="highlightMenu(34)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight34}">Тушёные овощи 51 кКал</li>
                            <li @click="highlightMenu(35)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight35}">Печёный картофель 157 кКал</li>
                            <li @click="highlightMenu(36)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight36}">Гречка 97 кКал</li>
                            <li @click="highlightMenu(37)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight37}">Консервированная кукуруза 67 кКал</li>

                        </ul>


                        <ul style="margin-top: 40px;">
                            <li @click="highlightMenu(38)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight38}">Фруктовый компот 60 кКал</li>
                            <li @click="highlightMenu(39)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight39}">Лимонад газированный 60 кКал</li>
                            <li @click="highlightMenu(40)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight40}">Сок пакетированный 98 кКал</li>
                            <li @click="highlightMenu(41)"
                                :class="{highlightMenuCSS: this.mainJSON.task2.highlight41}">Напиток из шиповника 30 кКал</li>

                        </ul>


                    </div>

                </div>
                <MyButton @click="checkAnswer">Готово</MyButton>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChatMenuModal",
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
            highlightMenu(id) {
                if (id === 1){
                    this.mainJSON.task2.highlight1 = !this.mainJSON.task2.highlight1
                }
                if (id === 2){
                    this.mainJSON.task2.highlight2 = !this.mainJSON.task2.highlight2
                }
                if (id === 3){
                    this.mainJSON.task2.highlight3 = !this.mainJSON.task2.highlight3
                }
                if (id === 4){
                    this.mainJSON.task2.highlight4 = !this.mainJSON.task2.highlight4
                }
                if (id === 5){
                    this.mainJSON.task2.highlight5 = !this.mainJSON.task2.highlight5
                }
                if (id === 6){
                    this.mainJSON.task2.highlight6 = !this.mainJSON.task2.highlight6
                }
                if (id === 7){
                    this.mainJSON.task2.highlight7 = !this.mainJSON.task2.highlight7
                }
                if (id === 8){
                    this.mainJSON.task2.highlight8 = !this.mainJSON.task2.highlight8
                }
                if (id === 9){
                    this.mainJSON.task2.highlight9 = !this.mainJSON.task2.highlight9
                }
                if (id === 10){
                    this.mainJSON.task2.highlight10 = !this.mainJSON.task2.highlight10
                }
                if (id === 11){
                    this.mainJSON.task2.highlight11 = !this.mainJSON.task2.highlight11
                }
                if (id === 12){
                    this.mainJSON.task2.highlight12 = !this.mainJSON.task2.highlight12
                }
                if (id === 13){
                    this.mainJSON.task2.highlight13 = !this.mainJSON.task2.highlight13
                }
                if (id === 14){
                    this.mainJSON.task2.highlight14 = !this.mainJSON.task2.highlight14
                }
                if (id === 15){
                    this.mainJSON.task2.highlight15 = !this.mainJSON.task2.highlight15
                }
                if (id === 16){
                    this.mainJSON.task2.highlight16 = !this.mainJSON.task2.highlight16
                }
                if (id === 17){
                    this.mainJSON.task2.highlight17 = !this.mainJSON.task2.highlight17
                }
                if (id === 18){
                    this.mainJSON.task2.highlight18 = !this.mainJSON.task2.highlight18
                }
                if (id === 19){
                    this.mainJSON.task2.highlight19 = !this.mainJSON.task2.highlight19
                }
                if (id === 20){
                    this.mainJSON.task2.highlight20 = !this.mainJSON.task2.highlight20
                }
                if (id === 21){
                    this.mainJSON.task2.highlight21 = !this.mainJSON.task2.highlight21
                }
                if (id === 22){
                    this.mainJSON.task2.highlight22 = !this.mainJSON.task2.highlight22
                }
                if (id === 23){
                    this.mainJSON.task2.highlight23 = !this.mainJSON.task2.highlight23
                }
                if (id === 24){
                    this.mainJSON.task2.highlight24 = !this.mainJSON.task2.highlight24
                }
                if (id === 25){
                    this.mainJSON.task2.highlight25 = !this.mainJSON.task2.highlight25
                }
                if (id === 26){
                    this.mainJSON.task2.highlight26 = !this.mainJSON.task2.highlight26
                }
                if (id === 27){
                    this.mainJSON.task2.highlight27 = !this.mainJSON.task2.highlight27
                }
                if (id === 28){
                    this.mainJSON.task2.highlight28 = !this.mainJSON.task2.highlight28
                }
                if (id === 29){
                    this.mainJSON.task2.highlight29 = !this.mainJSON.task2.highlight29
                }
                if (id === 30){
                    this.mainJSON.task2.highlight30 = !this.mainJSON.task2.highlight30
                }
                if (id === 31){
                    this.mainJSON.task2.highlight31 = !this.mainJSON.task2.highlight31
                }
                if (id === 32){
                    this.mainJSON.task2.highlight32 = !this.mainJSON.task2.highlight32
                }
                if (id === 33){
                    this.mainJSON.task2.highlight33 = !this.mainJSON.task2.highlight33
                }
                if (id === 34){
                    this.mainJSON.task2.highlight34 = !this.mainJSON.task2.highlight34
                }
                if (id === 35){
                    this.mainJSON.task2.highlight35 = !this.mainJSON.task2.highlight35
                }
                if (id === 36){
                    this.mainJSON.task2.highlight36 = !this.mainJSON.task2.highlight36
                }
                if (id === 37){
                    this.mainJSON.task2.highlight37 = !this.mainJSON.task2.highlight37
                }
                if (id === 38){
                    this.mainJSON.task2.highlight38 = !this.mainJSON.task2.highlight38
                }
                if (id === 39){
                    this.mainJSON.task2.highlight39 = !this.mainJSON.task2.highlight39
                }
                if (id === 40){
                    this.mainJSON.task2.highlight40 = !this.mainJSON.task2.highlight40
                }
                if (id === 41){
                    this.mainJSON.task2.highlight41 = !this.mainJSON.task2.highlight41
                }
            },
        }
    }
</script>

<style scoped>
    .dialog-body {
        margin: 0 auto;
        background: #fff;
        border-radius: 12px;
        padding: 20px;
        width: 50%;
        height: 90%;
        position: relative;
    }
    .chat-menu {
        width: 100%;
        height: 100%;
        overflow: scroll;
        position: relative;
    }
    .highlightMenuCSS {
        background: rgba(0, 37, 0, 0.2);
        outline: 0.5px dashed #002500;
        border-radius: 10px;
    }
    .list-of-menu p, .list-of-menu li {
        font-size: 12px;
        color: #4E6073
    }
    .list-of-menu ul {
        margin-bottom: 5xp;
    }
</style>