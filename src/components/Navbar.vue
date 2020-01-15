<template>
<div>
  <b-navbar type="dark" variant="danger" class="justify-content-between ">
      <b-navbar-nav>
        <router-link to="/" class="link">Home</router-link>
        <router-link to="/pokedex" class="link">Pokedex</router-link>
        
      </b-navbar-nav>
  </b-navbar>
</div>


</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      pokemonSearched:[],
      searchPokemon(pokemonName) {
        fetch("https://pokeapi.co/api/v2/" + pokemonName)
          .then(response => response.json())
          .then(response => (this.pokemonSearched = response))
          .catch(error => {
            alert(error);
          })
      }
    };
  }
};
</script>

<style scoped>
.link {
  color:white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin: 0.5em;
}
</style>