<script>
  import { RouterLink } from "vue-router";

  export default {
    name: "HomeView",
    data() {
      return {
        test: "test",
      };
    },
  };
</script>

<template>
  <div class="container">
    <h1 class="text-center">RAF WSIT VUE JS</h1>
    <h3 class="pt-5">
      Ako zelite da vidite sve korisnike:
      <router-link to="/tabela-korisnika">Tabela korisnika</router-link>
    </h3>

    <h3 class="pt-2">
      Ako zelite da vidite proizvode:
      <router-link to="/proizvodi">Svi proizvodi</router-link>
    </h3>

    <h3 class="pt-2">
      Fetch pokemona preko API 'pokeapi':
      <router-link to="/pokemoni">Pokemoni</router-link>
    </h3>
  </div>
</template>
