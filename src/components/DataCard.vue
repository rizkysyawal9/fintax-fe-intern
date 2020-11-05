<template>
  <b-card
    :img-src="datum.image"
    img-start
    style="text-align:start"
    class="mb-4"
  >
    <b-card-text>
      <b-row align-v="center">
        <b-col cols="3">
          <b-icon
            :icon="dynamicIcon"
            :variant="dynamicVariant"
            font-scale="2.3"
          />
        </b-col>
        <b-col cols="9">
          <h4>{{ datum.title }}</h4>
          <div class="value">
            {{ datum.value }}
          </div>
        </b-col>
      </b-row>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    datum: Object
  },
  computed: {
    dynamicIcon() {
      if (this.datum.title === "Total") {
        return "people";
      } else if (this.datum.title === "Approved") {
        return "check2-circle";
      } else if (this.datum.title === "Rejected") {
        return "x-circle";
      } else return "exclamation-circle";
    },
    dynamicVariant() {
      if (this.datum.title === "Total") {
        return "primary";
      } else if (this.datum.title === "Approved") {
        return "success";
      } else if (this.datum.title === "Rejected") {
        return "danger";
      } else return "warning";
    }
  }
};
</script>

<style scoped>
.value {
  font-size: 20px;
  font-weight: bold;
}
/* .card-title {
  font-size: 16px;
} */
</style>
