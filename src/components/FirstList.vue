<template>
  <div>
    <div>
      <h1>Введите желаемую сумму!</h1>
      <input type="number" v-model="InputValue">
      <button @click="InputValue = null">Очистить</button><br><br>
      <button @click="saveValue(InputValue)">Продолжить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstList',
  data(){
    return {
      InputValue: null
      }
    },

  methods: {
    saveValue: function(data) {
      this.$store.commit('cin', data);
      this.$router.push({name: 'SecondList'})
  }
},

  beforeDestroy() {
    this.$store.commit('lolz', this.InputValue)
  }
}
</script>
