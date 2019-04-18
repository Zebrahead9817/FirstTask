<template>
    <div>
        <div v-for="post in posts" :key="posts.id">
            <label>
                <input name="post"
                       v-model="chooseValue"
                       type="radio"
                       :value="{
                  value: post.buy,
                  type: 'buy',
                  ccy: post.ccy,
                  base_ccy: post.base_ccy}">
                Покупка {{post.ccy}} за {{post.base_ccy}}
            </label>
            <label>
                <input name="post"
                       type="radio"
                       v-model="chooseValue"
                       :value="{
                  value: post.sale,
                  type: 'sale',
                  ccy: post.ccy,
                  base_ccy: post.base_ccy}">
                Продажа {{post.ccy}} на {{post.base_ccy}}
            </label>
        </div>
        <button @click="saveValue">Выбрать</button>
        <button @click="$router.push({name: 'FirstList'})">Назад</button>
    </div>
</template>

<script>
    export default {
        name: 'SecondList',
            data(){
                return {
                    posts:[],
                    chooseValue: null
                }
            },
         methods:{
             saveValue: function () {
                 if (!this.chooseValue) {
                     return null}
                 let thirdValue =
                     this.chooseValue.type === 'buy'
                         ? this.$store.state.cin / this.chooseValue.value
                         : this.$store.state.cin * this.chooseValue.value;
                         this.$store.commit('cin', thirdValue);
                         this.$router.push({name: 'ThirdList'})
             }
            },
            created () {
                this.$store.state.response.then(value => {this.posts = value})
            },

            beforeDestroy () {
                if (!this.$store.state.cin) {
                    this.$router.push({name: 'FirstList'})
                }
            }
    }
</script>
