<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <cardTesting /> 
      <cardIds />
      <p v-if="error">{{error}}</p>
      <!-- <p v-for="(card, index) in cards" :key="index">{{card}}</p> -->
  </div>
</template>

<script>
import cardTesting from './components/CardTesting.vue';
import cardIds from './components/CardIds.vue'
export default {
  name: 'app',
  components: {
    cardTesting,
    cardIds
  },
   data() {
    return {
        cards: cardIds.props,
        error: ''
    }
},
 async created() {
    try {
      console.log(this.cards)
    } catch (err) {
      this.error = err.message;
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
