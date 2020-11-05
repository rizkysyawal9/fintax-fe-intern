<template>
  <div class="pt-4">
    <b-row>
      <b-col cols="12" lg="4" class="pb-4">
        <img
          :src="recruit.avatar"
          alt="avatar"
          class="mb-3"
          style="border-radius: 50%"
          v-if="loading == false"
        />
        <div v-else-if="loading == true" class="mb-3">
          <SkeletonBox width="125px" height="125px" />
        </div>
        <div>
          <h2 style="font-weight: bold" v-if="loading == false">
            {{ recruit.first_name }} {{ recruit.last_name }}
          </h2>
          <div v-else-if="loading == true" class="mb-2">
            <SkeletonBox width="200px" height="30px" />
          </div>

          <div class="mb-1" v-if="loading == false">
            <b-icon-building font-scale="1.3" />
            Software Engineer
          </div>
          <div v-else-if="loading == true" class="mb-2">
            <SkeletonBox width="150px" height="20px" />
          </div>

          <div v-if="loading == false">
            <b-icon-mailbox font-scale="1.3" />
            {{ recruit.email }}
          </div>
          <SkeletonBox width="190px" height="20px" v-if="loading == true" />
        </div>
      </b-col>
      <b-col cols="12" lg="8" style="text-align:start">
        <b-card>
          <div v-if="loading == false">
            <h4 class="mb-2">
              Hi there, I am {{ recruit.first_name }}
              {{ recruit.last_name }}
            </h4>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
              minima ab cum quaerat aliquid optio consequatur similique fugiat
              libero laborum repellat officia vitae. Suscipit minima, quam quae
              ex saepe quisquam!
            </p>

            <ul>
              <li>
                &#127748; &nbsp; Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.
              </li>
              <li>
                &#129409; &nbsp; Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.
              </li>
              <li>
                &#127759; &nbsp; Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.
              </li>
              <li>
                &#127918; &nbsp; Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.
              </li>
            </ul>
          </div>
          <div v-else-if="loading == true">
            <SkeletonBox width="280px" height="30px" class="mb-3" />
            <SkeletonBox width="600px" class="mb-2" />
            <SkeletonBox width="610px" class="mb-2" />
            <SkeletonBox width="630px" class="mb-2" />
            <SkeletonBox width="500px" class="mb-2" />
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import SkeletonBox from "../components/SkeletonBox";
export default {
  components: {
    SkeletonBox
  },
  created: function() {
    axios
      .get(`https://reqres.in/api/users/${this.$route.params.id}`)
      .then(response => {
        this.recruit = response.data.data;
        this.loading = false;
      });
  },
  data() {
    return {
      recruit: {},
      loading: true
    };
  }
};
</script>

<style></style>
