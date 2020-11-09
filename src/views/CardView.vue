<template>
  <div>
    <b-row>
      <b-col cols="12" lg="3" v-for="datum in data" :key="datum.id">
        <DataCard :datum="datum" />
      </b-col>
    </b-row>
    <b-row class="ml-0 mb-4">
      <b-button class="mr-3" @click="showNewPage(3)">Show 3</b-button>
      <b-button class="mr-3" @click="showNewPage(6)">Show 6</b-button>
      <b-button class="mr-3" @click="showNewPage(12)">Show 12</b-button>
    </b-row>
    <b-row v-if="loading == false">
      <b-col cols="12" lg="6" v-for="recruit in recruits" :key="recruit.id">
        <RecruitCard :recruit="recruit" class="mb-4" :loading="loading" />
      </b-col>
    </b-row>
    <b-row v-else-if="loading == true">
      <b-col cols="12" lg="6" v-for="(n, index) in 10" :key="index">
        <RecruitCard :recruit="recruit" class="mb-4" :loading="loading" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import DataCard from "../components/DataCard";
import RecruitCard from "../components/RecruitCard";
import axios from "axios";
export default {
  components: {
    DataCard,
    RecruitCard
  },
  methods: {
    showNewPage(number) {
      this.$router.push({ name: "Cards", query: { perPage: number } });
    }
  },
  created: function() {
    let pages = {};
    pages.perPage =
      this.$route.query.perPage != undefined ? this.$route.query.perPage : 12;
    console.log("this is the number of pages");
    console.log(pages.perPage);
    axios
      .get(`https://reqres.in/api/users?per_page=${pages.perPage}`)
      .then(response => {
        this.recruits = response.data.data;
        console.log(this.recruits);
        this.loading = false;
      });
  },
  data() {
    return {
      loading: true,
      numberOfRecruits: 10,
      currentPage: "",
      rows: "",
      perPage: "",
      recruits: {},
      recruit: {},
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

<style scoped>
.btn {
  background-color: #3179c6;
  border-color: #3179c6;
  transition: 0.4s;
}

.btn:hover {
  background-color: #00a9e9;
  border-color: #00a9e9;
}
</style>
