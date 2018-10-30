<template>
  <div class="test">
    <p class="error" v-if="error"> {{error}}</p>
    <p> {{text}} </p>
   <div id="load"> <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader> </div>
<p>Random cards from a Basic set: </p>
    <div v-for="(card,index) in cards" :key="index">
      <!-- test -->
      <ul v-if="card.img">
         <!-- <li>{{card}} </li> -->
         
        <li> <img v-bind:src="card.img" /> </li>
         
           <li><p> {{card.cardId}} </p></li>
           <li><p> flavor:  {{card.flavor}} </p></li>
        </ul>
        <!-- <p v-for="(cart,index) in card" :key="index"> '{{cart.cardId}}',</p> -->
      
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
      text: '',
      testSessionStarage: ''
    };
  },
  async created() {
      this.test();
      // console.log(localStorage)
      // localStorage.clear()
      if(localStorage.getItem('first')) 
      {

        
       
        let localObject = (JSON.parse(localStorage.getItem('first')))[ 'The Boomsday Project' ]
        // this.cards = localObject.Basic;
        // console.log(localObject)
        //  const keys = Object.keys(localObject)
        // for (const key of keys) {
        // console.log(key)
        // }
        const widthSrc = [];
        for(let i = 0; i < localObject.length; i++){
          // console.log(localObject[i])
          if(localObject[i].img !== undefined){
          widthSrc.push(localObject[i]);
          }
        }
        console.log(widthSrc)
      //  console.log(localObject)
        const shuffled = widthSrc.sort(() => .5 - Math.random());
        this.cards = shuffled.slice(0,3);
        
        // console.log(this.cards)
        // console.log(JSON.parse(localStorage.getItem('first')))

        

        // for(var key in localObject){
        //   var obj = localObject
        // }
        // localObject.map(card => console.log(card));
      }
      else {
    try {
      localStorage.setItem('first', 'someTestText');
      // this.testSessionStarage = 'test local storage item: string';
      // localStorage.setItem = ('key', this.testSessionStarage);
      this.cards = await ApiHandle.getCards();
      console.log(this.cards); 
      // const testarray = ['one', 'two'];
      localStorage.setItem('first', JSON.stringify(this.cards));
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
    //  for (var i = 0; i < document.images.length; i++) {
    //     if (this.test5(document.images[i])) {
    //       console.log(document.images[i])
    //         document.images[i].style.visibility = "hidden";
    //         // console.log(document.images[i])
    //     }
    // }
    // this.test5()
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
          // this.images.style.visibility = "hidden";
        });

        
      }
    },
    test5(img){
    // During the onload event, IE correctly identifies any images that
    // weren't downloaded as not complete. Others should too. Gecko-based
    // browsers act like NS4 in that they report this incorrectly.
    if (!img.complete) {
        return false;
    }

    // However, they do have two very useful properties: naturalWidth and
    // naturalHeight. These give the true size of the image. If it failed
    // to load, either of these should be zero.
    if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
        return false;
    }
    
    // No other way of checking: assume it's ok.
    return true;

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
