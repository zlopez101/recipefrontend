import Vue from "vue";
import VueRouter from "vue-router";
// user views
import Account from "@/views/Account.vue";
import Settings from "@/views/Settings.vue";
import RegisterUser from "@/views/RegisterUser.vue";
import loginUser from "@/views/loginUser.vue";
import RecipeHome from "@/views/RecipeHome.vue";
// recipe views
import RecipeList from "@/views/RecipeList.vue";
import FinalGroceryList from "@/views/FinalGroceryList.vue";
import PreviewGrocery from "@/views/PreviewGrocery.vue";
import recipeDetails from "@/views/recipeDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: RecipeHome
  },
  {
    path: "/register",
    name: "register",
    component: RegisterUser
  },
  {
    path: "/login",
    name: "login",
    component: loginUser
  },
  {
    path: "/recipes",
    name: "RecipeList",
    component: RecipeList,
    meta: { requiresAuth: true }
  },
  {
    path: "/recipe/:id",
    name: "recipeDetails",
    component: recipeDetails,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: "/preview",
    name: "PreviewGrocery",
    component: PreviewGrocery,
    meta: { requiresAuth: true }
  },
  {
    path: "/grocery_list",
    name: "ingredientList",
    component: FinalGroceryList,
    meta: { requiresAuth: true }
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
    meta: { requiresAuth: true }
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((routeTo, routeFrom, next) => {
  const loggedIn = localStorage.getItem("user");
  if (routeTo.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  } else next();
});

export default router;
