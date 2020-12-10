<template>
  <v-img
    min-height="150"
    max-height="200"
    src="../../public/assets/images/pattern-bg.png"
  >
    <app-title></app-title>
    <app-search></app-search>
    <app-address></app-address>
  </v-img>
</template>

<script>
export default {
  name: "app-header",
  components: {
    "app-search": () => import("./Search"),
    "app-title": () => import("./Title"),
    "app-address": () => import("./Address"),
  },
  data: () => ({}),
};
</script>