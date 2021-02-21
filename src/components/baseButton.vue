<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn @click="update" v-bind="attrs" v-on="on" icon>
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    {{ toolTipText }}
  </v-tooltip>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    toolTipText: {
      type: String,
      default: null
    }
  },
  methods: {
    update() {
      this.$emit("updated");
    }
  }
};
</script>

<style></style>
