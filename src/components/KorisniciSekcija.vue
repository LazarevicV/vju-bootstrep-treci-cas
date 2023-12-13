<template>
  <div>
    <TabelaKorisnika :korisnici="users" />
  </div>
</template>

<script>
  import TabelaKorisnika from "./TabelaKorisnika.vue";

  export default {
    name: "KorisniciSekcija",
    data() {
      return {
        users: [],
      };
    },
    methods: {
      test() {
        return "test";
      },
      async fetchData() {
        try {
          const response = await fetch(
            "https://64bc2c6c7b33a35a444719de.mockapi.io/api/products/users"
          );
          this.users = await response.json();
          console.log(this.users);
        } catch (error) {
          console.log(error);
        }
      },
    },
    mounted() {
      // setTimeout(this.fetchData, 3000);
      this.fetchData();
    },
    components: { TabelaKorisnika },
  };
</script>
