<template>
  <v-app>
    <v-main>
      <app-header></app-header>
      <app-address></app-address>
      <app-map></app-map>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    "app-header": () => import("./components/Header"),
    "app-address": () => import("./components/Address"),
    "app-map": () => import("./components/Map")
  },
};
</script>

<style>
* {
  font-family: "Rubik", sans-serif;
  z-index: 1 !important;
}
body {
  overflow: hidden;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>