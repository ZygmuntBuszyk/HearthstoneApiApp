 <template>
   
 
 <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="#">HearthstoneApiGame</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav mr-auto">
           <li class="nav-item active">
             <a class="nav-link" style="color:yellow; padding-right: 20px;">CHOOSE THE SET: <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
             <a class="nav-link" @click="expansion( 'The Boomsday Project'); background('boomsday.jpg')">TBP <span class="sr-only">(current)</span></a>
          </li>
           <li class="nav-item active">
            <a class="nav-link" @click="expansion('The Witchwood'); background('witchwood.jpg')">Witchwood <span class="sr-only">(current)</span></a>
          </li>
           <li class="nav-item active">
            <a class="nav-link" @click="expansion('The League of Explorers'); background('legue.jpg')">TLOE<span class="sr-only">(current)</span></a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="https://example.com" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown03">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> -->
           
        </ul>
      <p class="my-2 my-sm-0"> Round: {{this.$attrs.round}} </p>
      <p class="my-2 my-sm-0"> Score: {{this.$attrs.score}} /15 </p>
      <p class="my-2 my-sm-0 again" @click="$emit('restart')">  Play Again</p>

       
      </div>
    </nav>
      </template>

      
<script>
export default {
  name: 'navbar',
   data() {
    return {
       
    }
},
  methods: {
    expansion(expansion) {
      this.$emit('setDiffrentExpansion', expansion)
    },
    background(background) {
      this.$emit('backgroundChange', background)
    }
  }
}
</script>

<style scoped>

element.style {
    color: yellow;
}

p {
  color: white;
  
  padding: 0 20px;
}
.again {
   font-weight: bold;
   cursor: pointer;
}
.again:hover {
  color: #2CBE9B;
}
body {
  overflow-x:hidden;
}
a {
  cursor: pointer;
  text-decoration: none;
}
a:hover {
  color: yellow !important
}
</style>
