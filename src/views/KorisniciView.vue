<template>
  <div class="container">
    <h1>Svi korisnici</h1>
    <KorisniciSekcija />
  </div>
</template>

<script>
  import KorisniciSekcija from "@/components/KorisniciSekcija.vue";
  export default {
    name: "KorisniciVue",
    components: {
      KorisniciSekcija,
    },
  };
</script>

<style lang="scss" scoped></style>
