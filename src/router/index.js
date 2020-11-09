import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import CardView from "../views/CardView.vue";
import TableView from "../views/TableView.vue";
import Calculator from "../views/Calculator.vue";
import SingleRecruit from "../views/SingleRecruit.vue";
import Cards from "../views/Cards.vue";
import NotFound from "../components/404.vue";
import Forbidden from "../components/403.vue";
import Secure from "../components/Secure.vue";

Vue.use(VueRouter);

const secure = false;

const routes = [
  {
    path: "/",
    name: "About",
    component: About
  },
  {
    path: "/cardview",
    name: "CardView",
    component: CardView
  },
  {
    path: "/cardview/:id",
    name: "SingleRecruit",
    component: SingleRecruit
  },
  {
    path: "/tableview",
    name: "TableView",
    component: TableView
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator
  },
  {
    path: "/cards",
    name: "Cards",
    component: Cards
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  },
  {
    path: "/403",
    name: "403",
    component: Forbidden
  },
  {
    path: "/secure",
    name: "SecureRoute",
    component: Secure,
    beforeEnter: (to, from, next) => {
      if (secure == false) {
        next("/403");
      } else {
        next();
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
