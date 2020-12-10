<template>
  <v-app>
    <v-main>
      <app-header></app-header>
      <app-address></app-address>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    'app-header': () => import('./components/Header'),
    'app-address': () => import('./components/Address')
  }
};
</script>

<style>
* {
  font-family: "Rubik", sans-serif;
  z-index: 1 !important;
}
</style>