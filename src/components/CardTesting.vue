<template>
  <div class="main">
    <div class="container">   
    <p class="error" v-if="error"> {{error}}</p> 
    <div class="static">
    <h2> {{randomizedFlavor}}</h2   >
    </div>
    <!-- <h1 v-html="randomizedFlavor"></h1> -->
    <p> {{checkText}}</p>
    <p v-if="loadCheck"> {{text}} </p>
    <p v-if="gameEnds">{{text}} </p>
   <div id="load" v-if="loadCheck"> <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader> </div>
   <p> Score: {{score}}</p>
   <p> Round: {{round}}/15 </p>
<p>Random cards from {{currentExpansion}} set: </p>

<button v-on:click="setDiffrentExpansion('The Boomsday Project');backgroundChange('boomsday.jpg')" class="btn btn-primary"> The Boomsday Project</button>
<button @click="setDiffrentExpansion('The Witchwood');backgroundChange('witchwood.jpg')" class="btn btn-primary"> The Witchwood</button>
<button @click="setDiffrentExpansion('The League of Explorers');backgroundChange('legue.jpg')" class="btn btn-primary"> The League of Explorers</button>
<button v-on:click="restart()" class="btn btn-primary"> Play again </button> 
  <div class="row">
    <div  v-for="(card,index) in cards" :key="index">
      <!-- test -->
   <div class="col-md-4">
        <div > <img class="cardImages" v-on:click="imageClick(card, $event)" v-bind:src="card.img" /> </div>
           <!-- <p> {{card.cardId}} </p> -->
           <!-- <p> flavor:  {{card.flavor}} </p> -->
 

</div> 
        </div>
        <!-- <p v-for="(cart,index) in card" :key="index"> '{{cart.cardId}}',</p> -->
    </div>
    </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import ApiHandle from '../ApiHandling.js';
import Set from '../SetCardSets.js'
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
      randomizedFlavorId: '',
      score: 0,
      round: 1,
      gameEnds: false,
      currentExpansion: '',
      background: ''
    };
  },
  async created() {
      this.test();
      // console.log(localStorage)
      // localStorage.clear()
      if(localStorage.getItem('first')) 
      {
        this.currentExpansion = 'The Boomsday Project';
        this.loadCheck = false;
        let localObject = (JSON.parse(localStorage.getItem('first')))[ this.currentExpansion ];
        this.currentCards(localObject);
      }
      else {
        this.loadCheck = true;
    try {
       this.currentExpansion = 'The Boomsday Project';
      let cards  = await ApiHandle.getCards();
      let localObject =  localStorage.setItem('first', JSON.stringify(cards));
        let stored = cards[ this.currentExpansion ];
          const widthSrc = [];
        for(let i = 0; i < stored.length; i++){
          if(stored[i].img !== undefined && stored[i].flavor !== undefined){
          widthSrc.push(stored[i]);
          }
        }
        const shuffled = widthSrc.sort(() => .5 - Math.random());
        this.cards = shuffled.slice(0,3);
      let random = this.cards[Math.floor(Math.random()*this.cards.length)];
        this.randomizedFlavorId = random.cardId;
        this.randomizedFlavor = random.flavor.replace("\n"," ");
    } catch (err) {
      this.error = err.message;
    } finally {
      this.test2()
    }
      }
      
  },
   computed: {
    // backgrounds () {
    //   return require('../assets/backgrounds/witchwood.jpg')
    // },
  },
  beforeMount() {
    this.Loading();
  },
  mounted() {
    this.test4();
  },
  methods: {
  async backgroundChange(background){
    let backgrounds = require("../assets/backgrounds/"+background);
    // console.log(backgrounds);
    let body = document.getElementsByTagName("BODY")[0];
    body.style.backgroundImage = `url(${backgrounds})`;

    },
    test() {
      this.text = 'loading the data:';    
    },
    test2() {
      this.text = 'there we go:'
      document.getElementById('load').style.display = 'none';
    },
    Loading() {
      console.log('Loading the assets');
    },
    test4() {
        let images = document.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('load', () => {
          // console.log(`${images[i].src} 'image loaded properly'`)
        });
        images[i].addEventListener('error', ()=> {
          // console.log(images[i] + ' not loaded')
        });

        
      }
    },
    imageClick(card, event){
      if(typeof card.onclick == "function") {
       // someNode has an event handler already set for the onclick event...
       console.log('already clicked')
      }
      if(card.cardId === this.randomizedFlavorId) {
        if(this.round === 15){
          this.text = `End of a game. Your score: ${this.score}`
          this.gameEnds = true;
        } else {
         this.checkText = 'matched'
         console.log(event.target)
        this.round++;
        this.score++;
        this.again();
        }
      }
      else {
        //  Klikniecie zlej karty
        if(this.round === 15){ this.cards = []} 
        else {
        this.checkText = "missed";
        let wrongClickedImage = event.target;
        wrongClickedImage.style.setProperty("animation", "cardShatter 1.5s");
        setTimeout( function(){
        wrongClickedImage.style = " visibility: hidden";
        },1500);
        // console.log(wrongClickedImage);
        if(this.score === 0 ) {
          console.log('its already 0');
        } else {
          this.score--;
        }
        }
      }
    },
    setDiffrentExpansion(expansion){
      console.log(expansion)
      console.log($('row').children.style)
      this.currentExpansion = expansion;
        let localObject = (JSON.parse(localStorage.getItem('first')))[ this.currentExpansion  ];
        this.currentCards(localObject);
        
    },
    currentCards(localObject) {
       const widthSrc = [];
        for(let i = 0; i < localObject.length; i++){
          if(localObject[i].img !== undefined && localObject[i].flavor !== undefined){
          widthSrc.push(localObject[i]);
          }
        }
        const shuffled = widthSrc.sort(() => .5 - Math.random());
        this.cards = shuffled.slice(0,3);
        let random = this.cards[Math.floor(Math.random()*this.cards.length)];
        this.randomizedFlavorId = random.cardId;
        this.randomizedFlavor = random.flavor.replace("\n"," ");
    },
    again(){
       let cardImages = document.getElementsByClassName('cardImages');
       for(let i = 0; i < cardImages.length; i++) {
          console.log(cardImages[i])
         cardImages[i].style.visibility = 'visible';
         cardImages[i].style.setProperty("animation", "none");
       };
         let localObject = (JSON.parse(localStorage.getItem('first')))[ this.currentExpansion ];
        this.currentCards(localObject)
        

    },
    restart() {
      this.again();
      this.score = 0;
      this.round = 1;
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  /* /img/witchwood.8c6e9130.jpg */
  height: 100vh;
  transition: background-image 3s ease-in-out;
  background-image: url('../assets/backgrounds/hearthstone.jpg');
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
  background-color: black;
}
@keyframes cardShatter {
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.3)
  }
  100% {
    transform: scale(0);
    visibility: hidden;
  }
}
@keyframes cardRight {
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.3)
  }
  100% {
    transform: scale(0);
    visibility: hidden;
  }
}
</style>
<style scoped>
 .main {
   /* height: 100vh; */
   height:100%;
   color:white;
 }
 .static {
   height: 120px;
 }
 
 h2 {
   background:black;
   border:solid 1px beige;
   padding: 10px;
 }
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

img {
  height: 250px;
  width: 200px;
}
.btn {
  margin: 10px;
}
 /* 3 blocks  */
.square-container {
  display: flex;
  flex-wrap: wrap;
}

.square {
  position: relative;
  flex-basis: calc(33.333% - 10px);
  margin: 5px;
  border: 1px solid;
  box-sizing: border-box;
}
.row {
  justify-content: center;
  margin: 0;
  padding: 0;
}

.square::before {
  content: '';
  display: block;
  padding-top: 100%;
}

.square .content {
  position: absolute;
  top: 0; left: 0;
    height: 100%;
  width: 100%;
}
</style>
