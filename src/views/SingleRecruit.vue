<template>
  <div class="pt-4">
    <b-row>
      <b-col cols="12" lg="4" class="pb-4">
        <img
          :src="recruit.avatar"
          alt="avatar"
          class="mb-3"
          style="border-radius: 50%"
        />
        <div>
          <h2 style="font-weight: bold">
            {{ recruit.first_name }} {{ recruit.last_name }}
          </h2>
          <div class="mb-1">
            <b-icon-building font-scale="1.3" />
            Software Engineer
          </div>
          <div>
            <b-icon-mailbox font-scale="1.3" />
            {{ recruit.email }}
          </div>
        </div>
      </b-col>
      <b-col cols="12" lg="8" style="text-align:start">
        <b-card>
          <h4 class="mb-2">
            Hi there, I am {{ recruit.first_name }}
            {{ recruit.last_name }}
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
            minima ab cum quaerat aliquid optio consequatur similique fugiat
            libero laborum repellat officia vitae. Suscipit minima, quam quae ex
            saepe quisquam!
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
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created: function() {
    axios
      .get(`https://reqres.in/api/users/${this.$route.params.id}`)
      .then(response => {
        this.recruit = response.data.data;
      });
  },
  data() {
    return {
      recruit: {}
    };
  }
};
</script>

<style></style>
