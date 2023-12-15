<template>
  <div class="container">
    <!-- iz nekog razloga ne radi spinner ? -->
    <!-- <div class="spinner-border"></div>  -->
    <div v-if="!korisnici.length"><h1>Loading....</h1></div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID:</th>
          <th scope="col">Username</th>
          <th scope="col">Password</th>
          <th scope="col">Email</th>
          <th scope="col">Avatar</th>
          <th scope="col" colspan="2">Opcije</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(korisnik, index) in paginatedKorisnici" :key="index">
          <td>{{ korisnik.id }}</td>
          <td>{{ korisnik.username }}</td>
          <td>{{ korisnik.password }}</td>
          <td>{{ korisnik.email }}</td>
          <td><img class="rounded" :src="korisnik.image" alt="" /></td>
          <td>
            <button
              @click="updateRedirect(korisnik.id)"
              class="btn btn-primary"
            >
              Update
            </button>
          </td>
          <td><button class="btn btn-danger">Delete</button></td>
        </tr>
      </tbody>
    </table>
    <nav
      aria-label="Page navigation example"
      class="d-flex justify-content-center"
    >
      <ul class="pagination">
        <li class="page-item mr-2 ml-2">
          <button
            class="btn btn-secondary"
            @click="firstPage"
            :disabled="currentPage === 1"
          >
            First page
          </button>
        </li>
        <li class="page-item">
          <button
            class="btn btn-secondary"
            @click="goBack"
            :disabled="currentPage === 1"
          >
            Previous
          </button>
        </li>
        <li class="page-item mr-5 ml-5">{{ currentPage }}</li>
        <li class="page-item">
          <button
            class="btn btn-secondary"
            @click="goForward"
            :disabled="currentPage * pageSize >= korisnici.length"
          >
            Next
          </button>
        </li>
        <li class="page-item mr-2 ml-2">
          <button
            class="btn btn-secondary"
            @click="lastPage"
            :disabled="isLastPage"
          >
            Last page
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "TabelaKorisnika",
    props: {
      korisnici: {
        required: true,
        type: Array,
      },
    },
    data() {
      return {
        pageSize: 10,
        currentPage: 1,
      };
    },
    computed: {
      paginatedKorisnici() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.korisnici.slice(startIndex, endIndex);
      },
      isLastPage() {
        const lastPageIndex = Math.ceil(this.korisnici.length / this.pageSize);
        if (this.currentPage != lastPageIndex) {
          return false;
        }
        return true;
      },
    },
    methods: {
      goBack() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      firstPage() {
        if (this.currentPage != 1) {
          this.currentPage = 1;
        }
      },
      goForward() {
        const totalPages = Math.ceil(this.korisnici.length / this.pageSize);
        if (this.currentPage < totalPages) {
          this.currentPage++;
        }
      },
      lastPage() {
        const totalPages = Math.ceil(this.korisnici.length / this.pageSize);
        if (this.currentPage != totalPages) {
          this.currentPage = totalPages;
        }
      },
      updateRedirect(id) {
        console.log(id);
        this.$router.push({ path: `/update/${id}` });
      },
    },
  };
</script>
