<template>
  #app
  ul
    li(v-for="pokemon in pokemons")
      a(v-bind:href="pokemon.url") 
        <h3>{{ pokemon.name }}</h3> 
</template>

<script>

import axios from 'axios'

export default {
  name: 'app',
  components: {
    
  },
  data() {
    return {
      pokemons: []
    }
  },
  mounted() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(response => this.pokemons = response.data.results)
  }
}
</script>

<style>
</style>

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
