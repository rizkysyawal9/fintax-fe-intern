import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import axios from "axios";
import UUID from "vue-uuid";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(UUID);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
