<template>
  <div class="test">
    <p class="error" v-if="error"> {{error}}</p>
    <h1> {{randomizedFlavor}} </h1>
    <p> {{checkText}}</p>
    <p v-if="loadCheck"> {{text}} </p>
   <div id="load" v-if="loadCheck"> <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader> </div>
<p>Random cards from a The Boomsday Project set: </p>
    <div v-for="(card,index) in cards" :key="index">
      <!-- test -->
      <ul>
        <li v-on:click="imageClick(card)"> <img v-bind:src="card.img" /> </li>
           <li><p> {{card.cardId}} </p></li>
           <li><p> flavor:  {{card.flavor}} </p></li>
        </ul>
        <!-- <p v-for="(cart,index) in card" :key="index"> '{{cart.cardId}}',</p> -->
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
      text: '',
      checkText: '',
      loadCheck: false,
      randomizedFlavor: '',
      randomizedFlavorId: ''
    };
  },
  async created() {
      this.test();
      // console.log(localStorage)
      // localStorage.clear()
      if(localStorage.getItem('first')) 
      {
        this.loadCheck = false;
        
       
        let localObject = (JSON.parse(localStorage.getItem('first')))[ 'The Boomsday Project' ];
        const widthSrc = [];
        for(let i = 0; i < localObject.length; i++){
          if(localObject[i].img !== undefined && localObject[i].flavor !== undefined){
          widthSrc.push(localObject[i]);
          }
        }
        const shuffled = widthSrc.sort(() => .5 - Math.random());
        this.cards = shuffled.slice(0,3);
        // console.log(this.cards)
        // this.randomizedFlavorId = this.cards[Math.floor(Math.random()*this.cards.length)].cardId;
        // this.randomizedFlavor = this.cards[Math.floor(Math.random()*this.cards.length)].flavor;
        let random = this.cards[Math.floor(Math.random()*this.cards.length)];
        this.randomizedFlavorId = random.cardId;
        this.randomizedFlavor = random.flavor;
      }
      else {
        this.loadCheck = true;
    try {

      let cards  = await ApiHandle.getCards();

      let localObject =  localStorage.setItem('first', JSON.stringify(cards));
        
        let stored = cards[ 'The Boomsday Project' ];
          const widthSrc = [];
        for(let i = 0; i < stored.length; i++){
          // console.log(localObject[i])
          if(stored[i].img !== undefined && stored[i].flavor !== undefined){
          widthSrc.push(stored[i]);
          }
        }
        

        const shuffled = widthSrc.sort(() => .5 - Math.random());
        this.cards = shuffled.slice(0,3);

      
      // var size = Object.keys(this.cards).length;
      // const propOwn = Object.getOwnPropertyNames(this.cards);
      // console.log(propOwn.length);
    } catch (err) {
      this.error = err.message;
    } finally {
      this.test2()
    }
      }
      
  },
  beforeMount() {
    this.test3();
  },
  mounted() {
    this.test4();
  },
  methods: {
    test() {
      this.text = 'loading the data:';    
    },
    test2() {
      this.text = 'there we go:'
      document.getElementById('load').style.display = 'none';
    },
    test3() {
      console.log('before mount');
    },
    test4() {
        console.log('mounted');
        let images = document.getElementsByTagName('img');
        console.log(images)
        for (let i = 0; i < images.length; i++) {
        console.log(images[i])
        
        images[i].addEventListener('load', () => {
          console.log(`${images[i].src} 'image loaded properly'`)
        });
        images[i].addEventListener('error', ()=> {
          console.log(images[i] + ' not loaded')
        });

        
      }
    },
    imageClick(card){
      // console.log(card.cardId)
      // console.log(this.randomizedFlavor)
      if(card.cardId === this.randomizedFlavorId) {
        this.checkText = 'matched'
      }
      else {
        this.checkText = "missed"
      }
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
