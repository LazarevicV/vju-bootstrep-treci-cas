<template>
  <div>
    lista pokemona:
    <ul>
      <li v-for="pokemon in pokemoni">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Pokemoni",
    data() {
      return {
        pokemoni: [],
      };
    },
    methods: {
      async fetchPokemons() {
        // link ka api za pokemone koji uzima 100 rezultata
        // https://pokeapi.co/api/v2/pokemon?limit=100&offset=0
        try {
          const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
          );
          this.pokemoni = await response.json();
          this.pokemoni = this.pokemoni.results;
          console.log(this.pokemoni);
        } catch (error) {
          console.log(error);
        }
      },
    },
    mounted() {
      this.fetchPokemons();
    },
  };
</script>
