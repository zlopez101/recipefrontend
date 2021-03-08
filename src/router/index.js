import Vue from "vue";
import VueRouter from "vue-router";
// registration views
import RegisterUser from "@/views/registration/Register.vue";
import Layout from "@/views/registration/Layout.vue";
import Failed from "@/views/registration/Failed.vue";
import Success from "@/views/registration/Success.vue";
import RecipeHome from "@/views/registration/Home.vue";
// user views
import Account from "@/views/Account.vue";
import Settings from "@/views/Settings.vue";
import loginUser from "@/views/loginUser.vue";
// recipe views
import RecipeList from "@/views/RecipeList.vue";
import FinalGroceryList from "@/views/FinalGroceryList.vue";
import PreviewGrocery from "@/views/PreviewGrocery.vue";
import recipeDetails from "@/views/recipeDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: RecipeHome,
        name: "Home"
      },
      {
        path: "register",
        component: RegisterUser,
        name: "register"
      },
      {
        path: "success",
        component: Success,
        name: "success"
      },
      {
        path: "failed",
        component: Failed,
        name: "failed"
      }
    ]
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
