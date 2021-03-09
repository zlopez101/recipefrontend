<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="name"
              label="Name"
              required
              :rules="nameRules"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="phone_number"
              :rules="phone_numberRules"
              label="Phone Number"
              @input="cleanInput"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              @click:append="showPassword = !showPassword"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="confirmpassword"
              :append-icon="showConfirmedPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="confirmRules"
              :type="showConfirmedPassword ? 'text' : 'password'"
              label="Password"
              @click:append="showConfirmedPassword = !showConfirmedPassword"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn @click="onSubmit" color="success">Create Account!</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <stripe-checkout
      ref="checkoutRef"
      :pk="pk"
      :session-id="sessionId"
      :customer-email="email"
    />
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import { mapState } from "vuex";

export default {
  components: {
    StripeCheckout
  },
  name: "Registration",
  data() {
    return {
      pk:
        "pk_test_51I0Hi7AJqS6KUAStIg73brufDB8SmNTBqFvYFLyt7vAV1Ecbf7fPzDDIiwFflpnyD9tbYvaObpEpLhj9lBqROwZC00WywiUsQk",
      showPassword: false,
      showConfirmedPassword: false,
      name: "",
      nameRules: [
        v => v.split(" ").length > 1 || "Please enter a first and last name",
        v =>
          v.split(" ").length < 3 ||
          "Please separate hypenated names with a '-'"
      ],
      phone_number: "",
      phone_numberRules: [
        v =>
          /^\d{3}-\d{3}-\d{4}$/.test(v) || "Phone number must be 10 digits long"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      confirmpassword: "",
      passwordRules: [],
      confirmRules: [v => v == this.password || "Confirm password must match"],
      phone: "",
      phoneRules: []
    };
  },

  methods: {
    onSubmit() {
      let names = this.name.split(" ");
      let registerObject = {
        user: {
          fname: names[0],
          lname: names[1],
          phone_number: this.phone_number,
          email: this.email,
          password: this.password,
          sessionId: this.sessionId
        },
        toStripe: this.$refs.checkoutRef.redirectToCheckout
      };
      this.$store.dispatch("registerAndStripe", registerObject);
    },
    cleanInput() {
      if (this.phone_number.length == 3) {
        this.phone_number = this.phone_number + "-";
      } else if (this.phone_number.length == 7) {
        this.phone_number = this.phone_number + "-";
      } else {
        // pass
      }
    }
  },
  computed: {
    ...mapState({
      sessionId: state => state.user.sessionId
    })
  }
  // beforeCreate() {
  //   RecipeService.sessionId().then(response => {
  //     this.sessionId = response.data.sessionId;
  //   });
  // }
};
</script>

<style></style>
