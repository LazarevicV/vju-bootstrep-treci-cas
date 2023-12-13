<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">{{ navbarBrand }}</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="item in meni" class="nav-item">
            <router-link class="nav-link" :to="item.url">{{
              item.naziv
            }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navbarBrand: "RAF WSIT",
        meni: [
          { url: "/", naziv: "Pocetna" },
          { url: "/proizvodi", naziv: "Proizvodi" },
          { url: "/tabela-korisnika", naziv: "Korisnici" },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
