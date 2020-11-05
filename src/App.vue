<template>
  <div id="app">
    <div id="nav">
      <Navbar class="mb-4" />
      <b-container>
        <b-row
          v-if="
            (path === 'cardview' || path === 'tableview') &&
              $route.params.id == null
          "
        >
          <b-col cols="12" lg="3" v-for="datum in data" :key="datum.id">
            <DataCard :datum="datum" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>

<script>
import Navbar from "./components/Navbar";
import DataCard from "./components/DataCard";
export default {
  components: {
    Navbar,
    DataCard
  },
  computed: {
    path() {
      const str = this.$route.path.toString();
      const substr = str.substring(1, str.lastIndexOf("/"));
      const path = substr.split("/")[0];
      return path;
    }
  },
  created() {
    console.log(this.path);
  },
  data() {
    return {
      data: [
        {
          id: 1,
          title: "Total",
          value: 40,
          image: ""
        },
        {
          id: 2,
          title: "Approved",
          value: 12,
          image: ""
        },
        {
          id: 3,
          title: "Rejected",
          value: 16,
          image: ""
        },
        {
          id: 4,
          title: "Pending",
          value: 12,
          image: ""
        }
      ]
    };
  }
};
</script>
