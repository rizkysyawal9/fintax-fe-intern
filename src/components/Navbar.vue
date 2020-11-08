<template>
  <b-navbar
    toggleable="md"
    id="nav"
    style="box-shadow: 0 0.25rem 0.25rem rgba(0,0,0,.10)"
  >
    <b-container class="py-2">
      <b-navbar-brand href="#" style="color: #3179c6; "
        >Fintax Internship</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto white">
          <b-nav-item class="mr-3" to="/cardview">
            Recruits Card View
          </b-nav-item>
          <b-nav-item class="mr-3" to="/tableview">
            Recruits Table View
          </b-nav-item>
          <b-nav-item class="mr-3" to="/calculator">
            Calculator
          </b-nav-item>
          <b-nav-item to="/">
            About
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  mounted() {
    if (this.$route.name === "About") {
      this.styleObject = {
        position: "fixed",
        width: "100%"
      };
    } else {
      this.styleObject = {
        position: "relative"
      };
    }
  },
  data() {
    return {
      styleObject: {}
    };
  }
};
</script>

<style scoped>
#nav {
  /* background-color: #2a9df4; */
}

#nav a {
  color: #808080;
  font-weight: bold;
  transition: 0.3s;
}

#nav li:hover a {
  color: #3179c6;
}

a:hover {
  text-decoration: none;
  color: #3179c6;
}

#nav a.router-link-exact-active {
  color: #3179c6;
}
</style>
