<template>
  <div>
    <h1 class="mb-4">Potential Recruits</h1>

    <b-row>
      <b-col cols="12" lg="6" v-for="recruit in recruits" :key="recruit.id">
        <RecruitCard :recruit="recruit" class="mb-4" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RecruitCard from "../components/RecruitCard";
import axios from "axios";
export default {
  components: {
    RecruitCard
  },
  created: function() {
    axios.get("https://reqres.in/api/users?per_page=12").then(response => {
      this.recruits = response.data.data;
      console.log(this.recruits);
    });
  },
  data() {
    return {
      recruits: [],
      currentPage: "",
      rows: "",
      perPage: ""
    };
  }
};
</script>

<style></style>
