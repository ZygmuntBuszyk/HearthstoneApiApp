<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <cardTesting /> 
      <!-- <cardIds /> -->
    
      <p v-if="error">{{error}}</p>
      <p>3 Randomed card Ids from Part of Basic cards: </p>
      <p v-for="(card, index) in cards" :key="index">{{card}}</p>
      <!-- {{cards}} -->  
      
  </div>
</template>

<script>
import cardTesting from './components/CardTesting.vue';
import cardIds from './components/CardIds.vue';


export default {
  name: 'app',
  components: {
    cardTesting,
    cardIds
  },
   data() {
    return {
        // cards: cardIds.props,
        cards: [],
        error: ''
    }
},
 async created() {
   // CHOOSING 3 RANDOM IDS FOR REQUESTS .
  //  console.log( localStorage.getItem('first'))
    try {
      // console.log(cardIds.props)

      const test = cardIds.props;
      const shuffled = test.sort(() => .5 - Math.random());// shuffle  
      let selected =shuffled.slice(0,3) ; //get sub-array of first n elements AFTER shuffle
      this.cards = selected 
      // console.log(selected)
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
