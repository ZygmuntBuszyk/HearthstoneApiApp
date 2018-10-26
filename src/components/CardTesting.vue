<template>
  <div class="test">
    <p class="error" v-if="error"> {{error}}</p>
    <p> {{text}} </p>
   <div id="load"> <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader> </div>
    <div v-for="(card,index) in cards" :key="index">
      <!-- test -->
      <!-- <p>{{card.cardId}}</p> -->

        <p v-for="(cart,index) in card" :key="index"> '{{cart.cardId}}',</p>
      
      <!-- actuall -->
    <!-- <h1 >{{ card.name }}</h1>
    <p> {{card.flavor}}</p>
    <img v-bind:src="card.img" /> -->
    </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import ApiHandle from '../ApiHandling.js';

export default {
  name: 'CardTesting',
  components: {
    PulseLoader
  },
  data() {
    return {
      cards: [],
      error: '',
      text: ''
    };
  },
  async created() {
     this.test();
    try {
     
      this.cards = await ApiHandle.getCards();
      console.log(this.cards); 
      // var size = Object.keys(this.cards).length;
      // const propOwn = Object.getOwnPropertyNames(this.cards);
      // console.log(propOwn.length);
    } catch (err) {
      this.error = err.message;
    } finally {
      this.test2()
    }
  },
  methods: {
    test() {
      this.text = 'loading the data:';    
    },
    test2() {
      this.text = 'there we go:'
      document.getElementById('load').style.display = 'none';
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
