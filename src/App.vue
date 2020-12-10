<template>
  <v-app>
    <v-main>
      <app-header> </app-header>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    "app-header": () => import("./components/Header"),
  },
  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: "Rubik", sans-serif;
}
</style>