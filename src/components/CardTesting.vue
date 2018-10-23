<template>
  <div class="test">
    <p class="error" v-if="error"> {{error}}</p>
    <div v-for="(card,index) in cards" :key="index">
      <!-- test -->
        <p> {{card}}</p>
      <!-- actuall -->
    <!-- <h1 >{{ card.name }}</h1>
    <p> {{card.flavor}}</p>
    <img v-bind:src="card.img" /> -->
    </div>
  </div>
</template>

<script>
import ApiHandle from '../ApiHandling.js';

export default {
  name: 'test',
  data() {
    return {
      cards: {},
      error: ''
    };
  },
  async created() {
    try {
      //   GET ONE SPECIFIC CARD //
      // let cardId = 'EX1_573 ';
      // this.cards = await ApiHandle.getCard(cardId);
      // console.log(this.cards);

      // GET ALL THE CARDS  //
      this.cards = await ApiHandle.getCards();
      console.log(this.cards.Basic);
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {},
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
