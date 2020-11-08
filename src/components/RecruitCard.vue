<template>
  <div>
    <b-card
      :title="recruit.first_name + recruit.last_name"
      :img-src="recruit.avatar"
      img-start
      v-if="loading == false"
    >
      <b-card-text>{{ recruit.email }}</b-card-text>
      <b-button :to="{ name: 'SingleRecruit', params: { id: recruit.id } }">
        Details
      </b-button>
    </b-card>
    <b-card v-else-if="loading == true">
      <b-row align-v="center">
        <b-col cols="4">
          <SkeletonBox width="125px" height="125px" />
        </b-col>
        <b-col cols="8">
          <SkeletonBox width="175px" class="mb-3" />
          <SkeletonBox width="260px" class="mb-3" />
          <SkeletonBox width="80px" height="40px" />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import SkeletonBox from "./SkeletonBox";
export default {
  components: {
    SkeletonBox
  },
  props: {
    recruit: Object,
    loading: Boolean
  },
  created: function() {
    axios.get("https://reqres.in/api/users/1").then(response => {
      console.log(response);
    });
  },
  data() {
    return {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    };
  }
};
</script>

<style scoped>
.card {
  transition: 0.3s;
}

.card:hover {
  color: #187bcd;
  box-shadow: 0 4px 8px 0;
}

.card > body {
  padding: 0px;
}

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
