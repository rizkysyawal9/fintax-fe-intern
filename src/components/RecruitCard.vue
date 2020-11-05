<template>
  <b-card
    :title="recruit.first_name + recruit.last_name"
    :img-src="recruit.avatar"
    img-start
  >
    <b-card-text>{{ recruit.email }}</b-card-text>
    <b-button :to="{ name: 'SingleRecruit', params: { id: recruit.id } }">
      Details
    </b-button>
  </b-card>
</template>

<script>
import axios from "axios";
export default {
  props: {
    recruit: Object
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
</style>
