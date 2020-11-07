<template>
  <b-navbar toggleable="md" id="nav" type="dark">
    <b-navbar-brand href="#">Fintax Internship</b-navbar-brand>
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
  background-color: #2a9df4;
}

#nav a {
  color: #ffffff;
  font-weight: bold;
  transition: 0.3s;
}

#nav li:hover a {
  color: #000000;
}

a:hover {
  text-decoration: none;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #000000;
}
</style>
