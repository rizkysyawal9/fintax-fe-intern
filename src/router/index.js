import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import CardView from "../views/CardView.vue";
import TableView from "../views/TableView.vue";
import Calculator from "../views/Calculator.vue";
import SingleRecruit from "../views/SingleRecruit.vue";

Vue.use(VueRouter);

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
