<template>
  <div>
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
import RecruitCard from "../components/RecruitCard";
import axios from "axios";
export default {
  components: {
    RecruitCard
  },
  data() {
    return {
      recruits: {},
      recruit: {},
      loading: true
    };
  },
  created() {
    axios
      .get(`https://reqres.in/api/users?per_page=${this.$route.query.perPage}`)
      .then(response => {
        this.recruits = response.data.data;
        this.loading = false;
      });
  }
};
</script>

<style></style>
