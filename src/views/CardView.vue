<template>
  <div>
    <b-row>
      <b-col cols="12" lg="3" v-for="datum in data" :key="datum.id">
        <DataCard :datum="datum" />
      </b-col>
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
  created: function() {
    axios.get("https://reqres.in/api/users?per_page=18").then(response => {
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

<style scoped></style>
