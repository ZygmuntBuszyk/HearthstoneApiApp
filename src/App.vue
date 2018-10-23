<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <cardTesting />
  </div>
</template>

<script>
import cardTesting from './components/CardTesting.vue';

export default {
  name: 'app',
  components: {
    cardTesting
  }
};
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
