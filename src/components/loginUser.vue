<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="email" label="Email" required>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="password" label="Password" required>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="onSubmit" color="success">Login</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
