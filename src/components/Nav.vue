 <template>
   
 
 <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="#">HearthstoneApiGame</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav mr-auto">
          <!-- <button v-on:click="setDiffrentExpansion('The Boomsday Project');backgroundChange('boomsday.jpg')" class="btn btn-primary"> The Boomsday Project</button>
<button @click="setDiffrentExpansion('The Witchwood');backgroundChange('witchwood.jpg')" class="btn btn-primary"> The Witchwood</button> -->
          <li class="nav-item active">
            <!-- <a class="nav-link" @click="$emit(`setDiffrentExpansion('The Boomsday Project')`)">TBP <span class="sr-only">(current)</span></a> -->
             <a class="nav-link" @click="setExpansion">TBP <span class="sr-only">(current)</span></a>
          </li>
           <li class="nav-item active">
            <a class="nav-link" href="#">Witchwood <span class="sr-only">(current)</span></a>
          </li>
           <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="https://example.com" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown03">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
           
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
    setExpansion(event) {
      console.log(event)
      this.$emit('clicked', 'The Boomsday Project')
    }
  }
}
</script>

<style scoped>
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
</style>
