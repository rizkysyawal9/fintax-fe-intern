<template>
  <div class="mb-5">
    <b-row align-h="center">
      <img src="../assets/forbidden.svg" alt="image" style="max-width: 500px" />
    </b-row>
    <b-row align-h="center">
      <div class="errmessage">
        Oops you're not allowed to enter. If you manage to change the guards
        secure variable to true, you might be able to see what's here
      </div>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.errmessage {
  text-align: center;
  padding-left: 200px;
  padding-right: 200px;
  font-size: 18px;
}

@media only screen and (max-width: 720px) {
  .errmessage {
    padding: 0px;
  }
}
</style>
