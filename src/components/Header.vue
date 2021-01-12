<template>
<div>
  <v-img
    class="background-img"
    min-height="280"
    max-height="300"
    src="../../public/assets/images/pattern-bg.png">
  </v-img>
  <v-row>
    <v-col cols="12" class="text-center">
      <app-title></app-title>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <app-search></app-search>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: 'app-header',
  components: {
    'app-search': () => import('./Search'),
    'app-title': () => import('./Title')
  }
};
</script>

<style>
.background-img {
  height: 27vh;
  background-position: center;
  background-size: cover;
  position: absolute;
  left: 0;
  width: 100vw;
  margin: 0;
  z-index: -2;
}
</style>