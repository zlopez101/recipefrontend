import Vue from "vue";
import VueRouter from "vue-router";
import RecipeList from "../views/RecipeList.vue";
import recipeDetails from "../components/recipeDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RecipeList",
    component: RecipeList
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/recipe/:id",
    name: "recipeDetails",
    component: recipeDetails,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
