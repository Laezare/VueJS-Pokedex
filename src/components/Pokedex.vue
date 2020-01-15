<template>
  <div class="pokemon_background">
    <ul id="pokemon">
      <!--              parse le json pour chercher chaque pokemon         -->

      <li v-for="pokemon in pokemonList.results" v-bind:key="pokemon">
        <div class="card_pokemon">
          <div class="container">
            <header class="pokemon_name">
              <!-- nom du pokemon -->
              <h4>{{ pokemon.name }}</h4>
            </header>
            <div class="pokemon_sprite">
              <img
              id="pokemon_sprite"
              :src=" 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (pokemon.url).split('/')[6] +'.png' "
              />
            </div>
            <!-- sprite du pokemon -->

            <div> 
              N°{{(pokemon.url).split('/')[6]}}
              <!-- details du pokemon (types,stats )   -->
              <button
              v-on:click="details((pokemon.url).split('/')[6])"
              class="button-detail btn-sm btn-primary"
              >More</button>
              <div v-show="show[(pokemon.url).split('/')[6]-(currentUrl).split(/=|&/)[1]-1]" class="container" >
                <li 
                v-for="type in types" 
                :key="type"
                >
                <!-- obtenir le(s) type(s) des pokemons -->
                <div v-bind:class="whichType(type.type.name)" class="type-button">
                  <!-- bind pour obtenir la couleur en fonction du type -->
                  {{type.type.name}}
                </div>
              </li>
              <!-- obtenir les stats des pokemons -->
              <div class="container">
                <li
                v-for="stat in stats"
                :key="stat" class="pokemon_name"
                >
                    {{stat.stat.name}}: {{stat.base_stat}}
              </li>              
            </div>
            <div>
            {{infos}}</div>
          </div>
        </div>
      </div>
    </div>
  </li>
  <!-- reviens en arrière en fonction de l'api.previous -->
  <button v-on:click="refreshPokemonList(pokemonList.previous)" class="button-previous button-detail btn-sm btn-danger" v-show="pokemonList.previous != null">Previous</button>
  <!-- fetch le prochaine api en fonction de l'api.next -->
  <button v-on:click="refreshPokemonList(pokemonList.next)" class="button-next button-detail btn-sm btn-danger">Next</button>
</ul>
</div>
</template>

<script>
import axios from 'axios';
const currentUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
const pageId = 0;
export default {
  name: "Pokedex",
  data() {
    return {
      types: [],
      stats: [],
      show: [],
      infos:"",
      pageId,
      currentUrl,
      pokemonList: [
      axios
      .get(currentUrl)
      .then(response => { 
        this.pokemonList = response.data})
      .catch(error => {
        alert(error);
      })
      ]
    };
  },
  methods: {
    details(id) {
      this.infos="",
      this.stats=[],
      axios
      .get("https://pokeapi.co/api/v2/pokemon/" + id)
      .then(response => {(this.stats = response.data.stats, this.types = response.data.types)})
      .catch(error => {
        alert(error);
      }),
      axios
      .get("https://pokeapi.co/api/v2/pokemon-species/" + id)
      .then(response => {(this.infos = response.data.flavor_text_entries[1].flavor_text)})
      .catch(error => {
        alert(error);
      })
      if (this.show[id-this.pageId-1] === true) {
        this.show[id-this.pageId-1] = false;      
      }
      else {
        (this.show=[],
          this.show[id-this.pageId-1] = true)
      }   
    },
    refreshPokemonList(argUrl) {
      fetch(argUrl)
      .then(response => response.json())
      .then(response => (this.pokemonList = response)),
      this.currentUrl = argUrl,
      this.pageId = (argUrl).split(/=|&/)[1],
      this.show = []

    },
    whichType(type) {
      return {
        normal: type === "normal",
        fire: type === "fire",
        water: type === "water",
        grass: type === "grass",
        electric: type === "electric",
        ice: type === "ice",
        fighting: type === "fighting",
        poison: type === "poison",
        ground: type === "ground",
        flying: type === "flying",
        psychic: type === "psychic",
        bug: type === "bug",
        rock: type === "rock",
        ghost: type === "ghost",
        dragon: type === "dragon",
        dark: type === "dark",
        steel: type === "steel",
        fairy: type === "fairy"
      };
    }

  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- https://i.ibb.co/3dyyJph/Pokemon-Background.jpg  https://cdn.suwalls.com/wallpapers/games/pokemon-15514-1920x1200.jpg -->
<style scoped>

@font-face {
  font-family: "Marshmallow";
  src: url("data:assets/fonts/MarshmallowPersonalUseRegular-dLOK.ttf") format("ttf");
}
.pokemon_background {
  background-image: url('https://st2.depositphotos.com/3213441/12022/v/450/depositphotos_120226496-stock-illustration-pokemon-go-pokeball-seamless-texture.jpg');
  background-repeat: repeat;
}
#pokemon_sprite {
  object-fit: fill;
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

.pokemon_name {
  text-transform: capitalize;
  text-align: center;
}

.button-detail {
  display: block;
  margin: 0 auto;
  text-align: center;
}

.pokemon_sprite {
  width: 14em;
  margin-left: 28%;
}

.card_pokemon {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10% 0;
  padding: 0.1em;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 5px;
  width: 17em;
  height: auto;
}

.card_types {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10% 0;
  padding: 0.2em;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 5px;
}

/* On mouse-over, add a deeper shadow */
.card_pokemon:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
}

/* Add some padding inside the card container */
.container {
  padding: 1em;
}

.button-next {
  margin-left: 1em;
}
.button-previous {
  margin-left: 40%;
}

.bug {
	background-color: #A8B820;
}
.dark {
	background-color: #705848;
}
.dragon {
	background-color: #7038F8;
}
.electric {
	background-color: #F8D030;
}
.fairy {
	background-color: #EE99AC;
}
.fighting {
	background-color: #C03028;
}

.flying {
	background-color: #A890F0;
}
.ghost {
	background-color: #705898;
}
.grass {
	background-color: #78C850;
}
.ground{
	background-color: #E0C068;
}
.ice {
	background-color: #98D8D8;
}
.poison{
	background-color: #A040A0;
}
.psychic {
	background-color: #F85888;
}
.rock {
	background-color: #B8A038;
}
.steel {
	background-color: #B8B8D0;
}
.fire {
  background-color: #F08030;
}
.water {
	background-color: #6890F0;
}
.normal {
  background-color: #A8A878;
}

.type-button {
  text-transform: capitalize;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border: none;
  color: white;
  text-shadow: 0.1rem 0.1rem 0.1rem black;
  cursor: pointer;
  outline: none;
  border-radius: 1rem;
  height: 2rem;
  padding-left: 1.1rem;
  padding-right: 0.9rem;
  padding-top: 0.2rem;
  margin: 0.2rem
}
</style>
