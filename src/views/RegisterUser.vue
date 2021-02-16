<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="name" label="Name" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="phone_number"
              label="Phone Number"
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
  </div>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      showPassword: false,
      showConfirmedPassword: false,
      name: "",
      phone_number: "",
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      confirmpassword: "",
      passwordRules: [],
      confirmRules: [],
      phone: "",
      phoneRules: []
    };
  },
  methods: {
    onSubmit() {
      let names = this.name.split(" ");
      let userData = {
        fname: names[0],
        lname: names[1],
        phone_number: this.phone_number,
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("register", userData).then(() => {
        this.$router.push({ name: "login" });
      });
    }
  }
};
</script>

<style></style>
