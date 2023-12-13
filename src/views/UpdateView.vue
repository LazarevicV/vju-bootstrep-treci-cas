<template>
  <div>Update page, user id: {{ id }}</div>
  <div v-if="!proveri_user">Loading</div>

  <div class="container">
    <h1>Update korisnika: {{ user.username }}</h1>

    <div class="row mt-5 col-md-5">
      <h4>Username:</h4>
      <input type="text" :value="user.username" />
    </div>

    <div class="row mt-5 col-md-5">
      <h4>Email:</h4>
      <input type="text" :value="user.email" />
    </div>

    <div class="row mt-5 col-md-5">
      <h4>Password:</h4>
      <input type="password" :value="user.password" />
    </div>

    <div class="row mt-5 col-md-5">
      <h4 class="pt-5">Profile image</h4>
      <img :src="user.image" class="rounded ml-5" alt="" />
    </div>

    <router-link class="btn btn-secondary" to="/tabela-korisnika"
      >Cancel</router-link
    >
  </div>
</template>

<script>
  export default {
    name: "Update",
    props: ["id"],
    data() {
      return {
        user: [],
      };
    },
    watch: {
      user() {
        console.log("pozvan watcher");
        this.proveri_user;
      },
    },
    methods: {
      async fetchData() {
        try {
          const response = await fetch(
            `https://64bc2c6c7b33a35a444719de.mockapi.io/api/products/users/${this.id}`
          );
          this.user = await response.json();
          console.log(this.user);
        } catch (error) {
          console.log(error);
        }
      },
    },
    computed: {
      proveri_user() {
        return this.user.length !== 0;
      },
    },
    mounted() {
      //   setTimeout(this.fetchData, 1000);
      this.fetchData();
    },
  };
</script>
