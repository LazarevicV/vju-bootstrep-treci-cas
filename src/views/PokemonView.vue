<template>
  <div>
    <h1>Pokemoni</h1>
    <Pokemoni />
  </div>
</template>

<script>
  import Pokemoni from "@/components/Pokemoni.vue";

  export default {
    name: "PokemonView",
    components: {
      Pokemoni,
    },
  };
</script>

<style lang="scss" scoped></style>
