<template>
  <div>
    <h1>This is recruits</h1>
    <RecruitCard />
  </div>
</template>

<script>
import RecruitCard from "./RecruitCard";
import axios from "axios";
export default {
  components: {
    RecruitCard
  },
  created: function() {
    axios.get("https://reqres.in/api/").then(response => {
      console.log(response);
    });
  }
};
</script>

<style></style>
