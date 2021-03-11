<template>
  <div>
    To use this app you'll need to
    <router-link to="/login">Login </router-link>
    or
    <router-link to="/register">Register</router-link>
    <h1>Welcome!</h1>
    <p>
      This website optimizes your grocery shopping routines. Add recipes to your
      recipe box using the plus icon. The main inspiration for creating this
      project was a frustration of taking pictures or screenshots of recipes,
      and flipping back and forth between photos at the grocery story to find
      ingredients for recipes I was cooking for the week. The UI/UX is a still a
      huge work-in-progress but I hope to continue to add
      <a
        href="https://www.notion.so/c6ec618d1a504f3db39884046c8e3082?v=7e21d62823e645c5b6a8644cb9dafc3d"
        target="_blank"
        >new features</a
      >
      in the coming week.
    </p>

    <template>
      <v-stepper v-model="myStepper" vertical>
        <v-stepper-step
          :complete="myStepper > 1"
          step="1"
          editable
          edit-icon="mdi-check"
        >
          Register for the app
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/bNeLECEROvI"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </v-col>
                <v-col>
                  <ul>
                    <li>
                      To get started, sign up! For now, any sign-up info will
                      do. The stripe integration is in test mode, and <b>not</b>
                      configured to accept real payments.
                    </li>
                    <li>
                      registering redirects to a stripe checkout. Enter one of
                      their test credit cards:
                      <code>4242 4242 4242 4242</code> with any future
                      expiration, CCV, and zip.
                    </li>
                  </ul>
                </v-col>
              </v-row>
              <v-row>
                <v-btn color="primary" @click="myStepper = 2">
                  Continue
                </v-btn>
              </v-row>
            </v-container>
          </v-card>
        </v-stepper-content>

        <v-stepper-step
          :complete="myStepper > 2"
          step="2"
          editable
          edit-icon="mdi-check"
        >
          Add Recipes to the App
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/fq5q9dYDP-g"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </v-col>
                <v-col>
                  <ul>
                    <li>
                      So far the app only works recipe websites built with
                      wordpress. I recommend trying it with site like
                      HalfBakedHarvest. Just grab one the recipe URL and paste.
                      The recipe will appear in your recipe list along with
                      ingredients.
                    </li>
                  </ul>
                </v-col>
              </v-row>
              <v-row>
                <v-btn color="primary" @click="myStepper = 3">
                  Continue
                </v-btn>
              </v-row>
            </v-container>
          </v-card>
        </v-stepper-content>

        <v-stepper-step
          :complete="myStepper > 3"
          step="3"
          editable
          edit-icon="mdi-check"
        >
          Add all ingredients to Grocery Cart
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sGgxfmksApM"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </v-col>
                <v-col>
                  <ul>
                    <li>
                      If you'd like to add all ingredients in a recipe to the
                      grocery cart, click the "add ingredients" button
                    </li>
                    <li>
                      Once ingredients are added, naviatge to the grocery cart
                      to see your list.
                    </li>
                    <li>
                      You can add custom items to the cart.
                    </li>
                  </ul>
                </v-col>
              </v-row>
              <v-row>
                <v-btn color="primary" @click="myStepper = 4">
                  Continue
                </v-btn>
              </v-row>
            </v-container>
          </v-card>
        </v-stepper-content>

        <v-stepper-step
          :complete="myStepper > 4"
          step="4"
          editable
          edit-icon="mdi-check"
        >
          Selectively Add ingredients to Grocery Cart
        </v-stepper-step>
        <v-stepper-content step="4">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/QhSrGgKLxgE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </v-col>
                <v-col>
                  <ul>
                    <li>
                      Alternatively, click on the recipe title. There you will
                      be able to select ingredients to add to the list.
                    </li>
                    <li>
                      For now, the default is
                      <span style="color:green">green</span> for active items,
                      and <span style="color:red">red</span> for inactive items.
                    </li>
                  </ul>
                </v-col>
              </v-row>
              <v-row>
                <v-btn color="primary" @click="myStepper = 5">
                  Continue
                </v-btn>
              </v-row>
            </v-container>
          </v-card>
        </v-stepper-content>
        <v-stepper-step
          :complete="myStepper > 5"
          step="5"
          editable
          edit-icon="mdi-check"
        >
          Sort the grocery cart
        </v-stepper-step>
        <v-stepper-content step="5">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/gyawVEz7jK8"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </v-col>
                <v-col>
                  <ul>
                    <li>
                      You can sort items in the cart into shopping categories.
                      Active/Inactive categories still matter, and inactivated
                      ingredients are excluded from each subsequent
                      <i>sort</i> operation
                    </li>
                  </ul>
                </v-col>
              </v-row>
              <v-row>
                <v-btn color="primary" @click="myStepper = 1">
                  Continue
                </v-btn>
              </v-row>
            </v-container>
          </v-card>
        </v-stepper-content>
      </v-stepper>
    </template>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      myStepper: 1
    };
  }
};
</script>

<style></style>
