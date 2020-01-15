<template>
  <div>
      <Navbar />
      <router-view />
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
//import axios from 'axios'
import Pokedex from "./components/Pokedex.vue";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';


export default {
  name: "app",
  components: {
    Home,
    Pokedex,
    Navbar,
    PulseLoader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
