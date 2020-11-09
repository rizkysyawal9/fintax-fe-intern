<template>
  <div class="mb-5">
    <b-row align-h="center" align-v="center">
      <img src="../assets/notFound.svg" alt="image" style="max-width: 500px" />
    </b-row>
    <b-row align-h="center" align-v="center">
      <div class="errmessage">
        Sorry, it seems as though the page your looking for doesn't exist
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

  font-size: 20px;
}
</style>
