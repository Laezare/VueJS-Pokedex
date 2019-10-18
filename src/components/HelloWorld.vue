<template>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      pokemonList: []
    }
  }
}

methods : {
  randomPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(response => this.pokemonList = response.name)
  }
}
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
