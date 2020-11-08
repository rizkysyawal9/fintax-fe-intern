<template>
  <div class="center">
    <b-row align-v="center" class="content">
      <b-col cols="12" lg="6">
        <img
          src="../assets/profile.jpg"
          alt=""
          width="200px"
          style="border-radius: 50%"
          class="mb-4"
        />
        <div>
          <h4>
            Made By Rizky Syawal
          </h4>
          <p>Computer Science Student at IPB University</p>
        </div>
      </b-col>
      <b-col cols="12" lg="6">
        <h2 class="mb-4 mt-0 title">
          Project Interview Internship Fintax
        </h2>
        <p>
          Project ini merupakan project untuk interview internship frontend
          engineer fintax. Tema project ini adalah sistem informasi HR
          Recruitment untuk melihat calon-calon recruit
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .center {
  margin-top: -80px;
} */

.content {
  min-height: calc(100vh - 220px);
}

.title {
  color: #3179c6;
  font-weight: bold;
}

@media only screen and (max-width: 720px) {
  .center {
    margin-top: 0px;
  }
}
</style>
