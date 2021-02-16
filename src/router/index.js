import Vue from "vue";
import VueRouter from "vue-router";
import RecipeList from "@/views/RecipeList.vue";
import FinalGroceryList from "@/views/FinalGroceryList.vue";
import PreviewGrocery from "@/views/PreviewGrocery.vue";
import Account from "@/views/Account.vue";
import Settings from "@/views/Settings.vue";
import RegisterUser from "@/views/RegisterUser.vue";
import recipeDetails from "@/components/recipeDetails.vue";
import loginUser from "@/components/loginUser.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RecipeList",
    component: RecipeList
  },
  {
    path: "/recipe/:id",
    name: "recipeDetails",
    component: recipeDetails,
    props: true
  },
  {
    path: "/preview",
    name: "PreviewGrocery",
    component: PreviewGrocery
  },
  {
    path: "/grocery_list",
    name: "GroceryList",
    component: FinalGroceryList
  },
  {
    path: "/account",
    name: "Account",
    component: Account
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
